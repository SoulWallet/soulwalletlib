import { ethers } from "ethers";
import { SoulWallet, Transaction, Bundler, UserOpUtils, UserOperation } from "@soulwallet/sdk";
import { Vault } from '@soulwallet/keyvault';

import { ABI_EntryPoint } from "@soulwallet/abi";

export class Deploy {

    readonly provider: string;
    readonly bundler: string;
    readonly soulWalletFactoryAddress: string;
    readonly defalutCallbackHandlerAddress: string;
    readonly keyStoreModuleAddress: string;
    readonly securityControlModuleAddress: string;
    readonly defaultWallet: ethers.Wallet;

    private keyVault: Vault;

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

        this.keyVault = new Vault('default');
    }




    async run(): Promise<void> {
        const password = '123456';
        let enforce = false;
        if ((await this.keyVault.isInitialized()).OK) {
            enforce = true;
        }
        await this.keyVault.init(password, enforce);
        if ((await this.keyVault.isLocked()).OK) {
            await this.keyVault.unlock(password);
        }
        // create new signer
        const signer = (await this.keyVault.createSigner()).OK;

        const soulWallet = new SoulWallet(this.provider, this.bundler, this.soulWalletFactoryAddress, this.defalutCallbackHandlerAddress, this.keyStoreModuleAddress, this.securityControlModuleAddress);

        const userOpRet = await soulWallet.createUnsignedDeployWalletUserOp(
            0,
            [signer],
            ethers.ZeroHash
        );
        if (userOpRet.isErr() === true) {
            throw new Error(userOpRet.ERR.message);
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
        if (retErr1.isErr() === true) {
            throw new Error(retErr1.ERR.toString());
        }

        // send eth to contractAddr , from this.defaultWallet
        {
            const preFundRet = await soulWallet.preFund(userOp);
            if (preFundRet.isErr() === true) {
                throw new Error(preFundRet.ERR.message);
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
        if (packedUserOpHashRet.isErr() === true) {
            throw new Error(packedUserOpHashRet.ERR.message);
        }
        const packedUserOpHash = packedUserOpHashRet.OK;
        // sign packedUserOpHash.toEthSignedMessageHash() via this.defaultWallet 
        const signature = (await this.keyVault.personalSign(signer, packedUserOpHash.packedUserOpHash)).OK;
        const packedSignatureRet = await soulWallet.packUserOpEOASignature(signature, packedUserOpHash.validationData);
        if (packedSignatureRet.isErr() === true) {
            throw new Error(packedSignatureRet.ERR.message);
        }
        userOp.signature = packedSignatureRet.OK;



        // get balance of contractAddr
        const balance_before = await jsonProvider.getBalance(contractAddr);
        console.log(`balance before: ${ethers.formatEther(balance_before)} ETH`);

        const retErr2 = await soulWallet.sendUserOperation(userOp);
        if (retErr2.isErr() === true) {
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
        if (entryPointAddrRet.isErr() === true) {
            throw new Error(entryPointAddrRet.ERR.message);
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
        if (userOpTxRet.isErr() === true) {
            throw new Error(userOpTxRet.ERR.message);
        }
        const userOpTx = userOpTxRet.OK;

        const estimateRet = await soulWallet.estimateUserOperationGas(userOpTx);

        if (estimateRet.isErr() === true) {
            console.table(estimateRet.ERR);
            throw new Error('estimate gas failed');
        }

        // sign
        const packedUserOpHashTxRet = await soulWallet.packUserOpHash(userOpTx, validAfter, validUntil);
        if (packedUserOpHashTxRet.isErr() === true) {
            throw new Error(packedUserOpHashTxRet.ERR.message);
        }
        const packedUserOpHashTx = packedUserOpHashTxRet.OK;
        // sign packedUserOpHash.toEthSignedMessageHash() via this.defaultWallet 
        const signatureTx = (await this.keyVault.personalSign(signer, packedUserOpHashTx.packedUserOpHash)).OK;
        const packedSignatureTxRet = await soulWallet.packUserOpEOASignature(signatureTx, packedUserOpHashTx.validationData);
        if (packedSignatureTxRet.isErr() === true) {
            throw new Error(packedSignatureTxRet.ERR.message);
        }
        userOpTx.signature = packedSignatureTxRet.OK;


        // send userOp

        const retErr3 = await soulWallet.sendUserOperation(userOpTx);
        if (retErr3.isErr() === true) {
            throw new Error(retErr3.OK.toString());
        }
        const balance_beforeTx = await jsonProvider.getBalance(contractAddr);
        console.log(`balance before: ${ethers.formatEther(balance_beforeTx)} ETH`);
        // wait for tx to be mined
        const bundler = new Bundler(this.bundler);
        const userOpHashTxRet = await soulWallet.userOpHash(userOpTx);
        if (userOpHashTxRet.isErr() === true) {
            throw new Error(userOpHashTxRet.ERR.message);
        }
        while (true) {
            const receipt = await bundler.eth_getUserOperationReceipt(userOpHashTxRet.OK);
            if (receipt.isErr() === true) {
                throw new Error(receipt.ERR.message);
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