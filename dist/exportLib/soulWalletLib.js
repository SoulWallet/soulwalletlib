"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-08-05 16:08:23
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-16 17:00:11
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
const guardian_1 = require("../utils/guardian");
const token_1 = require("../utils/token");
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
    constructor(singletonFactory) {
        this.Bundler = bundler_1.Bundler;
        this.Tokens = {
            ERC1155: new token_1.ERC1155(),
            ERC20: new token_1.ERC20(),
            ERC721: new token_1.ERC721(),
            ETH: new token_1.ETH()
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
        this.Guardian = new guardian_1.Guardian(this._singletonFactory);
    }
    get singletonFactory() {
        return this._singletonFactory;
    }
    /**
     *
     * @param entryPointAddress the entryPoint address
     * @param ownerAddress the owner address
     * @param upgradeDelay the upgrade delay time
     * @param guardianDelay the guardian delay time
     * @param guardianAddress the guardian contract address
     * @returns inithex
     */
    getInitializeData(entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress) {
        // function initialize(IEntryPoint anEntryPoint, address anOwner,  IERC20 token,address paymaster)
        // encodeFunctionData
        let iface = new ethers_1.ethers.utils.Interface(soulWallet_1.SimpleWalletContract.ABI);
        let initializeData = iface.encodeFunctionData("initialize", [entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress]);
        return initializeData;
    }
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
    getWalletCode(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress) {
        const initializeData = this.getInitializeData(entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress);
        const factory = new ethers_1.ethers.ContractFactory(walletProxy_1.WalletProxyContract.ABI, walletProxy_1.WalletProxyContract.bytecode);
        const walletBytecode = factory.getDeployTransaction(walletLogicAddress, initializeData).data;
        return walletBytecode;
    }
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
    calculateWalletAddress(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, salt) {
        const initCodeWithArgs = this.getWalletCode(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress);
        const initCodeHash = (0, utils_1.keccak256)(initCodeWithArgs);
        const walletAddress = this.calculateWalletAddressByCodeHash(initCodeHash, salt);
        return walletAddress;
    }
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
    activateWalletOp(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, paymasterAndData, maxFeePerGas, maxPriorityFeePerGas, salt, walletFactory) {
        const walletAddress = this.calculateWalletAddress(walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, salt);
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
    getPackedInitCodeUsingWalletFactory(walletFactory, walletLogicAddress, entryPointAddress, ownerAddress, upgradeDelay, guardianDelay, guardianAddress, salt) {
        let iface = new ethers_1.ethers.utils.Interface(walletFactory_1.WalletFactoryContract.ABI);
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
    getPaymasterData(payMasterAddress, token, maxCost) {
        const enc = payMasterAddress.toLowerCase() + utils_1.defaultAbiCoder.encode(['address', 'uint256'], [token, maxCost]).substring(2);
        return enc;
    }
    /**
     * calculate EIP-4337 wallet address
     * @param initContract the init Contract
     * @param initArgs the init args
     * @param salt the salt number
     * @returns
     */
    calculateWalletAddressByCode(initContract, initArgs, salt) {
        const factory = new ethers_1.ethers.ContractFactory(initContract.ABI, initContract.bytecode);
        const initCodeWithArgs = factory.getDeployTransaction(initArgs).data;
        const initCodeHash = (0, utils_1.keccak256)(initCodeWithArgs);
        return this.calculateWalletAddressByCodeHash(initCodeHash, salt);
    }
    number2Bytes32(num) {
        if (num === undefined) {
            return bytes32_1.bytes32_zero;
        }
        return (0, utils_1.hexZeroPad)((0, utils_1.hexlify)(num), 32);
    }
    /**
     * calculate EIP-4337 wallet address
     * @param initCodeHash the init code after keccak256
     * @param salt the salt number
     * @returns the EIP-4337 wallet address
     */
    calculateWalletAddressByCodeHash(initCodeHash, salt) {
        return (0, utils_1.getCreate2Address)(this._singletonFactory, this.number2Bytes32(salt), initCodeHash);
    }
    /**
     * get nonce number from contract wallet
     * @param walletAddress the wallet address
     * @param web3 the web3 instance
     * @param defaultBlock "earliest", "latest" and "pending"
     * @returns the next nonce number
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
SoulWalletLib.Defines = addressDefine;
var userOperation_2 = require("../entity/userOperation");
Object.defineProperty(exports, "UserOperation", { enumerable: true, get: function () { return userOperation_2.UserOperation; } });
//# sourceMappingURL=soulWalletLib.js.map