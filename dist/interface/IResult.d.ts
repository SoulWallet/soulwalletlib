import { BigNumber } from "ethers";
/**
 * @interface IExecutionResult
 * @property {BigNumber} preOpGas
 * @property {BigNumber} paid
 * @property {BigNumber} deadline
 * @property {BigNumber} paymasterDeadline
 *
 */
export interface IExecutionResult {
    preOpGas: BigNumber;
    paid: BigNumber;
    deadline: BigNumber;
    paymasterDeadline: BigNumber;
}
export interface IFailedOp {
    opIndex: BigNumber;
    paymaster: string;
    reason: string;
}
export interface IReturnInfo {
    preOpGas: BigNumber;
    prefund: BigNumber;
    deadline: BigNumber;
    paymasterDeadline: BigNumber;
    paymasterContext: string;
}
export interface IStakeInfo {
    stake: BigNumber;
    unstakeDelaySec: BigNumber;
}
export interface IValidationResult {
    op: IReturnInfo;
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
