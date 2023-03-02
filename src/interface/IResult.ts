/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-12 21:57:09
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-02 16:14:09
 */

import { BigNumber } from "ethers";


export interface IExecutionResult {
    preOpGas: BigNumber,
    paid: BigNumber,
    validAfter: BigNumber,
    validUntil: BigNumber,
    targetSuccess: boolean,
    targetResult: string,
}

export interface IFailedOp {
    opIndex: BigNumber;
    reason: string;
}

export interface IReturnInfo {
    /* 
    {
              "internalType": "uint256",
              "name": "preOpGas",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "prefund",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "sigFailed",
              "type": "bool"
            },
            {
              "internalType": "uint48",
              "name": "validAfter",
              "type": "uint48"
            },
            {
              "internalType": "uint48",
              "name": "validUntil",
              "type": "uint48"
            },
            {
              "internalType": "bytes",
              "name": "paymasterContext",
              "type": "bytes"
            }
    */
    preOpGas: BigNumber,
    prefund: BigNumber,
    sigFailed: boolean,
    validAfter: BigNumber,
    validUntil: BigNumber,
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
