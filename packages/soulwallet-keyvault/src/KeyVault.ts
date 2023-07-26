import { Result } from '@soulwallet/result';
import { IKeyVault } from './interface/IKeyVault.js';

export class KeyVault extends IKeyVault {
    public init(password: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public restore(exportData: string, password: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public unlock(password: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public lock(): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public isLocked(): Promise<Result<boolean, Error>> {
        throw new Error('Method not implemented.');
    }
    public changePassword(oldPassword: string, newPassword: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public export(password: string): Promise<Result<string, Error>> {
        throw new Error('Method not implemented.');
    }
    public getData<T>(key: string, defaultValue: T): Promise<Result<T, Error>> {
        throw new Error('Method not implemented.');
    }
    public setData<T>(key: string, value: T): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public removeData(key: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public createSigner(tag?: string | undefined): Promise<Result<string, Error>> {
        throw new Error('Method not implemented.');
    }
    public removeSigner(address: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }
    public listSigners(tag?: string | undefined): Promise<Result<string[], Error>> {
        throw new Error('Method not implemented.');
    }
    public personalSign(address: string, message: string): Promise<Result<string, Error>> {
        throw new Error('Method not implemented.');
    }
    public rawSign(address: string, message: string): Promise<Result<string, Error>> {
        throw new Error('Method not implemented.');
    }

}