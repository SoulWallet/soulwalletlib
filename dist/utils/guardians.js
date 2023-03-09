"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-09-21 20:28:54
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-08 14:53:56
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
exports.Guardian = void 0;
const userOperation_1 = require("../entity/userOperation");
const soulWallet_1 = require("../contracts/soulWallet");
const ethers_1 = require("ethers");
const guardianMultiSigWallet_1 = require("../contracts/guardianMultiSigWallet");
const walletProxy_1 = require("../contracts/walletProxy");
const utils_1 = require("ethers/lib/utils");
const address_1 = require("../defines/address");
const signatures_1 = require("./signatures");
/**
 * guardian class
 * @class Guardian
 */
class Guardian {
    /**
     * Creates an instance of Guardian.
     * @param {string} singletonFactory singleton factory address
     * @constructor
     * @returns {Guardian}
     */
    constructor(singletonFactory) {
        this._singletonFactory = singletonFactory;
    }
    getInitializeData(guardians, threshold) {
        // function initialize(address[] calldata _guardians, uint16 _threshold)
        // order by guardians asc
        // For user experience, guardian cannot rely on the order of address
        guardians.sort((a, b) => {
            const aBig = ethers_1.BigNumber.from(a);
            const bBig = ethers_1.BigNumber.from(b);
            if (aBig.eq(bBig)) {
                throw new Error(`guardian address is same: ${a}`);
            }
            else if (aBig.lt(bBig)) {
                return -1;
            }
            else {
                return 1;
            }
        });
        let iface = new ethers_1.ethers.utils.Interface(guardianMultiSigWallet_1.GuardianMultiSigWallet.ABI);
        let initializeData = iface.encodeFunctionData("initialize", [guardians, threshold]);
        return initializeData;
    }
    getGuardianCode(guardianLogicAddress, guardians, threshold, guardianProxyConfig) {
        if (!guardianProxyConfig) {
            guardianProxyConfig = {
                contractInterface: walletProxy_1.WalletProxyContract.ABI,
                bytecode: walletProxy_1.WalletProxyContract.bytecode
            };
        }
        const initializeData = this.getInitializeData(guardians, threshold);
        const factory = new ethers_1.ethers.ContractFactory(guardianProxyConfig.contractInterface, guardianProxyConfig.bytecode);
        const walletBytecode = factory.getDeployTransaction(guardianLogicAddress, initializeData).data;
        return walletBytecode;
    }
    getPackedInitCode(create2Factory, initCode, salt) {
        const abi = { "inputs": [{ "internalType": "bytes", "name": "_initCode", "type": "bytes" }, { "internalType": "bytes32", "name": "_salt", "type": "bytes32" }], "name": "deploy", "outputs": [{ "internalType": "address payable", "name": "createdContract", "type": "address" }], "stateMutability": "nonpayable", "type": "function" };
        let iface = new ethers_1.ethers.utils.Interface([abi]);
        let packedInitCode = iface.encodeFunctionData("deploy", [initCode, salt]).substring(2);
        return create2Factory.toLowerCase() + packedInitCode;
    }
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
    packGuardiansSign(validAfter, validUntil, signature, guardianLogicAddress, guardians, threshold, salt, guardianAddress) {
        const guardianData = this.calculateGuardianAndInitCode(guardianLogicAddress, guardians, threshold, salt);
        if (guardianAddress) {
            if (guardianData.address != guardianAddress) {
                throw new Error('guardianAddress is not equal to the calculated guardian address');
            }
        }
        return this.packGuardiansSignByInitCode(guardianData.address, signature, guardianData.initCode, validAfter, validUntil);
    }
    /**
     * sign a user operation with guardian signatures
     *
     * @param {string} guardianAddress
     * @param {guardianSignature[]} signature
     * @param {string} [initCode='0x']
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @return {*}  {string}
     * @memberof Guardian
     */
    packGuardiansSignByInitCode(guardianAddress, signature, initCode = '0x', validAfter = 0, validUntil = 0) {
        const signatureBytes = this.guardianSign(signature);
        const guardianCallData = utils_1.defaultAbiCoder.encode(['bytes', 'bytes'], [signatureBytes, initCode]);
        return signatures_1.Signatures.encodeSignature(signatures_1.SignatureMode.guardian, guardianAddress, guardianCallData, validAfter, validUntil);
    }
    /**
     * calculate Guardian address and deploy code (initCode)
     * @param {String} guardianLogicAddress guardian logic contract address
     * @param {String[]} guardians guardian addresses
     * @param {Number} threshold threshold
     * @param {String} salt salt
     * @returns {String,String} address is the guardian contract address,initCode is the deploy code
     */
    calculateGuardianAndInitCode(guardianLogicAddress, guardians, threshold, salt) {
        // check if salt is bytes32 (length 66, starts with 0x, and is hex(0-9 a-f))
        if (/^0x[a-f0-9]{64}$/.test(salt) === false) {
            // salt to bytes32
            salt = (0, utils_1.keccak256)(utils_1.defaultAbiCoder.encode(['string'], [salt]));
        }
        const initCodeWithArgs = this.getGuardianCode(guardianLogicAddress, guardians, threshold);
        const initCodeHash = (0, utils_1.keccak256)(initCodeWithArgs);
        const address = (0, utils_1.getCreate2Address)(this._singletonFactory, salt, initCodeHash);
        const initCode = this.getPackedInitCode(this._singletonFactory, initCodeWithArgs, salt);
        return {
            address,
            initCode
        };
    }
    walletContract(etherProvider, walletAddress) {
        return new ethers_1.ethers.Contract(walletAddress, soulWallet_1.SoulWalletContract.ABI, etherProvider);
    }
    /**
     * get guardian info
     * @param {ethers.providers.BaseProvider} etherProvider
     * @param {String} walletAddress  wallet address
     * @param {Number} [now=0] current timestamp ( 0: use current timestamp, >0:unix timestamp  )
     * @returns {Promise<{currentGuardian:String,guardianDelay:Number}>} (currentGuardian, guardianDelay)
     */
    getGuardian(etherProvider, walletAddress, now = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const walletContract = this.walletContract(etherProvider, walletAddress);
            const result = yield etherProvider.call({
                from: address_1.AddressZero,
                to: walletAddress,
                data: new ethers_1.ethers.utils.Interface(soulWallet_1.SoulWalletContract.ABI).encodeFunctionData("guardianInfo", []),
            });
            const decoded = new ethers_1.ethers.utils.Interface(soulWallet_1.SoulWalletContract.ABI).decodeFunctionResult("guardianInfo", result);
            /*
            
    0:'0x0000000000000000000000000000000000000000'
    1:'0x0000000000000000000000000000000000000000'
    2:BigNumber {_hex: '0x00', _isBigNumber: true}
    3:10
            */
            if (!Array.isArray(decoded) || decoded.length != 4) {
                return null;
            }
            const activateTime = decoded[2].toNumber();
            let currentGuardian = decoded[0];
            const tsNow = now > 0 ? now : Math.round(new Date().getTime() / 1000);
            if (activateTime > 0 && activateTime <= tsNow) {
                currentGuardian = decoded[1];
            }
            return {
                currentGuardian: ethers_1.ethers.utils.getAddress(currentGuardian),
                nextGuardian: ethers_1.ethers.utils.getAddress(decoded[1]),
                nextGuardianActivateTime: activateTime,
                guardianDelay: parseInt(decoded[3]),
            };
        });
    }
    _guardian(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAndData, maxFeePerGas, maxPriorityFeePerGas, callData) {
        return __awaiter(this, void 0, void 0, function* () {
            walletAddress = ethers_1.ethers.utils.getAddress(walletAddress);
            let userOperation = new userOperation_1.UserOperation(walletAddress, nonce, undefined, callData, undefined, maxFeePerGas, maxPriorityFeePerGas, paymasterAndData);
            let gasEstimated = yield userOperation.estimateGas(entryPointAddress, etherProvider);
            if (!gasEstimated) {
                return null;
            }
            return userOperation;
        });
    }
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
    setGuardian(etherProvider, walletAddress, guardian, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas) {
        return __awaiter(this, void 0, void 0, function* () {
            guardian = ethers_1.ethers.utils.getAddress(guardian);
            const iface = new ethers_1.ethers.utils.Interface(soulWallet_1.SoulWalletContract.ABI);
            const calldata = iface.encodeFunctionData("setGuardian", [guardian]);
            return yield this._guardian(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, calldata);
        });
    }
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
    transferOwner(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, newOwner) {
        return __awaiter(this, void 0, void 0, function* () {
            newOwner = ethers_1.ethers.utils.getAddress(newOwner);
            const iface = new ethers_1.ethers.utils.Interface(soulWallet_1.SoulWalletContract.ABI);
            const calldata = iface.encodeFunctionData("transferOwner", [newOwner]);
            const op = yield this._guardian(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, calldata);
            return op;
        });
    }
    /**
     * pack guardian signature
     * @param {guardianSignature[]} signature
     * @returns {String} packed signature
     */
    guardianSign(signature) {
        if (signature.length === 0) {
            throw new Error("signature is empty");
        }
        signature.sort((a, b) => {
            return ethers_1.BigNumber.from(a.address).lt(ethers_1.BigNumber.from(b.address)) ? -1 : 1;
        });
        let guardianSignature = [];
        let contractWalletCount = 0;
        for (let i = 0; i < signature.length; i++) {
            const signatureItem = signature[i];
            signatureItem.address = signatureItem.address.toLocaleLowerCase();
            signatureItem.signature = signatureItem.signature.toLocaleLowerCase();
            if (signatureItem.signature.startsWith('0x')) {
                signatureItem.signature = signatureItem.signature.slice(2);
            }
            if (signatureItem.contract) {
                const r = `000000000000000000000000${signatureItem.address.slice(2)}`;
                const s = ethers_1.ethers.utils
                    .hexZeroPad(ethers_1.ethers.utils.hexlify((65 * signature.length) + ((contractWalletCount++) * (32 + 65))), 32)
                    .slice(2);
                const v = `00`;
                const _signature = {
                    signer: signatureItem.address,
                    rsvSig: `${r}${s}${v}`,
                    offsetSig: `0000000000000000000000000000000000000000000000000000000000000041${signatureItem.signature}`,
                };
                guardianSignature.push(_signature);
            }
            else {
                let _signature = {
                    signer: signatureItem.address,
                    rsvSig: signatureItem.signature,
                    offsetSig: ''
                };
                guardianSignature.push(_signature);
            }
        }
        let signatureBytes = "0x";
        for (const sig of guardianSignature) {
            signatureBytes += sig.rsvSig;
        }
        for (const sig of guardianSignature) {
            signatureBytes += sig.offsetSig;
        }
        return signatureBytes;
    }
}
exports.Guardian = Guardian;
//# sourceMappingURL=guardians.js.map