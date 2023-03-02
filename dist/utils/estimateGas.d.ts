import { BigNumber, ethers } from "ethers";
import { ITransaction } from "../interface/ITransaction";
export interface IEstimateGas {
    gasLimit: BigNumber;
    gasLimitForL1: BigNumber | undefined;
    gasLimitForL2: BigNumber | undefined;
}
export declare class EstimateGas {
    static estimate(etherProvider: ethers.providers.BaseProvider, transaction: ITransaction): Promise<IEstimateGas>;
}
