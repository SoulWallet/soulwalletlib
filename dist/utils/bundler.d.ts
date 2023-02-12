/// <reference types="node" />
import { ethers } from "ethers";
import { UserOperation } from "../entity/userOperation";
import EventEmitter from 'events';
import { IUserOpReceipt } from "../interface/IUserOpReceipt";
import { IResult } from "../interface/IResult";
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
    private rpcRequest;
    private _init;
    init(): Promise<void>;
    eth_chainId(): Promise<string>;
    eth_supportedEntryPoints(): Promise<string[]>;
    eth_sendUserOperation(userOp: UserOperation): Promise<string>;
    eth_estimateUserOperationGas(userOp: UserOperation): Promise<void>;
    eth_getUserOperationReceipt(userOpHash: string): Promise<IUserOpReceipt | null>;
    eth_getUserOperationByHash(userOpHash: string): Promise<void>;
    private sleep;
    /**
     *
     * @param userOp
     * @returns emitter event: send, error, receipt, timeout
     */
    sendUserOperation(userOp: UserOperation, receiptTimeout?: number, receiptInterval?: number): EventEmitter;
    private decodeExecutionResult;
    private decodeFailedOp;
    private decodeValidationResult;
    simulateHandleOp(op: UserOperation): Promise<IResult>;
    simulateValidation(op: UserOperation): Promise<IResult>;
}
