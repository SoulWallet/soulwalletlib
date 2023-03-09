/**
 * fork from:
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/test/UserOp.ts
 */
import { UserOperation } from '../entity/userOperation';
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
    static payMasterSignHash(op: UserOperation): string;
}
