"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-09 14:57:06
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-21 15:14:44
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
const chainId_1 = require("../defines/chainId");
const userOp_1 = require("./userOp");
const arbitrum_1 = require("./L2/arbitrum/arbitrum");
class ApiTimeOut {
    constructor() {
        this.web3ApiRequestTimeout = 1000 * 60 * 10;
        this.web3ApiResponseTimeout = 1000 * 60 * 10;
        this.bundlerApiRequestTimeout = 1000 * 60 * 10;
        this.bundlerApiResponseTimeout = 1000 * 60 * 10;
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
     * @param {String} bundlerApiOrEOAPrivateKey the bundler api url or the EOA private key
     * @param {ApiTimeOut?} timeout the timeout
     * @returns {Bundler}
     */
    constructor(entryPoint, etherProvider, bundlerApiOrEOAPrivateKey, timeout) {
        this._entryPoint = '';
        this._timeout = new ApiTimeOut();
        this._chainId = -1;
        this._init = false;
        this._entryPoint = entryPoint;
        this._etherProvider = etherProvider;
        if (bundlerApiOrEOAPrivateKey.startsWith('0x')) {
            this._eoaPrivateKey = bundlerApiOrEOAPrivateKey;
        }
        else {
            this._bundlerApi = bundlerApiOrEOAPrivateKey;
        }
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
                // test web3Api
                {
                    // get chainId
                    const _network = yield this._etherProvider.getNetwork();
                    if (!_network.chainId) {
                        throw new Error('web3Api error');
                    }
                    this._chainId = _network.chainId;
                }
                // test bundlerApi
                if (this._bundlerApi) {
                    const chainId = ethers_1.BigNumber.from(yield this.eth_chainId()).toNumber();
                    if (chainId !== this._chainId) {
                        throw new Error('bundlerApi error');
                    }
                    const _eps = yield this.eth_supportedEntryPoints();
                    if (!_eps.includes(this._entryPoint)) {
                        throw new Error('bundlerApi error');
                    }
                }
                if (this._eoaPrivateKey) {
                    this._wallet = new ethers_1.ethers.Wallet(this._eoaPrivateKey, this._etherProvider);
                    this._entryPointContract = new ethers_1.ethers.Contract(this._entryPoint, entryPoint_1.EntryPointContract.ABI, this._wallet);
                }
                else {
                    this._entryPointContract = new ethers_1.ethers.Contract(this._entryPoint, entryPoint_1.EntryPointContract.ABI);
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
            if (this._bundlerApi) {
                return this.rpcRequest({
                    jsonrpc: '2.0',
                    id: 1,
                    method: 'eth_chainId',
                    params: []
                }, timeout);
            }
            if (this._eoaPrivateKey) {
                return this._chainId.toString();
            }
            throw new Error('bundlerApi or eoaPrivateKey is not set');
        });
    }
    /**
     * get bundler supported entry points
     * @returns {Promise<String[]>} supported entry points
     */
    eth_supportedEntryPoints(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._bundlerApi) {
                return this.rpcRequest({
                    jsonrpc: '2.0',
                    id: 1,
                    method: 'eth_supportedEntryPoints',
                    params: []
                }, timeout);
            }
            if (this._eoaPrivateKey) {
                return [this._entryPoint];
            }
            throw new Error('bundlerApi or eoaPrivateKey is not set');
        });
    }
    /**
     * send user operation via bundler
     * @param {UserOperation} userOp
     * @returns {Promise<String>} user operation hash
     */
    eth_sendUserOperation(userOp, timeout) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (this._bundlerApi) {
                return this.rpcRequest({
                    jsonrpc: '2.0',
                    id: 1,
                    method: 'eth_sendUserOperation',
                    params: [
                        userOp.getStruct(),
                        this._entryPoint
                    ]
                }, timeout);
            }
            if (this._eoaPrivateKey) {
                (_a = this._entryPointContract) === null || _a === void 0 ? void 0 : _a.handleOps([userOp.getStruct()], (_b = this._wallet) === null || _b === void 0 ? void 0 : _b.address);
                return userOp.getUserOpHash(this._entryPoint, this._chainId);
            }
            throw new Error('bundlerApi or eoaPrivateKey is not set');
        });
    }
    recoveryWallet(calldata) {
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
    eth_estimateUserOperationGas(userOp, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
                The bundler we're using may not support L2 yet,
                so if the current network is L2, current lib will handle it self
            */
            const _userOp = this.semiValidSignature(userOp);
            let chainName = '';
            if (this._chainId === chainId_1.CHAINID.OPTIMISM || this._chainId === chainId_1.CHAINID.OPTIMISM_GOERLI) {
                chainName = 'OPTIMISM';
            }
            else if (this._chainId === chainId_1.CHAINID.ARBITRUM || this._chainId === chainId_1.CHAINID.ARBITRUM_GOERLI) {
                chainName = 'ARBITRUM';
            }
            const estimateUserOpGasResult = {
                preVerificationGas: '0x0',
                verificationGas: '0x0',
                validAfter: undefined,
                validUntil: undefined,
                callGasLimit: '0x0'
            };
            if (this._bundlerApi) {
                const _estimateUserOpGasResult = yield this.rpcRequest({
                    jsonrpc: '2.0',
                    id: 1,
                    method: 'eth_estimateUserOperationGas',
                    params: [
                        _userOp,
                        this._entryPoint
                    ]
                }, timeout);
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
                const result = yield this._simulateValidation(_userOp);
                if (result.status === 1) {
                    // FailedOp
                    debugger;
                    const failedOp = result.result;
                    throw new Error(failedOp.reason);
                }
                if (result.status !== 0) {
                    debugger;
                    throw new Error('error');
                }
                const returnInfo = result.result;
                estimateUserOpGasResult.validAfter = ethers_1.BigNumber.from(returnInfo.returnInfo.validAfter).toHexString();
                estimateUserOpGasResult.validUntil = ethers_1.BigNumber.from(returnInfo.returnInfo.validUntil).toHexString();
                const callGasLimit = yield this._etherProvider.estimateGas({
                    from: this._entryPoint,
                    to: _userOp.sender,
                    data: _userOp.callData
                });
                estimateUserOpGasResult.callGasLimit = callGasLimit.mul(120).div(100).toHexString();
                estimateUserOpGasResult.preVerificationGas = ethers_1.BigNumber.from(userOp_1.UserOp.callDataCost(userOp)).toHexString();
                estimateUserOpGasResult.verificationGas = returnInfo.returnInfo.preOpGas.toHexString();
            }
            if (estimateUserOpGasResult.preVerificationGas === '0x0') {
                debugger;
                throw new Error('error');
            }
            if (chainName === 'OPTIMISM') {
                //throw new Error('not support yet');
            }
            else if (chainName === 'ARBITRUM') {
                const _preVerificationGasLocal = userOp_1.UserOp.callDataCost(userOp);
                const _preVerificationGas = ethers_1.BigNumber.from(estimateUserOpGasResult.preVerificationGas).toNumber();
                if (Math.abs(_preVerificationGasLocal - _preVerificationGas) < _preVerificationGas * 0.1) {
                    // current bundler may not support ARBITRUM 
                    _userOp.paymasterAndData = '0x';
                    _userOp.maxFeePerGas = 0;
                    _userOp.maxPriorityFeePerGas = 0;
                    _userOp.preVerificationGas = 0;
                    _userOp.verificationGasLimit = 10e6;
                    const L1GasLimit = yield arbitrum_1.Arbitrum.L1GasLimit(this._etherProvider, _userOp);
                    estimateUserOpGasResult.preVerificationGas = ethers_1.BigNumber.from(_preVerificationGas + L1GasLimit).toHexString();
                }
            }
            let _verificationGas = ethers_1.BigNumber.from(estimateUserOpGasResult.verificationGas).toNumber();
            let _preVerificationGas = ethers_1.BigNumber.from(estimateUserOpGasResult.preVerificationGas).toNumber();
            _preVerificationGas += 5000;
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
            if (userOp.paymasterAndData.length >= 42 && userOp.paymasterAndData !== address_1.AddressZero) {
                _verificationGas += 50000;
                _preVerificationGas += ((userOp.paymasterAndData.length / 2) - 1) * 16;
            }
            estimateUserOpGasResult.verificationGas = ethers_1.BigNumber.from(_verificationGas).toHexString();
            estimateUserOpGasResult.preVerificationGas = ethers_1.BigNumber.from(_preVerificationGas).toHexString();
            return estimateUserOpGasResult;
        });
    }
    _getUserOperationEvent(userOpHash) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._entryPointContract) {
                throw new Error('entryPointContract is not set');
            }
            // TODO: eth_getLogs is throttled. must be acceptable for finding a UserOperation by hash
            const event = yield ((_a = this._entryPointContract) === null || _a === void 0 ? void 0 : _a.queryFilter(this._entryPointContract.filters.UserOperationEvent(userOpHash)));
            return event[0];
        });
    }
    eth_getUserOperationReceipt(userOpHash, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._bundlerApi) {
                return this.rpcRequest({
                    jsonrpc: '2.0',
                    id: 1,
                    method: 'eth_getUserOperationReceipt',
                    params: [userOpHash]
                }, timeout);
            }
            if (this._eoaPrivateKey) {
                const event = yield this._getUserOperationEvent(userOpHash);
                if (event == null) {
                    return null;
                }
                if (!event.args) {
                    throw new Error('event.args is null');
                }
                const receipt = yield event.getTransactionReceipt();
                return {
                    userOpHash: userOpHash,
                    sender: event.args.sender,
                    nonce: event.args.nonce,
                    actualGasCost: event.args.actualGasCost,
                    actualGasUsed: event.args.actualGasUsed,
                    success: event.args.success,
                    logs: [],
                    receipt: receipt
                };
            }
            throw new Error('bundlerApi or eoaPrivateKey is not set');
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
    semiValidSignature(op) {
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
    simulateHandleOp(op, target = address_1.AddressZero, targetCallData = '0x') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._etherProvider.call({
                    from: address_1.AddressZero,
                    to: this._entryPoint,
                    data: new ethers_1.ethers.utils.Interface(entryPoint_1.EntryPointContract.ABI).encodeFunctionData("simulateHandleOp", [this.semiValidSignature(op), target, targetCallData]),
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
            return this._simulateValidation(this.semiValidSignature(op));
        });
    }
    _simulateValidation(op) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = new ethers_1.ethers.utils.Interface(entryPoint_1.EntryPointContract.ABI).encodeFunctionData("simulateValidation", [op]);
                const result = yield this._etherProvider.call({
                    //from: AddressZero,
                    to: this._entryPoint,
                    gasLimit: ethers_1.BigNumber.from(10e10),
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