import { Result, Ok, Err } from '@soulwallet/result';


/* 

   Using the Web Crypto API in the browser environment is not just because of its high performance,
   but more importantly, it provides memory-invisible key storage: CryptoKey

*/

export class AES_256_GCM {
    private static VERSION = '001';
    private static AUTH_TAG_BYTES = 8;
    private static AUTH_TAG_BITS = 8 * AES_256_GCM.AUTH_TAG_BYTES;
    private static ALGORITHM = { name: 'AES-GCM', length: 256, tagLength: AES_256_GCM.AUTH_TAG_BITS };

    private _cryptoKey: CryptoKey | undefined;
    constructor(cryptoKey: CryptoKey) {
        this._cryptoKey = cryptoKey;
    }


    public static async init(base64Key: string): Promise<Result<AES_256_GCM, Error>> {
        const key = await AES_256_GCM.importKey(base64Key);
        if (key.isErr()) {
            return new Err(key.ERR);
        }
        return new Ok(new AES_256_GCM(key.OK));
    }

    public destroy() {
        this._cryptoKey = undefined;
    }

    public static async generateAndExportKey(): Promise<string> {
        const key = await window.crypto.subtle.generateKey(
            { name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]
        );
        const jwk = await window.crypto.subtle.exportKey("jwk", key);
        if (!jwk.k) {
            throw new Error('can not generate AES256GCM key');
        }
        return jwk.k;
    }

    private static async importKey(strKey: string): Promise<Result<CryptoKey, Error>> {
        try {
            const key = await window.crypto.subtle.importKey(
                "jwk",
                { "alg": "A256GCM", "ext": true, "k": strKey, "key_ops": ["encrypt", "decrypt"], "kty": "oct" },
                { name: "AES-GCM", },
                false/* highlight */,
                ["encrypt", "decrypt"]
            );
            return new Ok(key);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }

    }

    private static uint8ArrayToBase64(bytes: Uint8Array): Result<string, Error> {
        try {
            let binary = '';
            const len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return new Ok(window.btoa(binary));
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

    private static base64ToUint8Array(base64: string): Result<Uint8Array, Error> {
        try {
            const binary = window.atob(base64);
            const len = binary.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binary.charCodeAt(i);
            }
            return new Ok(bytes);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

    public async encrypt(text: string): Promise<Result<string, Error>> {
        try {
            return this._encrypt(this._cryptoKey!, text);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

    public async decrypt(encryptedTextWithIvAndTag: string): Promise<Result<string, Error>> {
        try {
            return this._decrypt(this._cryptoKey!, encryptedTextWithIvAndTag);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

    private async _encrypt(keyBuffer: CryptoKey, text: string): Promise<Result<string, Error>> {
        try {
            const iv = window.crypto.getRandomValues(new Uint8Array(16));
            const encoded = new TextEncoder().encode(text);
            const encryptedText = await window.crypto.subtle.encrypt(
                {
                    ...AES_256_GCM.ALGORITHM,
                    iv: iv
                },
                keyBuffer,
                encoded
            );
            const versonBuffer = new TextEncoder().encode(AES_256_GCM.VERSION);
            const combinedBuffer = new Uint8Array(3 /*versonBuffer.length*/ + 16 /*iv.length*/ + encryptedText.byteLength);
            combinedBuffer.set(versonBuffer, 0);
            combinedBuffer.set(iv, 3);
            combinedBuffer.set(new Uint8Array(encryptedText), 3 /*versonBuffer.length*/ + 16 /*iv.length*/);
            const encryptedTextWithIvAndTag = await AES_256_GCM.uint8ArrayToBase64(combinedBuffer);
            return encryptedTextWithIvAndTag;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

    private async _decrypt(keyBuffer: CryptoKey, encryptedTextWithIvAndTag: string): Promise<Result<string, Error>> {
        try {
            const u8Arrary = await AES_256_GCM.base64ToUint8Array(encryptedTextWithIvAndTag);
            if (u8Arrary.isErr()) {
                return new Err(u8Arrary.ERR);
            }
            const data = u8Arrary.OK;
            const version = new TextDecoder().decode(data.subarray(0, 3));
            if (version !== '001') {
                return new Err(new Error('unknow versoin'));
            }
            const iv = data.subarray(3, 19);
            const encryptedText = data.subarray(19);
            const decrypted = await window.crypto.subtle.decrypt(
                {
                    ...AES_256_GCM.ALGORITHM,
                    iv: iv
                },
                keyBuffer,
                encryptedText
            );
            const decryptedText = new TextDecoder().decode(decrypted);
            return new Ok(decryptedText);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }
}


export class ECDSA {

}