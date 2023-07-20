import { ethers } from "ethers";
import { PersonalSign } from "./personalSign.js";
import { SoulWallet, Transaction, Bundler } from "@soulwallet/sdk";
import { ABI_EntryPoint } from "@soulwallet/abi";

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

        const userOpRet = await soulWallet.createUnsignedDeployWalletUserOp(
            0,
            signer.address,
            ethers.ZeroHash
        );
        if (userOpRet.isErr()) {
            throw new Error(userOpRet.ERR);
        }

        const userOp = userOpRet.OK;

        // userOp.maxFeePerGas 100gwei
        // userOp.maxPriorityFeePerGas 100gwei
        const gasPrice = '100';// gwei
        userOp.maxFeePerGas = ethers.parseUnits(gasPrice, 'gwei');
        userOp.maxPriorityFeePerGas = ethers.parseUnits(gasPrice, 'gwei');

        const jsonProvider = new ethers.JsonRpcProvider(this.provider);
        const contractAddr = userOp.sender;

        const retErr1 = await soulWallet.estimateUserOperationGas(userOp);
        if (retErr1.isErr()) {
            throw new Error(retErr1.ERR.toString());
        }

        // send eth to contractAddr , from this.defaultWallet
        {
            const preFundRet = await soulWallet.preFund(userOp);
            if (preFundRet.isErr()) {
                throw new Error(preFundRet.ERR);
            }
            const preFund = preFundRet.OK;
            const tx = await this.defaultWallet.sendTransaction({
                to: contractAddr,
                value: preFund.missfund
            });
            await tx.wait();
        }

        const validAfter: number = Math.floor(Date.now() / 1000);
        const validUntil = validAfter + 3600;
        const packedUserOpHashRet = await soulWallet.packUserOpHash(userOp, validAfter, validUntil);
        if (packedUserOpHashRet.isErr()) {
            throw new Error(packedUserOpHashRet.ERR);
        }
        const packedUserOpHash = packedUserOpHashRet.OK;
        // sign packedUserOpHash.toEthSignedMessageHash() via this.defaultWallet 
        const signature = PersonalSign.signMessage(packedUserOpHash.packedUserOpHash, signer.privateKey);
        const packedSignature = await soulWallet.packUserOpSignature(signature, packedUserOpHash.validationData);
        userOp.signature = packedSignature;



        // get balance of contractAddr
        const balance_before = await jsonProvider.getBalance(contractAddr);
        console.log(`balance before: ${ethers.formatEther(balance_before)} ETH`);

        const retErr2 = await soulWallet.sendUserOperation(userOp);
        if (retErr2.isErr()) {
            throw new Error(retErr2.ERR.toString());
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


        // send transaction
        // entrypoint -> function depositTo(address account) public payable
        const abi_entryPoint = new ethers.Interface(ABI_EntryPoint);
        const newAccount = ethers.Wallet.createRandom();
        const callData = abi_entryPoint.encodeFunctionData("depositTo", [newAccount.address]);
        const entryPointAddrRet = await soulWallet.entryPoint();
        if (entryPointAddrRet.isErr()) {
            throw new Error(entryPointAddrRet.ERR);
        }


        {
            const tx = await this.defaultWallet.sendTransaction({
                to: contractAddr,
                value: ethers.parseEther('2')
            });
            await tx.wait();
        }
        const tx: Transaction = {
            to: entryPointAddrRet.OK,
            value: ethers.parseEther('1').toString(),
            data: callData
        };

        const userOpTxRet = await soulWallet.fromTransaction(
            ethers.parseUnits(gasPrice, 'gwei').toString(),
            ethers.parseUnits(gasPrice, 'gwei').toString(),
            contractAddr,
            [tx]
        );
        if (userOpTxRet.isErr()) {
            throw new Error(userOpTxRet.ERR);
        }
        const userOpTx = userOpTxRet.OK;

        const estimateRet = await soulWallet.estimateUserOperationGas(userOpTx);

        if (estimateRet.isErr()) {
            console.table(estimateRet.ERR);
            throw new Error('estimate gas failed');
        }

        // sign
        const packedUserOpHashTxRet = await soulWallet.packUserOpHash(userOpTx, validAfter, validUntil);
        if (packedUserOpHashTxRet.isErr()) {
            throw new Error(packedUserOpHashTxRet.ERR);
        }
        const packedUserOpHashTx = packedUserOpHashTxRet.OK;
        // sign packedUserOpHash.toEthSignedMessageHash() via this.defaultWallet 
        const signatureTx = PersonalSign.signMessage(packedUserOpHashTx.packedUserOpHash, signer.privateKey);
        const packedSignatureTx = await soulWallet.packUserOpSignature(signatureTx, packedUserOpHashTx.validationData);
        userOpTx.signature = packedSignatureTx;


        // send userOp

        const retErr3 = await soulWallet.sendUserOperation(userOpTx);
        if (retErr3.isErr()) {
            throw new Error(retErr3.OK.toString());
        }
        const balance_beforeTx = await jsonProvider.getBalance(contractAddr);
        console.log(`balance before: ${ethers.formatEther(balance_beforeTx)} ETH`);
        // wait for tx to be mined
        const bundler = new Bundler(this.bundler);
        const userOpHashTxRet = await soulWallet.userOpHash(userOpTx);
        if (userOpHashTxRet.isErr()) {
            throw new Error(userOpHashTxRet.ERR);
        }
        while (true) {
            const receipt = await bundler.eth_getUserOperationReceipt(userOpHashTxRet.OK);
            if (receipt.isErr()) {
                throw new Error(receipt.ERR);
            }
            if (receipt.OK === null) {
                console.log('waiting for tx to be mined');
                await new Promise((resolve) => setTimeout(resolve, 1000));
            } else {
                if (receipt.OK.success === false) {
                    throw new Error('tx failed');
                }
                break;
            }
        }
        console.log('tx mined');
        const balance_afterTx = await jsonProvider.getBalance(contractAddr);
        console.log(`balance after: ${ethers.formatEther(balance_afterTx)} ETH`);
    }
}