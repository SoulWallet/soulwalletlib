/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-08 16:13:28
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-17 17:07:12
 */

import { BytesLike, getCreate2Address, keccak256 } from "ethers/lib/utils";
import { WalletFactoryContract } from "../contracts/walletFactory";
import { SingletonFactory } from "../contracts/singletonFactory";
import { BigNumber, ContractInterface, ethers } from "ethers";
import { bytes32_zero } from "../defines/bytes32";


export class DeployFactory {

    private _singletonFactory: string;

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

    public getAddress(logicContractAddress: string, salt?: string, ver: number = 1, walletFactoryConfig?: {
        contractInterface: ContractInterface,
        bytecode: BytesLike | { object: string }
    }) {
        return this.getFactory(logicContractAddress, salt, ver, walletFactoryConfig).factoryAddress;
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