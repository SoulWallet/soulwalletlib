import { ethers, BigNumber } from "ethers";
import { NumberLike } from "../defines/numberLike";
import { SignatureMode } from "../utils/signatures";
import { IUserOperation } from "../interface/IUserOperation";
/**
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/UserOperation.sol
 */
/**
 * @class UserOperation
 * @description UserOperation class
 * @example
 * const userOperation = new UserOperation();
 * @property {String} sender the sender address
 * @property {NumberLike} nonce the nonce
 * @property {String} initCode the initCode
 * @property {String} callData the callData
 * @property {String} preVerificationGas the preVerificationGas
 * @property {String} verificationGasLimit the verificationGasLimit
 * @property {String} maxFeePerGas the maxFeePerGas
 * @property {String} maxPriorityFeePerGas the maxPriorityFeePerGas
 * @property {String} paymasterAndData the paymasterAndData
 * @property {String} signature the signature
 */
declare class UserOperation {
    /**
     * Creates an instance of UserOperation.
     * @param {string} [sender='']
     * @param {NumberLike} [nonce=0]
     * @param {string} [initCode='0x']
     * @param {string} [callData='0x']
     * @param {NumberLike} [callGasLimit=0]
     * @param {NumberLike} [maxFeePerGas=0]
     * @param {NumberLike} [maxPriorityFeePerGas=0]
     * @param {string} [paymasterAndData='0x']
     * @param {NumberLike} [verificationGasLimit=0]
     * @param {NumberLike} [preVerificationGas=0]
     * @param {string} [signature='0x']
     * @memberof UserOperation
     */
    constructor(sender?: string, nonce?: NumberLike, initCode?: string, callData?: string, callGasLimit?: NumberLike, maxFeePerGas?: NumberLike, maxPriorityFeePerGas?: NumberLike, paymasterAndData?: string, verificationGasLimit?: NumberLike, preVerificationGas?: NumberLike, signature?: string);
    private _sender;
    get sender(): string;
    set sender(value: string);
    private _nonce;
    get nonce(): NumberLike;
    set nonce(value: NumberLike);
    private _initCode;
    get initCode(): string;
    set initCode(value: string);
    private _callData;
    get callData(): string;
    set callData(value: string);
    private _callGasLimit;
    get callGasLimit(): NumberLike;
    set callGasLimit(value: NumberLike);
    private _verificationGasLimit;
    get verificationGasLimit(): NumberLike;
    set verificationGasLimit(value: NumberLike);
    private _preVerificationGas;
    get preVerificationGas(): NumberLike;
    set preVerificationGas(value: NumberLike);
    private _maxFeePerGas;
    get maxFeePerGas(): NumberLike;
    set maxFeePerGas(value: NumberLike);
    private _maxPriorityFeePerGas;
    get maxPriorityFeePerGas(): NumberLike;
    set maxPriorityFeePerGas(value: NumberLike);
    private _paymasterAndData;
    get paymasterAndData(): string;
    set paymasterAndData(value: string);
    private _signature;
    get signature(): string;
    set signature(value: string);
    /**
     * @description convert to userOperation tuple string
     * @returns {string} the userOperation tuple string
     */
    toTuple(): string;
    /**
     * @description convert to userOperation struct
     * @returns {object} the userOperation struct
     */
    getStruct(): IUserOperation;
    /**
     * @description convert NumberLike property to hex string
     * @returns {void}
     */
    alignment(): void;
    /**
     * @description convert to userOperation json string
     * @returns {string} the userOperation json string
     */
    toJSON(): string;
    /**
     * @description convert from userOperation json string
     * @param {string} json the userOperation json string
     * @returns {UserOperation} the userOperation object
     */
    static fromJSON(json: string): UserOperation;
    /**
     * @description convert from userOperation object
     * @param {object} obj the userOperation object
     * @returns {UserOperation} the userOperation object
     */
    static fromObject(obj: any): UserOperation;
    /**
     *
     *
     * @return {*}  {string}
     * @memberof UserOperation
     */
    getSemiValidSign(): string;
    /**
     * @description get the paymaster sign hash
     * @returns {string} the paymaster sign hash
     */
    payMasterSignHash(): string;
    /**
     *
     *
     * @param {string} signer
     * @param {string} signature
     * @param {SignatureMode} [signatureMode=SignatureMode.owner]
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @memberof UserOperation
     */
    signWithSignature(signer: string, signature: string, signatureMode?: SignatureMode, validAfter?: number, validUntil?: number): void;
    /**
    * @description get the UserOpHash (userOp hash)
    * @param {string} entryPointAddress the entry point address
    * @param {number} chainId the chain id
    * @returns {string} the UserOpHash (userOp hash)
    */
    getUserOpHash(entryPointAddress: string, chainId: number): string;
    /**
     * get the UserOp Hash to be signed (packed UserOpHash with with time range)
     *
     * @param {string} entryPointAddress
     * @param {number} chainId
     * @param {string} signer
     * @param {SignatureMode} [signatureMode=SignatureMode.owner]
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @return {*}  {string}
     * @memberof UserOperation
     */
    getUserOpHashWithTimeRange(entryPointAddress: string, chainId: number, signer: string, signatureMode?: SignatureMode, validAfter?: number, validUntil?: number): string;
    /**
     *
     *
     * @return {*}  {BigNumber}
     * @memberof UserOperation
     */
    requiredGas(): BigNumber;
    /**
     * get the required prefund
     *
     * @param {ethers.providers.BaseProvider} provider
     * @param {string} [entryPoint]
     * @return {*}
     * @memberof UserOperation
     */
    requiredPrefund(provider?: ethers.providers.BaseProvider, entryPoint?: string): Promise<{
        requiredPrefund: BigNumber;
        requiredGas: BigNumber;
        deposit: BigNumber;
    }>;
}
export { UserOperation };
