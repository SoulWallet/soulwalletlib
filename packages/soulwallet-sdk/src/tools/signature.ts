import { TypeGuard } from './typeGuard.js';
import { Hex } from "./hex.js";
import { ethers } from 'ethers';
import { ECCPoint, SignkeyType } from '../interface/ISoulWallet.js';

export class HookInputData {
    /**
     * most important is guardHook address order
     *
     * @type {string[]}
     * @memberof HookInputData
     */
    guardHooks: string[] = [];

    /**
     *
     *
     * @type {Record<string, string>} key: guardHook address, value: input data
     * @memberof HookInputData
     */
    inputData: Record<string, string> = {};
}

export class Signature {
    /* 

    A:
        # `signType` 0x00:
        +----------------------------------------+
        |            raw signature               |
        +----------------------------------------+
        |             length:65                  |
        +----------------------------------------+

    B:
        # `dynamic structure` definition:
        +--------------------------------------------------+
        |      `signType`      |       `dynamic data`      |
        |----------------------+---------------------------|
        |      uint8 1byte     |             ...           |
        +--------------------------------------------------+

        # `signType` 0x01:
        - EOA signature with validationData ( validAfter and validUntil ) and Plugin guardHook input data
        +--------------------------------------------------------------------------------------+  
        |                                   dynamic data                                       |  
        +--------------------------------------------------------------------------------------+  
        |     validationData    |        signature        |    multi-guardHookInputData       |
        +-----------------------+--------------------------------------------------------------+  
        |    uint256 32 bytes   |   65 length signature   | dynamic data without length header |
        +--------------------------------------------------------------------------------------+

        +--------------------------------------------------------------------------------+  
        |                            multi-guardHookInputData                            |  
        +--------------------------------------------------------------------------------+  
        |   guardHookInputData  |  guardHookInputData   |   ...  |  guardHookInputData   |
        +-----------------------+--------------------------------------------------------+  
        |     dynamic data      |     dynamic data      |   ...  |     dynamic data      |
        +--------------------------------------------------------------------------------+

        +----------------------------------------------------------------------+  
        |                                guardHookInputData                    |  
        +----------------------------------------------------------------------+  
        |   guardHook address  |   input data length   |      input data       |
        +----------------------+-----------------------------------------------+  
        |        20bytes       |     6bytes(uint48)    |         bytes         |
        +----------------------------------------------------------------------+
        Note: The order of guardHookInputData must be the same as the order in PluginManager.guardHook()!


        # `signType` 0x02: (Not implemented yet)
        - EIP-1271 signature without validationData
        +-----------------------------------------------------------------+
        |                        dynamic data                             |
        +-----------------------------------------------------------------+
        |         signer       |  signature (dynamic with length header)  |
        +----------------------+------------------------------------------+
        |    address 20 byte   |       dynamic with length header         |
        +-----------------------------------------------------------------+



        +--------------------------------------------------------------------------------+  
        |                            multi-guardHookInputData                            |  
        +--------------------------------------------------------------------------------+  
        |   guardHookInputData  |  guardHookInputData   |   ...  |  guardHookInputData   |
        +-----------------------+--------------------------------------------------------+  
        |     dynamic data      |     dynamic data      |   ...  |     dynamic data      |
        +--------------------------------------------------------------------------------+

        +----------------------------------------------------------------------+  
        |                                guardHookInputData                    |  
        +----------------------------------------------------------------------+  
        |   guardHook address  |   input data length   |      input data       |
        +----------------------+-----------------------------------------------+  
        |        20bytes       |     6bytes(uint48)    |         bytes         |
        +----------------------------------------------------------------------+


         function _isValidUserOp(bytes32 userOpHash, bytes calldata userOpSignature)
            internal
            view
            returns (uint256 validationData, bool sigValid, bytes calldata guardHookInputData)
        {
            uint8 signType;
            bytes calldata signature;
            (signType, signature, validationData, guardHookInputData) = SignatureDecoder.decodeSignature(userOpSignature);
            bytes32 hash = _packSignatureHash(userOpHash, signType, validationData).toEthSignedMessageHash();
            (address recovered, ECDSA.RecoverError error) = ECDSA.tryRecover(hash, signature);
            if (error != ECDSA.RecoverError.NoError) {
                sigValid = false;
            } else {
                sigValid = _isOwner(recovered);
            }
        }
    */

