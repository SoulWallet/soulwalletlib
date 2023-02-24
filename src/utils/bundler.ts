/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-09 14:57:06
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 17:33:07
 */


import { ethers, BigNumber } from "ethers";

import { UserOperation } from "../entity/userOperation";
import { IRPCRequest } from "../interface/IRPCRequest";
import { IRPCResponse } from "../interface/IRPCResponse";
import EventEmitter from 'events';
import { AddressZero } from '../defines/address';
import { EntryPointContract } from '../contracts/entryPoint';
import { defaultAbiCoder } from 'ethers/lib/utils';
import { HttpRequest } from './httpRequest';
import { IUserOpReceipt } from "../interface/IUserOpReceipt";
import { IFailedOp, IResult } from "../interface/IResult";



export class ApiTimeOut {
    web3ApiRequestTimeout = 1000 * 10;
    web3ApiResponseTimeout = 1000 * 10;
    bundlerApiRequestTimeout = 1000 * 10;
    bundlerApiResponseTimeout = 1000 * 10;
}


/**
 * bundler utils
 * @class Bundler
 */
export class Bundler {
    private _entryPoint: string = '';
    private _etherProvider: ethers.providers.BaseProvider;
    private _bundlerApi?: string;
    private _timeout: ApiTimeOut = new ApiTimeOut();

    /**
     * Bundler utils
     * @constructor Bundler
     * @param {String} entryPoint the entry point address
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String?} bundlerApi the bundler api url
     * @param {ApiTimeOut?} timeout the timeout
     * @returns {Bundler}
     */
    constructor(entryPoint: string, etherProvider: ethers.providers.BaseProvider, bundlerApi?: string, timeout?: ApiTimeOut) {
        this._entryPoint = entryPoint;
        this._etherProvider = etherProvider;
        this._bundlerApi = bundlerApi;
        if (timeout) {
            this._timeout = timeout;
        }
    }


    private async rpcRequest<T1, T2>(data: IRPCRequest<T1>, timeout?: number): Promise<T2> {
        if (!this._bundlerApi) {
            throw new Error('bundlerApi is not set');
        }
        if (typeof timeout === 'undefined') {
            timeout = this._timeout.web3ApiRequestTimeout;
        }
        let response = await HttpRequest.post(this._bundlerApi, data, timeout);
        if (response) {
            const rpcResp = response as IRPCResponse<T2>;
            if (!rpcResp.error) {
                return rpcResp.result;
            } else {
                throw rpcResp.error;
            }
        }
        throw new Error('request error');
    }


    private _init = false;

    /**
     * init the bundler
     * @returns {Promise<void>}
     */
    public async init() {
        if (this._init) {
            return;
        }
        try {
            let _chainId = 0;

            // test web3Api
            {
                // get chainId
                const _network = await this._etherProvider.getNetwork();
                if (!_network.chainId) {
                    throw new Error('web3Api error');
                }
                _chainId = _network.chainId;
            }

            // test bundlerApi
            {
                const _chainIdNumber = BigNumber.from(await this.eth_chainId()).toNumber();
                if (_chainId !== _chainIdNumber) {
                    throw new Error('bundlerApi error');
                }
                const _eps = await this.eth_supportedEntryPoints();
                if (!_eps.includes(this._entryPoint)) {
                    throw new Error('bundlerApi error');
                }
            }

            this._init = true;
        } catch (error) {
            throw error;
        }

    }

    /**
     * get bundler supported chainid
     * @returns {Promise<String>} supported chainid
     */
    public async eth_chainId(): Promise<string> {
        return this.rpcRequest<never[], string>(
            {
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_chainId',
                params: []
            }
        );
    }

    /**
     * get bundler supported entry points
     * @returns {Promise<String[]>} supported entry points
     */
    public async eth_supportedEntryPoints() {
        return this.rpcRequest<never[], string[]>(
            {
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_supportedEntryPoints',
                params: []
            }
        );
    }

    /**
     * send user operation via bundler
     * @param {UserOperation} userOp
     * @returns {Promise<String>} user operation hash
     */
    public async eth_sendUserOperation(userOp: UserOperation) {
        return this.rpcRequest<any[], string>(
            {
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_sendUserOperation',
                params: [
                    JSON.parse(userOp.toJSON()),
                    this._entryPoint
                ]
            }
        );
    }

    public async eth_estimateUserOperationGas(userOp: UserOperation) {
        throw new Error('not implement');
    }

    public async eth_getUserOperationReceipt(userOpHash: string) {
        return this.rpcRequest<string[], IUserOpReceipt | null>(
            {
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_getUserOperationReceipt',
                params: [userOpHash]
            }
        );
    }

