import { BytesLike } from "ethers/lib/utils";
import { ContractInterface, ethers } from "ethers";
/**
 * deploy factory contract
 * @class DeployFactory
 */
export declare class DeployFactory {
    private _singletonFactory;
    /**
     * Creates an instance of DeployFactory.
     * @param {string} singletonFactory singleton factory address
     * @memberof DeployFactory
     * @constructor
     */
    constructor(singletonFactory: string);
    private getFactory;
    /**
     * get factory address
     * @param {string} logicContractAddress account logic contract address
     * @param {string?} salt salt
     * @param {number} [ver=1] version
     * @param {walletFactoryConfig?} walletFactoryConfig wallet factory config
     * @returns {string} factory address
     */
    getAddress(logicContractAddress: string, salt?: string, ver?: number, walletFactoryConfig?: {
        contractInterface: ContractInterface;
        bytecode: BytesLike | {
            object: string;
        };
    }): string;
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
    deploy(logicContractAddress: string, etherProvider: ethers.providers.BaseProvider, signer: ethers.Signer, salt?: string, ver?: number, walletFactoryConfig?: {
        contractInterface: ContractInterface;
        bytecode: BytesLike | {
            object: string;
        };
    }): Promise<string>;
}
