"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-09 14:57:06
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-10 15:16:15
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
const axios_1 = __importDefault(require("axios"));
const ethers_1 = require("ethers");
const events_1 = __importDefault(require("events"));
const address_1 = require("../defines/address");
const entryPoint_1 = require("../contracts/entryPoint");
const utils_1 = require("ethers/lib/utils");
class ApiTimeOut {
    constructor() {
        this.web3ApiRequestTimeout = 1000 * 10;
        this.web3ApiResponseTimeout = 1000 * 10;
        this.bundlerApiRequestTimeout = 1000 * 10;
        this.bundlerApiResponseTimeout = 1000 * 10;
    }
}
exports.ApiTimeOut = ApiTimeOut;
class Bundler {
    /**
     *
     * @param entryPoint the entry point address
     * @param etherProvider
     * @param bundlerApi the bundler api address(https)
     * @param timeout the timeout config
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
    _request(data, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._bundlerApi) {
                throw new Error('bundlerApi is not set');
            }
            if (typeof timeout === 'undefined') {
                timeout = this._timeout.web3ApiRequestTimeout;
            }
            let response = yield axios_1.default.post(this._bundlerApi, data, {
                timeout
            });
            const rpcResp = response.data;
            if (rpcResp) {
                return rpcResp.result;
            }
            throw new Error('request error');
        });
    }
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
    get Raw() {
        return {
            eth_chainId: this.eth_chainId,
            eth_supportedEntryPoints: this.eth_supportedEntryPoints,
            eth_sendUserOperation: this.eth_sendUserOperation,
            eth_estimateUserOperationGas: this.eth_estimateUserOperationGas,
            eth_getUserOperationReceipt: this.eth_getUserOperationReceipt,
            eth_getUserOperationByHash: this.eth_getUserOperationByHash,
        };
    }
    eth_chainId() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._request({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_chainId',
                params: []
            });
        });
    }
    eth_supportedEntryPoints() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._request({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_supportedEntryPoints',
                params: []
            });
        });
    }
    eth_sendUserOperation(userOp) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._request({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_sendUserOperation',
                params: [
                    JSON.parse(userOp.toJSON()),
                    this._entryPoint
                ]
            });
        });
    }
    eth_estimateUserOperationGas(userOp) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implement');
        });
    }
    eth_getUserOperationReceipt(userOpHash) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implement');
        });
    }
    eth_getUserOperationByHash(userOpHash) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implement');
        });
    }
    _sendUserOperation(emitter, userOp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('sendUserOperation', userOp);
            let userOpHash = '';
            try {
                userOpHash = yield this.eth_sendUserOperation(userOp);
            }
            catch (error) {
                emitter.emit('error', error);
                return;
            }
            emitter.emit('bundlerAccept', userOpHash);
        });
    }
    sendUserOperation(userOp) {
        const emitter = new events_1.default();
        this._sendUserOperation(emitter, userOp);
        return emitter;
    }
    decodeExecutionResult(result) {
        // error ExecutionResult(uint256 preOpGas, uint256 paid, uint256 deadline, uint256 paymasterDeadline);
        if (result.startsWith('0xa30fd31e')) {
            const re = utils_1.defaultAbiCoder.decode(['uint256', 'uint256', 'uint256', 'uint256'], '0x' + result.substring(10));
            return {
                result: {
                    preOpGas: re[0],
                    paid: re[1],
                    deadline: re[2],
                    paymasterDeadline: re[3]
                }
            };
        }
        return null;
    }
    decodeFailedOp(result) {
        //error FailedOp(uint256 opIndex, address paymaster, string reason)
        if (result.startsWith('0x00fa072b')) {
            // FailedOp(uint256,address,string)
            const re = utils_1.defaultAbiCoder.decode(['uint256', 'address', 'string'], '0x' + result.substring(10));
            const failedOp = {
                opIndex: re[0],
                paymaster: re[1],
                reason: re[2]
            };
            return {
                result: failedOp
            };
        }
        ;
        return null;
    }
    decodeValidationResult(result) {
        // ValidationResult((uint256,uint256,uint256,uint256,bytes),(uint256,uint256),(uint256,uint256),(uint256,uint256))	0x3dd956e9if (result.startsWith('0x3dd956e9')) {
        if (result.startsWith('0x3dd956e9')) {
            const re = utils_1.defaultAbiCoder.decode(['(uint256,uint256,uint256,uint256,bytes)', '(uint256,uint256)', '(uint256,uint256)', '(uint256,uint256)'], '0x' + result.substring(10));
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
    simulateHandleOp(op) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._etherProvider.call({
                    from: address_1.AddressZero,
                    to: this._entryPoint,
                    data: new ethers_1.ethers.utils.Interface(entryPoint_1.EntryPointContract.ABI).encodeFunctionData("simulateHandleOp", [op]),
                });
                let re = this.decodeExecutionResult(result);
                if (re)
                    return re;
                re = this.decodeFailedOp(result);
                if (re)
                    return re;
                return {
                    error: result
                };
            }
            catch (e) {
                console.error(e);
                return {
                    error: "call error"
                };
            }
        });
    }
    simulateValidation(op) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._etherProvider.call({
                    from: address_1.AddressZero,
                    to: this._entryPoint,
                    data: new ethers_1.ethers.utils.Interface(entryPoint_1.EntryPointContract.ABI).encodeFunctionData("simulateValidation", [op]),
                });
                let re = this.decodeValidationResult(result);
                if (re)
                    return re;
                return {
                    error: result
                };
            }
            catch (e) {
                console.error(e);
                return {
                    error: "call error"
                };
            }
        });
    }
}
exports.Bundler = Bundler;
//# sourceMappingURL=bundler.js.map