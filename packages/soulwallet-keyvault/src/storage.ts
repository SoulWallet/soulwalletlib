import { Result, Ok, Err } from '@soulwallet/result';
import { IStorage, Serializable, StorageLocation } from './interface/IStorage.js';
import { homedir } from 'os';
import { join } from 'path';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';


export class Storage implements IStorage {

    private _signerStorageFile: string;
    private _dataStorageFile: string;

    constructor() {
        if (typeof process !== 'undefined' && process.versions && process.versions.node) {
        } else {
            throw new Error("only available in NodeJS");
        }

        const _storagedir = join(homedir(), '.soulwallet');
        if (!existsSync(_storagedir)) {
            mkdirSync(_storagedir);
        }
        this._signerStorageFile = join(_storagedir, 'signer.db');
        this._dataStorageFile = join(_storagedir, 'data.db');

        if (!existsSync(this._signerStorageFile)) {
            writeFileSync(this._signerStorageFile, '[]');
        }
        if (!existsSync(this._dataStorageFile)) {
            writeFileSync(this._dataStorageFile, '[]');
        }

    }


    // private async safeKey(str: string): Promise<string> {
    //     str = '@soulwallet/keyvault:' + str;
    //     const hash = createHash('sha256');
    //     hash.update(str);
    //     const digest = hash.digest('hex');
    //     return digest;
    // }


    private paddingTo1MB(data: string): Result<string, Error> {
        // padding to 1MB
        const MB = 1024 * 1024;
        const len = Buffer.from(data).length;
        if (len > MB) {
            return new Err(new Error('data size over 1MB'));
        }
        const padding = ' '.repeat(MB - len);
        return new Ok(data + padding);
    }



    private async _read(location: StorageLocation): Promise<Result<Map<string, string>, Error>> {
        try {
            if (location === StorageLocation.Data) {
                const data: string = readFileSync(this._dataStorageFile).toString('utf-8');
                const re: Map<string, string> = new Map(JSON.parse(data));
                return new Ok(re);
            } else if (location === StorageLocation.Signer) {
                const data: string = readFileSync(this._signerStorageFile).toString('utf-8');
                const re: Map<string, string> = new Map(JSON.parse(data));
                return new Ok(re);
            } else {
                throw new Error('unknown location');
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
            if (location === StorageLocation.Data) {
                writeFileSync(this._dataStorageFile, re.OK);
                return new Ok(void (0));
            } else if (location === StorageLocation.Signer) {
                writeFileSync(this._signerStorageFile, re.OK);
                return new Ok(void (0));
            } else {
                throw new Error('unknown location');
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(new Error('unknown error'));
            }
        }
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


    public async selfDestruct(): Promise<Result<void, Error>> {
        // delete storage files
        try {
            writeFileSync(this._signerStorageFile, '[]');
            writeFileSync(this._dataStorageFile, '[]');
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