"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-09 14:57:06
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-03 09:44:07
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundler = exports.ApiTimeOut = void 0;
const ethers_1 = require("ethers");
const events_1 = __importDefault(require("events"));
const address_1 = require("../defines/address");
const entryPoint_1 = require("../contracts/entryPoint");
const utils_1 = require("ethers/lib/utils");
const httpRequest_1 = require("./httpRequest");
class ApiTimeOut {
    constructor() {
        this.web3ApiRequestTimeout = 1000 * 10;
        this.web3ApiResponseTimeout = 1000 * 10;
        this.bundlerApiRequestTimeout = 1000 * 10;
        this.bundlerApiResponseTimeout = 1000 * 10;
    }
}
exports.ApiTimeOut = ApiTimeOut;
/**
 * bundler utils
 * @class Bundler
 */
class Bundler {
    /**
     * Bundler utils
     * @constructor Bundler
     * @param {String} entryPoint the entry point address
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String?} bundlerApi the bundler api url
     * @param {ApiTimeOut?} timeout the timeout
     * @returns {Bundler}
     */
    constructor(entryPoint, etherProvider, bundlerApi, timeout) {
        this._entryPoint = '';
        this._timeout = new ApiTimeOut();
        this._init = false;
        this._entryPoint = entryPoint;
        this._etherProvider = etherProvider;
        this._bundlerApi = bundlerApi;
        if (timeout) {
            this._timeout = timeout;
        }
    }
    rpcRequest(data, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._bundlerApi) {
                throw new Error('bundlerApi is not set');
            }
            if (typeof timeout === 'undefined') {
                timeout = this._timeout.web3ApiRequestTimeout;
            }
            let response = yield httpRequest_1.HttpRequest.post(this._bundlerApi, data, timeout);
            if (response) {
                const rpcResp = response;
                if (!rpcResp.error) {
                    return rpcResp.result;
                }
                else {
                    throw rpcResp.error;
                }
            }
            throw new Error('request error');
        });
    }
    /**
     * init the bundler
     * @returns {Promise<void>}
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._init) {
                return;
            }
            try {
                let _chainId = 0;
                // test web3Api
                {
                    // get chainId
                    const _network = yield this._etherProvider.getNetwork();
                    if (!_network.chainId) {
                        throw new Error('web3Api error');
                    }
                    _chainId = _network.chainId;
                }
                // test bundlerApi
                {
                    const _chainIdNumber = ethers_1.BigNumber.from(yield this.eth_chainId()).toNumber();
                    if (_chainId !== _chainIdNumber) {
                        throw new Error('bundlerApi error');
                    }
                    const _eps = yield this.eth_supportedEntryPoints();
                    if (!_eps.includes(this._entryPoint)) {
                        throw new Error('bundlerApi error');
                    }
                }
                this._init = true;
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * get bundler supported chainid
     * @returns {Promise<String>} supported chainid
     */
    eth_chainId(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rpcRequest({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_chainId',
                params: []
            }, timeout);
        });
    }
    /**
     * get bundler supported entry points
     * @returns {Promise<String[]>} supported entry points
     */
    eth_supportedEntryPoints(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rpcRequest({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_supportedEntryPoints',
                params: []
            }, timeout);
        });
    }
    /**
     * send user operation via bundler
     * @param {UserOperation} userOp
     * @returns {Promise<String>} user operation hash
     */
    eth_sendUserOperation(userOp, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rpcRequest({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_sendUserOperation',
                params: [
                    userOp.getStruct(),
                    this._entryPoint
                ]
            }, timeout);
        });
    }
    eth_estimateUserOperationGas(userOp) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implement');
        });
    }
    eth_getUserOperationReceipt(userOpHash, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rpcRequest({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_getUserOperationReceipt',
                params: [userOpHash]
            }, timeout);
        });
    }
    eth_getUserOperationByHash(userOpHash) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implement');
        });
    }
    sleep(ms) {
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
    sendUserOperation(userOp, timeout = 0, receiptTimeout = 0, receiptInterval = 1000 * 6) {
        const emitter = new events_1.default();
        this.eth_sendUserOperation(userOp, timeout).then((userOpHash) => __awaiter(this, void 0, void 0, function* () {
            emitter.emit('send', userOpHash);
            const startTime = Date.now();
            while (receiptTimeout === 0 || Date.now() - startTime < receiptTimeout) {
                // sleep 6s
                yield this.sleep(receiptInterval);
                try {
                    const re = yield this.eth_getUserOperationReceipt(userOpHash, timeout);
                    if (re) {
                        emitter.emit('receipt', re);
                        return;
                    }
                }
                catch (error) {
                    console.error(error);
                }
            }
            emitter.emit('timeout', new Error('receipt timeout'));
        })).catch((error) => {
            emitter.emit('error', error);
        });
        return emitter;
    }
    decodeExecutionResult(result) {
        // 	ExecutionResult(uint256,uint256,uint48,uint48,bool,bytes)	0x8b7ac980
        // error ExecutionResult(uint256 preOpGas, uint256 paid, uint48 validAfter, uint48 validUntil, bool targetSuccess, bytes targetResult);
        if (result.startsWith('0x8b7ac980')) {
            const re = utils_1.defaultAbiCoder.decode(['uint256', 'uint256', 'uint48', 'uint48', 'bool', 'bytes'], '0x' + result.substring(10));
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
            };
        }
        return null;
    }
    decodeFailedOp(result) {
        //error FailedOp(uint256 opIndex, string reason) 220266b6eadfd2
        if (result.startsWith('0x220266b6')) {
            const re = utils_1.defaultAbiCoder.decode(['uint256', 'string'], '0x' + result.substring(10));
            const failedOp = {
                opIndex: re[0],
                reason: re[1]
            };
            return {
                status: 1,
                result: failedOp
            };
        }
        ;
        return null;
    }
    decodeValidationResult(result) {
        // ValidationResult((uint256,uint256,uint256,uint256,bytes),(uint256,uint256),(uint256,uint256),(uint256,uint256))	0x3dd956e9if (result.startsWith('0x3dd956e9')) {
        if (result.startsWith('0xe0cff05f')) {
            const re = utils_1.defaultAbiCoder.decode(['(uint256,uint256,bool,uint48,uint48,bytes)', '(uint256,uint256)', '(uint256,uint256)', '(uint256,uint256)'], '0x' + result.substring(10));
            return {
                status: 0,
                result: {
                    returnInfo: re[0],
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
    simulateHandleOp(op, target = address_1.AddressZero, targetCallData = '0x') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._etherProvider.call({
                    from: address_1.AddressZero,
                    to: this._entryPoint,
                    data: new ethers_1.ethers.utils.Interface(entryPoint_1.EntryPointContract.ABI).encodeFunctionData("simulateHandleOp", [op.getStruct(), target, targetCallData]),
                });
                let re = this.decodeExecutionResult(result);
                if (re)
                    return re;
                re = this.decodeFailedOp(result);
                if (re)
                    return re;
                return {
                    status: 2,
                    error: result
                };
            }
            catch (e) {
                console.error(e);
                return {
                    status: 3,
                    error: "call error"
                };
            }
        });
    }
    /**
     * simulateValidation
     * @param {UserOperation} op
     * @returns {Promise<IResult>} result
     */
    simulateValidation(op) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = new ethers_1.ethers.utils.Interface(entryPoint_1.EntryPointContract.ABI).encodeFunctionData("simulateValidation", [op.getStruct()]);
                const result = yield this._etherProvider.call({
                    //from: AddressZero,
                    to: this._entryPoint,
                    gasLimit: ethers_1.BigNumber.from(10e6),
                    data: data
                });
                let re = this.decodeValidationResult(result);
                if (re)
                    return re;
                re = this.decodeFailedOp(result);
                if (re)
                    return re;
                return {
                    status: 4,
                    error: result
                };
            }
            catch (e) {
                debugger;
                console.error(e);
                return {
                    status: 5,
                    error: "call error"
                };
            }
        });
    }
}
exports.Bundler = Bundler;
//# sourceMappingURL=bundler.js.map