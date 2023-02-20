import { BytesLike } from "ethers/lib/utils";
import { ContractInterface, ethers } from "ethers";
export declare class DeployFactory {
    private _singletonFactory;
    constructor(singletonFactory: string);
    private getFactory;
    getAddress(logicContractAddress: string, salt?: string, ver?: number, walletFactoryConfig?: {
        contractInterface: ContractInterface;
        bytecode: BytesLike | {
            object: string;
        };
    }): string;
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
    deploy(logicContractAddress: string, etherProvider: ethers.providers.BaseProvider, signer: ethers.Signer, salt?: string, ver?: number, walletFactoryConfig?: {
        contractInterface: ContractInterface;
        bytecode: BytesLike | {
            object: string;
        };
    }): Promise<string>;
}
