/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-08 16:13:28
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 17:35:25
 */

import { BytesLike, getCreate2Address, keccak256 } from "ethers/lib/utils";
import { WalletFactoryContract } from "../contracts/walletFactory";
import { SingletonFactory } from "../contracts/singletonFactory";
import { BigNumber, ContractInterface, ethers } from "ethers";
import { bytes32_zero } from "../defines/bytes32";


/**
 * deploy factory contract
 * @class DeployFactory
 */
export class DeployFactory {

    private _singletonFactory: string;

    /**
     * Creates an instance of DeployFactory.
     * @param {string} singletonFactory singleton factory address
     * @memberof DeployFactory
     * @constructor
     */
    constructor(singletonFactory: string) {
        this._singletonFactory = singletonFactory;
    }

    private getFactory(logicContractAddress: string, salt?: string, ver: number = 1, walletFactoryConfig?: {
        contractInterface: ContractInterface,
        bytecode: BytesLike | { object: string }
    }) {
        salt = salt || bytes32_zero;
        if (ver !== 1) {
            throw new Error('version not support');
        }

        // check salt is bytes32
        if (! /^0x[0-9a-fA-F]{64}$/.test(salt)) {
            throw new Error('salt is not bytes32');
        }
        if (!walletFactoryConfig) {
            walletFactoryConfig = {
                contractInterface: WalletFactoryContract.ABI,
                bytecode: WalletFactoryContract.bytecode
            }
        }
        const walletFactory = new ethers.ContractFactory(walletFactoryConfig.contractInterface, walletFactoryConfig.bytecode);
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

    /**
     * get factory address
     * @param {string} logicContractAddress account logic contract address
     * @param {string?} salt salt
     * @param {number} [ver=1] version
     * @param {walletFactoryConfig?} walletFactoryConfig wallet factory config
     * @returns {string} factory address
     */
    public getAddress(logicContractAddress: string, salt?: string, ver: number = 1, walletFactoryConfig?: {
        contractInterface: ContractInterface,
        bytecode: BytesLike | { object: string }
    }) {
        return this.getFactory(logicContractAddress, salt, ver, walletFactoryConfig).factoryAddress;
    }


    /**
     * deploy factory contract( if etherProvider is set)
     * @param {string} logicContractAddress account logic contract address
     * @param {ethers.providers.BaseProvider?} etherProvider ether provider
     * @param {ethers.Signer} signer signer
     * @param {string?} salt salt
     * @param {number} [ver=1] version
     * @param {walletFactoryConfig?} walletFactoryConfig wallet factory config
     * @returns {Promise<string>} factory address
     */
    public async deploy(logicContractAddress: string, etherProvider: ethers.providers.BaseProvider, signer: ethers.Signer, salt?: string, ver: number = 1, walletFactoryConfig?: {
        contractInterface: ContractInterface,
        bytecode: BytesLike | { object: string }
    }) {

        const { factoryAddress, initCodeWithArgs } = this.getFactory(logicContractAddress, salt, ver, walletFactoryConfig);

        salt = salt || bytes32_zero;

        let code = await etherProvider.getCode(factoryAddress);
        if (code !== '0x') {
            return factoryAddress;
        }

        const singletonFactoryContract = new ethers.Contract(this._singletonFactory, SingletonFactory.ABI, etherProvider);
        const calldata = singletonFactoryContract.interface.encodeFunctionData('deploy', [initCodeWithArgs, salt]);
        const gasLimit = BigNumber.from(6000000).toHexString();
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