/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-09 14:57:06
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-12 22:45:21
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
import { IFailedOp, IResult, IValidationResult } from "../interface/IResult";
import { SignatureMode, Signatures } from "./signatures";
import { IEstimateUserOpGasResult } from "../interface/IEstimateUserOpGasResult";
import { CHAINID } from "../defines/chainId";
import { Log } from '@ethersproject/providers'
import { IUserOperation } from "../interface/IUserOperation";
import { UserOp } from "./userOp";
import { Optimistic } from "./L2/optimistic/optimistic";
import { Arbitrum } from "./L2/arbitrum/arbitrum";
import { toNumber } from "../defines/numberLike";
import { EstimateGas } from "./estimateGas";



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
    private _eoaPrivateKey?: string;
    private _wallet?: ethers.Wallet;
    private _entryPointContract?: ethers.Contract;
    private _timeout: ApiTimeOut = new ApiTimeOut();
    private _chainId: number = -1;

    /**
     * Bundler utils
     * @constructor Bundler
     * @param {String} entryPoint the entry point address
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String} bundlerApiOrEOAPrivateKey the bundler api url or the EOA private key
     * @param {ApiTimeOut?} timeout the timeout
     * @returns {Bundler}
     */
    constructor(entryPoint: string, etherProvider: ethers.providers.BaseProvider, bundlerApiOrEOAPrivateKey: string, timeout?: ApiTimeOut) {
        this._entryPoint = entryPoint;
        this._etherProvider = etherProvider;
        if (bundlerApiOrEOAPrivateKey.startsWith('0x')) {
            this._eoaPrivateKey = bundlerApiOrEOAPrivateKey;
        } else {
            this._bundlerApi = bundlerApiOrEOAPrivateKey;
        }
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
            // test web3Api
            {
                // get chainId
                const _network = await this._etherProvider.getNetwork();
                if (!_network.chainId) {
                    throw new Error('web3Api error');
                }
                this._chainId = _network.chainId;
            }


            // test bundlerApi
            if (this._bundlerApi) {
                const chainId = BigNumber.from(await this.eth_chainId()).toNumber();
                if (chainId !== this._chainId) {
                    throw new Error('bundlerApi error');
                }
                const _eps = await this.eth_supportedEntryPoints();
                if (!_eps.includes(this._entryPoint)) {
                    throw new Error('bundlerApi error');
                }
            }

            if (this._eoaPrivateKey) {
                this._wallet = new ethers.Wallet(this._eoaPrivateKey, this._etherProvider);
                this._entryPointContract = new ethers.Contract(this._entryPoint, EntryPointContract.ABI, this._wallet);
            } else {
                this._entryPointContract = new ethers.Contract(this._entryPoint, EntryPointContract.ABI);
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
    public async eth_chainId(timeout?: number): Promise<string> {
        if (this._bundlerApi) {
            return this.rpcRequest<never[], string>(
                {
                    jsonrpc: '2.0',
                    id: 1,
                    method: 'eth_chainId',
                    params: []
                },
                timeout
            );
        }
        if (this._eoaPrivateKey) {
            return this._chainId.toString();
        }

        throw new Error('bundlerApi or eoaPrivateKey is not set');

    }

    /**
     * get bundler supported entry points
     * @returns {Promise<String[]>} supported entry points
     */
    public async eth_supportedEntryPoints(timeout?: number) {
        if (this._bundlerApi) {
            return this.rpcRequest<never[], string[]>(
                {
                    jsonrpc: '2.0',
                    id: 1,
                    method: 'eth_supportedEntryPoints',
                    params: []
                }, timeout
            );
        }
        if (this._eoaPrivateKey) {
            return [this._entryPoint];
        }

        throw new Error('bundlerApi or eoaPrivateKey is not set');

    }

    /**
     * send user operation via bundler
     * @param {UserOperation} userOp
     * @returns {Promise<String>} user operation hash
     */
    public async eth_sendUserOperation(userOp: UserOperation, timeout?: number) {
        if (this._bundlerApi) {
            return this.rpcRequest<any[], string>(
                {
                    jsonrpc: '2.0',
                    id: 1,
                    method: 'eth_sendUserOperation',
                    params: [
                        userOp.getStruct(),
                        this._entryPoint
                    ]
                }, timeout
            );
        }
        if (this._eoaPrivateKey) {
            this._entryPointContract?.handleOps(
                [userOp.getStruct()], this._wallet?.address
            );
            return userOp.getUserOpHash(this._entryPoint, this._chainId);
        }
        throw new Error('bundlerApi or eoaPrivateKey is not set');
    }


    private recoveryWallet(calldata: string) {
        /**
          * if recovery wallet,preVerificationGas += 20000
          * 0x4fb2e45d:transferOwner(address)
          */
        return calldata.startsWith('0x4fb2e45d');
    }

    /**
     *
     *
     * @param {UserOperation} userOp
     * @param {number} [timeout]
     * @return {*}  {Promise<IEstimateUserOpGasResult>}
     * @memberof Bundler
     */
    public async eth_estimateUserOperationGas(userOp: UserOperation, timeout?: number): Promise<IEstimateUserOpGasResult> {
        /*
            The bundler we're using may not support L2 yet, 
            so if the current network is L2, current lib will handle it self
        */
        const _userOp = this.semiValidSignature(userOp);

        let chainName: '' | 'OPTIMISM' | 'ARBITRUM' = '';
        if (this._chainId === CHAINID.OPTIMISM || this._chainId === CHAINID.OPTIMISM_GOERLI) {
            chainName = 'OPTIMISM'
        } else if (this._chainId === CHAINID.ARBITRUM || this._chainId === CHAINID.ARBITRUM_GOERLI) {
            chainName = 'ARBITRUM';
        }
        const estimateUserOpGasResult: IEstimateUserOpGasResult = {
            preVerificationGas: '0x0',
            verificationGas: '0x0',
            validAfter: undefined,
            validUntil: undefined,
            callGasLimit: '0x0'
        };

        if (this._bundlerApi) {
            const _estimateUserOpGasResult = await this.rpcRequest<any[], IEstimateUserOpGasResult>(
                {
                    jsonrpc: '2.0',
                    id: 1,
                    method: 'eth_estimateUserOperationGas',
                    params: [
                        _userOp,
                        this._entryPoint
                    ]
                }, timeout
            );
            estimateUserOpGasResult.preVerificationGas = _estimateUserOpGasResult.preVerificationGas;
            estimateUserOpGasResult.verificationGas = _estimateUserOpGasResult.verificationGas;
            estimateUserOpGasResult.validAfter = _estimateUserOpGasResult.validAfter;
            estimateUserOpGasResult.validUntil = _estimateUserOpGasResult.validUntil;
            estimateUserOpGasResult.callGasLimit = _estimateUserOpGasResult.callGasLimit;
        }
        if (this._eoaPrivateKey) {
            _userOp.paymasterAndData = '0x';
            _userOp.maxFeePerGas = 0;
            _userOp.maxPriorityFeePerGas = 0;
            _userOp.preVerificationGas = 0;
            _userOp.verificationGasLimit = 10e6;
            const result = await this._simulateValidation(_userOp);
            if (result.status === 1) {
                // FailedOp
                debugger;
                const failedOp = result.result as IFailedOp;
                throw new Error(failedOp.reason);
            }
            if (result.status !== 0) {
                debugger;
                throw new Error('error');
            }

            const returnInfo = result.result as IValidationResult;
            estimateUserOpGasResult.validAfter = BigNumber.from(returnInfo.returnInfo.validAfter).toHexString();
            estimateUserOpGasResult.validUntil = BigNumber.from(returnInfo.returnInfo.validUntil).toHexString();

            const callGasLimit = await this._etherProvider.estimateGas({
                from: this._entryPoint,
                to: _userOp.sender,
                data: _userOp.callData
            });
            estimateUserOpGasResult.callGasLimit = callGasLimit.mul(120).div(100).toHexString();
            estimateUserOpGasResult.preVerificationGas = BigNumber.from(UserOp.callDataCost(userOp)).toHexString();
            estimateUserOpGasResult.verificationGas = returnInfo.returnInfo.preOpGas.toHexString();
        }

        if (estimateUserOpGasResult.preVerificationGas === '0x0') {
            debugger;
            throw new Error('error');
        }

        if (chainName === 'OPTIMISM') {
            //throw new Error('not support yet');
        } else if (chainName === 'ARBITRUM') {
            const _callGasLimit = UserOp.callDataCost(userOp);
            const _preVerificationGas = BigNumber.from(estimateUserOpGasResult.preVerificationGas).toNumber();
            if (Math.abs(_callGasLimit - _preVerificationGas) < _preVerificationGas * 0.1) {
                // current bundler may not support ARBITRUM 
                _userOp.paymasterAndData = '0x';
                _userOp.maxFeePerGas = 0;
                _userOp.maxPriorityFeePerGas = 0;
                _userOp.preVerificationGas = 0;
                _userOp.verificationGasLimit = 10e6;
                const L1GasLimit = await Arbitrum.L1GasLimit(
                    this._etherProvider,
                    _userOp
                );
                estimateUserOpGasResult.preVerificationGas = BigNumber.from(_preVerificationGas + L1GasLimit).toHexString();
            }
        }
        let _verificationGas = BigNumber.from(estimateUserOpGasResult.verificationGas).toNumber();
        let _preVerificationGas = BigNumber.from(estimateUserOpGasResult.preVerificationGas).toNumber();
        _preVerificationGas += 5000
        _verificationGas += 20000;
        if (userOp.initCode !== '0x') {
            _verificationGas += 30000;
        }
        if (userOp.callData !== '0x') {
            _preVerificationGas + ((userOp.callData.length / 2) - 1) * 16;

            if (this.recoveryWallet(userOp.callData)) {
                _verificationGas += 400000;
                _preVerificationGas += 20000;
            }
        }

        if (userOp.paymasterAndData.length >= 42 && userOp.paymasterAndData !== AddressZero) {
            _verificationGas += 20000;
            _preVerificationGas += ((userOp.paymasterAndData.length / 2) - 1) * 16;
        }
        estimateUserOpGasResult.verificationGas = BigNumber.from(_verificationGas).toHexString();
        estimateUserOpGasResult.preVerificationGas = BigNumber.from(_preVerificationGas).toHexString();

        return estimateUserOpGasResult;
    }


    private async _getUserOperationEvent(userOpHash: string) {
        if (!this._entryPointContract) {
            throw new Error('entryPointContract is not set');
        }
        // TODO: eth_getLogs is throttled. must be acceptable for finding a UserOperation by hash
        const event = await this._entryPointContract?.queryFilter(this._entryPointContract.filters.UserOperationEvent(userOpHash))
        return event[0]
    }

    public async eth_getUserOperationReceipt(userOpHash: string, timeout?: number) {
        if (this._bundlerApi) {
            return this.rpcRequest<string[], IUserOpReceipt | null>(
                {
                    jsonrpc: '2.0',
                    id: 1,
                    method: 'eth_getUserOperationReceipt',
                    params: [userOpHash]
                }, timeout
            );
        }
        if (this._eoaPrivateKey) {
            const event = await this._getUserOperationEvent(userOpHash);
            if (event == null) {
                return null
            }
            if (!event.args) {
                throw new Error('event.args is null');
            }
            const receipt = await event.getTransactionReceipt();
            return {
                userOpHash: userOpHash,
                sender: event.args.sender,
                nonce: event.args.nonce,
                actualGasCost: event.args.actualGasCost,
                actualGasUsed: event.args.actualGasUsed,
                success: event.args.success,
                logs: [],
                receipt: receipt
            }
        }
        throw new Error('bundlerApi or eoaPrivateKey is not set');
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
     *
     * @param {UserOperation} userOp 
     * @param {number} [timeout] default 30s
     * @param {number} [receiptTimeout=0]
     * @param {number} [receiptInterval=1000 * 6]
     * @return {*} 
     * @memberof Bundler
     */
    public sendUserOperation(userOp: UserOperation, timeout: number = 0, receiptTimeout: number = 0, receiptInterval: number = 1000 * 6) {
        const emitter = new EventEmitter();
        this.eth_sendUserOperation(userOp, timeout).then(async (userOpHash) => {
            emitter.emit('send', userOpHash);

            const startTime = Date.now();
            while (receiptTimeout === 0 || Date.now() - startTime < receiptTimeout) {
                // sleep 6s
                await this.sleep(receiptInterval);
                try {
                    const re = await this.eth_getUserOperationReceipt(userOpHash, timeout);
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
        // 	ExecutionResult(uint256,uint256,uint48,uint48,bool,bytes)	0x8b7ac980
        // error ExecutionResult(uint256 preOpGas, uint256 paid, uint48 validAfter, uint48 validUntil, bool targetSuccess, bytes targetResult);
        if (result.startsWith('0x8b7ac980')) {
            const re = defaultAbiCoder.decode(
                ['uint256', 'uint256', 'uint48', 'uint48', 'bool', 'bytes'],
                '0x' + result.substring(10)
            );
            return {
                status: 0,
                result: {
                    preOpGas: re[0],
                    paid: re[1],
                    validAfter: re[2],
                    validUntil: re[3],
                    targetSuccess: re[4],
                    targetResult: re[5]
                }
            }
        }
        return null;
    }

    private decodeFailedOp(result: string): IResult | null {
        //error FailedOp(uint256 opIndex, string reason) 220266b6eadfd2
        if (result.startsWith('0x220266b6')) {
            const re = defaultAbiCoder.decode(
                ['uint256', 'string'],
                '0x' + result.substring(10)
            );
            const failedOp: IFailedOp = {
                opIndex: re[0],
                reason: re[1]
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
        if (result.startsWith('0xe0cff05f')) {
            const re = defaultAbiCoder.decode(
                ['(uint256,uint256,bool,uint48,uint48,bytes)', '(uint256,uint256)', '(uint256,uint256)', '(uint256,uint256)'],
                '0x' + result.substring(10)
            );
            return {
                status: 0,
                result: {
                    returnInfo: {
                        preOpGas: re[0][0],
                        prefund: re[0][1],
                        sigFailed: re[0][2],
                        validAfter: re[0][3],
                        validUntil: re[0][4],
                        paymasterContext: re[0][5]
                    },
                    senderInfo: {
                        stake: re[1][0],
                        unstakeDelaySec: re[1][1]
                    },
                    factoryInfo: {
                        stake: re[2][0],
                        unstakeDelaySec: re[2][1]
                    },
                    paymasterInfo: {
                        stake: re[3][0],
                        unstakeDelaySec: re[3][1]
                    }
                }
            };

        }
        return null;
    }


    /**
     * “semi-valid” signature for calculating the gas cost
     *
     * @param {UserOperation} op
     * @return {*}  {UserOperation}
     * @memberof Bundler
     */
    semiValidSignature(op: UserOperation) {
        const opStruct = op.getStruct();
        if (op.signature === '0x') {
            opStruct.signature = op.getSemiValidSign();
        }
        return opStruct;
    }


    /**
     * simulateHandleOp
     * @param {UserOperation} op
     * @returns {Promise<IResult>} result
     */
    async simulateHandleOp(op: UserOperation, target: string = AddressZero, targetCallData: string = '0x'): Promise<IResult> {
        try {
            const result = await this._etherProvider.call({
                from: AddressZero,
                to: this._entryPoint,
                data: new ethers.utils.Interface(EntryPointContract.ABI).encodeFunctionData(
                    "simulateHandleOp",
                    [this.semiValidSignature(op), target, targetCallData]
                ),
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
        return this._simulateValidation(this.semiValidSignature(op));
    }

    private async _simulateValidation(op: IUserOperation): Promise<IResult> {
        try {
            const data = new ethers.utils.Interface(EntryPointContract.ABI).encodeFunctionData("simulateValidation", [op]);
            const result = await this._etherProvider.call({
                //from: AddressZero,
                to: this._entryPoint,
                gasLimit: BigNumber.from(10e10),
                data: data
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
            debugger;
            console.error(e);
            return {
                status: 5,
                error: "call error"
            };
        }

    }

}