    public async eth_getUserOperationByHash(userOpHash: string) {
        throw new Error('not implement');
    }

    private sleep(ms: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }


    /**
     * send user operation via bundler
     * @param {UserOperation} userOp
     * @param {Number} receiptTimeout receipt timeout
     * @param {Number} receiptInterval receipt interval
     * @returns {EventEmitter} emitter event: send, error, receipt, timeout
     */
    public sendUserOperation(userOp: UserOperation, receiptTimeout: number = 0, receiptInterval: number = 1000 * 6) {
        const emitter = new EventEmitter();
        this.eth_sendUserOperation(userOp).then(async (userOpHash) => {
            emitter.emit('send', userOpHash);

            const startTime = Date.now();
            while (receiptTimeout === 0 || Date.now() - startTime < receiptTimeout) {
                // sleep 6s
                await this.sleep(receiptInterval);
                try {
                    const re = await this.eth_getUserOperationReceipt(userOpHash);
                    if (re) {
                        emitter.emit('receipt', re);
                        return;
                    }
                } catch (error) {
                    console.error(error);
                }

            }
            emitter.emit('timeout', new Error('receipt timeout'));

        }).catch((error) => {
            emitter.emit('error', error);
        });
        return emitter;
    }

    private decodeExecutionResult(result: string): IResult | null {
        // error ExecutionResult(uint256 preOpGas, uint256 paid, uint256 deadline, uint256 paymasterDeadline);
        if (result.startsWith('0xa30fd31e')) {
            const re = defaultAbiCoder.decode(
                ['uint256', 'uint256', 'uint256', 'uint256'],
                '0x' + result.substring(10)
            );
            return {
                status: 0,
                result: {
                    preOpGas: re[0],
                    paid: re[1],
                    deadline: re[2],
                    paymasterDeadline: re[3]
                }
            }
        }
        return null;
    }

    private decodeFailedOp(result: string): IResult | null {
        //error FailedOp(uint256 opIndex, address paymaster, string reason)
        if (result.startsWith('0x00fa072b')) {
            // FailedOp(uint256,address,string)
            const re = defaultAbiCoder.decode(
                ['uint256', 'address', 'string'],
                '0x' + result.substring(10)
            );
            const failedOp: IFailedOp = {
                opIndex: re[0],
                paymaster: re[1],
                reason: re[2]
            }
            return {
                status: 1,
                result: failedOp
            }
        };
        return null;
    }

    private decodeValidationResult(result: string): IResult | null {
        // ValidationResult((uint256,uint256,uint256,uint256,bytes),(uint256,uint256),(uint256,uint256),(uint256,uint256))	0x3dd956e9if (result.startsWith('0x3dd956e9')) {
        if (result.startsWith('0x3dd956e9')) {
            const re = defaultAbiCoder.decode(
                ['(uint256,uint256,uint256,uint256,bytes)', '(uint256,uint256)', '(uint256,uint256)', '(uint256,uint256)'],
                '0x' + result.substring(10)
            );
            return {
                status: 0,
                result: {
                    op: re[0],
                    senderInfo: re[1],
                    factoryInfo: re[2],
                    paymasterInfo: re[3],
                }
            };

        }
        return null;
    }

    /**
     * simulateHandleOp
     * @param {UserOperation} op
     * @returns {Promise<IResult>} result
     */
    async simulateHandleOp(op: UserOperation): Promise<IResult> {
        try {
            const result = await this._etherProvider.call({
                from: AddressZero,
                to: this._entryPoint,
                data: new ethers.utils.Interface(EntryPointContract.ABI).encodeFunctionData("simulateHandleOp", [op]),
            });
            let re = this.decodeExecutionResult(result);
            if (re) return re;
            re = this.decodeFailedOp(result);
            if (re) return re;
            return {
                status: 2,
                error: result
            };
        } catch (e: any) {
            console.error(e);
            return {
                status: 3,
                error: "call error"
            };
        }

    }

    /**
     * simulateValidation
     * @param {UserOperation} op
     * @returns {Promise<IResult>} result
     */
    async simulateValidation(op: UserOperation): Promise<IResult> {
        try {
            const result = await this._etherProvider.call({
                from: AddressZero,
                to: this._entryPoint,
                gasLimit: 10e6,
                data: new ethers.utils.Interface(EntryPointContract.ABI).encodeFunctionData("simulateValidation", [op]),
            });
            let re = this.decodeValidationResult(result);
            if (re) return re;
            re = this.decodeFailedOp(result);
            if (re) return re;
            return {
                status: 4,
                error: result
            };
        } catch (e: any) {
            console.error(e);
            return {
                status: 5,
                error: "call error"
            };
        }

    }

}