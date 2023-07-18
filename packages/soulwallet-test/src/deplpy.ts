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
        if (!userOpRet.succ) {
            throw new Error(userOpRet.errors);
        }

        const userOp = userOpRet.result!;

        // userOp.maxFeePerGas 100gwei
        // userOp.maxPriorityFeePerGas 100gwei
        const gasPrice = '100';// gwei
        userOp.maxFeePerGas = ethers.parseUnits(gasPrice, 'gwei');
        userOp.maxPriorityFeePerGas = ethers.parseUnits(gasPrice, 'gwei');

        const jsonProvider = new ethers.JsonRpcProvider(this.provider);
        const contractAddr = userOp.sender;

        const retErr1 = await soulWallet.estimateUserOperationGas(userOp);
        if (!retErr1.succ) {
            throw new Error(retErr1.errors!.toString());
        }

        // send eth to contractAddr , from this.defaultWallet
        {
            const preFundRet = await soulWallet.preFund(userOp);
            if (!preFundRet.succ) {
                throw new Error(preFundRet.errors);
            }
            const preFund = preFundRet.result!;
            const tx = await this.defaultWallet.sendTransaction({
                to: contractAddr,
                value: preFund.missfund
            });
            await tx.wait();
        }

        const validAfter: number = Math.floor(Date.now() / 1000);
        const validUntil = validAfter + 3600;
        const packedUserOpHashRet = await soulWallet.packUserOpHash(userOp, validAfter, validUntil);
        if (!packedUserOpHashRet.succ) {
            throw new Error(packedUserOpHashRet.errors);
        }
        const packedUserOpHash = packedUserOpHashRet.result!;
        // sign packedUserOpHash.toEthSignedMessageHash() via this.defaultWallet 
        const signature = PersonalSign.signMessage(packedUserOpHash.packedUserOpHash, signer.privateKey);
        const packedSignature = await soulWallet.packUserOpSignature(signature, packedUserOpHash.validationData);
        userOp.signature = packedSignature;



        // get balance of contractAddr
        const balance_before = await jsonProvider.getBalance(contractAddr);
        console.log(`balance before: ${ethers.formatEther(balance_before)} ETH`);

        const retErr2 = await soulWallet.sendUserOperation(userOp);
        if (!retErr2.succ) {
            throw new Error(retErr2.errors!.toString());
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
        if (!entryPointAddrRet.succ) {
            throw new Error(entryPointAddrRet.errors);
        }
        {
            const tx = await this.defaultWallet.sendTransaction({
                to: contractAddr,
                value: ethers.parseEther('2')
            });
            await tx.wait();
        }
        const tx: Transaction = {
            to: entryPointAddrRet.result!,
            value: ethers.parseEther('1').toString(),
            data: callData
        };

        const userOpTxRet = await soulWallet.fromTransaction(
            ethers.parseUnits(gasPrice, 'gwei').toString(),
            ethers.parseUnits(gasPrice, 'gwei').toString(),
            contractAddr,
            [tx]
        );
        if (!userOpTxRet.succ) {
            throw new Error(userOpTxRet.errors);
        }
        const userOpTx = userOpTxRet.result!;

        const estimateRet = await soulWallet.estimateUserOperationGas(userOpTx);

        if (!estimateRet.succ) {
            console.table(estimateRet.errors);
            throw new Error('estimate gas failed');
        }

        // sign
        const packedUserOpHashTxRet = await soulWallet.packUserOpHash(userOpTx, validAfter, validUntil);
        if (!packedUserOpHashTxRet.succ) {
            throw new Error(packedUserOpHashTxRet.errors);
        }
        const packedUserOpHashTx = packedUserOpHashTxRet.result!;
        // sign packedUserOpHash.toEthSignedMessageHash() via this.defaultWallet 
        const signatureTx = PersonalSign.signMessage(packedUserOpHashTx.packedUserOpHash, signer.privateKey);
        const packedSignatureTx = await soulWallet.packUserOpSignature(signatureTx, packedUserOpHashTx.validationData);
        userOpTx.signature = packedSignatureTx;


        // send userOp

        const retErr3 = await soulWallet.sendUserOperation(userOpTx);
        if (!retErr3.succ) {
            throw new Error(retErr3.errors!.toString());
        }
        const balance_beforeTx = await jsonProvider.getBalance(contractAddr);
        console.log(`balance before: ${ethers.formatEther(balance_beforeTx)} ETH`);
        // wait for tx to be mined
        const bundler = new Bundler(this.bundler);
        const userOpHashTxRet = await soulWallet.userOpHash(userOpTx);
        if (!userOpHashTxRet.succ) {
            throw new Error(userOpHashTxRet.errors);
        }
        while (true) {
            const receipt = await bundler.eth_getUserOperationReceipt(userOpHashTxRet.result!);
            if (!receipt.succ) {
                throw new Error(receipt.errors);
            }
            if (receipt.result! === null) {
                console.log('waiting for tx to be mined');
                await new Promise((resolve) => setTimeout(resolve, 1000));
            } else {
                if (receipt.result!.success === false) {
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