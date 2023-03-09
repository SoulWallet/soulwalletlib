/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 23:29:49
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-08 15:12:11
 */

import { ethers } from "ethers";
import * as ethUtil from 'ethereumjs-util';
import { defaultAbiCoder } from "ethers/lib/utils";
import { Signatures, SignatureMode } from "./signatures";
import { AddressZero } from "../defines/address";

export class EIP1271 {

    /**
     * @description: pack hash(bytes32) message with time range
     * @static
     * @param {string} hashMessage
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @memberof EIP1271
     */
    public static packHashMessageWithTimeRange(
        hash: string,
        signer: string,
        validAfter: number = 0,
        validUntil: number = 0
    ) {
        if (hash.length !== 66) {
            throw new Error("hashMessage must be 66 characters long");
        }
        return Signatures.packSignatureHash(hash, signer, SignatureMode.owner, validAfter, validUntil);
    }

    /**
     * 
     *
     * @static
     * @param {string} signer
     * @param {string} signature
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @return {*} 
     * @memberof EIP1271
     */
    public static encodeSignature(
        signer: string,
        signature: string,
        validAfter: number = 0,
        validUntil: number = 0) {
        return Signatures.encodeSignature(SignatureMode.owner, signer, signature, validAfter, validUntil);
    }



}