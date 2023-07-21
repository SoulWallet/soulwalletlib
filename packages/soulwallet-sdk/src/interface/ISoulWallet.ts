import { UserOperationStruct } from "@account-abstraction/contracts";
import { NotPromise } from '@account-abstraction/utils'
export type UserOperation = NotPromise<UserOperationStruct>;
import { UserOpErrors } from "./IUserOpErrors.js";
import { Ok, Err, Result } from '../../../soulwallet-result/lib/main.js';

export interface Transaction {
    to: string;
    value?: string;
    data?: string;
    gasLimit?: string;
}

export abstract class ISoulWallet {

    /**
     *
     *
     * @abstract
     * @return {*}  {Promise<string>}
     * @memberof ISoulWallet
     */
    abstract entryPoint(): Promise<Result<string, Error>>;

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
    ): Promise<Result<string, Error>>;


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
    ): Promise<Result<UserOperation, Error>>;

    /**
     *
     *
     * @abstract
     * @param {UserOperationStruct} userOp
     * @return {*}  {string}
     * @memberof ISoulWallet
     */
    abstract userOpHash(userOp: UserOperation): Promise<Result<string, Error>>;

    /**
     *
     *
     * @abstract
     * @param {UserOperation} userOp 
     * @param {number} [validAfter] 
     * @param {number} [validUntil]
     * @return {*}  {Promise<{
     *         packedUserOpHash: string,
     *         validationData: string
     *     }>}
     * @memberof ISoulWallet
     */
    abstract packUserOpHash(userOp: UserOperation, validAfter?: number, validUntil?: number): Promise<
        Result<{
            packedUserOpHash: string,
            validationData: string
        }, Error>
    >;

    /**
     *
     *
     * @abstract
     * @param {string} signature EOA signature
     * @param {string} [validationData] validation data
     * @param {GuardHookInputData} [guardHookInputData] sender: wallet address, inputData: key: guardHookPlugin address, value: input data
     * @return {*}  {Promise<string>} packed signature
     * @memberof ISoulWallet
     */
    abstract packUserOpSignature(signature: string, validationData: string, guardHookInputData?: GuardHookInputData): Promise<Result<string, Error>>;

    /**
     * Estimate the gas for userOp and fill it into the userOp.
     *
     * @abstract
     * @param {UserOperation} userOp
     * @param {GuardHookInputData} [semiValidGuardHookInputData]
     * @return {*}  {Promise<Result<true, UserOpErrors>>}
     * @memberof ISoulWallet
     */
    abstract estimateUserOperationGas(userOp: UserOperation, semiValidGuardHookInputData?: GuardHookInputData): Promise<Result<true, UserOpErrors>>;

    /**
     *
     *
     * @abstract
     * @param {UserOperation} userOp
     * @return {*}  {(Promise<UserOpErrors | undefined>)}
     * @memberof ISoulWallet
     */
    abstract sendUserOperation(userOp: UserOperation): Promise<Result<true, UserOpErrors>>;


    /**
     *
     *
     * @abstract
     * @param {UserOperation} userOp
     * @return {*}  {Promise<{
     *         deposit: string,
     *         prefund: string,
     *         missfund: string
     *     }>} hex string, unit: wei
     * @memberof ISoulWallet
     */
    abstract preFund(userOp: UserOperation): Promise<Result<{
        deposit: string,
        prefund: string,
        missfund: string
    }, Error>>;

    /**
     *
     *
     * @abstract
     * @param {string} maxFeePerGas
     * @param {string} maxPriorityFeePerGas
     * @param {string} from
     * @param {Transaction[]} txs
     * @param {string} [nonceKey]
     * @return {*}  {Promise<Result<UserOperation, any>>}
     * @memberof ISoulWallet
     */
    abstract fromTransaction(maxFeePerGas: string, maxPriorityFeePerGas: string, from: string, txs: Transaction[], nonceKey?: string): Promise<Result<UserOperation, Error>>;


    /**
     *
     *
     * @abstract
     * @param {string} walletAddr
     * @param {string} [key] default: "0x0"
     * @return {*}  {Promise<Result<string, string>>}
     * @memberof ISoulWallet
     */
    abstract getNonce(walletAddr: string, key?: string): Promise<Result<string, Error>>;

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
