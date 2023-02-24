/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-08-05 16:08:23
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 16:57:04
 */

import { getCreate2Address, hexlify, hexZeroPad, keccak256, defaultAbiCoder, BytesLike } from "ethers/lib/utils";
import * as addressDefine from "../defines/address";
import { UserOperation } from "../entity/userOperation";
import { IContract } from "../contracts/icontract";
import { SoulWalletContract } from "../contracts/soulWallet";
import { WalletProxyContract } from "../contracts/walletProxy";
import { TokenPaymasterContract } from "../contracts/tokenPaymaster";
import { DecodeCallData } from '../utils/decodeCallData';
import { Guardian } from "../utils/guardians";
import { ERC1155, ERC20, ERC721, ETH } from "../utils/tokens";
import { Bundler } from '../utils/bundler';
import { Converter } from "../utils/converter";
import { BigNumber, ContractInterface, ethers } from "ethers";
import { NumberLike } from "../defines/numberLike";
import { CodefiGasFees } from '../utils/gasFee';
import { TokenAndPaymaster } from '../utils/tokenAndPaymaster';
import { DeployFactory } from '../utils/deployFactory';
import { bytes32_zero } from "../defines/bytes32";
import { WalletFactoryContract } from "../contracts/walletFactory";
import { SingletonFactoryAddress } from "../defines/address";
import { ERC20 as erc20 } from "../defines/ABI";
import { JsonFragment, Fragment } from '@ethersproject/abi'

export class SoulWalletLib {

    /** @private */
    private _singletonFactory;

    /** @private */
    private _deployFactory;

    /**
     * @type {Object}
     */
    public Utils;

    /**
     * @type {Guardian}
     */
    public Guardian: Guardian;


    /**
     * @constructor SoulWalletLib
     * @param {String?} singletonFactory the singletonFactory address
     * @returns {SoulWalletLib}
     */
    constructor(singletonFactory?: string) {
        singletonFactory = singletonFactory || SingletonFactoryAddress;

        this._singletonFactory = singletonFactory;
        this._deployFactory = new DeployFactory(singletonFactory);

        this.Utils = {
            getNonce: this.getNonce,
            DecodeCallData: DecodeCallData,
            suggestedGasFee: CodefiGasFees,
            tokenAndPaymaster: TokenAndPaymaster,
            deployFactory: this._deployFactory,
            fromTransaction: new Converter().fromTransaction
        }

        this.Guardian = new Guardian(this._singletonFactory);

    }

    /**
     * get singletonFactory address
     * @returns {String} address
     */
    public get singletonFactory() {
        return this._singletonFactory;
    }

    /**
     * 
     */
    public static Defines = {
        AddressZero: addressDefine.AddressZero,
        SingletonFactoryAddress: addressDefine.SingletonFactoryAddress,
        bytes32_zero: bytes32_zero
    };


