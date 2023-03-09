import { BigNumber } from "ethers";
/**
 *
 *
 * @export
 * @enum {number}
 */
export declare enum SignatureMode {
    owner = 0,
    guardian = 1
}
export declare class Signatures {
    /**
     *
     *
     * @static
     * @param {string} hash
     * @param {SignatureMode} signatureMode
     * @param {string} signer
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @param {string} [aggregator=AddressZero]
     * @return {*}
     * @memberof Signatures
     */
    static packSignatureHash(hash: string, signer: string, signatureMode?: SignatureMode, validAfter?: number, validUntil?: number, aggregator?: string): string;
    /**
     *
     *
     * @static
     * @param {SignatureMode} signatureMode
     * @param {string} signer
     * @param {string} signature
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @param {string} [aggregator=AddressZero]
     * @return {*}
     * @memberof Signatures
     */
    static encodeSignature(signatureMode: SignatureMode, signer: string, signature: string, validAfter?: number, validUntil?: number, aggregator?: string): string;
    /**
     *
     *
     * @static
     * @param {string} packedSignature
     * @return {*}
     * @memberof Signatures
     */
    static decodeSignature(packedSignature: string): {
        signatureMode: BigNumber;
        signer: string;
        signature: string;
        validationData: BigNumber;
        aggregator: string;
        validAfter: BigNumber;
        validUntil: BigNumber;
    };
}
