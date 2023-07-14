import { UserOperationStruct } from "@account-abstraction/contracts";
import { NotPromise } from '@account-abstraction/utils'
export type UserOperation = NotPromise<UserOperationStruct>;

export abstract class ISoulWallet {

    /**
     *
     *
     * @abstract
     * @param {number} index
     * @param {string} initialKey {address}
     * @param {string} initialGuardianHash
     * @param {number} [initialGuardianSafePeriod]
     * @return {*}  {Promise<string>}
     * @memberof ISoulWallet
     */
    abstract calcWalletAddress(
        index: number,
        initialKey: string,
        initialGuardianHash: string,
        initialGuardianSafePeriod?: number
    ): Promise<string>;


    /**
     *
     *
     * @abstract
     * @param {number} index
     * @param {string} initialKey {address}
     * @param {string} initialGuardianHash
     * @param {string} [calldata]
     * @param {number} [initialGuardianSafePeriod]
     * @return {*}  {Promise<UserOperationStruct>}
     * @memberof ISoulWallet
     */
    abstract createUnsignedDeployWalletUserOp(
        index: number,
        initialKey: string,
        initialGuardianHash: string,
        callData?: string,
        initialGuardianSafePeriod?: number
    ): Promise<UserOperation>;

    /**
     *
     *
     * @abstract
     * @param {UserOperationStruct} userOp
     * @return {*}  {string}
     * @memberof ISoulWallet
     */
    abstract getUserOpHash(userOp: UserOperation): Promise<string>;

    /**
     *
     *
     * @abstract
     * @param {string} signature EOA signature
     * @param {number} [signatureValidPeriod] in seconds, default: ∞
     * @param {GuardHookInputData} [guardHookInputData] sender: wallet address, inputData: key: guardHookPlugin address, value: input data
     * @return {*}  {Promise<string>} packed signature
     * @memberof ISoulWallet
     */
    abstract packUserOpSignature(signature: string, signatureValidPeriod?: number, guardHookInputData?: GuardHookInputData): Promise<string>;
    
    /**
     *
     *
     * @abstract
     * @param {UserOperation} userOp
     * @return {*}  {Promise<void>}
     * @memberof ISoulWallet
     */
    abstract estimateUserOperationGas(userOp: UserOperation): Promise<void>;
}


export class GuardHookInputData {

    /**
     * 
     *
     * @type {string} wallet address
     * @memberof GuardHookInputData
     */
    sender: string = "";
    /**
     *
     *
     * @type {Record<string, string>} key: guardHook address, value: input data
     * @memberof GuardHookInputData
     */
    inputData: Record<string, string> = {};
}
