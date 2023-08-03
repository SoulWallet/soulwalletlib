import { Ok, Err, Result } from '@soulwallet/result';


export interface Serializable {
    toString(): string;
}

// export class KeyNotFound extends Error {
//     constructor(message: string) {
//         super(message);
//         this.name = 'FileNotFound';
//     }
// }

export enum StorageLocation {
    Signer = 'signer',
    Data = 'data'
}

export abstract class IStorage {
    public abstract save<T extends Serializable>(location: StorageLocation, key: string, value: T): Promise<Result<void, Error>>;
    public abstract load<T extends Serializable>(location: StorageLocation, key: string, defaultValue: T): Promise<Result<T, Error>>;
    public abstract listKeys(location: StorageLocation): Promise<Result<string[], Error>>;
    public abstract remove(location: StorageLocation, key: string): Promise<Result<void, Error>>;
    public abstract destroy(): Promise<Result<void, Error>>;
}