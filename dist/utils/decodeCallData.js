"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-09-02 22:38:58
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-16 00:23:16
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecodeCallData = void 0;
const ethers_1 = require("ethers");
const httpRequest_1 = require("./httpRequest");
/**
 * decode call data
 * @class DecodeCallData
 */
class DecodeCallData {
    constructor() {
        this.bytes4Methods = new Map();
        this._saveToStorage = null;
        this._readFromStorage = null;
        const hotFunctionSignature = [
            ['transfer(address,uint256)', 'transfer(address recipient, uint256 amount)'],
            ['approve(address,uint256)', 'approve(address spender, uint256 value)'],
            ['transferFrom(address,address,uint256)', 'transferFrom(address sender, address recipient, uint256 amount)'],
            ['safeTransferFrom(address,address,uint256,bytes)', 'safeTransferFrom(address from, address to, uint256 tokenId,bytes data)'],
            ['safeTransferFrom(address,address,uint256)', 'safeTransferFrom(address from, address to, uint256 tokenId)'],
            ['setApprovalForAll(address,bool)', 'setApprovalForAll(address operator, bool approved)'],
            ['safeTransferFrom(address,address,uint256,uint256,bytes)', 'safeTransferFrom(address from, address to, uint256 tokenId, bytes data)'],
            ['safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)', 'safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)'],
            ['execFromEntryPoint(address,uint256,bytes)', ' execFromEntryPoint(address dest,uint256 value,bytes func)'],
            ['execFromEntryPoint(address[],uint256[],bytes[])', 'execFromEntryPoint(address[] dest,uint256[] value, bytes[] func)'],
            ['transferOwner(address)', 'transferOwner(address account)'],
            ['setGuardian(address)', 'setGuardian(address guardian)'],
            ['execute(bytes,bytes[],uint256)'],
            ['purchase(uint256)'],
            ['fulfillBasicOrder((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))'],
            ['withdraw(uint256)'],
            ['deposit()'],
            ['execute(((address,uint8,address,address,uint256,uint256,address,uint256,uint256,uint256,(uint16,address)[],uint256,bytes),uint8,bytes32,bytes32,bytes,uint8,uint256),((address,uint8,address,address,uint256,uint256,address,uint256,uint256,uint256,(uint16,address)[],uint256,bytes),uint8,bytes32,bytes32,bytes,uint8,uint256))'],
            ['mint(uint256)'],
            ['swap(string,address,uint256,bytes)'],
            ['swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)'],
            ['cancel((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256)[])'],
            ['bulkExecute((((address,uint8,address,address,uint256,uint256,address,uint256,uint256,uint256,(uint16,address)[],uint256,bytes),uint8,bytes32,bytes32,bytes,uint8,uint256),((address,uint8,address,address,uint256,uint256,address,uint256,uint256,uint256,(uint16,address)[],uint256,bytes),uint8,bytes32,bytes32,bytes,uint8,uint256))[])'],
            ['swapExactETHForTokens(uint256,address[],address,uint256)'],
            ['proxiedSwap(bytes,address,address,uint256,address,uint256)'],
            ['swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,address[],address,uint256)'],
            ['claim(address,uint256,bytes32[])'],
            ['swapETHForExactTokens(uint256,address[],address,uint256)'],
            ['depositEth()'],
            ['mint(address,uint256,uint32,bytes32[],address)'],
            ['fulfillAvailableAdvancedOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)[],(uint256,uint8,uint256,uint256,bytes32[])[],(uint256,uint256)[][],(uint256,uint256)[][],bytes32,address,uint256)'],
            ['swap(address,(address,address,address,address,uint256,uint256,uint256),bytes,bytes)'],
            ['mintWithSignature((address,address,uint256,address,uint256,string,uint256,uint256,address,uint128,uint128,bytes32),bytes)'],
            ['mintBatch(address,uint256,uint16,uint32[],bytes32[][],address)'],
            ['transmit(bytes,bytes32[],bytes32[],bytes32)'],
            ['appendSequencerBatch()'],
            ['executeFFsYo(address,bytes)'],
            ['multicall(uint256,bytes[])'],
            ['matchAdvancedOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)[],(uint256,uint8,uint256,uint256,bytes32[])[],((uint256,uint256)[],(uint256,uint256)[])[])'],
            ['multicall(bytes[])'],
            ['transfer(address)'],
            ['depositPendingFunds(uint256,uint256,address,bytes32)'],
            ['unoswap(address,uint256,uint256,uint256[])'],
            ['swapExactTokensForTokens(uint256,uint256,address[],address,uint256)'],
            ['fulfillAvailableOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],(uint256,uint256)[][],(uint256,uint256)[][],bytes32,uint256)'],
            ['execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)'],
            ['uniswapV3Swap(uint256,uint256,uint256[])'],
            ['initiateApeBreedingByOwner6538289081()'],
            ['swapExactTokensForETH(uint256,uint256,address[],address,uint256)'],
            ['yeetExactTokensForTokens1107459129()breedApes8477623104()'],
            ['publicMint(uint256)'],
            ['bulkTransfer(((uint8,address,uint256,uint256)[],address,bool)[],bytes32)'],
            ['mint(uint256,uint256,bytes)'],
            ['swap(address,(address,address,address,address,uint256,uint256,uint256,bytes),bytes)'],
            ['mintPublic(uint64)'],
            ['deposit(uint256)'],
            ['unoswap(address,uint256,uint256,bytes32[])'],
            ['sendMultiSigToken(address,uint256,address,uint256,uint256,bytes)'],
            ['commit(bytes32)'],
            ['claimMintRewardAndShare(address,uint256)'],
            ['fulfillAdvancedOrder(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes),(uint256,uint8,uint256,uint256,bytes32[])[],bytes32,address)'],
            ['mint()'],
            ['depositETH(address)'],
            ['settle(address[],uint256[],(uint256,uint256,address,uint256,uint256,uint32,bytes32,uint256,uint256,uint256,bytes)[],(address,uint256,bytes)[][3])'],
            ['incrementCounter()'],
            ['matchAdvancedOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)[],(uint256,uint8,uint256,uint256,bytes32[])[],((uint256,uint256)[],(uint256,uint256)[])[],address)'],
            ['buyEntry(uint256,uint256,address,uint256)'],
            ['registerWithConfig(string,address,uint256,bytes32,address,address)'],
            ['flushForwarderTokens(address,address)'],
            ['batchBuyWithETH((uint256,uint256,bytes)[])'],
            ['bondWithdrawal(address,uint256,bytes32,uint256)'],
            ['claim()'],
            ['mintPhase(uint256,uint64)'],
            ['fulfillOrder(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes),bytes32)'],
            ['cancelOrder((address,uint8,address,address,uint256,uint256,address,uint256,uint256,uint256,(uint16,address)[],uint256,bytes))'],
            ['execute(address,bytes)'],
            ['mint(uint256,bytes32[])'],
            ['swapTokensForExactTokens(uint256,uint256,address[],address,uint256)'],
            ['delegate(uint256,address)'],
            ['batchBuyWithERC20s((address[],uint256[]),(uint256,uint256,bytes)[],(bytes)[],address[])'],
            ['cancelOrders((address,uint8,address,address,uint256,uint256,address,uint256,uint256,uint256,(uint16,address)[],uint256,bytes)[])'],
            ['anySwapInAuto(bytes32,address,address,uint256,uint256)'],
            ['atInversebrah(int248,uint48[],uint32,bytes20[],bytes30[])'],
            ['swap()']
        ];
        for (const functionSignature of hotFunctionSignature) {
            // calc bytes4 function signature
            const bytes4 = ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.toUtf8Bytes(functionSignature[0])).substring(0, 10);
            this.bytes4Methods.set(bytes4, functionSignature.length > 1 ? functionSignature[1] : functionSignature[0]);
        }
    }
    /**
     * get instance
     * @returns {DecodeCallData}
     */
    static new() {
        if (!DecodeCallData.instance) {
            DecodeCallData.instance = new DecodeCallData();
        }
        return DecodeCallData.instance;
    }
    /**
     * set saveToStorage function & readFromStorage function
     * @param {Function} saveToStorage
     * @param {Function} readFromStorage
     */
    setStorage(saveToStorage, readFromStorage) {
        this._saveToStorage = saveToStorage;
        this._readFromStorage = readFromStorage;
    }
    saveToStorage(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._saveToStorage) {
                yield this._saveToStorage(key, value);
            }
        });
    }
    readFromStorage(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._readFromStorage) {
                return yield this._readFromStorage(key);
            }
            return null;
        });
    }
    read4BytesMethod(bytes4) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (bytes4.length != 10) {
                    return null;
                }
                const method = yield this.readFromStorage(bytes4);
                if (method) {
                    return method;
                }
                const url = `https://www.4byte.directory/api/v1/signatures/?hex_signature=${bytes4}`;
                // http get url
                const response = yield httpRequest_1.HttpRequest.get(url);
                if (response && response.count &&
                    response.results && typeof (response.count) === 'number' &&
                    typeof (response.results) === 'object' && response.results.length > 0 &&
                    typeof (response.results[0].text_signature) === 'string') {
                    //watch_tg_invmru_10b052bb(bool,address,bool)
                    const text_signature = response.results[0].text_signature;
                    yield this.saveToStorage(bytes4, text_signature);
                    return text_signature;
                }
            }
            catch (error) {
                console.log(error);
            }
            return null;
        });
    }
    decode4BytesMethod(callData, to, value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!callData || callData.length < 10) {
                    return null;
                }
                callData = callData.toLowerCase();
                const bytes4 = callData.slice(0, 10);
                let methodSignature = this.bytes4Methods.get(bytes4);
                if (!methodSignature) {
                    const _methodSignature = yield this.read4BytesMethod(bytes4);
                    if (_methodSignature) {
                        methodSignature = _methodSignature;
                    }
                }
                if (methodSignature) {
                    const iface = new ethers_1.ethers.utils.Interface(['function ' + methodSignature]);
                    const methodName = iface.getFunction(methodSignature).name;
                    const re = iface.decodeFunctionData(methodName, callData);
                    return {
                        bytes4: bytes4,
                        functionName: methodName,
                        functionSignature: methodSignature,
                        to: to || '',
                        value: ethers_1.BigNumber.from(value || 0),
                        params: re
                    };
                }
            }
            catch (error) {
                console.log(error);
                debugger;
            }
            return null;
        });
    }
    /**
     * decode callData
     * @param {string} callData
     * @returns {Promise<IDecode[]>}
     */
    decode(callData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!callData || callData.length < 10) {
                return [];
            }
            const decodeData = yield this.decode4BytesMethod(callData);
            if (!decodeData) {
                return [];
            }
            if (decodeData.bytes4 === '0x80c5c7d0') {
                // execFromEntryPoint(address,uint256,bytes)
                const address = decodeData.params[0];
                const uint256 = decodeData.params[1];
                const bytes = decodeData.params[2];
                const _ret = yield this.decode4BytesMethod(bytes, address, uint256);
                if (_ret) {
                    return [_ret];
                }
            }
            else if (decodeData.bytes4 === '0x2763604f') {
                // execFromEntryPoint(address[],uint256[],bytes[])
                const address = decodeData.params[0];
                const uint256 = decodeData.params[1];
                const bytes = decodeData.params[2];
                const result = [];
                for (let i = 0; i < bytes.length; i++) {
                    const _ret = yield this.decode4BytesMethod(bytes[i], address[i], uint256[i]);
                    if (_ret) {
                        result.push(_ret);
                    }
                }
                return result;
            }
            else {
                return [decodeData];
            }
            return [];
        });
    }
}
exports.DecodeCallData = DecodeCallData;
//# sourceMappingURL=decodeCallData.js.map