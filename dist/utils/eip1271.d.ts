export declare class EIP1271 {
    /**
     * @description: pack hash message with time range
     * @static
     * @param {string} hashMessage
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @memberof EIP1271
     */
    static packHashMessageWithTimeRange(hashMessage: string, validAfter?: number, validUntil?: number): string;
    /**
     * sign packed hash message [DEV ONLY]
     *
     * @static
     * @param {string} packedHash
     * @param {string} privateKey
     * @return {*}  {string}
     * @memberof EIP1271
     */
    static signPackedHash(packedHash: string, privateKey: string): string;
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
    static packedSignWithTimeRange(signature: string, validAfter?: number, validUntil?: number): string;
}
