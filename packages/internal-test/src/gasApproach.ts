import { ethers } from "ethers";
import { SoulWallet, Transaction, Bundler, UserOpUtils, UserOperation, L1KeyStore } from "@soulwallet_test/sdk";
import { Vault } from '@soulwallet_test/keyvault';

import { ABI_EntryPoint } from "@soulwallet_test/abi";

export class GasApproach {

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

        this.keyVault = new Vault();
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

        const bundler = new Bundler(this.bundler);

        const signer = (await this.keyVault.createSigner()).OK;

        const soulWallet = new SoulWallet(this.provider, this.bundler, this.soulWalletFactoryAddress, this.defalutCallbackHandlerAddress, this.keyStoreModuleAddress, this.securityControlModuleAddress);

        const initialGuardianHash = L1KeyStore.calcGuardianHash(["0x72963e4Ddb05d2225bE1d337260320a307a97b0c"], 1);

        let verificationGasLimitOverHead = 34000;

        for (let index = 1000000000; ; index++) {
            verificationGasLimitOverHead -= 1000;
            console.log(`verificationGasLimitOverHead: ${verificationGasLimitOverHead}`);

            const userOpRet = await soulWallet.createUnsignedDeployWalletUserOp(
                index,
                signer,
                initialGuardianHash
            );
            if (userOpRet.isErr() === true) {
                throw new Error(userOpRet.ERR.message);
            }
            const userOp = userOpRet.OK;
            const gasPrice = '1';// gwei
            userOp.maxFeePerGas = ethers.parseUnits(gasPrice, 'gwei');
            userOp.maxPriorityFeePerGas = ethers.parseUnits(gasPrice, 'gwei');

            const jsonProvider = new ethers.JsonRpcProvider(this.provider);
            const contractAddr = userOp.sender;

            const retErr1 = await soulWallet.estimateUserOperationGas(userOp);
            if (retErr1.isErr() === true) {
                throw new Error(retErr1.ERR.toString());
            }
            userOp.verificationGasLimit = BigInt(userOp.verificationGasLimit) + BigInt(33000);

            // send eth to contractAddr , from this.defaultWallet
            {
                const preFundRet = await soulWallet.preFund(userOp);
                if (preFundRet.isErr() === true) {
                    throw new Error(preFundRet.ERR.message);
                }
                const preFund = preFundRet.OK;
                const tx = await this.defaultWallet.sendTransaction({
                    to: contractAddr,
                    value: BigInt(preFund.missfund) * 2n
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
            const packedSignatureRet = await soulWallet.packUserOpSignature(signature, packedUserOpHash.validationData);
            if (packedSignatureRet.isErr() === true) {
                throw new Error(packedSignatureRet.ERR.message);
            }
            userOp.signature = packedSignatureRet.OK;

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
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
            console.log('activated');

            // test send eth
            const userOpTx = (await soulWallet.fromTransaction(
                '0x' + ethers.parseUnits(gasPrice, 'gwei').toString(16),
                '0x' + ethers.parseUnits(gasPrice, 'gwei').toString(16),
                userOp.sender,
                [
                    {
                        to: userOp.sender,
                        value: '1'
                    },
                    {
                        to: userOp.sender,
                        value: '1'
                    }
                ]
            )).OK;

            const retErr3 = await soulWallet.estimateUserOperationGas(userOpTx);
            if (retErr3.isErr() === true) {
                throw new Error(retErr3.ERR.toString());
            }
            userOpTx.verificationGasLimit = BigInt(userOpTx.verificationGasLimit) + BigInt(verificationGasLimitOverHead);
            const packedUserOpHashRet2 = await soulWallet.packUserOpHash(userOpTx, validAfter, validUntil);
            if (packedUserOpHashRet2.isErr() === true) {
                throw new Error(packedUserOpHashRet2.ERR.message);
            }
            const packedUserOpHash2 = packedUserOpHashRet2.OK;
            const signature2 = (await this.keyVault.personalSign(signer, packedUserOpHash2.packedUserOpHash)).OK;
            const packedSignatureRet2 = await soulWallet.packUserOpSignature(signature2, packedUserOpHash2.validationData);
            if (packedSignatureRet2.isErr() === true) {
                throw new Error(packedSignatureRet2.ERR.message);
            }
            userOpTx.signature = packedSignatureRet2.OK;

            const retErr4 = await soulWallet.sendUserOperation(userOpTx);
            if (retErr4.isErr() === true) {
                throw new Error(retErr4.ERR.toString());
            }
            // wait for tx to be mined
            const userOpHash = (await soulWallet.userOpHash(userOpTx)).OK;
            while (true) {

                const ret = await bundler.eth_getUserOperationReceipt(userOpHash);
                if (ret.OK !== null) {
                    console.log('tx mined');
                    break;
                }
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }




        }


    }
}