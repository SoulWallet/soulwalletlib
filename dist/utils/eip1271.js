"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 23:29:49
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-03 12:31:57
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EIP1271 = void 0;
const ethers_1 = require("ethers");
const ethUtil = __importStar(require("ethereumjs-util"));
const utils_1 = require("ethers/lib/utils");
class EIP1271 {
    /**
     * @description: pack hash message with time range
     * @static
     * @param {string} hashMessage
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @memberof EIP1271
     */
    static packHashMessageWithTimeRange(hashMessage, validAfter = 0, validUntil = 0) {
        if (hashMessage.length !== 66) {
            throw new Error("hashMessage must be 66 characters long");
        }
        if (validAfter === 0 && validUntil === 0) {
            return hashMessage;
        }
        return ethers_1.ethers.utils.solidityKeccak256(['bytes32', 'uint48', 'uint48'], [hashMessage, validAfter, validUntil]);
    }
    /**
     * sign packed hash message [DEV ONLY]
     *
     * @static
     * @param {string} packedHash
     * @param {string} privateKey
     * @return {*}  {string}
     * @memberof EIP1271
     */
    static signPackedHash(packedHash, privateKey) {
        if (packedHash.length !== 66) {
            throw new Error("hash must be 66 characters long");
        }
        const messageHex = Buffer.from(ethers_1.ethers.utils.arrayify(packedHash));
        const _privateKey = Buffer.from(privateKey.substring(2), "hex");
        const _signature = ethUtil.ecsign(messageHex, _privateKey);
        const signature = ethUtil.toRpcSig(_signature.v, _signature.r, _signature.s);
        return signature;
    }
    /**
     * pack signature with time range
     *
     * @static
     * @param {string} signature
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @return {*}
     * @memberof EIP1271
     */
    static packedSignWithTimeRange(signature, validAfter = 0, validUntil = 0) {
        if (validAfter === 0 && validUntil === 0) {
            return signature;
        }
        return utils_1.defaultAbiCoder.encode(['bytes', 'uint48', 'uint48'], [signature, validAfter, validUntil]);
    }
}
exports.EIP1271 = EIP1271;
//# sourceMappingURL=eip1271.js.map