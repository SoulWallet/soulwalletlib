import { UserOperation } from "./UserOperation.js";
import { UserOpErrors } from "./IUserOpErrors.js";
import { Ok, Err, Result } from '@soulwallet/result';

/**
 * Transaction is the interface for the transaction.
 *
 * @export
 * @interface Transaction
 */
export interface Transaction {
    to: string;
    value?: string;
    data?: string;
    gasLimit?: string;
}

/**
 * 
 *
 * @export
 * @abstract
 * @class ISoulWallet
 */
export abstract class ISoulWallet {

    /**
     * get entryPoint address from the soulWallet contract.
     *
     * @abstract
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof ISoulWallet
     */
    abstract entryPoint(): Promise<Result<string, Error>>;

    /**
     * calcuate the wallet address from the index, initialKey and initialGuardianHash.
     *
     * @abstract
     * @param {number} index
     * @param {string} initialKey
     * @param {string} initialGuardianHash
     * @param {number} [initialGuardianSafePeriod]
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof ISoulWallet
     */
    abstract calcWalletAddress(
        index: number,
        initialKey: string,
        initialGuardianHash: string,
        initialGuardianSafePeriod?: number
    ): Promise<Result<string, Error>>;


    /**
     * create unsigned deploy wallet UserOp.
     *
     * @abstract
     * @param {number} index
     * @param {string} initialKey
     * @param {string} initialGuardianHash
     * @param {string} [callData]
     * @param {number} [initialGuardianSafePeriod]
     * @return {*}  {Promise<Result<UserOperation, Error>>}
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
     * get userOpHash from the userOp.
     *
     * @abstract
     * @param {UserOperation} userOp
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof ISoulWallet
     */
    abstract userOpHash(userOp: UserOperation): Promise<Result<string, Error>>;

    /**
     * get packed userOpHash from the userOp.
     *
     * @abstract
     * @param {UserOperation} userOp
     * @param {number} [validAfter]
     * @param {number} [validUntil]
     * @return {*}  {Promise<
     *         Result<{
     *             packedUserOpHash: string,
     *             validationData: string
     *         }, Error>
     *     >}
     * @memberof ISoulWallet
     */
    abstract packUserOpHash(userOp: UserOperation, validAfter?: number, validUntil?: number): Promise<
        Result<{
            packedUserOpHash: string,
            validationData: string
        }, Error>
    >;
 
    /**
     * pack userOp signature.
     *
     * @abstract
     * @param {string} signature EOA signature
     * @param {string} validationData validation data
     * @param {GuardHookInputData} [guardHookInputData] sender: wallet address, inputData: key: guardHookPlugin address, value: input data
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof ISoulWallet
     */
    abstract packUserOpSignature(signature: string, validationData: string, guardHookInputData?: GuardHookInputData): Promise<Result<string, Error>>;
 

    /**
     * Estimate the gas for userOp and fill it into the userOp.
     *
     * @abstract
     * @param {UserOperation} userOp UserOperation
     * @param {GuardHookInputData} [semiValidGuardHookInputData]  sender: wallet address, inputData: key: guardHookPlugin address, value: input data
     * @return {*}  {Promise<Result<true, UserOpErrors>>}
     * @memberof ISoulWallet
     */
    abstract estimateUserOperationGas(userOp: UserOperation, semiValidGuardHookInputData?: GuardHookInputData): Promise<Result<true, UserOpErrors>>;

    /**
     * broadcast the userOp.
     *
     * @abstract
     * @param {UserOperation} userOp
     * @return {*}  {Promise<Result<true, UserOpErrors>>}
     * @memberof ISoulWallet
     */
    abstract sendUserOperation(userOp: UserOperation): Promise<Result<true, UserOpErrors>>;


    /**
     * get wallet prefund.
     *
     * @abstract
     * @param {UserOperation} userOp UserOperation
     * @return {*}  {Promise<Result<{
     *         deposit: string,
     *         prefund: string,
     *         missfund: string
     *     }, Error>>} hex string, unit: wei
     * @memberof ISoulWallet
     */
    abstract preFund(userOp: UserOperation): Promise<Result<{
        deposit: string,
        prefund: string,
        missfund: string
    }, Error>>;

    /**
     * convert the transactions to unsigned userOp.
     *
     * @abstract
     * @param {string} maxFeePerGas hex string, unit: wei
     * @param {string} maxPriorityFeePerGas hex string, unit: wei
     * @param {string} from wallet address
     * @param {Transaction[]} txs transactions
     * @param {string} [nonceKey] default: "0x0"
     * @return {*}  {Promise<Result<UserOperation, Error>>}
     * @memberof ISoulWallet
     */
    abstract fromTransaction(maxFeePerGas: string, maxPriorityFeePerGas: string, from: string, txs: Transaction[], nonceKey?: string): Promise<Result<UserOperation, Error>>;
 

    /**
     * get the nonce from the wallet.
     *
     * @abstract
     * @param {string} walletAddr wallet address
     * @param {string} [key] default: "0x0"
     * @return {*}  {Promise<Result<string, Error>>} hex string
     * @memberof ISoulWallet
     */
    abstract getNonce(walletAddr: string, key?: string): Promise<Result<string, Error>>;

}


/**
 * GuardHookInputData is the input data for the guardHook.
 *
 * @export
 * @class GuardHookInputData
 */
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
