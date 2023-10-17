import { Result } from '@soulwallet/result';
import { ethers } from 'ethers';

export interface SignData {
    address: string;
    message: string;
    signature: string;
}

export type VaultEvents = {
    Initialized: void,
    ReInitialized: void,
    Locked: void,
    Unlocked: void,
    AccountAdded: string,
    AccountRemoved: string,
    Sign: SignData,
    PersonalSign: SignData,
    TypedDataSign: SignData,
    Ping: void;
};

export abstract class IVault /*extends EventEmitter*/ {
    // #region Vault initialization
    public abstract init(password: string, enforce?: boolean): Promise<Result<void, Error>>;
    public abstract restore(exportData: string, password: string): Promise<Result<void, Error>>;
    public abstract isInitialized(): Promise<Result<boolean, Error>>;
    // #endregion end Vault initialization

    // #region lock/unlock
    public abstract unlock(password: string): Promise<Result<void, Error>>;
    public abstract lock(): Promise<Result<void, Error>>;
    public abstract isLocked(): Promise<Result<boolean, Error>>;
    // #endregion end lock/unlock

    // #region reset password
    public abstract changePassword(oldPassword: string, newPassword: string): Promise<Result<void, Error>>;
    // #endregion end reset password

    // #region backup
    public abstract export(password: string): Promise<Result<string, Error>>;
    // #endregion end backup

    // #region private data store (if app need to store some data in vault)
    // public abstract getData<T>(key: string, defaultValue: T): Promise<Result<T, Error>>;
    // public abstract setData<T>(key: string, value: T): Promise<Result<void, Error>>;
    // public abstract removeData(key: string): Promise<Result<void, Error>>;
    // #endregion end private data store

    // #region signer management
    public abstract importSigner(privateKey: string): Promise<Result<string/* EOA address */, Error>>;
    public abstract createSigner(): Promise<Result<string/* EOA address */, Error>>;
    public abstract removeSigner(address: string): Promise<Result<void, Error>>;
    public abstract listSigners(): Promise<Result<string[]/* EOA addresses */, Error>>;
    // #endregion end signer management

    // #region sign transaction
    public abstract personalSign(address: string, message: string): Promise<Result<string, Error>>;
    public abstract rawSign(address: string, message: string): Promise<Result<string, Error>>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public abstract typedDataSign(address: string, domain: ethers.TypedDataDomain, types: Record<string, Array<ethers.TypedDataField>>, value: Record<string, any>, provider?: string | ethers.JsonRpcProvider): Promise<Result<string, Error>>;
    // #endregion end sign transaction

}
