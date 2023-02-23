import { ethers, BigNumber } from "ethers";
import { NumberLike } from "../defines/numberLike";
/**
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/UserOperation.sol
 */
declare class UserOperation {
    private _userOp;
    constructor();
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
    toTuple(): string;
    getStruct(): {
        sender: string;
        nonce: NumberLike;
        initCode: string;
        callData: string;
        callGasLimit: NumberLike;
        verificationGasLimit: NumberLike;
        preVerificationGas: NumberLike;
        maxFeePerGas: NumberLike;
        maxPriorityFeePerGas: NumberLike;
        paymasterAndData: string;
        signature: string;
    };
    alignment(): void;
    toJSON(): string;
    static fromJSON(json: string): UserOperation;
    static fromObject(obj: any): UserOperation;
    private calcGas;
    /**
     * estimate the gas
     * @param entryPointAddress the entry point address
     * @param estimateGasFunc the estimate gas function
     * @returns false if failed
     */
    estimateGas(entryPointAddress: string, etherProvider: ethers.providers.BaseProvider): Promise<boolean>;
    /**
     * get the paymaster sign hash
     * @returns
     */
    payMasterSignHash(): string;
    /**
     * sign the user operation
     * @param entryPoint the entry point address
     * @param chainId the chain id
     * @param privateKey the private key
     */
    sign(entryPoint: string, chainId: number, privateKey: string): void;
    /**
     * sign the user operation with personal sign
     * @param signAddress the sign address
     * @param signature the signature of the UserOpHash
     */
    signWithSignature(signAddress: string, signature: string): void;
    /**
     * get the UserOpHash (userOp hash)
     * @param entryPointAddress the entry point address
     * @param chainId the chain id
     * @returns hex string
     */
    getUserOpHash(entryPointAddress: string, chainId: number): string;
    /**
     * get the UserOpHash (userOp hash) with deadline
     * @param entryPointAddress
     * @param chainId
     * @param deadline unix timestamp
     * @returns bytes32 hash
     */
    getUserOpHashWithDeadline(entryPointAddress: string, chainId: number, deadline: number): string;
    /**
     * get required pre fund
     * @param basefee for EIP1559, the basefee
     * @returns required pre fund
     */
    requiredPrefund(basefee?: BigNumber | NumberLike): BigNumber;
}
export { UserOperation };
