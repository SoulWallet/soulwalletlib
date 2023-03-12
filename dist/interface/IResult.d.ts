import { BigNumber } from "ethers";
export interface IExecutionResult {
    preOpGas: BigNumber;
    paid: BigNumber;
    validAfter: BigNumber;
    validUntil: BigNumber;
    targetSuccess: boolean;
    targetResult: string;
}
export interface IFailedOp {
    opIndex: BigNumber;
    reason: string;
}
export interface IReturnInfo {
    preOpGas: BigNumber;
    prefund: BigNumber;
    sigFailed: boolean;
    validAfter: number;
    validUntil: number;
    paymasterContext: string;
}
export interface IStakeInfo {
    stake: BigNumber;
    unstakeDelaySec: BigNumber;
}
export interface IValidationResult {
    returnInfo: IReturnInfo;
    senderInfo: IStakeInfo;
    factoryInfo: IStakeInfo;
    paymasterInfo: IStakeInfo;
}
export interface IResult {
    status: number;
    /**
     *
     */
    result?: IValidationResult | IFailedOp | IExecutionResult;
    /**
     * eg. "AA41 too little verificationGas"
     * can not decode result | eth_call revert message
     */
    error?: string;
}
