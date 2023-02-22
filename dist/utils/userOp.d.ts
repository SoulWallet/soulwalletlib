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
    private encode;
    private DefaultGasOverheads;
    callDataCost(op: UserOperation): number;
    packUserOp(op: UserOperation, forSignature?: boolean): string;
    getUserOpHash(op: UserOperation, entryPointAddress: string, chainId: number): string;
    private _signUserOp;
    _signReuestId(userOpHash: string, privateKey: string): string;
    /**
     * sign a user operation with the given private key
     * @param op
     * @param entryPointAddress
     * @param chainId
     * @param privateKey
     * @returns signature
     */
    signUserOp(op: UserOperation, entryPointAddress: string, chainId: number, privateKey: string): string;
    /**
     * sign a user operation with the UserOpHash signature
     * @param signAddress signer address
     * @param signature the signature of the UserOpHash
     * @param deadline deadline (block time), default 0
     * @returns signature
     */
    signUserOpWithPersonalSign(signAddress: string, signature: string, deadline?: number): string;
    payMasterSignHash(op: UserOperation): string;
}
