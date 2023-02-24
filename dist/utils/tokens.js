"use strict";
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
exports.ETH = exports.ERC1155 = exports.ERC721 = exports.ERC20 = exports.Token = void 0;
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-09-21 21:45:49
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 21:46:25
 */
const userOperation_1 = require("../entity/userOperation");
const ABI_1 = require("../defines/ABI");
const ethers_1 = require("ethers");
/**
 * token interface
 * @class Token
 */
class Token {
    createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAndData, maxFeePerGas, maxPriorityFeePerGas, callContract, encodeABI, value = '0') {
        return __awaiter(this, void 0, void 0, function* () {
            walletAddress = ethers_1.ethers.utils.getAddress(walletAddress);
            let userOperation = new userOperation_1.UserOperation();
            userOperation.nonce = nonce;
            userOperation.sender = walletAddress;
            userOperation.paymasterAndData = paymasterAndData;
            userOperation.maxFeePerGas = maxFeePerGas;
            userOperation.maxPriorityFeePerGas = maxPriorityFeePerGas;
            userOperation.callData = new ethers_1.ethers.utils.Interface(ABI_1.execFromEntryPoint)
                .encodeFunctionData("execFromEntryPoint", [callContract, value, encodeABI]);
            let gasEstimated = yield userOperation.estimateGas(entryPointAddress, etherProvider);
            if (!gasEstimated) {
                return null;
            }
            return userOperation;
        });
    }
}
exports.Token = Token;
/**
 * erc20 token class
 * @class ERC20
 *
 */
class ERC20 {
    /**
     * @constructor
     *
     */
    constructor() {
        this.MAX_INT256 = '115792089237316195423570985008687907853269984665640564039457584007913129639935'; //uint256 MAX_INT = 2**256 - 1
        this._token = new Token();
    }
    getContract(etherProvider, contractAddress) {
        return new ethers_1.ethers.Contract(contractAddress, ABI_1.ERC20, etherProvider);
    }
    /**
     * approve token to spender
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _spender the spender address
     * @param {string} _value the value
     * @returns {Promise<UserOperation | null>} the userOperation
     */
    approve(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, _spender, _value) {
        return __awaiter(this, void 0, void 0, function* () {
            let encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC20).encodeFunctionData("approve", [_spender, _value]);
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
        });
    }
    approveGasLimit(etherProvider, walletAddress, approveData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (approveData.value === undefined) {
                approveData.value = this.MAX_INT256;
            }
            let callGasLimit = yield etherProvider.estimateGas({
                from: walletAddress,
                to: approveData.token,
                data: new ethers_1.ethers.utils.Interface(ABI_1.ERC20).encodeFunctionData("approve", [approveData.spender, approveData.value])
            });
            return callGasLimit;
        });
    }
    /**
     * get approve call data (use activate wallet)
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {IApproveToken[]} approveData the approve data
     * @returns {Promise<{callData: string, callGasLimit: string}>} the call data
     */
    getApproveCallData(etherProvider, walletAddress, approveData) {
        return __awaiter(this, void 0, void 0, function* () {
            const approveCallData = {
                callData: '0x',
                callGasLimit: '0x0'
            };
            if (approveData.length > 0) {
                // if (approveData.length === 1) {
                //     const encodeABI = new ethers.utils.Interface(erc20).encodeFunctionData("approve", [
                //         approveData[0].spender,
                //         approveData[0].value === undefined ? this.MAX_INT256 : approveData[0].value
                //     ]);
                //     approveCallData.callData = new ethers.utils.Interface(execFromEntryPoint).encodeFunctionData("execFromEntryPoint", [approveData[0].token, 0, encodeABI]);
                //     approveCallData.callGasLimit = (await this.approveGasLimit(etherProvider, walletAddress, approveData[0])).add(21000).toHexString();
                // } else 
                {
                    // order by approveData.token asc 
                    approveData.sort((a, b) => {
                        const aBig = ethers_1.BigNumber.from(a.token);
                        const bBig = ethers_1.BigNumber.from(b.token);
                        if (aBig.eq(bBig)) {
                            throw new Error("token address is same");
                        }
                        else if (aBig.lt(bBig)) {
                            return -1;
                        }
                        else {
                            return 1;
                        }
                    });
                    const token = [];
                    const value = [];
                    const data = [];
                    let callGasLimit = ethers_1.BigNumber.from(21000);
                    for (let i = 0; i < approveData.length; i++) {
                        token.push(approveData[i].token);
                        value.push(0);
                        callGasLimit = callGasLimit.add(yield this.approveGasLimit(etherProvider, walletAddress, approveData[i]));
                        const encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC20).encodeFunctionData("approve", [
                            approveData[i].spender,
                            approveData[i].value === undefined ? this.MAX_INT256 : approveData[i].value
                        ]);
                        //console.log(`token:${approveData[i].token},spender:${approveData[i].spender},value:${approveData[i].value}`);
                        data.push(encodeABI);
                    }
                    approveCallData.callGasLimit = callGasLimit.toHexString();
                    approveCallData.callData = new ethers_1.ethers.utils.Interface(ABI_1.execBatchFromEntryPoint).encodeFunctionData("execFromEntryPoint", [token, value, data]);
                }
            }
            return approveCallData;
        });
    }
    /**
     * transfer token
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _to the to address
     * @param {string} _value the value
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    transferFrom(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, _from, _to, _value) {
        return __awaiter(this, void 0, void 0, function* () {
            let encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC20).encodeFunctionData("transferFrom", [_from, _to, _value]);
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
        });
    }
    /**
     * transfer token
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _to the to address
     * @param {string} _value the value
     * @returns {Promise<UserOperation | null>} the userOperation
     */
    transfer(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, _to, _value) {
        return __awaiter(this, void 0, void 0, function* () {
            let encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC20).encodeFunctionData("transfer", [_to, _value]);
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
        });
    }
}
exports.ERC20 = ERC20;
/**
 * ERC721
 * @class
 */
