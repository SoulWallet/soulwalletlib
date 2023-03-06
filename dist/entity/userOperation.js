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
const optimistic_1 = require("../utils/L2/optimistic/optimistic");
const chainId_1 = require("../defines/chainId");
const estimateGas_1 = require("../utils/estimateGas");
const arbitrum_1 = require("../utils/L2/arbitrum/arbitrum");
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
        if ((0, numberLike_1.toNumber)(verificationGasLimit) === 0 || (0, numberLike_1.toNumber)(preVerificationGas) === 0) {
            this.updateVerificationGasLimit();
            this.updatePreVerificationGas();
        }
    }
    get sender() {
        return this._sender;
    }
    set sender(value) {
        if (!ethers_1.ethers.utils.isAddress(value)) {
            throw new Error('invalid sender address');
        }
        this._sender = value;
        this.updateVerificationGasLimit();
        this.updatePreVerificationGas();
    }
    get nonce() {
        return this._nonce;
    }
    set nonce(value) {
        this._nonce = value;
        this.updateVerificationGasLimit();
        this.updatePreVerificationGas();
    }
    get initCode() {
        return this._initCode;
    }
    set initCode(value) {
        this._initCode = value;
        // update preVerificationGas & verificationGasLimit
        this.updateVerificationGasLimit();
        this.updatePreVerificationGas();
    }
    get callData() {
        return this._callData;
    }
    set callData(value) {
        this._callData = value;
        // update preVerificationGas & verificationGasLimit
        this.updateVerificationGasLimit();
        this.updatePreVerificationGas();
    }
    get callGasLimit() {
        return this._callGasLimit;
    }
    set callGasLimit(value) {
        this._callGasLimit = value;
        this.updateVerificationGasLimit();
        this.updatePreVerificationGas();
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
        this.updateVerificationGasLimit();
        this.updatePreVerificationGas();
    }
    get maxPriorityFeePerGas() {
        return this._maxPriorityFeePerGas;
    }
    set maxPriorityFeePerGas(value) {
        this._maxPriorityFeePerGas = value;
        this.updateVerificationGasLimit();
        this.updatePreVerificationGas();
    }
    get paymasterAndData() {
        return this._paymasterAndData;
    }
    set paymasterAndData(value) {
        this._paymasterAndData = value;
        // update preVerificationGas & verificationGasLimit
        this.updateVerificationGasLimit();
        this.updatePreVerificationGas();
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
    recoveryWalletOP() {
        /**
          * if recovery wallet,preVerificationGas += 20000
          * 0x4fb2e45d:transferOwner(address)
          */
        return this.callData.startsWith('0x4fb2e45d');
    }
    updatePreVerificationGas() {
        try {
            let _preVerificationGas = userOp_1.UserOp.callDataCost(this) + 10000;
            if (this.recoveryWalletOP()) {
                _preVerificationGas += 20000;
            }
            this._preVerificationGas = _preVerificationGas;
        }
        catch (error) {
            console.log(error);
        }
    }
    updateVerificationGasLimit() {
        let _verificationGasLimit = 100000;
        if (this.recoveryWalletOP()) {
            _verificationGasLimit += 500000; // create guardian cost
        }
        if (this._initCode !== '0x') {
            _verificationGasLimit += 350000; // create wallet cost
        }
        if (this.paymasterAndData.length >= 42 && this.paymasterAndData !== address_1.AddressZero) {
            _verificationGasLimit += 50000; // paymaster cost ( validatePaymasterUserOp & postOp )
        }
        this._verificationGasLimit = _verificationGasLimit;
    }
    /**
     *
     *
     * @param {ethers.providers.BaseProvider} l2Provider
     * @param {(BigNumber | NumberLike)} basefee basefee(wei)
     * @param {NumberLike} maxFeePerGas maxFeePerGas(wei)
     * @param {NumberLike} maxPriorityFeePerGas maxPriorityFeePerGas(wei)
     * @param {string} [entryPointAddress='0x0576a174D229E3cFA37253523E645A78A0C91B57']
     * @param {string} [estimateGasHelper='0x120A64777b5bc61BD8b4C6e984aaFF8A85AFfE5e']
     * @return {*}
     * @memberof UserOperation
     */
    calcL2GasPrice(l2Provider, basefee, maxFeePerGas, maxPriorityFeePerGas, entryPointAddress = '0x0576a174D229E3cFA37253523E645A78A0C91B57', estimateGasHelper = '0x120A64777b5bc61BD8b4C6e984aaFF8A85AFfE5e') {
        return __awaiter(this, void 0, void 0, function* () {
            // get ChainID
            const chainId = yield l2Provider.getNetwork().then((network) => network.chainId);
            let chainName = '';
            if (chainId === chainId_1.CHAINID.OPTIMISM || chainId === chainId_1.CHAINID.OPTIMISM_GOERLI) {
                chainName = 'OPTIMISM';
            }
            else if (chainId === chainId_1.CHAINID.ARBITRUM || chainId === chainId_1.CHAINID.ARBITRUM_GOERLI) {
                chainName = 'ARBITRUM';
            }
            else {
                return;
            }
            this._maxFeePerGas = maxFeePerGas;
            this._maxPriorityFeePerGas = maxPriorityFeePerGas;
            this.updateVerificationGasLimit();
            this.updatePreVerificationGas();
            let reasonableGasPrice;
            if ('OPTIMISM' === chainName) {
                if ((0, numberLike_1.toNumber)(this._maxPriorityFeePerGas) !== (0, numberLike_1.toNumber)(this._maxFeePerGas)) {
                    throw new Error('EIP1559 fee is not supported');
                }
                reasonableGasPrice = yield optimistic_1.Optimistic.calcGasPrice(l2Provider, this);
            }
            else if ('ARBITRUM' === chainName) {
                reasonableGasPrice = yield arbitrum_1.Arbitrum.calcGasPrice(l2Provider, this, basefee, entryPointAddress, estimateGasHelper);
            }
            else {
                throw new Error('chainid is not supported');
            }
            this._maxFeePerGas = reasonableGasPrice.maxFeePerGas;
            this._maxPriorityFeePerGas = reasonableGasPrice.maxPriorityFeePerGas;
        });
    }
    /**
     * @description estimate gas
     * @param {string} entryPointAddress the entry point address
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @returns {Promise<boolean>} true or false
     */
    estimateGas(entryPointAddress, etherProvider) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _gasLimit = yield estimateGas_1.EstimateGas.estimate(etherProvider, {
                    from: entryPointAddress,
                    to: this.sender,
                    data: this.callData,
                    gasLimit: 20000000
                });
                this.callGasLimit = (_gasLimit.gasLimitForL2 || _gasLimit.gasLimit).toHexString();
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    /**
     * @description get the paymaster sign hash
     * @returns {string} the paymaster sign hash
     */
    payMasterSignHash() {
        return userOp_1.UserOp.payMasterSignHash(this);
    }
    /**
     * @description sign the user operation with signature
     * @param {string} signAddress the sign address
     * @param {string} signature the signature
     * @returns {void}
     */
    signWithSignature(signAddress, signature) {
        this.signature = userOp_1.UserOp.signUserOpWithPersonalSign(signAddress, signature);
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
     * @description get the UserOpHash (userOp hash) with validAfter and validUntil
     *
     * @param {string} entryPointAddress the entry point address
     * @param {number} chainId the chain id
     * @param {number} [validAfter=0] the valid after
     * @param {number} [validUntil=0] the valid until
     * @return {*}  {string}
     * @memberof UserOperation
     */
    getUserOpHashWithTimeRange(entryPointAddress, chainId, validAfter = 0, validUntil = 0) {
        if (validUntil < validAfter) {
            throw new Error('validUntil must be greater than validAfter');
        }
        const _hash = this.getUserOpHash(entryPointAddress, chainId);
        return ethers_1.ethers.utils.solidityKeccak256(['bytes32', 'uint48', 'uint48'], [_hash, validAfter, validUntil]);
    }
    /**
     *
     *
     * @param {(BigNumber | NumberLike)} [basefee]
     * @return {*}  {BigNumber}
     * @memberof UserOperation
     */
    maxGasPrice(basefee) {
        /*
         uint256 maxFeePerGas = mUserOp.maxFeePerGas;
        uint256 maxPriorityFeePerGas = mUserOp.maxPriorityFeePerGas;
        if (maxFeePerGas == maxPriorityFeePerGas) {
            //legacy mode (for networks that don't support basefee opcode)
            return maxFeePerGas;
        }
        return min(maxFeePerGas, maxPriorityFeePerGas + block.basefee);
        */
        let gasPrice;
        const maxFeePerGas = ethers_1.BigNumber.from(this.maxFeePerGas);
        const maxPriorityFeePerGas = ethers_1.BigNumber.from(this.maxPriorityFeePerGas);
        if (maxFeePerGas.eq(maxPriorityFeePerGas)) {
            gasPrice = maxFeePerGas;
        }
        else {
            if (basefee !== undefined) {
                basefee = ethers_1.BigNumber.from(basefee);
                const _fee = (basefee.add(maxPriorityFeePerGas));
                gasPrice = _fee.gt(maxFeePerGas) ? maxFeePerGas : _fee;
            }
            else {
                gasPrice = maxFeePerGas;
            }
        }
        return gasPrice;
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
        * @description get the required prefund
        * @param {(BigNumber | NumberLike)?} basefee the basefee
        * @returns {BigNumber} the required prefund
        */
    requiredPrefund(basefee) {
        const gasPrice = this.maxGasPrice(basefee);
        const requiredGas = this.requiredGas();
        return gasPrice.mul(requiredGas);
    }
}
exports.UserOperation = UserOperation;
//# sourceMappingURL=userOperation.js.map