    static onlyEOASignature(signature: string): void {
        if (TypeGuard.onlyBytes(signature).isErr() === true) throw new Error('invalid EOA signature');
        if (signature.length !== 132) {
            throw new Error('invalid EOA signature');
        }
    }


    static prePackSignature(signkeyType: SignkeyType, validationData: string, guardHookInputData?: HookInputData): string {
        let guardHookInputDataBytes: string = '';
        if (guardHookInputData !== undefined) {
            // guardHookInputData.guardHookInputData.key ∈ guardHookInputData.guardHooks

            // foreach guardHookInputData.guardHooks
            if (guardHookInputData.guardHooks.length === 0) {
                throw new Error('invalid guardHookInputData');
            }

            const guardHooks: string[] = [];
            const inputData: Record<string, string> = {};
            {
                for (let i = 0; i < guardHookInputData.guardHooks.length; i++) {
                    const guardianHookPluginAddress: string = guardHookInputData.guardHooks[i].toLocaleLowerCase()
                    if (TypeGuard.onlyAddress(guardianHookPluginAddress).isErr() === true) throw new Error('invalid guardHookInputData');
                    guardHooks.push(guardianHookPluginAddress);
                }
                for (const key in guardHookInputData.inputData) {
                    const guardianHookPluginAddress: string = key.toLocaleLowerCase();
                    if (TypeGuard.onlyAddress(guardianHookPluginAddress).isErr() === true) throw new Error('invalid guardHookInputData');
                    if (!guardHooks.includes(key)) {
                        throw new Error('invalid guardHookInputData');
                    }
                    const inputDataValue = guardHookInputData.inputData[key].toLocaleLowerCase();
                    if (TypeGuard.onlyBytes(inputDataValue).isErr() === true) throw new Error('invalid guardHookInputData');
                    inputData[key] = inputDataValue;
                }
            }

            for (let i = 0; i < guardHooks.length; i++) {
                const guardianHookPluginAddress: string = guardHooks[i];

                guardHookInputDataBytes += guardianHookPluginAddress.slice(2);
                const guardHookInputData = inputData[guardianHookPluginAddress].substring(2);
                const guardHookInputDataLength = guardHookInputData.length / 2;
                if (guardHookInputDataLength > Math.pow(2, 48 - 2)) {
                    throw new Error('invalid guardHookInputData');
                } else if (guardHookInputDataLength === 0) {
                    throw new Error('invalid guardHookInputData');
                }
                guardHookInputDataBytes += guardHookInputDataLength.toString(16).padStart(12, '0');
                guardHookInputDataBytes += inputData[guardianHookPluginAddress].substring(2);
            }
        }
        let packedSignature = '0x';
        let dataType = "00";
        if (guardHookInputDataBytes.length > 0) {
            dataType = "01";
            packedSignature += dataType;
            const _len = Hex.paddingZero(guardHookInputDataBytes.length / 2, 32);
            packedSignature += _len;
            packedSignature += guardHookInputDataBytes;
        } else {
            dataType = "00";
            packedSignature += dataType;
        }
        const _validationData = BigInt(validationData);
        const hasValidationData = _validationData > BigInt(0);
        let signatureType = "00";
        if (signkeyType === SignkeyType.EOA) {
            if (hasValidationData) {
                signatureType = "01";
            } else {
                signatureType = "00";
            }
        } else if (signkeyType === SignkeyType.P256) {
            if (hasValidationData) {
                signatureType = "03";
            } else {
                signatureType = "02";
            }
        } else {
            throw new Error('invalid signkeyType');
        }

        let _validationDataHex = '';
        if (hasValidationData) {
            // validationData to 32 bytes hex string
            _validationDataHex = Hex.paddingZero(_validationData, 32).slice(2);
        }
        return packedSignature + signatureType + _validationDataHex;
    }


    /**
     * pack EOA signature
     *
     * @static
     * @param {string} signature signature signature 65 bytes signature
     * @param {string} [validationData] validationData validationData 32 bytes validationData
     * @param {HookInputData} [guardHookInputData] key: guardHookPlugin address, value: input data. 
     * @return {*}  {string}
     * @memberof Signature
     */
    static packEOASignature(signature: string, validationData: string, guardHookInputData?: HookInputData): string {
        Signature.onlyEOASignature(signature);
        const prePackedSignature = Signature.prePackSignature(SignkeyType.EOA, validationData, guardHookInputData);
        return (prePackedSignature + signature.substring(2)).toLowerCase();
    }

