import { TypeGuard } from './typeGuard';
import { BN } from "bn.js";

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
        TypeGuard.onlyBytes(signature);
        if (signature.length !== 132) {
            throw new Error('invalid EOA signature');
        }
    }

    /**
     * 
     *
     * @static
     * @param {string} signature 65 bytes signature
     * @param {number} [signatureValidPeriod] 0 means no validation, seconds
     * @param {Record<string, string>} [guardHookInputData] key: guardHookPlugin address, value: input data. 
     * @return {*}  {string} packed signature
     * @memberof Signature
     */
    static packSignature(signature: string, signatureValidPeriod?: number, guardHookInputData?: HookInputData): string {
        Signature.onlyEOASignature(signature);
        if (signatureValidPeriod === undefined && guardHookInputData === undefined) {
            return signature;
        }
        if (signatureValidPeriod === undefined) {
            signatureValidPeriod = 0;
        }
        if (!Number.isSafeInteger(signatureValidPeriod)) {
            throw new Error('invalid signatureValidPeriod');
        }

        // max to 2^(48 - 2) = 2 years
        if (signatureValidPeriod > Math.pow(2, 48 - 2)) {
            throw new Error('invalid signatureValidPeriod');
        }

        let validationData = new BN(0);
        //const aggregator = new BN(0);
        if (signatureValidPeriod > 0) {
            const validAfter = new BN(Math.floor(Date.now() / 1000));
            const validUntil = validAfter.add(new BN(signatureValidPeriod));
            validationData = validUntil.shln(160).add(validAfter.shln(160 + 48))
            /*.add(aggregator)*/;
        }

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
                    TypeGuard.onlyAddress(guardianHookPluginAddress);
                    guardHooks.push(guardianHookPluginAddress);
                }
                for (let key in guardHookInputData.inputData) {
                    const guardianHookPluginAddress: string = key.toLocaleLowerCase();
                    TypeGuard.onlyAddress(guardianHookPluginAddress);
                    if (!guardHooks.includes(key)) {
                        throw new Error('invalid guardHookInputData');
                    }
                    const inputDataValue = guardHookInputData.inputData[key].toLocaleLowerCase();
                    TypeGuard.onlyBytes(inputDataValue);
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
        if (guardHookInputDataBytes.length > 0 || validationData.gt(new BN(0))) {
            const signType = "01";
            // validationData to 32 bytes hex string
            const validationDataHex = validationData.toString(16).padStart(64, '0');
            const packedSignature = `0x${signType}${validationDataHex}${signature.substring(2)}${guardHookInputDataBytes}`;
            return packedSignature;
        } else {
            return signature;
        }
    }
}