"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-08-05 16:08:23
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 16:57:04
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOperation = exports.SoulWalletLib = void 0;
const utils_1 = require("ethers/lib/utils");
const addressDefine = __importStar(require("../defines/address"));
const userOperation_1 = require("../entity/userOperation");
const soulWallet_1 = require("../contracts/soulWallet");
const walletProxy_1 = require("../contracts/walletProxy");
const tokenPaymaster_1 = require("../contracts/tokenPaymaster");
const decodeCallData_1 = require("../utils/decodeCallData");
const guardians_1 = require("../utils/guardians");
const tokens_1 = require("../utils/tokens");
const bundler_1 = require("../utils/bundler");
const converter_1 = require("../utils/converter");
const ethers_1 = require("ethers");
const gasFee_1 = require("../utils/gasFee");
const tokenAndPaymaster_1 = require("../utils/tokenAndPaymaster");
const deployFactory_1 = require("../utils/deployFactory");
const bytes32_1 = require("../defines/bytes32");
const walletFactory_1 = require("../contracts/walletFactory");
const address_1 = require("../defines/address");
const ABI_1 = require("../defines/ABI");
class SoulWalletLib {
    /**
     * @constructor SoulWalletLib
     * @param {String?} singletonFactory the singletonFactory address
     * @returns {SoulWalletLib}
     */
    constructor(singletonFactory) {
        this.Bundler = bundler_1.Bundler;
        this.Tokens = {
            ERC1155: new tokens_1.ERC1155(),
            ERC20: new tokens_1.ERC20(),
            ERC721: new tokens_1.ERC721(),
            ETH: new tokens_1.ETH()
        };
        singletonFactory = singletonFactory || address_1.SingletonFactoryAddress;
        this._singletonFactory = singletonFactory;
        this._deployFactory = new deployFactory_1.DeployFactory(singletonFactory);
        this.Utils = {
            getNonce: this.getNonce,
            DecodeCallData: decodeCallData_1.DecodeCallData,
            suggestedGasFee: gasFee_1.CodefiGasFees,
            tokenAndPaymaster: tokenAndPaymaster_1.TokenAndPaymaster,
            deployFactory: this._deployFactory,
            fromTransaction: new converter_1.Converter().fromTransaction
        };
        this.Guardian = new guardians_1.Guardian(this._singletonFactory);
    }
    /**
     * get singletonFactory address
     * @returns {String} address
     */
    get singletonFactory() {
        return this._singletonFactory;
    }
    /**
     * get initialize data
     * @param {String} entryPointAddress  the entryPoint address
     * @param {String} ownerAddress the owner address
     * @param {Number} upgradeDelay the upgrade delay time
     * @param {Number} guardianDelay the guardian delay time
     * @param {String} guardianAddress the guardian contract address
     * @returns {String} inithex
     */
    getInitializeData(entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress) {
        // function initialize(IEntryPoint anEntryPoint, address anOwner,  IERC20 token,address paymaster)
        // encodeFunctionData
        let iface = new ethers_1.ethers.utils.Interface(soulWallet_1.SoulWalletContract.ABI);
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
    getWalletCode(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, walletProxyConfig) {
        if (!walletProxyConfig) {
            walletProxyConfig = {
                contractInterface: walletProxy_1.WalletProxyContract.ABI,
                bytecode: walletProxy_1.WalletProxyContract.bytecode
            };
        }
        const initializeData = this.getInitializeData(entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress);
        const factory = new ethers_1.ethers.ContractFactory(walletProxyConfig.contractInterface, walletProxyConfig.bytecode);
        const walletBytecode = factory.getDeployTransaction(walletLogicAddress, initializeData).data;
        return walletBytecode;
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
    calculateWalletAddress(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, salt, singletonFactory, walletProxyConfig) {
        const initCodeWithArgs = this.getWalletCode(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, walletProxyConfig);
        const initCodeHash = (0, utils_1.keccak256)(initCodeWithArgs);
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
    activateWalletOp(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, paymasterAndData, maxFeePerGas, maxPriorityFeePerGas, salt, walletFactory, singletonFactory, walletProxyConfig) {
        const walletAddress = this.calculateWalletAddress(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, salt, singletonFactory, walletProxyConfig);
        const userOperation = new userOperation_1.UserOperation();
        userOperation.nonce = 0;
        userOperation.sender = walletAddress;
        userOperation.paymasterAndData = paymasterAndData;
        userOperation.maxFeePerGas = maxFeePerGas;
        userOperation.maxPriorityFeePerGas = maxPriorityFeePerGas;
        userOperation.initCode = this.getPackedInitCodeUsingWalletFactory(walletFactory, walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, salt);
        userOperation.callGasLimit = 0;
        userOperation.callData = "0x";
        return userOperation;
    }
    getPackedInitCodeUsingWalletFactory(walletFactory, walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, salt, walletFactoryInterface) {
        if (!walletFactoryInterface) {
            walletFactoryInterface = walletFactory_1.WalletFactoryContract.ABI;
        }
        let iface = new ethers_1.ethers.utils.Interface(walletFactoryInterface);
        let packedInitCode = iface.encodeFunctionData("createWallet", [
            entryPointAddress,
            ownerAddress,
            upgradeDelay,
            guardianDelay,
            guardianAddress,
            this.number2Bytes32(salt)
        ]).substring(2);
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
    paymasterSupportedToken(etherProvider, payMasterAddress, tokens) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymaster = new ethers_1.ethers.Contract(payMasterAddress, tokenPaymaster_1.TokenPaymasterContract.ABI, etherProvider);
            const reqs = [];
            for (const token of tokens) {
                reqs.push(paymaster.isSupportedToken(token));
            }
            const results = yield Promise.all(reqs);
            const supportedTokens = [];
            for (let i = 0; i < tokens.length; i++) {
                if (results[i] === true) {
                    supportedTokens.push(tokens[i]);
                }
            }
            return supportedTokens;
        });
    }
    /**
     * get paymaster exchange price
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String} payMasterAddress paymaster contract address
     * @param {String} token token address
     * @param {Boolean?} fetchTokenDecimals fetch token decimals or not
     * @returns {Object} exchange price
     */
    getPaymasterExchangePrice(etherProvider, payMasterAddress, token, fetchTokenDecimals = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymaster = new ethers_1.ethers.Contract(payMasterAddress, tokenPaymaster_1.TokenPaymasterContract.ABI, etherProvider);
            if ((yield paymaster.isSupportedToken(token)) === true) {
                const exchangePrice = yield paymaster.exchangePrice(token);
                /*
                    exchangePrice.decimals
                    exchangePrice.price
                */
                const price = exchangePrice.price;
                const decimals = exchangePrice.decimals;
                let tokenDecimals;
                if (fetchTokenDecimals) {
                    const erc20Token = new ethers_1.ethers.Contract(token, ABI_1.ERC20, etherProvider);
                    tokenDecimals = yield erc20Token.decimals();
                }
                return {
                    price,
                    decimals,
                    tokenDecimals
                };
            }
            else {
                throw new Error("token is not supported");
            }
        });
    }
    /**
     * get paymaster data
     * @param {String} payMasterAddress paymaster contract address
     * @param {String} token token address
     * @param {BigNumber} maxCost token max cost
     * @returns {String} paymasterAndData(hex string)
     */
    getPaymasterData(payMasterAddress, token, maxCost) {
        const enc = payMasterAddress.toLowerCase() + utils_1.defaultAbiCoder.encode(['address', 'uint256'], [token, maxCost]).substring(2);
        return enc;
    }
    /**
     * calculate wallet address
     * @param {IContract} initContract the init Contract
     * @param {any[] | undefined} initArgs the init args
     * @param {Number} salt the salt number
     * @returns {String} wallet address
     */
    calculateWalletAddressByCode(initContract, initArgs, salt) {
        const factory = new ethers_1.ethers.ContractFactory(initContract.ABI, initContract.bytecode);
        const initCodeWithArgs = factory.getDeployTransaction(initArgs).data;
        const initCodeHash = (0, utils_1.keccak256)(initCodeWithArgs);
        return this.calculateWalletAddressByCodeHash(initCodeHash, salt);
    }
    /**
     * convert number to bytes32
     * @param {Number?} num the number
     * @returns {String} bytes32
     */
    number2Bytes32(num) {
        if (num === undefined) {
            return bytes32_1.bytes32_zero;
        }
        return (0, utils_1.hexZeroPad)((0, utils_1.hexlify)(num), 32);
    }
    /**
     * calculate wallet address
     * @param {String} initCodeHash the init code after keccak256
     * @param {Number?} salt the salt number
     * @param {String?} singletonFactory the singleton factory address
     * @returns {String} the wallet address
     */
    calculateWalletAddressByCodeHash(initCodeHash, salt, singletonFactory) {
        return (0, utils_1.getCreate2Address)(singletonFactory || this._singletonFactory, this.number2Bytes32(salt), initCodeHash);
    }
    /**
     * get nonce number from contract wallet
     * @param {string} walletAddress same as userOperation.sender
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {String?} defaultBlock "earliest", "latest" and "pending"
     * @returns {Number} the next nonce number
     */
    getNonce(walletAddress, etherProvider, defaultBlock = 'latest') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const code = yield etherProvider.getCode(walletAddress, defaultBlock);
                // check contract is exist
                if (code === '0x') {
                    return 0;
                }
                else {
                    const contract = new ethers_1.ethers.Contract(walletAddress, [{ "inputs": [], "name": "nonce", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }], etherProvider);
                    const nonce = yield contract.nonce();
                    if (nonce === undefined) {
                        throw new Error('nonce is undefined');
                    }
                    return ethers_1.BigNumber.from(nonce).toNumber();
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.SoulWalletLib = SoulWalletLib;
/**
 *
 */
SoulWalletLib.Defines = {
    AddressZero: addressDefine.AddressZero,
    SingletonFactoryAddress: addressDefine.SingletonFactoryAddress,
    bytes32_zero: bytes32_1.bytes32_zero
};
var userOperation_2 = require("../entity/userOperation");
Object.defineProperty(exports, "UserOperation", { enumerable: true, get: function () { return userOperation_2.UserOperation; } });
//# sourceMappingURL=soulWalletLib.js.map