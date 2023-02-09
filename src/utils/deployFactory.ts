/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-08 16:13:28
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-09 22:48:19
 */

import { getCreate2Address, keccak256 } from "ethers/lib/utils";
import { WalletFactoryContract } from "../contracts/walletFactory";
import { SingletonFactory } from "../contracts/singletonFactory";
import { BigNumber, ethers } from "ethers";
import { bytes32_zero } from "../defines/bytes32";

export interface IDeployFactory {
    getAddress(logicContractAddress: string, salt?: string, ver?: number): string;
    deploy(logicContractAddress: string, etherProvider: ethers.providers.BaseProvider, signer: ethers.Signer, salt?: string, ver?: number): Promise<string>;
}

export class DeployFactory implements IDeployFactory {

    private _singletonFactory: string;

    constructor(singletonFactory: string) {
        this._singletonFactory = singletonFactory;
    }

    private getFactory(logicContractAddress: string, salt?: string, ver: number = 1) {
        salt = salt || bytes32_zero;
        if (ver !== 1) {
            throw new Error('version not support');
        }

        // check salt is bytes32
        if (! /^0x[0-9a-fA-F]{64}$/.test(salt)) {
            throw new Error('salt is not bytes32');
        }
        const walletFactory = new ethers.ContractFactory(WalletFactoryContract.ABI, WalletFactoryContract.bytecode);
        let walletFactoryInitCodeWithArgs = walletFactory.getDeployTransaction(
            logicContractAddress,
            this._singletonFactory
        ).data as string;
        const walletFactoryInitCodeHash = keccak256(walletFactoryInitCodeWithArgs);
        const walletFactoryAddress = getCreate2Address(this._singletonFactory, salt, walletFactoryInitCodeHash);
        return {
            factoryAddress: walletFactoryAddress,
            initCodeWithArgs: walletFactoryInitCodeWithArgs
        };
    }

    public getAddress(logicContractAddress: string, salt?: string, ver: number = 1) {
        return this.getFactory(logicContractAddress, salt, ver).factoryAddress;
    }


    /**
     * deploy factory contract( if etherProvider is set)
     * @param logicContractAddress account logic contract address
     * @param proxyContractAddress proxy contract address (auto deploy if not set)
     * @param etherProvider 
     * @param create2Factory 
     * @param salt 
     * @param ver 
     * @returns 
     */
    public async deploy(logicContractAddress: string, etherProvider: ethers.providers.BaseProvider, signer: ethers.Signer, salt?: string, ver: number = 1) {

        const { factoryAddress, initCodeWithArgs } = this.getFactory(logicContractAddress, salt, ver);

        salt = salt || bytes32_zero;

        let code = await etherProvider.getCode(factoryAddress);
        if (code !== '0x') {
            return factoryAddress;
        }

        const singletonFactoryContract = new ethers.Contract(this._singletonFactory, SingletonFactory.ABI, etherProvider);
        const calldata = singletonFactoryContract.interface.encodeFunctionData('deploy', [initCodeWithArgs, salt]);
        const gasLimit = BigNumber.from(2000000).toHexString();
        // send tx
        const tx = {
            to: this._singletonFactory,
            data: calldata,
            gasLimit
        };
        const signedTx = await signer.sendTransaction(tx);
        await signedTx.wait();

        code = await etherProvider.getCode(factoryAddress);
        if (code === '0x') {
            throw new Error('deploy factory failed');
        }
        return factoryAddress;
    }



}