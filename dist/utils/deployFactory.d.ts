import { ethers } from "ethers";
export interface IDeployFactory {
    getAddress(logicContractAddress: string, salt?: string, ver?: number): string;
    deploy(logicContractAddress: string, etherProvider: ethers.providers.BaseProvider, signer: ethers.Signer, salt?: string, ver?: number): Promise<string>;
}
export declare class DeployFactory implements IDeployFactory {
    private _singletonFactory;
    constructor(singletonFactory: string);
    private getFactory;
    getAddress(logicContractAddress: string, salt?: string, ver?: number): string;
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
    deploy(logicContractAddress: string, etherProvider: ethers.providers.BaseProvider, signer: ethers.Signer, salt?: string, ver?: number): Promise<string>;
}
