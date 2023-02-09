import { UserOperation } from "../entity/userOperation";
import { ethers } from "ethers";
import { NumberLike } from "../defines/numberLike";
export declare class Guardian {
    private _singletonFactory;
    constructor(singletonFactory: string);
    private getInitializeData;
    private getGuardianCode;
    private getPackedInitCode;
    /**
     * sign a user operation with guardian signatures
     * @param signatures guardian signatures
     * @param guardianLogicAddress guardian logic contract address
     * @param guardians guardian addresses
     * @param threshold threshold
     * @param salt salt
     * @param guardianAddress guardian contract address,if provided will check if equal to the calculated guardian address
     * @returns signature
     */
    packGuardiansSign(deadline: number, signature: guardianSignature[], guardianLogicAddress: string, guardians: string[], threshold: number, salt: string, guardianAddress?: string): string;
    /**
     * sign a user operation with guardian signatures
     * @param guardianAddress guardian contract address
     * @param signatures guardian signatures
     * @param deadline deadline (block time), default 0
     * @param initCode intiCode must given when the guardian contract is not deployed
     * @returns
     */
    packGuardiansSignByInitCode(guardianAddress: string, signature: guardianSignature[], deadline?: number, initCode?: string): string;
    /**
     * calculate Guardian address and deploy code (initCode)
     * @param guardianLogicAddress guardian logic contract address
     * @param guardians guardian addresses
     * @param threshold threshold
     * @param salt salt
     * @param create2Factory create2 factory address
     * @returns
     */
    calculateGuardianAndInitCode(guardianLogicAddress: string, guardians: string[], threshold: number, salt: string): {
        address: string;
        initCode: string;
    };
    private walletContract;
    /**
     * get guardian info
     * @param etherProvider
     * @param walletAddress EIP4337 wallet address
     * @param now current timestamp ( 0: use current timestamp, >0:unix timestamp  )
     * @returns (currentGuardian, guardianDelay)
     */
    getGuardian(etherProvider: ethers.providers.BaseProvider, walletAddress: string, now?: number): Promise<{
        currentGuardian: string;
        nextGuardian: string;
        nextGuardianActivateTime: any;
        guardianDelay: number;
    } | null>;
    private _guardian;
    /**
     * set guardian
     * @param etherProvider
     * @param walletAddress EIP4337 wallet address
     * @param guardian new guardian address
     * @param nonce
     * @param entryPointAddress
     * @param paymasterAddress
     * @param maxFeePerGas
     * @param maxPriorityFeePerGas
     * @returns userOperation
     */
    setGuardian(etherProvider: ethers.providers.BaseProvider, walletAddress: string, guardian: string, nonce: number, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike): Promise<UserOperation | null>;
    transferOwner(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: number, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, newOwner: string): Promise<UserOperation | null>;
    guardianSign(signature: guardianSignature[]): string;
}
export interface guardianSignature {
    contract: boolean;
    address: string;
    signature: string;
}