    public Bundler = Bundler;
    public Tokens = {
        ERC1155: new ERC1155(),
        ERC20: new ERC20(),
        ERC721: new ERC721(),
        ETH: new ETH()
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
    private getInitializeData(
        entryPointAddress: string,
        ownerAddress: string,
        upgradeDelay: number,
        guardianDelay: number,
        guardianAddress: string
    ) {
        // function initialize(IEntryPoint anEntryPoint, address anOwner,  IERC20 token,address paymaster)
        // encodeFunctionData
        let iface = new ethers.utils.Interface(SoulWalletContract.ABI);
        let initializeData = iface.encodeFunctionData("initialize", [entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress]);
        return initializeData;
    }

    /**
     * get wallet code
     * @param {String} walletLogicAddress the wallet logic contract address
     * @param {String} entryPointAddress the entryPoint address
     * @param {String} ownerAddress the owner address
     * @param {Number} upgradeDelay the upgrade delay time
     * @param {Number} guardianDelay the guardian delay time
     * @param {String} guardianAddress the guardian contract address
     * @param {Object?} walletProxyConfig the wallet proxy config
     * @returns {String} the wallet code hex string  
     */
    public getWalletCode(
        walletLogicAddress: string,
        entryPointAddress: string,
        ownerAddress: string,
        upgradeDelay: number,
        guardianDelay: number,
        guardianAddress: string,
        walletProxyConfig?: {
            contractInterface: ContractInterface,
            bytecode: BytesLike | { object: string }
        }): string {
        if (!walletProxyConfig) {
            walletProxyConfig = {
                contractInterface: WalletProxyContract.ABI,
                bytecode: WalletProxyContract.bytecode
            }
        }
        const initializeData = this.getInitializeData(entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress);
        const factory = new ethers.ContractFactory(walletProxyConfig.contractInterface, walletProxyConfig.bytecode);
        const walletBytecode = factory.getDeployTransaction(walletLogicAddress, initializeData).data;
        return walletBytecode as string;
    }

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
    public calculateWalletAddress(
        walletLogicAddress: string,
        entryPointAddress: string,
        ownerAddress: string,
        upgradeDelay: number,
        guardianDelay: number,
        guardianAddress: string,
        salt?: number,
        singletonFactory?: string,
        walletProxyConfig?: {
            contractInterface: ContractInterface,
            bytecode: BytesLike | { object: string }
        }) {
        const initCodeWithArgs = this.getWalletCode(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, walletProxyConfig);
        const initCodeHash = keccak256(initCodeWithArgs);
        const walletAddress = this.calculateWalletAddressByCodeHash(initCodeHash, salt, singletonFactory);
        return walletAddress;
    }

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
    public activateWalletOp(
        walletLogicAddress: string,
        entryPointAddress: string,
        ownerAddress: string,
        upgradeDelay: number,
        guardianDelay: number,
        guardianAddress: string,
        paymasterAndData: string,
        maxFeePerGas: NumberLike,
        maxPriorityFeePerGas: NumberLike,
        salt?: number,
        walletFactory?: string,
        singletonFactory?: string,
        walletProxyConfig?: {
            contractInterface: ContractInterface,
            bytecode: BytesLike | { object: string }
        }
    ) {
        const walletAddress = this.calculateWalletAddress(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay,
            guardianDelay, guardianAddress, salt, singletonFactory, walletProxyConfig);

        const userOperation = new UserOperation();
        userOperation.nonce = 0;
        userOperation.sender = walletAddress;
        userOperation.paymasterAndData = paymasterAndData;
        userOperation.maxFeePerGas = maxFeePerGas;
        userOperation.maxPriorityFeePerGas = maxPriorityFeePerGas;
        userOperation.initCode = this.getPackedInitCodeUsingWalletFactory(
            walletFactory,
            walletLogicAddress,
            entryPointAddress,
            ownerAddress,
            upgradeDelay,
            guardianDelay,
            guardianAddress,
            salt
        );
        userOperation.callGasLimit = 0;
        userOperation.callData = "0x";
        return userOperation;
    }

    private getPackedInitCodeUsingWalletFactory(
        walletFactory: string | undefined,
        walletLogicAddress: string | undefined,
        entryPointAddress: string,
        ownerAddress: string,
        upgradeDelay: number,
        guardianDelay: number,
        guardianAddress: string,
        salt?: number,
        walletFactoryInterface?: ReadonlyArray<Fragment | JsonFragment | string>) {
        if (!walletFactoryInterface) {
            walletFactoryInterface = WalletFactoryContract.ABI;
        }
        let iface = new ethers.utils.Interface(walletFactoryInterface);
        let packedInitCode = iface.encodeFunctionData("createWallet",
            [
                entryPointAddress,
                ownerAddress,
                upgradeDelay,
                guardianDelay,
                guardianAddress,
                this.number2Bytes32(salt)
            ]
        ).substring(2);
        if (!walletFactory) {
            if (!walletLogicAddress) {
                throw new Error("walletLogicAddress is undefined");
            }
            walletFactory = this._deployFactory.getAddress(walletLogicAddress);
        }
        return walletFactory.toLowerCase() + packedInitCode;
    }


    /**
     * check if the token is supported by paymaster
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String} payMasterAddress paymaster contract address
     * @param {String[]} tokens token address list
     * @returns {String[]} supported token address list
     */
    public async paymasterSupportedToken(etherProvider: ethers.providers.BaseProvider, payMasterAddress: string, tokens: string[]) {
        const paymaster = new ethers.Contract(payMasterAddress, TokenPaymasterContract.ABI, etherProvider);
        const reqs = [];
        for (const token of tokens) {
            reqs.push(paymaster.isSupportedToken(token));
        }
        const results = await Promise.all(reqs);
        const supportedTokens = [];
        for (let i = 0; i < tokens.length; i++) {
            if (results[i] === true) {
                supportedTokens.push(tokens[i]);
            }
        }
        return supportedTokens;
    }

    /**
     * get paymaster exchange price
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String} payMasterAddress paymaster contract address
     * @param {String} token token address
     * @param {Boolean?} fetchTokenDecimals fetch token decimals or not
     * @returns {Object} exchange price
     */
    public async getPaymasterExchangePrice(etherProvider: ethers.providers.BaseProvider,
        payMasterAddress: string, token: string, fetchTokenDecimals: boolean = false) {
        const paymaster = new ethers.Contract(payMasterAddress, TokenPaymasterContract.ABI, etherProvider);

        if (await paymaster.isSupportedToken(token) === true) {
            const exchangePrice = await paymaster.exchangePrice(token);
            /* 
                exchangePrice.decimals
                exchangePrice.price
            */
            const price: BigNumber = exchangePrice.price;
            const decimals: number = exchangePrice.decimals;
            let tokenDecimals: number | undefined;

            if (fetchTokenDecimals) {
                const erc20Token = new ethers.Contract(token, erc20, etherProvider);
                tokenDecimals = await erc20Token.decimals();
            }

            return {
                price,
                decimals,
                tokenDecimals
            };
        } else {
            throw new Error("token is not supported");
        }
    }

    /**
     * get paymaster data
     * @param {String} payMasterAddress paymaster contract address
     * @param {String} token token address
     * @param {BigNumber} maxCost token max cost
     * @returns {String} paymasterAndData(hex string)
     */
    public getPaymasterData(payMasterAddress: string, token: string, maxCost: BigNumber) {
        const enc = payMasterAddress.toLowerCase() + defaultAbiCoder.encode(
            ['address', 'uint256'],
            [token, maxCost]).substring(2)
        return enc;
    }

    /**
     * calculate wallet address
     * @param {IContract} initContract the init Contract
     * @param {any[] | undefined} initArgs the init args
     * @param {Number} salt the salt number
     * @returns {String} wallet address
     */
    public calculateWalletAddressByCode(
        initContract: IContract,
        initArgs: any[] | undefined,
        salt: number): string {
        const factory = new ethers.ContractFactory(initContract.ABI, initContract.bytecode);
        const initCodeWithArgs = factory.getDeployTransaction(initArgs).data as string;
        const initCodeHash = keccak256(initCodeWithArgs);
        return this.calculateWalletAddressByCodeHash(initCodeHash, salt);

    }


    /**
     * convert number to bytes32
     * @param {Number?} num the number
     * @returns {String} bytes32
     */
    public number2Bytes32(num?: number) {
        if (num === undefined) {
            return bytes32_zero;
        }
        return hexZeroPad(hexlify(num), 32);
    }

    /**
     * calculate wallet address
     * @param {String} initCodeHash the init code after keccak256
     * @param {Number?} salt the salt number
     * @param {String?} singletonFactory the singleton factory address
     * @returns {String} the wallet address
     */
    private calculateWalletAddressByCodeHash(
        initCodeHash: string,
        salt?: number,
        singletonFactory?: string): string {

        return getCreate2Address(
            singletonFactory || this._singletonFactory,
            this.number2Bytes32(salt),
            initCodeHash);
    }


    /**
     * get nonce number from contract wallet
     * @param {string} walletAddress same as userOperation.sender
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String?} defaultBlock "earliest", "latest" and "pending"
     * @returns {Number} the next nonce number
     */
    private async getNonce(walletAddress: string, etherProvider: ethers.providers.BaseProvider, defaultBlock = 'latest'): Promise<number> {
        try {
            const code = await etherProvider.getCode(walletAddress, defaultBlock);
            // check contract is exist
            if (code === '0x') {
                return 0;
            } else {
                const contract = new ethers.Contract(walletAddress, [{ "inputs": [], "name": "nonce", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }], etherProvider);
                const nonce = await contract.nonce();
                if (nonce === undefined) {
                    throw new Error('nonce is undefined');
                }
                return BigNumber.from(nonce).toNumber();
            }

        } catch (error) {
            throw error;
        }
    }


}

export { UserOperation } from "../entity/userOperation";