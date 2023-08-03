import { Result, Ok, Err } from '@soulwallet/result';
import { IVault } from './interface/IVault.js';
import { Storage } from './storage.js';
import { StorageLocation } from './interface/IStorage.js';
import { AES_256_GCM, ECDSA, ABFA, Utils } from './crypto.js';
import * as ethUtil from 'ethereumjs-util';
import mitt, { Emitter, EventHandlerMap } from 'mitt'

export interface SignData {
    address: string;
    message: string;
    signature: string;
}

export type VaultEvents = {
    Initialized: void,
    Destroy: void,
    Locked: void,
    Unlocked: void,
    AccountAdded: string,
    AccountRemoved: string,
    Sign: SignData,
    PersonalSign: SignData,
};

export class Vault implements IVault {

    private _storage: Storage;
    private _AES_256_GCM: AES_256_GCM | undefined;
    private _KEY_HASH: string | undefined;

    private _account: Map<string, ECDSA> = new Map();

    private readonly _DECRYPT_KEY_HASH = '@DECRYPT_KEY_HASH';

    private _EventEmitter: Emitter<VaultEvents>;

    private static instance: Vault;
    public static getInstance(): Vault {
        if (!Vault.instance)
            Vault.instance = new Vault();
        return Vault.instance;
    }

    private constructor() {
        this._storage = new Storage();

        if (typeof window !== 'undefined') {
            // Web Crypto API
            if (typeof window.crypto === 'object' && typeof window.crypto.subtle === 'object') {
                // support Web Crypto API
            } else {
                throw new Error('Web Crypto API is not available');
            }
        }

        this._EventEmitter = mitt<VaultEvents>();
    }

