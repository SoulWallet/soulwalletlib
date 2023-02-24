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
/**
 * bundler utils
 * @class Bundler
 */
export declare class Bundler {
    private _entryPoint;
    private _etherProvider;
    private _bundlerApi?;
    private _timeout;
    /**
     * Bundler utils
     * @constructor Bundler
     * @param {String} entryPoint the entry point address
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String?} bundlerApi the bundler api url
     * @param {ApiTimeOut?} timeout the timeout
     * @returns {Bundler}
     */
    constructor(entryPoint: string, etherProvider: ethers.providers.BaseProvider, bundlerApi?: string, timeout?: ApiTimeOut);
    private rpcRequest;
    private _init;
    /**
     * init the bundler
     * @returns {Promise<void>}
     */
    init(): Promise<void>;
    /**
     * get bundler supported chainid
     * @returns {Promise<String>} supported chainid
     */
    eth_chainId(): Promise<string>;
    /**
     * get bundler supported entry points
     * @returns {Promise<String[]>} supported entry points
     */
    eth_supportedEntryPoints(): Promise<string[]>;
    /**
     * send user operation via bundler
     * @param {UserOperation} userOp
     * @returns {Promise<String>} user operation hash
     */
    eth_sendUserOperation(userOp: UserOperation): Promise<string>;
    eth_estimateUserOperationGas(userOp: UserOperation): Promise<void>;
    eth_getUserOperationReceipt(userOpHash: string): Promise<IUserOpReceipt | null>;
    eth_getUserOperationByHash(userOpHash: string): Promise<void>;
    private sleep;
    /**
     * send user operation via bundler
     * @param {UserOperation} userOp
     * @param {Number} receiptTimeout receipt timeout
     * @param {Number} receiptInterval receipt interval
     * @returns {EventEmitter} emitter event: send, error, receipt, timeout
     */
    sendUserOperation(userOp: UserOperation, receiptTimeout?: number, receiptInterval?: number): EventEmitter;
    private decodeExecutionResult;
    private decodeFailedOp;
    private decodeValidationResult;
    /**
     * simulateHandleOp
     * @param {UserOperation} op
     * @returns {Promise<IResult>} result
     */
    simulateHandleOp(op: UserOperation): Promise<IResult>;
    /**
     * simulateValidation
     * @param {UserOperation} op
     * @returns {Promise<IResult>} result
     */
    simulateValidation(op: UserOperation): Promise<IResult>;
}
