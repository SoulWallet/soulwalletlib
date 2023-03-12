"use strict";
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
exports.UserOperation = void 0;
const ethers_1 = require("ethers");
const address_1 = require("../defines/address");
const numberLike_1 = require("../defines/numberLike");
const userOp_1 = require("../utils/userOp");
const signatures_1 = require("../utils/signatures");
const entryPoint_1 = require("../contracts/entryPoint");
const guardians_1 = require("../utils/guardians");
const personalSign_1 = require("../utils/personalSign");
/**
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/UserOperation.sol
 */
/**
 * @class UserOperation
 * @description UserOperation class
 * @example
 * const userOperation = new UserOperation();
 * @property {String} sender the sender address
 * @property {NumberLike} nonce the nonce
 * @property {String} initCode the initCode
 * @property {String} callData the callData
 * @property {String} preVerificationGas the preVerificationGas
 * @property {String} verificationGasLimit the verificationGasLimit
 * @property {String} maxFeePerGas the maxFeePerGas
 * @property {String} maxPriorityFeePerGas the maxPriorityFeePerGas
 * @property {String} paymasterAndData the paymasterAndData
 * @property {String} signature the signature
 */
class UserOperation {
    /**
     * Creates an instance of UserOperation.
     * @param {string} [sender='']
     * @param {NumberLike} [nonce=0]
     * @param {string} [initCode='0x']
     * @param {string} [callData='0x']
     * @param {NumberLike} [callGasLimit=0]
     * @param {NumberLike} [maxFeePerGas=0]
     * @param {NumberLike} [maxPriorityFeePerGas=0]
     * @param {string} [paymasterAndData='0x']
     * @param {NumberLike} [verificationGasLimit=0]
     * @param {NumberLike} [preVerificationGas=0]
     * @param {string} [signature='0x']
     * @memberof UserOperation
     */
    constructor(sender = '', nonce = 0, initCode = '0x', callData = '0x', callGasLimit = 0, maxFeePerGas = 0, maxPriorityFeePerGas = 0, paymasterAndData = '0x', verificationGasLimit = 0, preVerificationGas = 0, signature = '0x') {
        this._sender = '';
        this._nonce = 0;
        this._initCode = '0x';
        this._callData = '0x';
        this._callGasLimit = 0;
        this._verificationGasLimit = 0; //450000;
        this._preVerificationGas = 0; //47000;
        this._maxFeePerGas = 0;
        this._maxPriorityFeePerGas = 0;
        this._paymasterAndData = '0x';
        this._signature = '0x';
        this._sender = sender;
        this._nonce = nonce;
        this._initCode = initCode;
        this._callData = callData;
        this._callGasLimit = callGasLimit;
        this._verificationGasLimit = verificationGasLimit;
        this._preVerificationGas = preVerificationGas;
        this._maxFeePerGas = maxFeePerGas;
        this._maxPriorityFeePerGas = maxPriorityFeePerGas;
        this._paymasterAndData = paymasterAndData;
        this._signature = signature;
    }
    get sender() {
        return this._sender;
    }
    set sender(value) {
        if (!ethers_1.ethers.utils.isAddress(value)) {
            throw new Error('invalid sender address');
        }
        this._sender = value;
    }
    get nonce() {
        return this._nonce;
    }
    set nonce(value) {
        this._nonce = value;
    }
    get initCode() {
        return this._initCode;
    }
    set initCode(value) {
        this._initCode = value;
    }
    get callData() {
        return this._callData;
    }
    set callData(value) {
        this._callData = value;
    }
    get callGasLimit() {
        return this._callGasLimit;
    }
    set callGasLimit(value) {
        this._callGasLimit = value;
    }
    get verificationGasLimit() {
        return this._verificationGasLimit;
    }
    set verificationGasLimit(value) {
        this._verificationGasLimit = value;
    }
    get preVerificationGas() {
        return this._preVerificationGas;
    }
    set preVerificationGas(value) {
        this._preVerificationGas = value;
    }
    get maxFeePerGas() {
        return this._maxFeePerGas;
    }
    set maxFeePerGas(value) {
        this._maxFeePerGas = value;
    }
    get maxPriorityFeePerGas() {
        return this._maxPriorityFeePerGas;
    }
    set maxPriorityFeePerGas(value) {
        this._maxPriorityFeePerGas = value;
    }
    get paymasterAndData() {
        return this._paymasterAndData;
    }
    set paymasterAndData(value) {
        this._paymasterAndData = value;
    }
    get signature() {
        return this._signature;
    }
    set signature(value) {
        this._signature = value;
    }
    /**
     * @description convert to userOperation tuple string
     * @returns {string} the userOperation tuple string
     */
    toTuple() {
        /*
        address sender;
        uint256 nonce;
        bytes initCode;
        bytes callData;
        uint callGas;
        uint verificationGas;
        uint preVerificationGas;
        uint maxFeePerGas;
        uint maxPriorityFeePerGas;
        address paymaster;
        bytes paymasterData;
        bytes signature;
        */
        return `["${this.sender.toLocaleLowerCase()}","${(0, numberLike_1.toDecString)(this.nonce)}","${this.initCode}","${this.callData}","${(0, numberLike_1.toDecString)(this.callGasLimit)}","${(0, numberLike_1.toDecString)(this.verificationGasLimit)}","${(0, numberLike_1.toDecString)(this.preVerificationGas)}","${(0, numberLike_1.toDecString)(this.maxFeePerGas)}","${(0, numberLike_1.toDecString)(this.maxPriorityFeePerGas)}","${this.paymasterAndData}","${this.signature}"]`;
    }
    /**
     * @description convert to userOperation struct
     * @returns {object} the userOperation struct
     */
    getStruct() {
        this.alignment();
        return {
            sender: this.sender,
            nonce: this.nonce,
            initCode: this.initCode,
            callData: this.callData,
            callGasLimit: this.callGasLimit,
            verificationGasLimit: this.verificationGasLimit,
            preVerificationGas: this.preVerificationGas,
            maxFeePerGas: this.maxFeePerGas,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
            paymasterAndData: this.paymasterAndData,
            signature: this.signature
        };
    }
    /**
     * @description convert NumberLike property to hex string
     * @returns {void}
     */
    alignment() {
        this._nonce = (0, numberLike_1.toHexString)(this._nonce);
        this._callGasLimit = (0, numberLike_1.toHexString)(this._callGasLimit);
        this._verificationGasLimit = (0, numberLike_1.toHexString)(this._verificationGasLimit);
        this._preVerificationGas = (0, numberLike_1.toHexString)(this._preVerificationGas);
        this._maxFeePerGas = (0, numberLike_1.toHexString)(this._maxFeePerGas);
        this._maxPriorityFeePerGas = (0, numberLike_1.toHexString)(this._maxPriorityFeePerGas);
        this._paymasterAndData = this._paymasterAndData === address_1.AddressZero ? '0x' : this._paymasterAndData;
    }
    /**
     * @description convert to userOperation json string
     * @returns {string} the userOperation json string
     */
    toJSON() {
        this.alignment();
        return JSON.stringify({
            sender: this.sender,
            nonce: this.nonce,
            initCode: this.initCode,
            callData: this.callData,
            callGasLimit: this.callGasLimit,
            verificationGasLimit: this.verificationGasLimit,
            preVerificationGas: this.preVerificationGas,
            maxFeePerGas: this.maxFeePerGas,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
            paymasterAndData: this.paymasterAndData,
            signature: this.signature
        });
    }
    /**
     * @description convert from userOperation json string
     * @param {string} json the userOperation json string
     * @returns {UserOperation} the userOperation object
     */
    static fromJSON(json) {
        const obj = JSON.parse(json);
        if (!obj || typeof obj !== 'object') {
            throw new Error('invalid json');
        }
        if (typeof obj.sender !== 'string') {
            throw new Error('invalid sender');
        }
        if (typeof obj.nonce !== 'string' && typeof obj.nonce !== 'number') {
            throw new Error('invalid nonce');
        }
        if (typeof obj.initCode !== 'string' || !obj.initCode.startsWith('0x')) {
            throw new Error('invalid initCode');
        }
        if (typeof obj.callData !== 'string' || !obj.callData.startsWith('0x')) {
            throw new Error('invalid callData');
        }
        if (typeof obj.callGasLimit !== 'string' && typeof obj.callGasLimit !== 'number') {
            throw new Error('invalid callGasLimit');
        }
        if (typeof obj.verificationGasLimit !== 'string' && typeof obj.verificationGasLimit !== 'number') {
            throw new Error('invalid verificationGasLimit');
        }
        if (typeof obj.preVerificationGas !== 'string' && typeof obj.preVerificationGas !== 'number') {
            throw new Error('invalid preVerificationGas');
        }
        if (typeof obj.maxFeePerGas !== 'string' && typeof obj.maxFeePerGas !== 'number') {
            throw new Error('invalid maxFeePerGas');
        }
        if (typeof obj.maxPriorityFeePerGas !== 'string' && typeof obj.maxPriorityFeePerGas !== 'number') {
            throw new Error('invalid maxPriorityFeePerGas');
        }
        if (typeof obj.paymasterAndData !== 'string' || !obj.paymasterAndData.startsWith('0x')) {
            throw new Error('invalid paymasterAndData');
        }
        if (typeof obj.signature !== 'string' || !obj.signature.startsWith('0x')) {
            throw new Error('invalid signature');
        }
        const userOp = new UserOperation(obj.sender, obj.nonce, obj.initCode, obj.callData, obj.callGasLimit, obj.maxFeePerGas, obj.maxPriorityFeePerGas, obj.paymasterAndData, obj.verificationGasLimit, obj.preVerificationGas, obj.signature);
        return userOp;
    }
    /**
     * @description convert from userOperation object
     * @param {object} obj the userOperation object
     * @returns {UserOperation} the userOperation object
     */
    static fromObject(obj) {
        if (!obj || typeof obj !== 'object') {
            throw new Error('invalid json');
        }
        if (typeof obj.sender !== 'string') {
            throw new Error('invalid sender');
        }
        if (typeof obj.nonce !== 'string' && typeof obj.nonce !== 'number') {
            throw new Error('invalid nonce');
        }
        if (typeof obj.initCode !== 'string' || !obj.initCode.startsWith('0x')) {
            throw new Error('invalid initCode');
        }
        if (typeof obj.callData !== 'string' || !obj.callData.startsWith('0x')) {
            throw new Error('invalid callData');
        }
        if (typeof obj.callGasLimit !== 'string' && typeof obj.callGasLimit !== 'number') {
            throw new Error('invalid callGasLimit');
        }
        if (typeof obj.verificationGasLimit !== 'string' && typeof obj.verificationGasLimit !== 'number') {
            throw new Error('invalid verificationGasLimit');
        }
        if (typeof obj.preVerificationGas !== 'string' && typeof obj.preVerificationGas !== 'number') {
            throw new Error('invalid preVerificationGas');
        }
        if (typeof obj.maxFeePerGas !== 'string' && typeof obj.maxFeePerGas !== 'number') {
            throw new Error('invalid maxFeePerGas');
        }
        if (typeof obj.maxPriorityFeePerGas !== 'string' && typeof obj.maxPriorityFeePerGas !== 'number') {
            throw new Error('invalid maxPriorityFeePerGas');
        }
        if (typeof obj.paymasterAndData !== 'string' || !obj.paymasterAndData.startsWith('0x')) {
            throw new Error('invalid paymasterAndData');
        }
        if (typeof obj.signature !== 'string' || !obj.signature.startsWith('0x')) {
            throw new Error('invalid signature');
        }
        const userOp = new UserOperation(obj.sender, obj.nonce, obj.initCode, obj.callData, obj.callGasLimit, obj.maxFeePerGas, obj.maxPriorityFeePerGas, obj.paymasterAndData, obj.verificationGasLimit, obj.preVerificationGas, obj.signature);
        return userOp;
    }
    /**
     *
     *
     * @return {*}  {string}
     * @memberof UserOperation
     */
    getSemiValidSign() {
        if (this._callData.startsWith('0x4fb2e45d')) {
            const hash = ethers_1.ethers.utils.hexlify(ethers_1.ethers.utils.randomBytes(32));
            const guardian = new guardians_1.Guardian(address_1.SingletonFactoryAddress);
            const guardianCount = 20;
            const guardianAddress = [];
            const guardianWallets = [];
            for (let index = 0; index < guardianCount; index++) {
                const _wallet = ethers_1.ethers.Wallet.createRandom();
                guardianWallets.push(_wallet);
                guardianAddress.push(_wallet.address);
            }
            const gurdianAddressAndInitCode = guardian.calculateGuardianAndInitCode(address_1.SingletonFactoryAddress, guardianAddress, guardianCount, "");
            const guardianSignArr = [];
            for (let index = 0; index < guardianCount; index++) {
                guardianSignArr.push({
                    contract: false,
                    address: guardianAddress[index],
                    signature: personalSign_1.PersonalSign.signMessage(hash, guardianWallets[index].privateKey)
                });
            }
            return guardian.packGuardiansSignByInitCode(gurdianAddressAndInitCode.address, guardianSignArr, gurdianAddressAndInitCode.initCode);
        }
        else {
            return signatures_1.Signatures.encodeSignature(signatures_1.SignatureMode.owner, this.sender, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 268435455, 268435455);
        }
    }
    /**
     * @description get the paymaster sign hash
     * @returns {string} the paymaster sign hash
     */
    payMasterSignHash() {
        return userOp_1.UserOp.payMasterSignHash(this);
    }
    /**
     *
     *
     * @param {string} signer
     * @param {string} signature
     * @param {SignatureMode} [signatureMode=SignatureMode.owner]
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @memberof UserOperation
     */
    signWithSignature(signer, signature, signatureMode = signatures_1.SignatureMode.owner, validAfter = 0, validUntil = 0) {
        this.signature = signatures_1.Signatures.encodeSignature(signatureMode, signer, signature, validAfter, validUntil);
    }
    /**
    * @description get the UserOpHash (userOp hash)
    * @param {string} entryPointAddress the entry point address
    * @param {number} chainId the chain id
    * @returns {string} the UserOpHash (userOp hash)
    */
    getUserOpHash(entryPointAddress, chainId) {
        return userOp_1.UserOp.getUserOpHash(this, entryPointAddress, chainId);
    }
    /**
     * get the UserOp Hash to be signed (packed UserOpHash with with time range)
     *
     * @param {string} entryPointAddress
     * @param {number} chainId
     * @param {string} signer
     * @param {SignatureMode} [signatureMode=SignatureMode.owner]
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @return {*}  {string}
     * @memberof UserOperation
     */
    getUserOpHashWithTimeRange(entryPointAddress, chainId, signer, signatureMode = signatures_1.SignatureMode.owner, validAfter = 0, validUntil = 0) {
        if (validUntil < validAfter) {
            throw new Error('validUntil must be greater than validAfter');
        }
        const _hash = this.getUserOpHash(entryPointAddress, chainId);
        return signatures_1.Signatures.packSignatureHash(_hash, signer, signatureMode, validAfter, validUntil);
    }
    /**
     *
     *
     * @return {*}  {BigNumber}
     * @memberof UserOperation
     */
    requiredGas() {
        /*
       //when using a Paymaster, the verificationGasLimit is used also to as a limit for the postOp call.
       // our security model might call postOp eventually twice
       uint256 mul = mUserOp.paymaster != address(0) ? 3 : 1;
       uint256 requiredGas = mUserOp.callGasLimit + mUserOp.verificationGasLimit * mul + mUserOp.preVerificationGas;
    
       // TODO: copy logic of gasPrice?
       requiredPrefund = requiredGas * getUserOpGasPrice(mUserOp);
       */
        const noPaymaster = this.paymasterAndData === address_1.AddressZero || this.paymasterAndData === '0x';
        const mul = noPaymaster ? 1 : 3;
        const requiredGas = ethers_1.BigNumber.from(this.callGasLimit).add(ethers_1.BigNumber.from(this.verificationGasLimit).mul(mul)).add(ethers_1.BigNumber.from(this.preVerificationGas));
        return requiredGas;
    }
    /**
     * get the required prefund
     *
     * @param {ethers.providers.BaseProvider} provider
     * @param {string} [entryPoint]
     * @return {*}
     * @memberof UserOperation
     */
    requiredPrefund(provider, entryPoint) {
        return __awaiter(this, void 0, void 0, function* () {
            const gasPrice = ethers_1.BigNumber.from(this.maxFeePerGas);
            const requiredGas = this.requiredGas();
            const requiredPrefund = gasPrice.mul(requiredGas);
            let deposit = ethers_1.BigNumber.from(0);
            if (entryPoint && provider) {
                /*
                    function getDepositInfo(address account) public view returns (DepositInfo memory info)
                    struct DepositInfo {
                        uint112 deposit;
                        bool staked;
                        uint112 stake;
                        uint32 unstakeDelaySec;
                        uint48 withdrawTime;
                    }
                */
                const entryPointContract = new ethers_1.ethers.Contract(entryPoint, entryPoint_1.EntryPointContract.ABI, provider);
                const depositInfo = yield entryPointContract.callStatic.getDepositInfo(this.sender);
                deposit = ethers_1.BigNumber.from(depositInfo.deposit);
            }
            return {
                requiredPrefund,
                requiredGas,
                deposit
            };
        });
    }
}
exports.UserOperation = UserOperation;
//# sourceMappingURL=userOperation.js.map