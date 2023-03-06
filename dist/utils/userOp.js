"use strict";
/**
 * fork from:
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/test/UserOp.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOp = exports.SignatureMode = void 0;
const utils_1 = require("ethers/lib/utils");
const ethers_1 = require("ethers");
var SignatureMode;
(function (SignatureMode) {
    SignatureMode[SignatureMode["owner"] = 0] = "owner";
    SignatureMode[SignatureMode["guardian"] = 1] = "guardian";
})(SignatureMode = exports.SignatureMode || (exports.SignatureMode = {}));
class UserOp {
    constructor() {
    }
    static encode(typevalues, forSignature) {
        const types = typevalues.map(typevalue => typevalue.type === 'bytes' && forSignature ? 'bytes32' : typevalue.type);
        const values = typevalues.map((typevalue) => typevalue.type === 'bytes' && forSignature ? (0, utils_1.keccak256)(typevalue.val) : typevalue.val);
        return utils_1.defaultAbiCoder.encode(types, values);
    }
    /**
     * @description: pack user operation for call data
     *
     * @param {UserOperation} op
     * @return {*}  {Uint8Array}
     * @memberof UserOp
     */
    static packUserOpForCallData(op) {
        let mockSignature = false;
        if (op.signature === '0x') {
            mockSignature = true;
            // Single signature
            op.signature = '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000';
        }
        const packed = this.packUserOp(op, false);
        if (mockSignature) {
            op.signature = '0x';
        }
        return packed;
    }
    static callDataCost(op) {
        if (!ethers_1.ethers.utils.isAddress(op.sender)) {
            return 0;
        }
        const packed = ethers_1.ethers.utils.arrayify(this.packUserOpForCallData(op));
        const lengthInWord = (packed.length + 31) / 32;
        const callDataCost = packed.map(x => x === 0 ?
            this.DefaultGasOverheads.zeroByte :
            this.DefaultGasOverheads.nonZeroByte).reduce((sum, x) => sum + x);
        const ret = Math.round(callDataCost +
            this.DefaultGasOverheads.fixed / this.DefaultGasOverheads.bundleSize +
            this.DefaultGasOverheads.perUserOp +
            this.DefaultGasOverheads.perUserOpWord * lengthInWord);
        return ret;
    }
    static packUserOp(op, forSignature = true) {
        op.alignment();
        if (forSignature) {
            // lighter signature scheme (must match UserOperation#pack): do encode a zero-length signature, but strip afterwards the appended zero-length value
            const userOpType = {
                components: [
                    { type: 'address', name: '_sender' },
                    { type: 'uint256', name: '_nonce' },
                    { type: 'bytes', name: '_initCode' },
                    { type: 'bytes', name: '_callData' },
                    { type: 'uint256', name: '_callGasLimit' },
                    { type: 'uint256', name: '_verificationGasLimit' },
                    { type: 'uint256', name: '_preVerificationGas' },
                    { type: 'uint256', name: '_maxFeePerGas' },
                    { type: 'uint256', name: '_maxPriorityFeePerGas' },
                    { type: 'bytes', name: '_paymasterAndData' },
                    { type: 'bytes', name: '_signature' }
                ],
                name: 'userOp',
                type: 'tuple'
            };
            let encoded = utils_1.defaultAbiCoder.encode([userOpType], [Object.assign(Object.assign({}, op), { _signature: '0x' })]);
            // remove leading word (total length) and trailing word (zero-length signature)
            encoded = '0x' + encoded.slice(66, encoded.length - 64);
            return encoded;
        }
        const typevalues = [
            { type: 'address', val: op.sender },
            { type: 'uint256', val: op.nonce },
            { type: 'bytes', val: op.initCode },
            { type: 'bytes', val: op.callData },
            { type: 'uint256', val: op.callGasLimit },
            { type: 'uint256', val: op.verificationGasLimit },
            { type: 'uint256', val: op.preVerificationGas },
            { type: 'uint256', val: op.maxFeePerGas },
            { type: 'uint256', val: op.maxPriorityFeePerGas },
            { type: 'bytes', val: op.paymasterAndData }
        ];
        if (!forSignature) {
            // for the purpose of calculating gas cost, also hash signature
            typevalues.push({ type: 'bytes', val: op.signature });
        }
        return this.encode(typevalues, forSignature);
    }
    static getUserOpHash(op, entryPointAddress, chainId) {
        const userOpHash = (0, utils_1.keccak256)(this.packUserOp(op, true));
        const enc = utils_1.defaultAbiCoder.encode(['bytes32', 'address', 'uint256'], [userOpHash, entryPointAddress, chainId]);
        return (0, utils_1.keccak256)(enc);
    }
    /**
     * sign a user operation with the UserOpHash signature
     * @param signAddress signer address
     * @param signature the signature of the UserOpHash
     * @param validAfter the signature is valid after this block time
     * @param validUntil the signature is valid until this block time
     * @returns signature
     */
    static signUserOpWithPersonalSign(signAddress, signature, validAfter = 0, validUntil = 0) {
        const enc = utils_1.defaultAbiCoder.encode(['uint8', 'address', 'uint48', 'uint48', 'bytes'], [
            SignatureMode.owner,
            signAddress,
            validAfter,
            validUntil,
            signature
        ]);
        return enc;
    }
    static payMasterSignHash(op) {
        return (0, utils_1.keccak256)(utils_1.defaultAbiCoder.encode([
            'address',
            'uint256',
            'bytes32',
            'bytes32',
            'uint256',
            'uint',
            'uint',
            'uint256',
            'uint256',
            'address', // paymaster
        ], [
            op.sender,
            op.nonce,
            (0, utils_1.keccak256)(op.initCode),
            (0, utils_1.keccak256)(op.callData),
            op.callGasLimit,
            op.verificationGasLimit,
            op.preVerificationGas,
            op.maxFeePerGas,
            op.maxPriorityFeePerGas,
            op.paymasterAndData.substring(0, 42),
        ]));
    }
}
exports.UserOp = UserOp;
// define in bundler (https://github.com/eth-infinitism/bundler/blob/main/packages/sdk/src/calcPreVerificationGas.ts#L44)
UserOp.DefaultGasOverheads = {
    fixed: 21000,
    perUserOp: 18300,
    perUserOpWord: 4,
    zeroByte: 4,
    nonZeroByte: 16,
    bundleSize: 1,
    sigSize: 65
};
//# sourceMappingURL=userOp.js.map