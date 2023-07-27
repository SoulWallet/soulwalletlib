import { Ok, Err, Result } from '@soulwallet/result';

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

}