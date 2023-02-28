import { BigNumber, ethers } from 'ethers';
export declare class OptimisticL1GasPriceOracle {
    private _optimisticGasPriceOracle;
    constructor(provider: ethers.providers.BaseProvider, gasPriceOracle?: string);
    decimals(): Promise<BigNumber>;
    gasPrice(): Promise<BigNumber>;
    getL1Fee(data: string): Promise<BigNumber>;
    getL1GasUsed(data: string): Promise<BigNumber>;
    l1BaseFee(): Promise<BigNumber>;
    overhead(): Promise<BigNumber>;
    scalar(): Promise<BigNumber>;
}
