import { BytesLike } from "ethers/lib/utils";
import { UserOperation } from "../entity/userOperation";
import { IContract } from "../contracts/icontract";
import { DecodeCallData } from '../utils/decodeCallData';
import { Guardian } from "../utils/guardians";
import { ERC1155, ERC20, ERC721, ETH } from "../utils/token";
import { Bundler } from '../utils/bundler';
import { BigNumber, ContractInterface, ethers } from "ethers";
import { NumberLike } from "../defines/numberLike";
import { CodefiGasFees } from '../utils/gasFee';
import { TokenAndPaymaster } from '../utils/tokenAndPaymaster';
import { DeployFactory } from '../utils/deployFactory';
export declare class SoulWalletLib {
    private _singletonFactory;
    private _deployFactory;
    Utils: {
        getNonce: (walletAddress: string, etherProvider: ethers.providers.BaseProvider, defaultBlock?: string) => Promise<number>;
        DecodeCallData: typeof DecodeCallData;
        suggestedGasFee: typeof CodefiGasFees;
        tokenAndPaymaster: typeof TokenAndPaymaster;
        deployFactory: DeployFactory;
        fromTransaction: (transcations: import("../utils/converter").ITransaction[], nonce?: NumberLike, maxFeePerGas?: NumberLike, maxPriorityFeePerGas?: NumberLike, paymasterAndData?: string) => Promise<UserOperation | null>;
    };
    Guardian: Guardian;
    constructor(singletonFactory?: string);
    get singletonFactory(): string;
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
     *
     * @param entryPointAddress the entryPoint address
     * @param ownerAddress the owner address
     * @param upgradeDelay the upgrade delay time
     * @param guardianDelay the guardian delay time
     * @param guardianAddress the guardian contract address
     * @returns inithex
     */
    private getInitializeData;
    /**
     * get wallet code
     * @param walletLogicAddress the wallet logic contract address
     * @param entryPointAddress the entryPoint address
     * @param ownerAddress the owner address
     * @param upgradeDelay the upgrade delay time
     * @param guardianDelay the guardian delay time
     * @param guardianAddress the guardian contract address
     * @returns the wallet code hex string
     */
    getWalletCode(walletLogicAddress: string, entryPointAddress: string, ownerAddress: string, upgradeDelay: number, guardianDelay: number, guardianAddress: string, walletProxyConfig?: {
        contractInterface: ContractInterface;
        bytecode: BytesLike | {
            object: string;
        };
    }): string;
    /**
     * calculate wallet address by owner address
     * @param walletLogicAddress the wallet logic contract address
     * @param entryPointAddress the entryPoint address
     * @param ownerAddress the owner address
     * @param upgradeDelay the upgrade delay time
     * @param guardianDelay the guardian delay time
     * @param guardianAddress the guardian contract address
     * @param salt the salt number,default is 0
     * @returns
     */
    calculateWalletAddress(walletLogicAddress: string, entryPointAddress: string, ownerAddress: string, upgradeDelay: number, guardianDelay: number, guardianAddress: string, salt?: number, singletonFactory?: string, walletProxyConfig?: {
        contractInterface: ContractInterface;
        bytecode: BytesLike | {
            object: string;
        };
    }): string;
    /**
     * get the userOperation for active (first time) the wallet
     * @param walletLogicAddress the wallet logic contract address
     * @param entryPointAddress
     * @param ownerAddress
     * @param upgradeDelay the upgrade delay time
     * @param guardianDelay the guardian delay time
     * @param guardianAddress the guardian contract address
     * @param paymasterAndData the paymaster address and data
     * @param maxFeePerGas the max fee per gas
     * @param maxPriorityFeePerGas the max priority fee per gas
     * @param salt the salt number,default is 0
     * @param walletProxy the walletProxy contract address
     * @param walletFactory the walletFactory contract address
     */
    activateWalletOp(walletLogicAddress: string, entryPointAddress: string, ownerAddress: string, upgradeDelay: number, guardianDelay: number, guardianAddress: string, paymasterAndData: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, salt?: number, walletFactory?: string, singletonFactory?: string, walletProxyConfig?: {
        contractInterface: ContractInterface;
        bytecode: BytesLike | {
            object: string;
        };
    }): UserOperation;
    private getPackedInitCodeUsingWalletFactory;
    paymasterSupportedToken(etherProvider: ethers.providers.BaseProvider, payMasterAddress: string, tokens: string[]): Promise<string[]>;
    getPaymasterExchangePrice(etherProvider: ethers.providers.BaseProvider, payMasterAddress: string, token: string, fetchTokenDecimals?: boolean): Promise<{
        price: BigNumber;
        decimals: number;
        tokenDecimals: number | undefined;
    }>;
    getPaymasterData(payMasterAddress: string, token: string, maxCost: BigNumber): string;
    /**
     * calculate EIP-4337 wallet address
     * @param initContract the init Contract
     * @param initArgs the init args
     * @param salt the salt number
     * @returns
     */
    calculateWalletAddressByCode(initContract: IContract, initArgs: any[] | undefined, salt: number): string;
    number2Bytes32(num?: number): string;
    /**
     * calculate EIP-4337 wallet address
     * @param initCodeHash the init code after keccak256
     * @param salt the salt number
     * @returns the EIP-4337 wallet address
     */
    private calculateWalletAddressByCodeHash;
    /**
     * get nonce number from contract wallet
     * @param walletAddress the wallet address
     * @param web3 the web3 instance
     * @param defaultBlock "earliest", "latest" and "pending"
     * @returns the next nonce number
     */
    private getNonce;
}
export { UserOperation } from "../entity/userOperation";
