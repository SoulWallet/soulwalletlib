import { BigNumber, ethers } from 'ethers';
export interface IEstimateComponents {
    baseFee: BigNumber;
    gasEstimate: BigNumber;
    gasEstimateForL1: BigNumber;
    l1BaseFeeEstimate: BigNumber;
}
export declare class ArbitrumNodeInterface {
    static arbitrumNodeInterface: string;
    static gasEstimateComponents(etherProvider: ethers.providers.BaseProvider, to: string, calldata: string, contractCreation?: boolean): Promise<IEstimateComponents>;
}
