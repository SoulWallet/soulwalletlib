/// <reference types="node" />
import { ethers, BigNumber } from "ethers";
import { UserOperation } from "../entity/userOperation";
import EventEmitter from 'events';
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
export declare class ApiTimeOut {
    web3ApiRequestTimeout: number;
    web3ApiResponseTimeout: number;
    bundlerApiRequestTimeout: number;
    bundlerApiResponseTimeout: number;
}
export declare class Bundler {
    private _entryPoint;
    private _etherProvider;
    private _bundlerApi?;
    private _timeout;
    /**
     *
     * @param entryPoint the entry point address
     * @param etherProvider
     * @param bundlerApi the bundler api address(https)
     * @param timeout the timeout config
     */
    constructor(entryPoint: string, etherProvider: ethers.providers.BaseProvider, bundlerApi?: string, timeout?: ApiTimeOut);
    private _request;
    private _init;
    init(): Promise<void>;
    get Raw(): {
        eth_chainId: () => Promise<string>;
        eth_supportedEntryPoints: () => Promise<string[]>;
        eth_sendUserOperation: (userOp: UserOperation) => Promise<string>;
        eth_estimateUserOperationGas: (userOp: UserOperation) => Promise<void>;
        eth_getUserOperationReceipt: (userOpHash: string) => Promise<void>;
        eth_getUserOperationByHash: (userOpHash: string) => Promise<void>;
    };
    private eth_chainId;
    private eth_supportedEntryPoints;
    private eth_sendUserOperation;
    private eth_estimateUserOperationGas;
    private eth_getUserOperationReceipt;
    private eth_getUserOperationByHash;
    private _sendUserOperation;
    /**
     *
     * @param userOp
     * @returns emitter event: send, error, receipt
     */
    sendUserOperation(userOp: UserOperation): EventEmitter;
    private decodeExecutionResult;
    private decodeFailedOp;
    private decodeValidationResult;
    simulateHandleOp(op: UserOperation): Promise<IResult>;
    simulateValidation(op: UserOperation): Promise<IResult>;
}
