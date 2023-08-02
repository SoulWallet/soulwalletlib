import { Result, Ok, Err } from '@soulwallet/result';
import { IVault } from './interface/IVault.js';
import { Storage } from './storage.js';

export class Vault extends IVault {

    private _storage: Storage;
    private _password: string | undefined = undefined;
    private _isInitialized: boolean = false;

    constructor() {
        super();
        this._storage = new Storage();
    }

    public async init(password: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public async restore(exportData: string, password: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public async isInitialized(): Promise<Result<boolean, Error>> {
        return new Ok(this._isInitialized);
    }
    public async destroy(): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public async unlock(password: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public async lock(): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public async isLocked(): Promise<Result<boolean, Error>> {
        throw new Error('Method not implemented.');
    }
    public async changePassword(oldPassword: string, newPassword: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public async export(password: string): Promise<Result<string, Error>> {
        throw new Error('Method not implemented.');
    }
    public async getData<T>(key: string, defaultValue: T): Promise<Result<T, Error>> {
        throw new Error('Method not implemented.');
    }
    public async setData<T>(key: string, value: T): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public async removeData(key: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public async createSigner(tag?: string | undefined): Promise<Result<string, Error>> {
        throw new Error('Method not implemented.');
    }
    public async removeSigner(address: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public async listSigners(tag?: string | undefined): Promise<Result<string[], Error>> {
        throw new Error('Method not implemented.');
    }
    public async personalSign(address: string, message: string): Promise<Result<string, Error>> {
        throw new Error('Method not implemented.');
    }
    public async rawSign(address: string, message: string): Promise<Result<string, Error>> {
        throw new Error('Method not implemented.');
    }



}