/**
 * fork from:
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/test/UserOp.ts
 */
import { UserOperation } from '../entity/userOperation';
export declare enum SignatureMode {
    owner = 0,
    guardian = 1
}
export declare class UserOp {
    constructor();
    private static encode;
    private static DefaultGasOverheads;
    /**
     * @description: pack user operation for call data
     *
     * @param {UserOperation} op
     * @return {*}  {Uint8Array}
     * @memberof UserOp
     */
    static packUserOpForCallData(op: UserOperation): string;
    static callDataCost(op: UserOperation): number;
    static packUserOp(op: UserOperation, forSignature?: boolean): string;
    static getUserOpHash(op: UserOperation, entryPointAddress: string, chainId: number): string;
    private static _signUserOp;
    static _signReuestId(userOpHash: string, privateKey: string): string;
    /**
     * sign a user operation with the given private key
     * @param op
     * @param entryPointAddress
     * @param chainId
     * @param privateKey
     * @returns signature
     */
    static signUserOp(op: UserOperation, entryPointAddress: string, chainId: number, privateKey: string): string;
    /**
     * sign a user operation with the UserOpHash signature
     * @param signAddress signer address
     * @param signature the signature of the UserOpHash
     * @param validAfter the signature is valid after this block time
     * @param validUntil the signature is valid until this block time
     * @returns signature
     */
    static signUserOpWithPersonalSign(signAddress: string, signature: string, validAfter?: number, validUntil?: number): string;
    static payMasterSignHash(op: UserOperation): string;
}
