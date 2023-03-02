/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 23:29:49
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-03 00:55:51
 */

import { ethers } from "ethers";
import * as ethUtil from 'ethereumjs-util';
import { defaultAbiCoder } from "ethers/lib/utils";

export class EIP1271 {

    /**
     * @description: pack hash message with time range
     * @static
     * @param {string} hashMessage
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @memberof EIP1271
     */
    public static packHashMessageWithTimeRange(
        hashMessage: string,
        validAfter = 0,
        validUntil = 0
    ) {
        if (hashMessage.length !== 66) {
            throw new Error("hashMessage must be 66 characters long");
        }
        return ethers.utils.solidityKeccak256(['bytes32', 'uint48', 'uint48'], [hashMessage, validAfter, validUntil]);
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
    public static signPackedHash(packedHash: string, privateKey: string): string {
        if (packedHash.length !== 66) {
            throw new Error("hash must be 66 characters long");
        }
        const messageHex = Buffer.from(ethers.utils.arrayify(packedHash));
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
    public static packedSignWithTimeRange(
        signature: string,
        validAfter = 0,
        validUntil = 0) {
        return defaultAbiCoder.encode(['bytes', 'uint48', 'uint48'], [signature, validAfter, validUntil]);
    }

}