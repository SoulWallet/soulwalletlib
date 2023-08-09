import { Ok, Err, Result } from '@soulwallet/result';

export interface GuardianSignature {
    /**
     * 0:EIP-1271 signature, 1:approved onchain before, 2:EOA signature, 3:No signature provided
     *
     * @type {number}
     * @memberof GuardianSignature
     */
    signatureType: 0 | 1 | 2 | 3;

    /**
     * Guardian address
     *
     * @type {string}
     * @memberof GuardianSignature
     */
    address: string;

    /**
     * Signature
     *
     * @type {string}
     * @memberof GuardianSignature
     */
    signature?: string;
}

export interface KeyStoreInfo {
    /**
     * The address of the signer
     *
     * @type {string}
     * @memberof KeyStoreInfo
     */
    key: string;
    /**
     * The nonce of the slot
     *
     * @type {number}
     * @memberof KeyStoreInfo
     */
    nonce: number;
    /**
     * The hash of the 'raw guardian' of the slot
     *
     * @type {string}
     * @memberof KeyStoreInfo
     */
    guardianHash: string;
    /**
     * The hash of the 'raw pending guardian' of the slot
     *
     * @type {string}
     * @memberof KeyStoreInfo
     */
    pendingGuardianHash: string;

    /**
     * unix timestamp (second) of when the `pendingGuardianHash` is activated
     *
     * @type {number}
     * @memberof KeyStoreInfo
     */
    guardianActivateAt: number;

    /**
     * The safe period of the slot
     *
     * @type {number}
     * @memberof KeyStoreInfo
     */
    guardianSafePeriod: number;

    /**
     * new guardian safe period
     *
     * @type {number}
     * @memberof KeyStoreInfo
     */
    pendingGuardianSafePeriod: number;

    /**
     * unix timestamp (second) of when the `pendingGuardianSafePeriod` is activated
     *
     * @type {number}
     * @memberof KeyStoreInfo
     */
    guardianSafePeriodActivateAt: number;
}

/**
 * @interface IL1KeyStore
 * IL1KeyStore is a globally unique contract where each user determines their unique slot using the three fields: 
 * bytes32 initialKey, bytes32 initialGuardianHash, and uint64 initialGuardianSafePeriod.
 *
 * @abstract
 * @class IL1KeyStore
 */
export abstract class IL1KeyStore {
    /**
     *
     *
     * @abstract
     * @param {string} slot 
     * @return {*}  {Promise<Result<string, string>>} if return 0 address ,it means the slot is not set
     * @memberof IL1KeyStore
     */
    abstract getKey(slot: string): Promise<Result<string, Error>>;

    /**
     * get all slot info
     *
     * @abstract
     * @param {string} slot
     * @return {*}  {(Promise<Result<KeyStoreInfo, Error>>)}
     * @memberof IL1KeyStore
     */
    abstract getKeyStoreInfo(slot: string): Promise<Result<KeyStoreInfo, Error>>;

}