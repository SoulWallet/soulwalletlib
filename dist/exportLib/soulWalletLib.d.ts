import { BytesLike } from "ethers/lib/utils";
import { UserOperation } from "../entity/userOperation";
import { IContract } from "../contracts/icontract";
import { DecodeCallData } from '../utils/decodeCallData';
import { Guardian } from "../utils/guardians";
import { ERC1155, ERC20, ERC721, ETH } from "../utils/tokens";
import { Bundler } from '../utils/bundler';
import { BigNumber, ContractInterface, ethers } from "ethers";
import { NumberLike } from "../defines/numberLike";
import { CodefiGasFees } from '../utils/gasFee';
import { TokenAndPaymaster } from '../utils/tokenAndPaymaster';
import { DeployFactory } from '../utils/deployFactory';
export declare class SoulWalletLib {
    /** @private */
    private _singletonFactory;
    /** @private */
    private _deployFactory;
    /**
     * @type {Object}
     */
    Utils: {
        getNonce: (walletAddress: string, etherProvider: ethers.providers.BaseProvider, defaultBlock?: string) => Promise<number>;
        DecodeCallData: typeof DecodeCallData;
        suggestedGasFee: typeof CodefiGasFees;
        tokenAndPaymaster: typeof TokenAndPaymaster;
        deployFactory: DeployFactory;
        fromTransaction: (etherProvider: ethers.providers.BaseProvider, entryPointAddress: string, transcations: import("../app").ITransaction[], nonce: NumberLike, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, paymasterAndData?: string) => Promise<UserOperation | null>;
    };
    /**
     * @type {Guardian}
     */
    Guardian: Guardian;
    /**
     * @constructor SoulWalletLib
     * @param {String?} singletonFactory the singletonFactory address
     * @returns {SoulWalletLib}
     */
    constructor(singletonFactory?: string);
    /**
     * get singletonFactory address
     * @returns {String} address
     */
    get singletonFactory(): string;
    /**
     *
     */
    static Defines: {
        AddressZero: string;
        SingletonFactoryAddress: string;
        bytes32_zero: string;
    };
    Bundler: typeof Bundler;
    Tokens: {
        ERC1155: ERC1155;
        ERC20: ERC20;
        ERC721: ERC721;
        ETH: ETH;
    };
    /**
     * get initialize data
     * @param {String} entryPointAddress  the entryPoint address
     * @param {String} ownerAddress the owner address
     * @param {Number} upgradeDelay the upgrade delay time
     * @param {Number} guardianDelay the guardian delay time
     * @param {String} guardianAddress the guardian contract address
     * @returns {String} inithex
     */
    private getInitializeData;
    /**
     * get wallet code
     *
     * @param {string} walletLogicAddress the wallet logic contract address
     * @param {string} entryPointAddress the entryPoint contract address
     * @param {string} ownerAddress the owner address
     * @param {number} upgradeDelay the upgrade delay time
     * @param {number} guardianDelay the guardian delay time
     * @param {string} guardianAddress the guardian contract address
     * @param {({
     *             contractInterface: ContractInterface,
     *             bytecode: BytesLike | { object: string }
     *         })} [walletProxyConfig] the wallet proxy config
     * @return {*}  {string}
     * @memberof SoulWalletLib
     */
    getWalletCode(walletLogicAddress: string, entryPointAddress: string, ownerAddress: string, upgradeDelay: number, guardianDelay: number, guardianAddress: string, walletProxyConfig?: {
        contractInterface: ContractInterface;
        bytecode: BytesLike | {
            object: string;
        };
    }): string;
    /**
     * calculate wallet address by owner address
     * @param {String} walletLogicAddress the wallet logic contract address
     * @param {String} entryPointAddress the entryPoint address
     * @param {String} ownerAddress the owner address
     * @param {Number} upgradeDelay the upgrade delay time
     * @param {Number} guardianDelay the guardian delay time
     * @param {String} guardianAddress the guardian contract address
     * @param {Number?} salt the salt number,default is 0
     * @param {String?} singletonFactory the singletonFactory address,default is SingletonFactoryAddress
     * @param {Object?} walletProxyConfig the wallet proxy config
     * @returns {String} the wallet address
     */
    calculateWalletAddress(walletLogicAddress: string, entryPointAddress: string, ownerAddress: string, upgradeDelay: number, guardianDelay: number, guardianAddress: string, salt?: number, singletonFactory?: string, walletProxyConfig?: {
        contractInterface: ContractInterface;
        bytecode: BytesLike | {
            object: string;
        };
    }): string;
    /**
     * get the userOperation for active (first time) the wallet
     * @param {String} walletLogicAddress the wallet logic contract address
     * @param {String} entryPointAddress the entryPoint address
     * @param {String} ownerAddress the owner address
     * @param {Number} upgradeDelay the upgrade delay time
     * @param {Number} guardianDelay the guardian delay time
     * @param {String} guardianAddress the guardian contract address
     * @param {String} paymasterAndData the paymaster address and data
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {Number?} salt the salt number,default is 0
     * @param {String?} walletFactory the walletFactory contract address
     * @param {String?} singletonFactory the singletonFactory contract address
     * @param {Object?} walletProxyConfig the walletProxyConfig
     * @returns {UserOperation} the userOperation
     */
    activateWalletOp(walletLogicAddress: string, entryPointAddress: string, ownerAddress: string, upgradeDelay: number, guardianDelay: number, guardianAddress: string, paymasterAndData: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, salt?: number, walletFactory?: string, singletonFactory?: string, walletProxyConfig?: {
        contractInterface: ContractInterface;
        bytecode: BytesLike | {
            object: string;
        };
    }): UserOperation;
    private getPackedInitCodeUsingWalletFactory;
    /**
     * check if the token is supported by paymaster
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String} payMasterAddress paymaster contract address
     * @param {String[]} tokens token address list
     * @returns {String[]} supported token address list
     */
    paymasterSupportedToken(etherProvider: ethers.providers.BaseProvider, payMasterAddress: string, tokens: string[]): Promise<string[]>;
    /**
     * get paymaster exchange price
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String} payMasterAddress paymaster contract address
     * @param {String} token token address
     * @param {Boolean?} fetchTokenDecimals fetch token decimals or not
     * @returns {Object} exchange price
     */
    getPaymasterExchangePrice(etherProvider: ethers.providers.BaseProvider, payMasterAddress: string, token: string, fetchTokenDecimals?: boolean): Promise<{
        price: BigNumber;
        decimals: number;
        tokenDecimals: number | undefined;
    }>;
    /**
     * get paymaster data
     * @param {String} payMasterAddress paymaster contract address
     * @param {String} token token address
     * @param {BigNumber} maxCost token max cost
     * @returns {String} paymasterAndData(hex string)
     */
    getPaymasterData(payMasterAddress: string, token: string, maxCost: BigNumber): string;
    /**
     * calculate wallet address
     * @param {IContract} initContract the init Contract
     * @param {any[] | undefined} initArgs the init args
     * @param {Number} salt the salt number
     * @returns {String} wallet address
     */
    calculateWalletAddressByCode(initContract: IContract, initArgs: any[] | undefined, salt: number): string;
    /**
     * convert number to bytes32
     * @param {Number?} num the number
     * @returns {String} bytes32
     */
    number2Bytes32(num?: number): string;
    /**
     * calculate wallet address
     * @param {String} initCodeHash the init code after keccak256
     * @param {Number?} salt the salt number
     * @param {String?} singletonFactory the singleton factory address
     * @returns {String} the wallet address
     */
    private calculateWalletAddressByCodeHash;
    /**
     * get nonce number from contract wallet
     * @param {string} walletAddress same as userOperation.sender
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String?} defaultBlock "earliest", "latest" and "pending"
     * @returns {Number} the next nonce number
     */
    private getNonce;
}
export { UserOperation } from "../entity/userOperation";
