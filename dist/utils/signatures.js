"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-08 09:32:34
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-08 14:46:13
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signatures = exports.SignatureMode = void 0;
const ethers_1 = require("ethers");
const address_1 = require("../defines/address");
/**
 *
 *
 * @export
 * @enum {number}
 */
var SignatureMode;
(function (SignatureMode) {
    SignatureMode[SignatureMode["owner"] = 0] = "owner";
    SignatureMode[SignatureMode["guardian"] = 1] = "guardian";
})(SignatureMode = exports.SignatureMode || (exports.SignatureMode = {}));
class Signatures {
    /**
     *
     *
     * @static
     * @param {string} hash
     * @param {SignatureMode} signatureMode
     * @param {string} signer
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @param {string} [aggregator=AddressZero]
     * @return {*}
     * @memberof Signatures
     */
    static packSignatureHash(hash, signer, signatureMode = SignatureMode.owner, validAfter = 0, validUntil = 0, aggregator = address_1.AddressZero) {
        //bytes32 _hash = keccak256(abi.encodePacked(hash,signatureMode,signer,validationData));
        const validationData = ethers_1.BigNumber.from(validUntil).shl(160)
            .add(ethers_1.BigNumber.from(validAfter).shl(160 + 48))
            .add(ethers_1.BigNumber.from(aggregator));
        const _hash = ethers_1.ethers.utils.solidityKeccak256(['bytes32', 'uint8', 'address', 'uint256'], [hash, signatureMode, signer, validationData]);
        return _hash;
    }
    /**
     *
     *
     * @static
     * @param {SignatureMode} signatureMode
     * @param {string} signer
     * @param {string} signature
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @param {string} [aggregator=AddressZero]
     * @return {*}
     * @memberof Signatures
     */
    static encodeSignature(signatureMode, signer, signature, validAfter = 0, validUntil = 0, aggregator = address_1.AddressZero) {
        const version = 0x0;
        const validationData = ethers_1.BigNumber.from(validUntil).shl(160)
            .add(ethers_1.BigNumber.from(validAfter).shl(160 + 48))
            .add(ethers_1.BigNumber.from(aggregator));
        let modeBit = 0b1;
        if (validationData.eq(0)) {
            modeBit = 0b0;
        }
        let packedSignature = ethers_1.BigNumber.from(version).and(0xff).toHexString();
        // 1byte data type
        {
            const datatype = ethers_1.BigNumber.from(signatureMode).shl(1).add(modeBit).and(0xff).toHexString().slice(2);
            packedSignature = packedSignature + datatype;
        }
        // data
        {
            if (signer.startsWith('0x')) {
                signer = signer.slice(2);
            }
            let data = signer;
            if (modeBit === 0b0) {
                // 0b0: dynamic data without validationData
            }
            else {
                // 0b1: dynamic data with validationData
                const _validationData = ethers_1.ethers.utils.hexZeroPad(ethers_1.ethers.utils.hexlify(validationData.toBigInt()), 32).slice(2);
                data = data + _validationData;
            }
            if (signature.startsWith('0x')) {
                signature = signature.slice(2);
            }
            signature = ethers_1.ethers.utils.hexZeroPad(ethers_1.ethers.utils.hexlify(signature.length / 2), 32).slice(2) + signature;
            data = data + signature;
            packedSignature = packedSignature + data;
        }
        return packedSignature;
    }
    /**
     *
     *
     * @static
     * @param {string} packedSignature
     * @return {*}
     * @memberof Signatures
     */
    static decodeSignature(packedSignature) {
        if (!packedSignature.startsWith('0x')) {
            packedSignature = '0x' + packedSignature;
        }
        const version = ethers_1.BigNumber.from(packedSignature.slice(0, 4));
        if (!version.eq(0)) {
            throw new Error('invalid version');
        }
        const datatype = ethers_1.BigNumber.from(packedSignature.slice(4, 6));
        const modeBit = datatype.and(0b1).toNumber();
        const signatureMode = datatype.shr(1).and(0b1111111);
        const data = packedSignature.slice(6);
        const signer = '0x' + data.slice(0, 40);
        let signatureOffset = 40;
        let validAfter = ethers_1.BigNumber.from(0);
        let validUntil = ethers_1.BigNumber.from(0);
        let aggregator = '0x0000000000000000000000000000000000000000';
        let validationData = ethers_1.BigNumber.from(0);
        if (modeBit === 0b0) {
            // 0b0: dynamic data without validAfter and validUntil
        }
        else {
            // 0b1: dynamic data with validAfter and validUntil
            signatureOffset = signatureOffset + 64;
            validationData = ethers_1.BigNumber.from('0x' + data.slice(40, 40 + 64));
            validAfter = validationData.shr(160 + 48).and(0xffffffffffff);
            validUntil = validationData.shr(160).and(0xffffffffffff);
            const _mask = ethers_1.BigNumber.from('0xffffffffffffffffffffffffffffffffffffffff');
            aggregator = validationData.and(_mask).toHexString();
        }
        const _signature = data.slice(signatureOffset);
        const signatureLength = ethers_1.BigNumber.from('0x' + _signature.slice(0, 64)).toNumber();
        const signature = '0x' + _signature.slice(64, 64 + signatureLength * 2);
        return {
            signatureMode,
            signer,
            signature,
            validationData,
            aggregator,
            validAfter,
            validUntil
        };
    }
}
exports.Signatures = Signatures;
//# sourceMappingURL=signatures.js.map