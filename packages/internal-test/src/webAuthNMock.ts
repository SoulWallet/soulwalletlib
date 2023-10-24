import { ethers } from 'ethers';
import { webcrypto } from 'node:crypto';

export class WebAuthNMock {

    /**
   * base64Url
   *
   * @static
   * @param {string} data
   * @return {*} 
   * @memberof Base64Url
   */
    private static base64Url(data: string) {
        return btoa(data).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }

    /**
     * base64UrlToBytes32
     *
     * @static
     * @param {string} bytes32Str
     * @return {*} 
     * @memberof Base64Url
     */
    private static bytes32Tobase64Url(bytes32Str: string) {
        const userOpHashForBytes = bytes32Str.startsWith('0x') ? bytes32Str.slice(2) : bytes32Str;
        const byteArray = new Uint8Array(32);
        for (let i = 0; i < 64; i += 2) {
            byteArray[i / 2] = parseInt(userOpHashForBytes.substring(i, i + 2), 16);
        }
        return WebAuthNMock.base64Url(String.fromCharCode(...byteArray));
    }

    private static uint8ArrayToHex(uint8Array: Uint8Array): string {
        return '0x' + Array.from(uint8Array).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    private static arrayBufferToBase64(buffer: ArrayBuffer) {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return Buffer.from(binary, 'binary').toString('base64');
    }
    private static base64ToArrayBuffer(base64: string) {
        const binary_string = Buffer.from(base64, 'base64').toString('binary');
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }

    public static async createPassKey() {
        const algoParams = {
            name: 'ECDSA',
            namedCurve: 'P-256',
            hash: 'SHA-256'
        };
        const keyPair = await webcrypto.subtle.generateKey(algoParams, true, ['sign', 'verify']);
        let X: bigint;
        let Y: bigint;
        // keyPair.publicKey to x,y
        const publicKeyBuffer = await webcrypto.subtle.exportKey('spki', keyPair.publicKey);
        if (publicKeyBuffer.byteLength === 91) {
            const x = publicKeyBuffer.slice(27, 59);
            const y = publicKeyBuffer.slice(59, 91);
            X = BigInt(WebAuthNMock.uint8ArrayToHex(new Uint8Array(x)));
            Y = BigInt(WebAuthNMock.uint8ArrayToHex(new Uint8Array(y)));
        } else {
            throw new Error('Unexpected public key format');
        }


        const privateKeyBase64 = WebAuthNMock.arrayBufferToBase64(await webcrypto.subtle.exportKey('pkcs8', keyPair.privateKey));
        const publicKeyBase64 = WebAuthNMock.arrayBufferToBase64(await webcrypto.subtle.exportKey('spki', keyPair.publicKey));

        return {
            privateKeyBase64,
            publicKeyBase64,
            X,
            Y
        };
    }

    public static async signPassKey(privateKeyBase64: string, publicKeyBase64: string, userOpHash: string) {

        const algoParams = {
            name: 'ECDSA',
            namedCurve: 'P-256',
            hash: 'SHA-256'
        };

        const publicKey: webcrypto.CryptoKey = await webcrypto.subtle.importKey(
            'spki',
            WebAuthNMock.base64ToArrayBuffer(publicKeyBase64),
            algoParams,
            true,
            ['verify']
        );
        const privateKey: webcrypto.CryptoKey = await webcrypto.subtle.importKey(
            'pkcs8',
            WebAuthNMock.base64ToArrayBuffer(privateKeyBase64),
            algoParams,
            true,
            ['sign']
        );
        const keyPair = {
            publicKey,
            privateKey
        };
        const challengeBase64 = WebAuthNMock.bytes32Tobase64Url(userOpHash);
        const clientDataSuffix = '","origin":"https://webauthn-mock.soulwallet.io","crossOrigin":false}';
        const clientDataJSON = `{"type":"webauthn.get","challenge":"${challengeBase64}${clientDataSuffix}`;
        const jsonBytes = ethers.toUtf8Bytes(clientDataJSON);
        const jsonBytesHex = '0x' + Array.from(jsonBytes).map(b => b.toString(16).padStart(2, '0')).join('');
        let clientDataJSONHash: string = ethers.sha256(jsonBytesHex);
        let authenticatorData = '0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000';
        if (clientDataJSONHash.startsWith('0x')) clientDataJSONHash = clientDataJSONHash.slice(2);
        const message = authenticatorData + clientDataJSONHash;
        const _message = ethers.sha256(message);

        const signature = await webcrypto.subtle.sign(
            algoParams,
            keyPair.privateKey,
            Buffer.from(message.slice(2), 'hex')
        );
        const isValid = await webcrypto.subtle.verify(algoParams, keyPair.publicKey, signature, Buffer.from(message.slice(2), 'hex'));
        if (isValid !== true) {
            throw new Error('sign failed');
        }

        const r = WebAuthNMock.uint8ArrayToHex(new Uint8Array(signature.slice(0, 32)));
        const s = WebAuthNMock.uint8ArrayToHex(new Uint8Array(signature.slice(32, 64)));
        return {
            r,
            s,
            authenticatorData,
            clientDataSuffix
        }
    }
}