import { Result, Ok, Err } from '@soulwallet/result';
import { Buffer } from 'node:buffer';
import {
    randomBytes,
    createCipheriv,
    createDecipheriv,
    scrypt
} from 'node:crypto';
import * as ethUtil from 'ethereumjs-util';

export class AES_256_GCM {
    private static readonly ALGORITHM = 'aes-256-gcm';
    private static readonly VERSION = '001';
    private static AUTH_TAG_BYTES = 8;

    private _keyBuffer: Buffer;
    constructor(keyBuffer: Buffer) {
        this._keyBuffer = keyBuffer;
    }


    public static async init(base64Key: string): Promise<Result<AES_256_GCM, Error>> {
        const key = await AES_256_GCM.importKey(base64Key);
        if (key.isErr()) {
            return new Err(key.ERR);
        }
        return new Ok(new AES_256_GCM(key.OK));
    }

    public destroy() {
        this._keyBuffer.fill(0);
    }

    public static async generateAndExportKey(): Promise<string> {
        const key = randomBytes(32); // 256 bits
        return key.toString('base64');
    }

    private static async importKey(strKey: string): Promise<Result<Buffer, Error>> {
        try {
            const keyBuffer = Buffer.from(strKey, 'base64');
            return new Ok(keyBuffer);
        } catch (error) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('Unknown error'));
            }
        }
    }

    public async encrypt(text: string): Promise<Result<string, Error>> {
        return this._encrypt(this._keyBuffer, text);
    }

    public async decrypt(encryptedTextWithIvAndTag: string): Promise<Result<string, Error>> {
        return this._decrypt(this._keyBuffer, encryptedTextWithIvAndTag);
    }

    private async _encrypt(keyBuffer: Buffer, text: string): Promise<Result<string, Error>> {
        //const key = scryptSync(password, 'salt', 32);
        try {
            const iv = randomBytes(16);
            const cipher = createCipheriv(AES_256_GCM.ALGORITHM, keyBuffer, iv, {
                authTagLength: AES_256_GCM.AUTH_TAG_BYTES
            });
            const encryptedText = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
            const authTag = cipher.getAuthTag();
            const versonBuffer = Buffer.from(AES_256_GCM.VERSION);
            return new Ok(Buffer.concat([versonBuffer, iv, encryptedText, authTag]).toString('base64'));
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

    private async _decrypt(keyBuffer: Buffer, encryptedTextWithIvAndTag: string): Promise<Result<string, Error>> {
        try {
            const data = Buffer.from(encryptedTextWithIvAndTag, 'base64');
            const version = data.subarray(0, 3).toString();
            if (version !== '001') {
                return new Err(new Error('unknow versoin'));
            }
            const iv = data.subarray(3, 19);
            const encryptedText = data.subarray(19, data.length - AES_256_GCM.AUTH_TAG_BYTES);
            const authTag = data.subarray(data.length - AES_256_GCM.AUTH_TAG_BYTES);
            const decipher = createDecipheriv(AES_256_GCM.ALGORITHM, keyBuffer, iv, {
                authTagLength: AES_256_GCM.AUTH_TAG_BYTES
            });
            decipher.setAuthTag(authTag);
            const decryptedText = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
            return new Ok(decryptedText.toString());
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

