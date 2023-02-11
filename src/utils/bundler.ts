/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-09 14:57:06
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-10 18:43:26
 */


import axios from 'axios';
import { ethers, BigNumber } from "ethers";

import { UserOperation } from "../entity/userOperation";
import { IRPCRequest } from "../interface/IRPCRequest";
import { IRPCResponse } from "../interface/IRPCResponse";
import EventEmitter from 'events';
import { AddressZero } from '../defines/address';
import { EntryPointContract } from '../contracts/entryPoint';
import { defaultAbiCoder } from 'ethers/lib/utils';


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

export class ApiTimeOut {
    web3ApiRequestTimeout = 1000 * 10;
    web3ApiResponseTimeout = 1000 * 10;
    bundlerApiRequestTimeout = 1000 * 10;
    bundlerApiResponseTimeout = 1000 * 10;
}


export class Bundler {
    private _entryPoint: string = '';
    private _etherProvider: ethers.providers.BaseProvider;
    private _bundlerApi?: string;
    private _timeout: ApiTimeOut = new ApiTimeOut();

    /**
     * 
     * @param entryPoint the entry point address
     * @param etherProvider 
     * @param bundlerApi the bundler api address(https)
     * @param timeout the timeout config
     */
    constructor(entryPoint: string, etherProvider: ethers.providers.BaseProvider, bundlerApi?: string, timeout?: ApiTimeOut) {
        this._entryPoint = entryPoint;
        this._etherProvider = etherProvider;
        this._bundlerApi = bundlerApi;
        if (timeout) {
            this._timeout = timeout;
        }
    }

    private async _request<T1, T2>(data: IRPCRequest<T1>, timeout?: number): Promise<T2> {
        if (!this._bundlerApi) {
            throw new Error('bundlerApi is not set');
        }
        if (typeof timeout === 'undefined') {
            timeout = this._timeout.web3ApiRequestTimeout;
        }
        let response = await axios.post(this._bundlerApi, data, {
            timeout
        });
        const rpcResp = response.data as IRPCResponse<T2>;
        if (rpcResp) {
            if (rpcResp.result && !rpcResp.error) {
                return rpcResp.result;
            } else {
                throw rpcResp.error;
            }
        }
        throw new Error('request error');
    }


    private _init = false;
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


    public get Raw() {
        return {
            eth_chainId: this.eth_chainId,
            eth_supportedEntryPoints: this.eth_supportedEntryPoints,
            eth_sendUserOperation: this.eth_sendUserOperation,
            eth_estimateUserOperationGas: this.eth_estimateUserOperationGas,
            eth_getUserOperationReceipt: this.eth_getUserOperationReceipt,
            eth_getUserOperationByHash: this.eth_getUserOperationByHash,
        };
    }

    private async eth_chainId(): Promise<string> {
        return this._request<never[], string>(
            {
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_chainId',
                params: []
            }
        );
    }

    private async eth_supportedEntryPoints() {
        return this._request<never[], string[]>(
            {
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_supportedEntryPoints',
                params: []
            }
        );
    }

    private async eth_sendUserOperation(userOp: UserOperation) {
        const params = [
            JSON.parse(userOp.toJSON()),
            this._entryPoint
        ];

        return this._request<any[], string>(
            {
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_sendUserOperation',
                params
            }
        );
    }

    private async eth_estimateUserOperationGas(userOp: UserOperation) {
        throw new Error('not implement');
    }

    private async eth_getUserOperationReceipt(userOpHash: string) {
        throw new Error('not implement');
    }

    private async eth_getUserOperationByHash(userOpHash: string) {
        throw new Error('not implement');
    }

    private async _sendUserOperation(emitter: EventEmitter, userOp: UserOperation) {
        console.log('sendUserOperation', userOp);
        let userOpHash = '';
        try {
            userOpHash = await this.eth_sendUserOperation(userOp);
        } catch (error) {
            emitter.emit('error', error);
            return;
        }
        emitter.emit('send', userOpHash);


    }

    public sendUserOperation(userOp: UserOperation) {
        const emitter = new EventEmitter();
        this._sendUserOperation(emitter, userOp);
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
                error: result
            };
        } catch (e: any) {
            console.error(e);
            return {
                error: "call error"
            };
        }

    }

    async simulateValidation(op: UserOperation): Promise<IResult> {
        try {
            const result = await this._etherProvider.call({
                from: AddressZero,
                to: this._entryPoint,
                data: new ethers.utils.Interface(EntryPointContract.ABI).encodeFunctionData("simulateValidation", [op]),
            });
            let re = this.decodeValidationResult(result);
            if (re) return re;
            re = this.decodeFailedOp(result);
            if (re) return re;
            return {
                error: result
            };
        } catch (e: any) {
            console.error(e);
            return {
                error: "call error"
            };
        }

    }

}