class ERC721 {
    /**
     * @constructor
     */
    constructor() {
        this._token = new Token();
    }
    getContract(etherProvider, contractAddress) {
        return new ethers_1.ethers.Contract(contractAddress, ABI_1.ERC721, etherProvider);
    }
    /**
     * approve token to spender
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _spender the spender address
     * @param {string} _tokenId the token id
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    approve(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, _spender, _tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC721).encodeFunctionData("approve", [_spender, _tokenId]);
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
        });
    }
    /**
     * transfer token
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _to the to address
     * @param {string} _tokenId the token id
     * @returns {Promise<UserOperation | null>} the userOperation
     */
    transferFrom(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, _from, _to, _tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC721).encodeFunctionData("transferFrom", [_from, _to, _tokenId]);
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
        });
    }
    /**
     * transfer token
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _to the to address
     * @param {string} _tokenId the token id
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    transfer(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, _to, _tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC721).encodeFunctionData("transfer", [_to, _tokenId]);
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
        });
    }
    /**
     * safe transfer token
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _to the to address
     * @param {string} _tokenId the token id
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    safeTransferFrom(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, _from, _to, _tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC721).encodeFunctionData("safeTransferFrom", [_from, _to, _tokenId]);
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
        });
    }
    /**
     * Enable or disable approval for a third party ("operator") to manage all of `msg.sender`'s assets
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _operator the operator address
     * @param {boolean} _approved the approved
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    setApprovalForAll(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, _operator, _approved) {
        return __awaiter(this, void 0, void 0, function* () {
            let encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC721).encodeFunctionData("setApprovalForAll", [_operator, _approved]);
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
        });
    }
}
exports.ERC721 = ERC721;
/**
 * ERC1155
 * @class
 */
class ERC1155 {
    /**
     * @constructor
     */
    constructor() {
        this._token = new Token();
    }
    getContract(etherProvider, contractAddress) {
        return new ethers_1.ethers.Contract(contractAddress, ABI_1.ERC1155, etherProvider);
    }
    /**
     * safeTransferFrom
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _from the from address
     * @param {string} _to the to address
     * @param {string} _id the id
     * @param {string} _value the value
     * @param {string} _data the data
     * @returns {Promise<UserOperation | null>} the userOperation
     */
    safeTransferFrom(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, _from, _to, _id, _value, _data) {
        return __awaiter(this, void 0, void 0, function* () {
            let encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC1155).encodeFunctionData("safeTransferFrom", [_from, _to, _id, _value, _data]);
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
        });
    }
    /**
     * safeBatchTransferFrom
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _from the from address
     * @param {string} _to the to address
     * @param {string} _ids the ids
     * @param {string} _values the values
     * @param {string} _data the data
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    safeBatchTransferFrom(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, _from, _to, _ids, _values, _data) {
        return __awaiter(this, void 0, void 0, function* () {
            let encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC1155).encodeFunctionData("safeBatchTransferFrom", [_from, _to, _ids, _values, _data]);
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
        });
    }
    /**
     * Enable or disable approval for a third party ("operator") to manage all of `msg.sender`'s assets
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _operator the operator address
     * @param {boolean} _approved the approved
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    setApprovalForAll(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, _operator, _approved) {
        return __awaiter(this, void 0, void 0, function* () {
            let encodeABI = new ethers_1.ethers.utils.Interface(ABI_1.ERC1155).encodeFunctionData("setApprovalForAll", [_operator, _approved]);
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
        });
    }
}
exports.ERC1155 = ERC1155;
/**
 * ETH
 * @class
 */
class ETH {
    /**
     * @constructor
     */
    constructor() {
        this._token = new Token();
    }
    /**
     * transfer
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} to the to address
     * @param {string} value the value
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    transfer(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, to, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, to, '0x', value);
        });
    }
}
exports.ETH = ETH;
//# sourceMappingURL=tokens.js.map