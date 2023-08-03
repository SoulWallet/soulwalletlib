import { Result, Ok, Err } from '@soulwallet/result';
import { IStorage, Serializable, StorageLocation } from './interface/IStorage.js';

export class Storage implements IStorage {

    private _chromeExtension = false;
    private _signerStorageKey: string = "@soulwallet/keyvault:signer";
    private _dataStorageKey: string = "@soulwallet/keyvault:data";

    constructor() {
        if (typeof window !== 'undefined') {
            if (typeof window.localStorage === 'undefined') {
                throw new Error('localStorage is not available');
            }
            // extension environment
            const _window = window as any;
            if (typeof _window.chrome !== 'undefined' && _window.chrome.runtime && _window.chrome.runtime.id) {
                // check if chrome.storage.local is available
                if (typeof _window.chrome.storage !== 'undefined' && _window.chrome.storage.local) {
                    this._chromeExtension = true;
                }
            }
        } else {
            throw new Error('Unknown environment');
        }
    }


    // private async safeKey(str: string): Promise<string> {
    //     str = '@soulwallet/keyvault:' + str;
    //     // SHA-256
    //     const encoder = new TextEncoder();
    //     const data = encoder.encode(str);
    //     const digestBuffer = await window.crypto.subtle.digest('SHA-256', data);
    //     // to hex 
    //     const digestArray = Array.from(new Uint8Array(digestBuffer));
    //     const digestHex = digestArray.map(b => b.toString(16).padStart(2, '0')).join('');
    //     return digestHex;
    // }

    private paddingTo1MB(data: string): Result<string, Error> {
        // padding to 1MB
        const MB = 1024 * 1024;
        const encoder = new TextEncoder();
        const len = encoder.encode(data).length;
        if (len > MB) {
            return new Err(new Error('data size over 1MB'));
        }
        const padding = ' '.repeat(MB - len);
        return new Ok(data + padding);
    }


    public async save<T extends Serializable>(location: StorageLocation, key: string, value: T): Promise<Result<void, Error>> {
        try {
            let data = await this._read(location);
            if (data.isErr()) {
                return new Err(data.ERR);
            }
            data.OK.set(key, JSON.stringify(value));
            let re = await this._save(location, data.OK);
            if (re.isErr()) {
                return new Err(re.ERR);
            }
            return new Ok(void (0));
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }


    public async remove(location: StorageLocation, key: string): Promise<Result<void, Error>> {
        try {
            let data = await this._read(location);
            if (data.isErr()) {
                return new Err(data.ERR);
            }
            data.OK.delete(key);
            let re = await this._save(location, data.OK);
            if (re.isErr()) {
                return new Err(re.ERR);
            }
            return new Ok(void (0));
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

    public async listKeys(location: StorageLocation): Promise<Result<string[], Error>> {
        try {
            let data = await this._read(location);
            if (data.isErr()) {
                return new Err(data.ERR);
            }
            return new Ok(Array.from(data.OK.keys()));
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

    public async load<T extends Serializable>(location: StorageLocation, key: string, defaultValue: T): Promise<Result<T, Error>> {
        try {
            let data = await this._read(location);
            if (data.isErr()) {
                return new Err(data.ERR);
            }
            if (data.OK.has(key)) {
                const re = JSON.parse(data.OK.get(key) as string) as T;
                return new Ok(re);
            } else {
                return new Ok(defaultValue);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

    private async _save(location: StorageLocation, data: Map<string, string>): Promise<Result<void, Error>> {
        try {
            let _data = JSON.stringify(Array.from(data));
            const re = this.paddingTo1MB(_data);
            if (re.isErr()) {
                return new Err(re.ERR);
            }
            let key = '';
            if (location === StorageLocation.Data) {
                key = this._dataStorageKey;
            } else if (location === StorageLocation.Signer) {
                key = this._signerStorageKey;
            } else {
                throw new Error('unknown location');
            }

            if (this._chromeExtension) {
                return await this.chromeStorageSet(key, re.OK);
            } else {
                return await this.localStorageSet(key, re.OK);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }

    }
    private async _read(location: StorageLocation): Promise<Result<Map<string, string>, Error>> {
        try {
            let key = '';
            if (location === StorageLocation.Data) {
                key = this._dataStorageKey;
            } else if (location === StorageLocation.Signer) {
                key = this._signerStorageKey;
            } else {
                throw new Error('unknown location');
            }
            let re;
            if (this._chromeExtension) {
                re = await this.chromeStorageGet(key);
            } else {
                re = await this.localStorageGet(key);
            }
            if (re.isErr()) {
                return new Err(re.ERR);
            }
            return new Ok(new Map(JSON.parse(re.OK)));
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

    private async localStorageSet(key: string, value: string): Promise<Result<void, Error>> {
        try {
            window.localStorage.setItem(key, value);
            return new Ok(void (0));
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }
    private async localStorageGet(key: string): Promise<Result<string, Error>> {
        try {
            const val = window.localStorage.getItem(key);
            if (typeof val === 'undefined' || val === null) {
                return new Ok('[]');
            }
            return new Ok(val);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

    private chromeStorageSet(key: string, value: string): Promise<Result<void, Error>> {
        const _window = window as any;
        const storage = _window.chrome.storage.local;
        return new Promise((resolve, _) => {
            storage.set({ key: value }, () => {
                if (_window.chrome.runtime.lastError) {
                    resolve(new Err(new Error(_window.chrome.runtime.lastError.message)));
                } else {
                    resolve(new Ok(void (0)));
                }
            });
        });
    }
    private chromeStorageGet(key: string): Promise<Result<string, Error>> {
        const _window = window as any;
        const storage = _window.chrome.storage.local;
        return new Promise((resolve, _) => {
            storage.get([key], (result: any) => {
                if (_window.chrome.runtime.lastError) {
                    resolve(new Err(new Error(_window.chrome.runtime.lastError.message)));
                } else {
                    if (typeof result.key === 'undefined') {
                        resolve(new Ok('[]'));
                    } else {
                        resolve(new Ok(result.key));
                    }
                }
            });
        });
    }

    public async selfDestruct(): Promise<Result<void, Error>> {
        try {
            if (this._chromeExtension) {
                await this.chromeStorageSet(this._dataStorageKey, '[]');
                await this.chromeStorageSet(this._signerStorageKey, '[]');
            } else {
                window.localStorage.setItem(this._dataStorageKey, '[]');
                window.localStorage.setItem(this._signerStorageKey, '[]');
            }
            return new Ok(void (0));
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
    }

}