    public on<Key extends keyof VaultEvents>(eventName: Key, handler: (arg: VaultEvents[Key]) => any) {
        try {
            this._EventEmitter.on(eventName, handler);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    public off<Key extends keyof VaultEvents>(eventName: Key, handler?: (arg: VaultEvents[Key]) => any) {
        try {
            this._EventEmitter.off(eventName, handler);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    private emit<Key extends keyof VaultEvents>(eventName: Key, payload: VaultEvents[Key]) {
        this._EventEmitter.emit(
            eventName,
            payload
        );
    }

    private async _deriveKey(password: string): Promise<Result<string, Error>> {
        const _key = await ABFA.scrypt(password);
        if (_key.isErr()) {
            return new Err(_key.ERR);
        }
        const key = _key.OK;
        return new Ok(key);
    }

    private static _hash(data: string): string {
        const _salt = '@key-hash-salt'
        const buff = ethUtil.keccakFromString(_salt + data);
        return ethUtil.bufferToHex(buff);
    }

    public async init(password: string): Promise<Result<void, Error>> {
        if (await this.isInitialized()) {
            return new Err(new Error('already initialized'));
        } else {
            const _key = await this._deriveKey(password);
            if (_key.isErr()) {
                return new Err(_key.ERR);
            }
            const _ret = await this._saveDecryptKeyHash(Vault._hash(_key.OK));
            if (_ret.isErr()) {
                return new Err(_ret.ERR);
            }
            const _aes = await AES_256_GCM.init(_key.OK);
            if (_aes.isErr()) {
                return new Err(_aes.ERR);
            }
            this._AES_256_GCM = _aes.OK;

            this.emit('Initialized', void (0));

            return new Ok(void (0));
        }
    }

    public async restore(exportData: string, password: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }

    private async _loadDecryptKeyHash(): Promise<Result<string, Error>> {
        const ret = await this._storage.load<string>(StorageLocation.Signer, this._DECRYPT_KEY_HASH, '');
        if (ret.isErr()) {
            return new Err(ret.ERR);
        }
        const decryptKey = ret.OK;
        this._KEY_HASH = decryptKey;
        return new Ok(decryptKey);
    }

    private async _saveDecryptKeyHash(keyHash: string): Promise<Result<void, Error>> {
        const ret = await this._storage.save<string>(StorageLocation.Signer, this._DECRYPT_KEY_HASH, keyHash);
        if (ret.isErr()) {
            return new Err(ret.ERR);
        }
        return new Ok(void (0));
    }

    public async isInitialized(): Promise<Result<boolean, Error>> {
        const ret = await this._loadDecryptKeyHash();
        if (ret.isErr()) {
            return new Err(ret.ERR);
        }
        return new Ok(ret.OK !== '');
    }

    public async destroy(): Promise<void> {
        if (this._AES_256_GCM) {
            this._AES_256_GCM = undefined;
        }
        for (let i of this._account.values()) {
            try {
                i.destroy();
            } catch (error) {
                console.error(error);
            }
        }
        this._account.clear();

        this.emit('Destroy', void (0));
    }

    public async unlock(password: string): Promise<Result<void, Error>> {
        if (!await this.isInitialized()) {
            return new Err(new Error('not initialized'));
        } else {
            const _key = await this._deriveKey(password);
            if (_key.isErr()) {
                return new Err(_key.ERR);
            }
            const _hash = Vault._hash(_key.OK);
            if (_hash !== this._KEY_HASH) {
                return new Err(new Error('invalid password'));
            }
            const _aes = await AES_256_GCM.init(_key.OK);
            if (_aes.isErr()) {
                return new Err(_aes.ERR);
            }
            this._AES_256_GCM = _aes.OK;

            this.emit('Unlocked', void (0));

            return new Ok(void (0));
        }
    }

    public async lock(): Promise<Result<void, Error>> {
        await this.destroy();

        this.emit('Locked', void (0));

        return new Ok(void (0));
    }

    public async isLocked(): Promise<Result<boolean, Error>> {
        return new Ok(this._AES_256_GCM === undefined);
    }

    public async changePassword(oldPassword: string, newPassword: string): Promise<Result<void, Error>> {
        if ((await this.isLocked()).OK) {
            return new Err(new Error('locked'));
        }
        throw new Error('Method not implemented.');
    }

    public async export(password: string): Promise<Result<string, Error>> {
        if ((await this.isLocked()).OK) {
            return new Err(new Error('locked'));
        }
        throw new Error('Method not implemented.');
    }

    // public async getData<T>(key: string, defaultValue: T): Promise<Result<T, Error>> {
    //     throw new Error('Method not implemented.');
    // }
    // public async setData<T>(key: string, value: T): Promise<Result<void, Error>> {
    //     throw new Error('Method not implemented.');
    // }
    // public async removeData(key: string): Promise<Result<void, Error>> {
    //     throw new Error('Method not implemented.');
    // }

    public async importSigner(privateKey: string): Promise<Result<string/* EOA address */, Error>> {
        if ((await this.isLocked()).OK) {
            return new Err(new Error('locked'));
        }
        const address = ethUtil.toChecksumAddress('0x' + ethUtil.publicToAddress(ethUtil.privateToPublic(ethUtil.toBuffer(privateKey))).toString('hex'));
        const _encryptRet = await this._AES_256_GCM!.encrypt(privateKey);
        if (_encryptRet.isErr()) {
            return new Err(_encryptRet.ERR);
        }
        const ret = await this._storage.save<string>(StorageLocation.Signer, address, _encryptRet.OK);
        if (ret.isErr()) {
            return new Err(ret.ERR);
        }

        this.emit('AccountAdded', address);

        return new Ok(address);
    }

    public async createSigner(): Promise<Result<string, Error>> {
        const privateKey = Utils.generatePrivateKey();
        return await this.importSigner(privateKey);
    }

    public async removeSigner(address: string): Promise<Result<void, Error>> {
        if ((await this.isLocked()).OK) {
            return new Err(new Error('locked'));
        }
        address = ethUtil.toChecksumAddress(address);
        if (this._account.has(address)) {
            const _ECDSA = this._account.get(address)!;
            _ECDSA.destroy();
            this._account.delete(address);

            this.emit('AccountRemoved', address);
        }

        return new Ok(void (0));
    }

    public async listSigners(): Promise<Result<string[], Error>> {
        if ((await this.isLocked()).OK) {
            return new Err(new Error('locked'));
        }
        const _storageRet = await this._storage.listKeys(StorageLocation.Signer);
        if (_storageRet.isErr()) {
            return new Err(_storageRet.ERR);
        }
        return new Ok(_storageRet.OK);
    }

    private async _loadSigner(address: string): Promise<Result<ECDSA, Error>> {
        if ((await this.isLocked()).OK) {
            return new Err(new Error('locked'));
        }
        address = ethUtil.toChecksumAddress(address);
        if (!this._account.has(address)) {
            const ret = await this._storage.load<string>(StorageLocation.Signer, address, '');
            if (ret.isErr()) {
                return new Err(ret.ERR);
            }
            if (ret.OK === '') {
                return new Err(new Error('unknown address'));
            }
            const _ECDSA = new ECDSA();
            await _ECDSA.init(ret.OK);
            this._account.set(address, _ECDSA);
        }
        return new Ok(this._account.get(address)!);
    }

    public async personalSign(address: string, message: string): Promise<Result<string, Error>> {
        const _ECDSA = await this._loadSigner(address);
        if (_ECDSA.isErr()) {
            return new Err(_ECDSA.ERR);
        }
        const _sign = await _ECDSA.OK.personalSign(message);

        this.emit('PersonalSign', {
            address: address,
            message: message,
            signature: _sign
        });

        return new Ok(_sign);
    }

    public async rawSign(address: string, message: string): Promise<Result<string, Error>> {
        const _ECDSA = await this._loadSigner(address);
        if (_ECDSA.isErr()) {
            return new Err(_ECDSA.ERR);
        }
        const _sign = await _ECDSA.OK.sign(message);

        this.emit('Sign', {
            address: address,
            message: message,
            signature: _sign
        });

        return new Ok(_sign);
    }

}