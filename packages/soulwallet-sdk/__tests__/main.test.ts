import {
    SoulWallet,
    UserOperation,
    UserOpUtils,
    UserOpErrors,
    UserOpErrorCodes,
    L1KeyStore,
    Ok, Err, Result,
    UserOpReceipt,
    UserOpDetail,
    UserOpGas,
    Bundler,
    Transaction,
    KeyStoreInfo,
    GuardianSignature,
    KeyStoreTypedDataType,
    InitialKey,
    ECCPoint,
    SignkeyType,
    P256Lib,
    WebAuthN
} from '..';
import { describe, expect, test } from '@jest/globals';

describe('SDK', () => {
    test('P256Lib', () => {
        //uint256 Qx = uint256(0xe89e8b4be943fadb4dc599fe2e8af87a79b438adde328a3b72d43324506cd5b6);
        //uint256 Qy = uint256(0x4fbfe4a2f9934783c3b1af712ee87abc08f576e79346efc3b8355d931bd7b976);
        const point = P256Lib.ec_recover_r1(
            BigInt('0x180be1152bd871c82ea73f39977963ee157e10fbfff9d7252e324449b3a08848'),
            BigInt(28),
            BigInt('0x2ae3ddfe4cc414dc0fad7ff3a5c960d1cee1211722d3099ade76e5ac1826731a'),
            BigInt('0x87e5d654f357e4cd6cb52512b2da4d91eae0ae48e9d892ce532b9352f63a55d6')
        );
        expect(point.x).toBe(BigInt('0xe89e8b4be943fadb4dc599fe2e8af87a79b438adde328a3b72d43324506cd5b6'));
        expect(point.y).toBe(BigInt('0x4fbfe4a2f9934783c3b1af712ee87abc08f576e79346efc3b8355d931bd7b976'));
    });
    test('WebAuthN-recover', () => {
        // recover(rawMessage: string, r: string, s: string)
        const p = WebAuthN.recover('0x180be1152bd871c82ea73f39977963ee157e10fbfff9d7252e324449b3a08848', '0x2ae3ddfe4cc414dc0fad7ff3a5c960d1cee1211722d3099ade76e5ac1826731a', '0x87e5d654f357e4cd6cb52512b2da4d91eae0ae48e9d892ce532b9352f63a55d6');
        expect(p[1].x).toBe('0xe89e8b4be943fadb4dc599fe2e8af87a79b438adde328a3b72d43324506cd5b6');
        expect(p[1].y).toBe('0x4fbfe4a2f9934783c3b1af712ee87abc08f576e79346efc3b8355d931bd7b976');
    });
    test('WebAuthN-recoverWebAuthN', () => {
        // recover(rawMessage: string, r: string, s: string)
        const p = WebAuthN.recoverWebAuthN('0x83714056da6e6910b51595330c2c2cdfbf718f2deff5bdd84b95df7a7f36f6dd', '0x2ae3ddfe4cc414dc0fad7ff3a5c960d1cee1211722d3099ade76e5ac1826731a', '0x87e5d654f357e4cd6cb52512b2da4d91eae0ae48e9d892ce532b9352f63a55d6', '0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000', "\",\"origin\":\"http://localhost:5500\",\"crossOrigin\":false}");
        expect(p[1].x).toBe('0xe89e8b4be943fadb4dc599fe2e8af87a79b438adde328a3b72d43324506cd5b6');
        expect(p[1].y).toBe('0x4fbfe4a2f9934783c3b1af712ee87abc08f576e79346efc3b8355d931bd7b976');
    });
    test('packUserOpP256Signature', async () => {
        const soulwallet = new SoulWallet('https://localhost/', 'https://localhost/', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000');
        const signature = await soulwallet.packUserOpP256Signature({
            messageHash: '0x83714056da6e6910b51595330c2c2cdfbf718f2deff5bdd84b95df7a7f36f6dd',
            publicKey: {
                x: '0xe89e8b4be943fadb4dc599fe2e8af87a79b438adde328a3b72d43324506cd5b6',
                y: '0x4fbfe4a2f9934783c3b1af712ee87abc08f576e79346efc3b8355d931bd7b976'
            },
            r: '0x2ae3ddfe4cc414dc0fad7ff3a5c960d1cee1211722d3099ade76e5ac1826731a',
            s: '0x87e5d654f357e4cd6cb52512b2da4d91eae0ae48e9d892ce532b9352f63a55d6',
            authenticatorData: '0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000',
            clientDataSuffix: '","origin":"http://localhost:5500","crossOrigin":false}'
        }, '0x00', undefined);
        expect(signature.isOk()).toBe(true);
        const expectSignature = '0x00022ae3ddfe4cc414dc0fad7ff3a5c960d1cee1211722d3099ade76e5ac1826731a87e5d654f357e4cd6cb52512b2da4d91eae0ae48e9d892ce532b9352f63a55d61c0025000049960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000222c226f726967696e223a22687474703a2f2f6c6f63616c686f73743a35353030222c2263726f73734f726967696e223a66616c73657d';
        expect(signature.OK).toBe(expectSignature);
    });
});