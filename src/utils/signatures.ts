/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-08 09:32:34
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-08 14:46:13
 */

import { BigNumber, ethers } from "ethers";
import { AddressZero } from "../defines/address";

/**
 * 
 *
 * @export
 * @enum {number}
 */
export enum SignatureMode {
    owner = 0x0,
    guardian = 0x1
}

export class Signatures {

    
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
    public static packSignatureHash(
        hash: string,
        signer: string,
        signatureMode: SignatureMode = SignatureMode.owner,
        validAfter: number = 0,
        validUntil: number = 0,
        aggregator: string = AddressZero
    ) {
        //bytes32 _hash = keccak256(abi.encodePacked(hash,signatureMode,signer,validationData));
        const validationData = BigNumber.from(validUntil).shl(160)
            .add(BigNumber.from(validAfter).shl(160 + 48))
            .add(BigNumber.from(aggregator));
        const _hash = ethers.utils.solidityKeccak256(
            ['bytes32', 'uint8', 'address', 'uint256'],
            [hash, signatureMode, signer, validationData]
        );
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
    public static encodeSignature(
        signatureMode: SignatureMode,
        signer: string,
        signature: string,
        validAfter: number = 0,
        validUntil: number = 0,
        aggregator: string = AddressZero,
    ) {
        const version = 0x0;

        const validationData = BigNumber.from(validUntil).shl(160)
            .add(BigNumber.from(validAfter).shl(160 + 48))
            .add(BigNumber.from(aggregator));

        let modeBit = 0b1;

        if (validationData.eq(0)) {
            modeBit = 0b0;
        }

        let packedSignature = BigNumber.from(version).and(0xff).toHexString();

        // 1byte data type
        {
            const datatype = BigNumber.from(signatureMode).shl(1).add(modeBit).and(0xff).toHexString().slice(2);
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
            } else {
                // 0b1: dynamic data with validationData
                const _validationData = ethers.utils.hexZeroPad(ethers.utils.hexlify(validationData.toBigInt()), 32).slice(2);
                data = data + _validationData;

            }

            if (signature.startsWith('0x')) {
                signature = signature.slice(2);
            }
            signature = ethers.utils.hexZeroPad(
                ethers.utils.hexlify(signature.length / 2),
                32
            ).slice(2) + signature;

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
    public static decodeSignature(packedSignature: string) {
        if (!packedSignature.startsWith('0x')) {
            packedSignature = '0x' + packedSignature;
        }
        const version = BigNumber.from(packedSignature.slice(0, 4));
        if (!version.eq(0)) {
            throw new Error('invalid version');
        }
        const datatype = BigNumber.from(packedSignature.slice(4, 6));
        const modeBit = datatype.and(0b1).toNumber();
        const signatureMode = datatype.shr(1).and(0b1111111);

        const data = packedSignature.slice(6);
        const signer = '0x' + data.slice(0, 40);
        let signatureOffset = 40;
        let validAfter: BigNumber = BigNumber.from(0);
        let validUntil: BigNumber = BigNumber.from(0);
        let aggregator: string = '0x0000000000000000000000000000000000000000';
        let validationData: BigNumber = BigNumber.from(0);
        if (modeBit === 0b0) {
            // 0b0: dynamic data without validAfter and validUntil
        } else {
            // 0b1: dynamic data with validAfter and validUntil
            signatureOffset = signatureOffset + 64;
            validationData = BigNumber.from('0x' + data.slice(40, 40 + 64));
            validAfter = validationData.shr(160 + 48).and(0xffffffffffff);
            validUntil = validationData.shr(160).and(0xffffffffffff);
            const _mask = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffff');
            aggregator = validationData.and(_mask).toHexString();
        }
        const _signature = data.slice(signatureOffset);
        const signatureLength = BigNumber.from('0x' + _signature.slice(0, 64)).toNumber();
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