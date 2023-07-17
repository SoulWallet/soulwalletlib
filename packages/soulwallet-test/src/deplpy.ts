import { ethers } from "ethers";
import { PersonalSign } from "./personalSign.js";
import { SoulWallet } from "@soulwallet/sdk";

export class Deploy {

    readonly provider: string;
    readonly bundler: string;
    readonly soulWalletFactoryAddress: string;
    readonly defalutCallbackHandlerAddress: string;
    readonly keyStoreModuleAddress: string;
    readonly securityControlModuleAddress: string;
    readonly defaultWallet: ethers.Wallet;

    constructor(
        _provider: string,
        _bundler: string,
        _soulWalletFactoryAddress: string,
        _defalutCallbackHandlerAddress: string,
        _keyStoreModuleAddress: string,
        _securityControlModuleAddress: string,
        _defaultWallet: ethers.Wallet) {
        this.provider = _provider;
        this.bundler = _bundler;
        this.soulWalletFactoryAddress = _soulWalletFactoryAddress;
        this.defalutCallbackHandlerAddress = _defalutCallbackHandlerAddress;
        this.keyStoreModuleAddress = _keyStoreModuleAddress;
        this.securityControlModuleAddress = _securityControlModuleAddress;
        this.defaultWallet = _defaultWallet;
    }




    async run(): Promise<void> {
        const soulWallet = new SoulWallet(this.provider, this.bundler, this.soulWalletFactoryAddress, this.defalutCallbackHandlerAddress, this.keyStoreModuleAddress, this.securityControlModuleAddress);
        // new wallet
        const signer = ethers.Wallet.createRandom();

        const userOp = await soulWallet.createUnsignedDeployWalletUserOp(
            0,
            signer.address,
            ethers.ZeroHash
        );

        // userOp.maxFeePerGas 100gwei
        // userOp.maxPriorityFeePerGas 100gwei
        const gasPrice = '100';// gwei
        userOp.maxFeePerGas = ethers.parseUnits(gasPrice, 'gwei');
        userOp.maxPriorityFeePerGas = ethers.parseUnits(gasPrice, 'gwei');

        const jsonProvider = new ethers.JsonRpcProvider(this.provider);
        const contractAddr = userOp.sender;

        const retErr1 = await soulWallet.estimateUserOperationGas(userOp);
        if (retErr1) {
            throw new Error(retErr1.toString());
        }

        // send eth to contractAddr , from this.defaultWallet
        {
            const preFund = await soulWallet.preFund(userOp);

            const tx = await this.defaultWallet.sendTransaction({
                to: contractAddr,
                value: preFund.missfund
            });
            await tx.wait();
        }

        const validAfter: number = Math.floor(Date.now() / 1000);
        const validUntil = validAfter + 3600;
        const packedUserOpHash = await soulWallet.packUserOpHash(userOp, validAfter, validUntil);

        // sign packedUserOpHash.toEthSignedMessageHash() via this.defaultWallet 
        const signature = PersonalSign.signMessage(packedUserOpHash.packedUserOpHash, signer.privateKey);
        const packedSignature = await soulWallet.packUserOpSignature(signature, packedUserOpHash.validationData);
        userOp.signature = packedSignature;



        // get balance of contractAddr
        const balance_before = await jsonProvider.getBalance(contractAddr);
        console.log(`balance before: ${ethers.formatEther(balance_before)} ETH`);

        const retErr2 = await soulWallet.sendUserOperation(userOp);
        if (retErr2) {
            throw new Error(retErr2.toString());
        }

        // wait for tx to be mined
        while (true) {
            const code = await jsonProvider.getCode(contractAddr);
            if (code !== '0x') {
                break;
            }
            console.log('waiting for tx to be mined');
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        console.log('tx mined');
        const balance_after = await jsonProvider.getBalance(contractAddr);
        console.log(`balance after: ${ethers.formatEther(balance_after)} ETH`);

        // const preFund = await soulWallet.preFund(userOp);
        // console.log(`deposit: ${ethers.formatEther(preFund.deposit)} ETH`);

        console.log(`activate wallet on L1 (gas price:${gasPrice} gwei) cost: ${ethers.formatEther(balance_before)} ETH`);
    }
}