    /**
     * pack P256 signature
     *
     * @static
     * @param {{
     *             publicKey: ECCPoint,
     *             r: string,
     *             s: string,
     *             authenticatorData: string,
     *             clientDataSuffix: string
     *         }} signatureData
     * @param {string} validationData
     * @param {HookInputData} [guardHookInputData]
     * @return {*}  {string}
     * @memberof Signature
     */
    static packP256Signature(
        signatureData: {
            publicKey: ECCPoint,
            r: string,
            s: string,
            authenticatorData: string,
            clientDataSuffix: string
        },
        validationData: string,
        guardHookInputData?: HookInputData
    ): string {
        TypeGuard.onlyBytes32(signatureData.publicKey.x);
        TypeGuard.onlyBytes32(signatureData.publicKey.y);
        TypeGuard.onlyBytes32(signatureData.r);
        TypeGuard.onlyBytes32(signatureData.s);
        TypeGuard.onlyBytes(signatureData.authenticatorData);
        if (!signatureData.clientDataSuffix.startsWith('"')) {
            throw new Error('invalid clientDataSuffix');
        }
        let packedSignature = Signature.prePackSignature(SignkeyType.P256, validationData, guardHookInputData);

        packedSignature += signatureData.publicKey.x.slice(2);
        packedSignature += signatureData.publicKey.y.slice(2);
        packedSignature += signatureData.r.slice(2);
        packedSignature += signatureData.s.slice(2);

        // abi.encode(authenticatorData,clientDataSuffix)
        packedSignature += (new ethers.AbiCoder().encode(["bytes", "string"], [signatureData.authenticatorData, signatureData.clientDataSuffix])).slice(2);

        return packedSignature.toLowerCase();
    }

    /**
     *
     *
     * @static
     * @param {string} userOpHash
     * @param {number} [validAfter]
     * @param {number} [validUntil]
     * @return {*}  {string}
     * @memberof Signature
     */
    static packUserOpHash(userOpHash: string, validAfter?: number, validUntil?: number): {
        packedUserOpHash: string,
        validationData: string
    } {
        if (TypeGuard.onlyBytes32(userOpHash).isErr() === true) throw new Error('invalid userOpHash');

        if (validAfter !== undefined && validUntil !== undefined) {
            if (validAfter >= validUntil) {
                throw new Error('invalid validAfter and validUntil');
            }
        } else if (validAfter !== undefined || validUntil !== undefined) {
            throw new Error('invalid validAfter and validUntil');
        } else {
            return {
                packedUserOpHash: userOpHash,
                validationData: '0x0'
            };
        }

        if (!Number.isSafeInteger(validAfter)) {
            throw new Error('invalid validAfter');
        }
        if (!Number.isSafeInteger(validUntil)) {
            throw new Error('invalid validUntil');
        }

        // max to 2^(48 - 2) = 2 years
        if (validAfter > Math.pow(2, 48 - 2)) {
            throw new Error('invalid validAfter');
        }
        if (validUntil > Math.pow(2, 48 - 2)) {
            throw new Error('invalid validUntil');
        }

        let validationData = BigInt(0);
        //const aggregator = BigInt(0); 
        const _validAfter = BigInt(validAfter);
        const _validUntil = BigInt(validUntil);
        validationData = (_validUntil << BigInt(160)) + (_validAfter << BigInt(160 + 48))  /*.add(aggregator)*/;
        const validationDataHex = `0x${validationData.toString(16)}`;

        //  packedUserOpHash = keccak256(abi.encodePacked(hash, validationData));
        const _packedUserOpHash = ethers.solidityPacked(["bytes32", "uint256"], [userOpHash, validationDataHex]);
        // const abiEncoded = new ethers.AbiCoder().encode(["bytes32", "uint256"], [userOpHash, validationData]);
        // const keccak256 = ethers.keccak256(abiEncoded);
        // const _packedUserOpHash = keccak256(Buffer.concat([Buffer.from(userOpHash.slice(2), 'hex'), validationData.toBuffer()]));
        return {
            packedUserOpHash: ethers.keccak256(_packedUserOpHash),
            validationData: validationDataHex
        };

    }

}