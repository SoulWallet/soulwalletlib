"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-08 16:13:28
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 17:35:25
 */
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
exports.DeployFactory = void 0;
const utils_1 = require("ethers/lib/utils");
const walletFactory_1 = require("../contracts/walletFactory");
const singletonFactory_1 = require("../contracts/singletonFactory");
const ethers_1 = require("ethers");
const bytes32_1 = require("../defines/bytes32");
/**
 * deploy factory contract
 * @class DeployFactory
 */
class DeployFactory {
    /**
     * Creates an instance of DeployFactory.
     * @param {string} singletonFactory singleton factory address
     * @memberof DeployFactory
     * @constructor
     */
    constructor(singletonFactory) {
        this._singletonFactory = singletonFactory;
    }
    getFactory(logicContractAddress, salt, ver = 1, walletFactoryConfig) {
        salt = salt || bytes32_1.bytes32_zero;
        if (ver !== 1) {
            throw new Error('version not support');
        }
        // check salt is bytes32
        if (!/^0x[0-9a-fA-F]{64}$/.test(salt)) {
            throw new Error('salt is not bytes32');
        }
        if (!walletFactoryConfig) {
            walletFactoryConfig = {
                contractInterface: walletFactory_1.WalletFactoryContract.ABI,
                bytecode: walletFactory_1.WalletFactoryContract.bytecode
            };
        }
        const walletFactory = new ethers_1.ethers.ContractFactory(walletFactoryConfig.contractInterface, walletFactoryConfig.bytecode);
        let walletFactoryInitCodeWithArgs = walletFactory.getDeployTransaction(logicContractAddress, this._singletonFactory).data;
        const walletFactoryInitCodeHash = (0, utils_1.keccak256)(walletFactoryInitCodeWithArgs);
        const walletFactoryAddress = (0, utils_1.getCreate2Address)(this._singletonFactory, salt, walletFactoryInitCodeHash);
        return {
            factoryAddress: walletFactoryAddress,
            initCodeWithArgs: walletFactoryInitCodeWithArgs
        };
    }
    /**
     * get factory address
     * @param {string} logicContractAddress account logic contract address
     * @param {string?} salt salt
     * @param {number} [ver=1] version
     * @param {walletFactoryConfig?} walletFactoryConfig wallet factory config
     * @returns {string} factory address
     */
    getAddress(logicContractAddress, salt, ver = 1, walletFactoryConfig) {
        return this.getFactory(logicContractAddress, salt, ver, walletFactoryConfig).factoryAddress;
    }
    /**
     * deploy factory contract( if etherProvider is set)
     * @param {string} logicContractAddress account logic contract address
     * @param {ethers.providers.BaseProvider?} etherProvider ether provider
     * @param {ethers.Signer} signer signer
     * @param {string?} salt salt
     * @param {number} [ver=1] version
     * @param {walletFactoryConfig?} walletFactoryConfig wallet factory config
     * @returns {Promise<string>} factory address
     */
    deploy(logicContractAddress, etherProvider, signer, salt, ver = 1, walletFactoryConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            const { factoryAddress, initCodeWithArgs } = this.getFactory(logicContractAddress, salt, ver, walletFactoryConfig);
            salt = salt || bytes32_1.bytes32_zero;
            let code = yield etherProvider.getCode(factoryAddress);
            if (code !== '0x') {
                return factoryAddress;
            }
            const singletonFactoryContract = new ethers_1.ethers.Contract(this._singletonFactory, singletonFactory_1.SingletonFactory.ABI, etherProvider);
            const calldata = singletonFactoryContract.interface.encodeFunctionData('deploy', [initCodeWithArgs, salt]);
            const gasLimit = ethers_1.BigNumber.from(6000000).toHexString();
            // send tx
            const tx = {
                to: this._singletonFactory,
                data: calldata,
                gasLimit
            };
            const signedTx = yield signer.sendTransaction(tx);
            yield signedTx.wait();
            code = yield etherProvider.getCode(factoryAddress);
            if (code === '0x') {
                throw new Error('deploy factory failed');
            }
            return factoryAddress;
        });
    }
}
exports.DeployFactory = DeployFactory;
//# sourceMappingURL=deployFactory.js.map