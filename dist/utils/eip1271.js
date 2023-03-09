"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 23:29:49
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-08 15:12:11
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EIP1271 = void 0;
const signatures_1 = require("./signatures");
class EIP1271 {
    /**
     * @description: pack hash(bytes32) message with time range
     * @static
     * @param {string} hashMessage
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @memberof EIP1271
     */
    static packHashMessageWithTimeRange(hash, signer, validAfter = 0, validUntil = 0) {
        if (hash.length !== 66) {
            throw new Error("hashMessage must be 66 characters long");
        }
        return signatures_1.Signatures.packSignatureHash(hash, signer, signatures_1.SignatureMode.owner, validAfter, validUntil);
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
    static encodeSignature(signer, signature, validAfter = 0, validUntil = 0) {
        return signatures_1.Signatures.encodeSignature(signatures_1.SignatureMode.owner, signer, signature, validAfter, validUntil);
    }
}
exports.EIP1271 = EIP1271;
//# sourceMappingURL=eip1271.js.map