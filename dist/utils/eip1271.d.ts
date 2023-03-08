export declare class EIP1271 {
    /**
     * @description: pack hash(bytes32) message with time range
     * @static
     * @param {string} hashMessage
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @memberof EIP1271
     */
    static packHashMessageWithTimeRange(hash: string, signer: string, validAfter?: number, validUntil?: number): string;
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
    static encodeSignature(signer: string, signature: string, validAfter?: number, validUntil?: number): string;
}
