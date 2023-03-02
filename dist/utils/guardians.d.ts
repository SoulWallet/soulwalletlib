import { UserOperation } from "../entity/userOperation";
import { ethers } from "ethers";
import { NumberLike } from "../defines/numberLike";
/**
 * guardian class
 * @class Guardian
 */
export declare class Guardian {
    private _singletonFactory;
    /**
     * Creates an instance of Guardian.
     * @param {string} singletonFactory singleton factory address
     * @constructor
     * @returns {Guardian}
     */
    constructor(singletonFactory: string);
    private getInitializeData;
    private getGuardianCode;
    private getPackedInitCode;
    /**
     * sign a user operation with guardian signatures
     * @param {Number} validAfter valid after (block time)
     * @param {Number} validUntil valid until (block time)
     * @param {guardianSignature[]} signatures guardian signatures
     * @param {string} guardianLogicAddress guardian logic contract address
     * @param {string[]} guardians guardian addresses
     * @param {Number} threshold threshold
     * @param {string} salt salt
     * @param {string} [guardianAddress] guardian contract address,if provided will check if equal to the calculated guardian address
     * @returns {string} signature
     */
    packGuardiansSign(validAfter: number, validUntil: number, signature: guardianSignature[], guardianLogicAddress: string, guardians: string[], threshold: number, salt: string, guardianAddress?: string): string;
    /**
     * sign a user operation with guardian signatures
     * @param {String} guardianAddress guardian contract address
     * @param {guardianSignature[]} signatures guardian signatures
     * @param {String} [initCode='0x'] intiCode must given when the guardian contract is not deployed
     * @param {Number} validAfter valid after (block time)
     * @param {Number} validUntil valid until (block time)
     * @returns {String} signature
     */
    packGuardiansSignByInitCode(guardianAddress: string, signature: guardianSignature[], initCode?: string, validAfter?: number, validUntil?: number): string;
    /**
     * calculate Guardian address and deploy code (initCode)
     * @param {String} guardianLogicAddress guardian logic contract address
     * @param {String[]} guardians guardian addresses
     * @param {Number} threshold threshold
     * @param {String} salt salt
     * @returns {String,String} address is the guardian contract address,initCode is the deploy code
     */
    calculateGuardianAndInitCode(guardianLogicAddress: string, guardians: string[], threshold: number, salt: string): {
        address: string;
        initCode: string;
    };
    private walletContract;
    /**
     * get guardian info
     * @param {ethers.providers.BaseProvider} etherProvider
     * @param {String} walletAddress  wallet address
     * @param {Number} [now=0] current timestamp ( 0: use current timestamp, >0:unix timestamp  )
     * @returns {Promise<{currentGuardian:String,guardianDelay:Number}>} (currentGuardian, guardianDelay)
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
     * @param {ethers.providers.BaseProvider} etherProvider
     * @param {String} walletAddress wallet address
     * @param {String} guardian new guardian address
     * @param {Number} nonce nonce
     * @param {String} entryPointAddress entry point address
     * @param {String} paymasterAddress paymaster address
     * @param {Number} maxFeePerGas max fee per gas
     * @param {Number} maxPriorityFeePerGas max priority fee per gas
     * @returns {Promise<UserOperation>} userOperation
     */
    setGuardian(etherProvider: ethers.providers.BaseProvider, walletAddress: string, guardian: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike): Promise<UserOperation | null>;
    /**
     * transfer owner
     * @param {ethers.providers.BaseProvider} etherProvider
     * @param {String} walletAddress wallet address
     * @param {Number} nonce nonce
     * @param {String} entryPointAddress entry point address
     * @param {String} paymasterAddress paymaster address
     * @param {Number} maxFeePerGas max fee per gas
     * @param {Number} maxPriorityFeePerGas max priority fee per gas
     * @param {String} newOwner new owner address
     * @returns {Promise<UserOperation>} userOperation
     */
    transferOwner(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, newOwner: string): Promise<UserOperation | null>;
    /**
     * pack guardian signature
     * @param {guardianSignature[]} signature
     * @returns {String} packed signature
     */
    guardianSign(signature: guardianSignature[]): string;
}
/**
 * guardian signature
 * @interface guardianSignature
 * @property {boolean} contract is contract wallet
 * @property {string} address guardian address
 * @property {string} signature guardian signature
 */
export interface guardianSignature {
    contract: boolean;
    address: string;
    signature: string;
}
