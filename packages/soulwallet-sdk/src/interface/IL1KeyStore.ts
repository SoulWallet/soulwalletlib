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
     * @param {string[]} guardians EOA/Smart contract address array (auto sort)
     * @param {number} threshold
     * @param {string} salt hex string,default is 0x
     * @return {*}  {string} keccak256 hash of the guardian set
     * @memberof IL1KeyStore
     */
    abstract calcGuardianHash(guardians: string[], threshold: number, salt: string): string;

    /**
     *
     *
     * @abstract
     * @param {string} slot
     * @return {*}  {Promise<string>} if return 0 address ,it means the slot is not set
     * @memberof IL1KeyStore
     */
    abstract getKey(slot: string): Promise<string>;



}