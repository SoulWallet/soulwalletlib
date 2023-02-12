/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-12 21:57:09
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-12 21:57:10
 */

import { BigNumber } from "ethers";


export interface IExecutionResult {
    preOpGas: BigNumber,
    paid: BigNumber,
    deadline: BigNumber,
    paymasterDeadline: BigNumber
}

export interface IFailedOp {
    opIndex: BigNumber;
    paymaster: string;
    reason: string;
}

export interface IReturnInfo {
    /* 
    struct ReturnInfo {
        uint256 preOpGas;
        uint256 prefund;
        uint256 deadline;
        uint256 paymasterDeadline;
        bytes paymasterContext;
    }
    */
    preOpGas: BigNumber,
    prefund: BigNumber,
    deadline: BigNumber,
    paymasterDeadline: BigNumber,
    paymasterContext: string
}

export interface IStakeInfo {
    /* 
     //API struct used by getStakeInfo and simulateValidation
    struct StakeInfo {
        uint256 stake;
        uint256 unstakeDelaySec;
    }
    */
    stake: BigNumber,
    unstakeDelaySec: BigNumber
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
