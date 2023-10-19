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

    test('packUserOpP256Signature-1', async () => {
        const soulwallet = new SoulWallet('https://localhost/', 'https://localhost/', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000');
        const signature = await soulwallet.packUserOpP256Signature({
            messageHash: '0xd45f9c36f42a0a149e3b77dec8597563235ff5463bf2c9af2f3e75cbd6eb6935',
            publicKey: {
                x: '0x6af4a0dbda88d45e4c6d0c97784671e44df2896a06b1200bf5ab9c2f54c7aca3',
                y: '0xa439bdd51a1af33dbd97cc917ba103ce0694e46c4ad56d079991a0307364f956'
            },
            r: '0x8da3e1aa957bbefb34926bf9ee3892e4a27ee96cd54309deb23ba0151fb255c7',
            s: '0xb2587548067b70aee24b25424aa515bd5b452424e3ab0451834da7d43928ee3e',
            authenticatorData: '0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000',
            clientDataSuffix: '","origin":"http://localhost:8000","crossOrigin":false}'
        }, '0x653120f7000065312f070000000000000000000000000000000000000000', undefined);
        expect(signature.isOk()).toBe(true);
    });
    test('packUserOpP256Signature-2', async () => {
        const soulwallet = new SoulWallet('https://localhost/', 'https://localhost/', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000');
        const signature = await soulwallet.packUserOpP256Signature({
            messageHash: '0xb494f6738df235dea972d9f88139ff6c1bec48a97cbf12a44e5f39562b20c34c',
            publicKey: {
                x: '0x6af4a0dbda88d45e4c6d0c97784671e44df2896a06b1200bf5ab9c2f54c7aca3',
                y: '0xa439bdd51a1af33dbd97cc917ba103ce0694e46c4ad56d079991a0307364f956'
            },
            r: '0xd2d8837118f0063d3552b02734a749e52484d397ed1b4e35f0e01668b9942bb3',
            s: '0x9a31d197eb2a3f05e616639efd116daa4cdd68d7124062cc22f83852e6422d6e',
            authenticatorData: '0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000',
            clientDataSuffix: '","origin":"http://localhost:8000","crossOrigin":false}'
        }, '0x653120f7000065312f070000000000000000000000000000000000000000', undefined);
        expect(signature.isOk()).toBe(true);
    });
    test('packUserOpP256Signature-3', async () => {
        const soulwallet = new SoulWallet('https://localhost/', 'https://localhost/', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000');
        const signature = await soulwallet.packUserOpP256Signature({
            messageHash: '0x371406a3e3929737d36f8dfe36befd83f090d4975a520320a6c471dd61b9810b',
            publicKey: {
                x: '0x6af4a0dbda88d45e4c6d0c97784671e44df2896a06b1200bf5ab9c2f54c7aca3',
                y: '0xa439bdd51a1af33dbd97cc917ba103ce0694e46c4ad56d079991a0307364f956'
            },
            r: '0x0d9263333c04157e474092d1700414e2fe5fe118948dddd17fd1f7c8f0f648f3',
            s: '0x774875e034be9cb380630b9311d85ff4837d424a32dd6800772ab022cbaae627',
            authenticatorData: '0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000',
            clientDataSuffix: '","origin":"http://localhost:8000","crossOrigin":false}'
        }, '0x653120f7000065312f070000000000000000000000000000000000000000', undefined);
        expect(signature.isOk()).toBe(true);
    });
});