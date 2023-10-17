import { Result, Ok, Err } from '@soulwallet/result';
import { IVault, VaultEvents } from './interface/IVault.js';
import { Storage } from './storage.js';
import { AES_256_GCM, ECDSA, ABFA, Utils } from './crypto.js';
import { ethers } from 'ethers';
import mitt, { Emitter } from 'mitt'


class KeyVaultStorageStructure {
    AESKeyHash: string = '';
    Signers: Map<string, string> = new Map();

    toString(): string {
        return JSON.stringify({
            AESKeyHash: this.AESKeyHash,
            Signers: Array.from(this.Signers.entries())
        });
    }

    fromString(data: string): KeyVaultStorageStructure {
        if (data === '') {
            return this;
        } else {
            const obj = JSON.parse(data);
            this.AESKeyHash = obj.AESKeyHash;
            this.Signers = new Map(obj.Signers);
            return this;
        }
    }
}


/**
 * Vault
 *
 * @export
 * @class Vault
 * @implements {IVault}
 */
export class Vault implements IVault {
    private _storage: Storage;
    private _AES_256_GCM: AES_256_GCM | undefined;

    private _KeyVaultDataCache: KeyVaultStorageStructure | undefined = undefined;

    private _account: Map<string, ECDSA> = new Map();

    private _EventEmitter: Emitter<VaultEvents>;

    private _timeout: NodeJS.Timeout | undefined;
    private readonly _timeoutDuration = 1000 * 60 * 60; // 60 minutes
    private _lockTime: number = 0;

    /**
     * Creates an instance of Vault.
     * @param {string} tag tag for keyVault
     * @memberof Vault
     */
    public constructor(tag: string) {
        tag = tag.slice();/* make a copy */
        this._storage = new Storage(Vault._hash(tag));

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

    /**
     * destroy vault
     *
     * @static
     * @param {string} tag tag for keyVault
     * @return {*}  {Promise<Result<void, Error>>}
     * @memberof Vault
     */
    public static async remove(tag: string): Promise<Result<void, Error>> {
        const _storage = new Storage(Vault._hash(tag));
        return await _storage.selfDestruct();
    }

    /**
     * rename vault, must lock first
     *
     * @static
     * @param {string} oldTag old tag
     * @param {string} newTag new tag
     * @return {*}  {Promise<Result<void, Error>>}
     * @memberof Vault
     */
    public static async rename(oldTag: string, newTag: string): Promise<Result<void, Error>> {
        const _storageOld = new Storage(Vault._hash(oldTag));
        const _storageNew = new Storage(Vault._hash(newTag));
        const _retOld = await _storageOld.load('');
        const _retNew = await _storageNew.load('');
        if (_retOld.isErr() === true) {
            return new Err(_retOld.ERR);
        }
        if (_retNew.isErr() === true) {
            return new Err(_retNew.ERR);
        }
        if (_retNew.OK !== '') {
            return new Err(new Error(`${newTag} already exists`));
        }
        if (_retOld.OK === '') {
            return new Err(new Error(`${oldTag} not exists`));
        }
        let _ret = await _storageNew.save(_retOld.OK);
        if (_ret.isErr() === true) {
            return new Err(_ret.ERR);
        }
        _ret = await _storageOld.selfDestruct();
        if (_ret.isErr() === true) {
            console.error(_ret.ERR);
        }
        return new Ok(void (0));

    }

    /**
     * add event listener
     *
     * @template Key extends keyof VaultEvents
     * @param {Key} eventName event name
     * @param {(arg: VaultEvents[Key]) => unknown} handler event handler
     * @memberof Vault
     */
    public on<Key extends keyof VaultEvents>(eventName: Key, handler: (arg: VaultEvents[Key]) => unknown) {
        try {
            this._EventEmitter.on(eventName, handler);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    /**
     * remove event listener
     *
     * @template Key extends keyof VaultEvents
     * @param {Key} eventName event name
     * @param {(arg: VaultEvents[Key]) => unknown} [handler] event handler
     * @memberof Vault
     */
    public off<Key extends keyof VaultEvents>(eventName: Key, handler?: (arg: VaultEvents[Key]) => unknown) {
        try {
            this._EventEmitter.off(eventName, handler);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    private emit<Key extends keyof VaultEvents>(eventName: Key, payload: VaultEvents[Key]) {
        if (eventName !== 'Locked') {
            this._touchTimeout(eventName !== 'Ping');
        } else {
            this._clearTimeout();
        }

        this._EventEmitter.emit(
            eventName,
            payload
        );
    }

    private _touchTimeout(createTimer: boolean) {
        this._lockTime = new Date().getTime() + this._timeoutDuration;
        if (createTimer === true && this._timeout === undefined) {
            this._timeout = setInterval(async () => {
                if (new Date().getTime() > this._lockTime) {
                    this.lock().catch();
                }
            }, 1000 * 5);
        }
    }

    private _clearTimeout() {
        if (this._timeout !== undefined) {
            clearInterval(this._timeout);
            this._timeout = undefined;
        }
    }

    private async _loadData(): Promise<Result<KeyVaultStorageStructure, Error>> {
        if (this._KeyVaultDataCache === undefined) {
            const ret = await this._storage.load('');
            if (ret.isErr() === true) {
                return new Err(ret.ERR);
            }
            try {
                const _KeyVaultStorageStructure: KeyVaultStorageStructure = new KeyVaultStorageStructure().fromString(ret.OK);
                this._KeyVaultDataCache = _KeyVaultStorageStructure;
            } catch (error: unknown) {
                if (error instanceof Error) {
                    return new Err(error);
                } else {
                    console.error(error);
                    return new Err(
                        new Error('unknown error')
                    );
                }
            }
        }
        return new Ok(this._KeyVaultDataCache);
    }

    private async _saveData(keyVaultStorageStructure: KeyVaultStorageStructure): Promise<Result<void, Error>> {
        this._KeyVaultDataCache = keyVaultStorageStructure;
        const ret = await this._storage.save(keyVaultStorageStructure.toString());
        if (ret.isErr() === true) {
            return new Err(ret.ERR);
        }
        return new Ok(void (0));
    }

    private async _deriveKey(password: string): Promise<Result<string, Error>> {
        const _key = await ABFA.scrypt(password);
        if (_key.isErr() === true) {
            return new Err(_key.ERR);
        }
        const key = _key.OK;
        return new Ok(key);
    }

    private static _hash(data: string): string {
        const _salt = '@key-hash-salt'
        return ethers.keccak256(ethers.toUtf8Bytes(_salt + data));
    }

    /**
     * initialize vault
     *
     * @param {string} password
     * @param {boolean} [enforce] if true, delete all data and re-initialize
     * @return {*}  {Promise<Result<void, Error>>}
     * @memberof Vault
     */
    public async init(password: string, enforce?: boolean): Promise<Result<void, Error>> {
        if (enforce === true) {
            // delete all data
            await this.destroy();
            const ret = await this._storage.selfDestruct();
            if (ret.isErr() === true) {
                return new Err(ret.ERR);
            }
        }
        if (await this._isInitialized()) {
            return new Err(new Error('already initialized'));
        } else {
            const _key = await this._deriveKey(password);
            if (_key.isErr() === true) {
                return new Err(_key.ERR);
            }
            const AESKeyHash = Vault._hash(_key.OK);
            const _KeyVaultStorageStructure: KeyVaultStorageStructure = new KeyVaultStorageStructure();
            _KeyVaultStorageStructure.AESKeyHash = AESKeyHash;
            _KeyVaultStorageStructure.Signers = new Map();
            const _ret = await this._saveData(_KeyVaultStorageStructure);
            if (_ret.isErr() === true) {
                return new Err(_ret.ERR);
            }
            const _aes = await AES_256_GCM.init(_key.OK);
            if (_aes.isErr() === true) {
                return new Err(_aes.ERR);
            }
            this._AES_256_GCM = _aes.OK;

            this.emit(enforce === true ? 'ReInitialized' : 'Initialized', void (0));

            this.emit('Unlocked', void (0));

            return new Ok(void (0));
        }
    }

    /**
     * not implemented
     *
     * @param {string} exportData
     * @param {string} password
     * @return {*}  {Promise<Result<void, Error>>}
     * @memberof Vault
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async restore(exportData: string, password: string): Promise<Result<void, Error>> {
        throw new Error('Method not implemented.');
    }



    /**
     * check if vault is initialized
     *
     * @return {*}  {Promise<Result<boolean, Error>>}
     * @memberof Vault
     */
    public async isInitialized(): Promise<Result<boolean, Error>> {
        const ret = await this._loadData();
        if (ret.isErr() === true) {
            return new Err(ret.ERR);
        }

        this.emit('Ping', void (0));

        return new Ok(ret.OK.AESKeyHash !== '');
    }

    /**
     * for security reason, allways call this method after use
     *
     * @return {*}  {Promise<void>}
     * @memberof Vault
     */
    private async destroy(): Promise<void> {
        if (this._AES_256_GCM) {
            this._AES_256_GCM = undefined;
        }
        this._KeyVaultDataCache = undefined;
        for (const i of this._account.values()) {
            try {
                i.destroy();
            } catch (error) {
                console.error(error);
            }
        }
        this._account.clear();
    }

    private async _isInitialized(): Promise<boolean> {
        const ret = await this.isInitialized();
        if (ret.isErr() === true) {
            return false;
        }
        return ret.OK;
    }

    /**
     * unlock keyVault
     *
     * @param {string} password
     * @return {*}  {Promise<Result<void, Error>>}
     * @memberof Vault
     */
    public async unlock(password: string): Promise<Result<void, Error>> {
        if (!await this._isInitialized()) {
            return new Err(new Error('not initialized'));
        } else {
            const ret = await this.isLocked();
            if (ret.isErr() === true) {
                return new Err(ret.ERR);
            }
            if (ret.OK === false) {
                return new Err(new Error('already unlocked'));
            }

            const _key = await this._deriveKey(password);
            if (_key.isErr() === true) {
                return new Err(_key.ERR);
            }
            const _hash = Vault._hash(_key.OK);

            const keyVaultStorageStructure = await this._loadData();
            if (keyVaultStorageStructure.isErr() === true) {
                return new Err(keyVaultStorageStructure.ERR);
            }

            if (_hash !== keyVaultStorageStructure.OK.AESKeyHash) {
                return new Err(new Error('invalid password'));
            }
            const _aes = await AES_256_GCM.init(_key.OK);
            if (_aes.isErr() === true) {
                return new Err(_aes.ERR);
            }
            this._AES_256_GCM = _aes.OK;

            this.emit('Unlocked', void (0));

            return new Ok(void (0));
        }
    }

    /**
     * lock keyVault
     *
     * @return {*}  {Promise<Result<void, Error>>}
     * @memberof Vault
     */
    public async lock(): Promise<Result<void, Error>> {
        if (!await this._isInitialized()) {
            return new Err(new Error('not initialized'));
        } else {
            const ret = await this.isLocked();
            if (ret.isErr() === true) {
                return new Err(ret.ERR);
            }
            if (ret.OK === true) {
                return new Err(new Error('already locked'));
            }
            await this.destroy();
            this.emit('Locked', void (0));
            return new Ok(void (0));
        }
    }

    /**
     * check if vault is locked
     *
     * @return {*}  {Promise<Result<boolean, Error>>}
     * @memberof Vault
     */
    public async isLocked(): Promise<Result<boolean, Error>> {
        this.emit('Ping', void (0));
        return new Ok(this._AES_256_GCM === undefined);
    }

    /**
     * not implemented
     *
     * @param {string} oldPassword
     * @param {string} newPassword
     * @return {*}  {Promise<Result<void, Error>>}
     * @memberof Vault
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async changePassword(oldPassword: string, newPassword: string): Promise<Result<void, Error>> {
        if ((await this.isLocked()).OK === true) {
            return new Err(new Error('locked'));
        }
        throw new Error('Method not implemented.');
    }

    /**
     * not implemented
     *
     * @param {string} password
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof Vault
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async export(password: string): Promise<Result<string, Error>> {
        if ((await this.isLocked()).OK === true) {
            return new Err(new Error('locked'));
        }
        throw new Error('Method not implemented.');
    }

    /**
     * import signer from privateKey
     *
     * @param {string} privateKey
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof Vault
     */
    public async importSigner(privateKey: string): Promise<Result<string/* EOA address */, Error>> {
        if ((await this.isLocked()).OK === true) {
            return new Err(new Error('locked'));
        }
        privateKey = privateKey.slice()/* make a copy */
        const _signKey = new ethers.SigningKey(privateKey);
        const address = ethers.getAddress(ethers.keccak256("0x" + _signKey.publicKey.substring(4)).substring(26));
        const _encryptRet = await this._AES_256_GCM!.encrypt(privateKey);
        privateKey = '';
        if (_encryptRet.isErr() === true) {
            return new Err(_encryptRet.ERR);
        }
        const keyVaultStorageRet = await this._loadData();
        if (keyVaultStorageRet.isErr() === true) {
            return new Err(keyVaultStorageRet.ERR);
        }
        const _KeyVaultStorageStructure = keyVaultStorageRet.OK;
        _KeyVaultStorageStructure.Signers.set(address, _encryptRet.OK)
        const ret = await this._saveData(_KeyVaultStorageStructure);
        if (ret.isErr() === true) {
            return new Err(ret.ERR);
        }

        this.emit('AccountAdded', address);

        return new Ok(address);
    }

    /**
     * create a signer
     *
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof Vault
     */
    public async createSigner(): Promise<Result<string, Error>> {
        const privateKey = Utils.generatePrivateKey();
        return await this.importSigner(privateKey);
    }

    /**
     * delete a signer
     *
     * @param {string} address
     * @return {*}  {Promise<Result<void, Error>>}
     * @memberof Vault
     */
    public async removeSigner(address: string): Promise<Result<void, Error>> {
        if ((await this.isLocked()).OK === true) {
            return new Err(new Error('locked'));
        }
        address = ethers.getAddress(address);
        if (this._account.has(address)) {
            const _ECDSA = this._account.get(address)!;
            _ECDSA.destroy();
            this._account.delete(address);
        }
        const keyVaultStorageRet = await this._loadData();
        if (keyVaultStorageRet.isErr() === true) {
            return new Err(keyVaultStorageRet.ERR);
        }
        const _KeyVaultStorageStructure = keyVaultStorageRet.OK;
        const succ = _KeyVaultStorageStructure.Signers.delete(address);
        if (succ === false) {
            return new Err(new Error('unknown address'));
        }
        const ret = await this._saveData(_KeyVaultStorageStructure);
        if (ret.isErr() === true) {
            return new Err(ret.ERR);
        }

        this.emit('AccountRemoved', address);

        return new Ok(void (0));
    }

    /**
     * list all signers
     *
     * @return {*}  {Promise<Result<string[], Error>>}
     * @memberof Vault
     */
    public async listSigners(): Promise<Result<string[], Error>> {
        const keyVaultStorageRet = await this._loadData();
        if (keyVaultStorageRet.isErr() === true) {
            return new Err(keyVaultStorageRet.ERR);
        }
        const _KeyVaultStorageStructure = keyVaultStorageRet.OK;
        const _addressList: string[] = [];
        for (const i of _KeyVaultStorageStructure.Signers.keys()) {
            _addressList.push(i);
        }
        this.emit('Ping', void (0));
        return new Ok(_addressList);
    }

    private async _loadSigner(address: string): Promise<Result<ECDSA, Error>> {
        if ((await this.isLocked()).OK === true) {
            return new Err(new Error('locked'));
        }
        address = ethers.getAddress(address);
        if (!this._account.has(address)) {
            const ret = await this._loadData();
            if (ret.isErr() === true) {
                return new Err(ret.ERR);
            }
            if (ret.OK.Signers.has(address) === false) {
                return new Err(new Error('unknown address'));
            }
            const _ECDSA = new ECDSA();
            const _decryptRet = await this._AES_256_GCM!.decrypt(ret.OK.Signers.get(address)!);
            if (_decryptRet.isErr() === true) {
                return new Err(_decryptRet.ERR);
            }
            await _ECDSA.init(_decryptRet.OK);
            this._account.set(address, _ECDSA);
        }
        return new Ok(this._account.get(address)!);
    }

    /**
     * sign a message (personalSign)
     *
     * @param {string} address
     * @param {string} message
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof Vault
     */
    public async personalSign(address: string, message: string): Promise<Result<string, Error>> {
        const _ECDSA = await this._loadSigner(address);
        if (_ECDSA.isErr() === true) {
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

    private async _rawSign(address: string, message: string): Promise<Result<string, Error>> {
        const _ECDSA = await this._loadSigner(address);
        if (_ECDSA.isErr() === true) {
            return new Err(_ECDSA.ERR);
        }
        const _sign = await _ECDSA.OK.sign(message);
        return new Ok(_sign);
    }

    /**
     * sign a message (rawSign)
     *
     * @param {string} address
     * @param {string} message
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof Vault
     */
    public async rawSign(address: string, message: string): Promise<Result<string, Error>> {
        const ret = await this._rawSign(address, message);
        if (ret.isOk() === true) {
            this.emit('Sign', {
                address: address,
                message: message,
                signature: ret.OK
            });
        }
        return ret;
    }

    /**
     * sign typedData message (EIP712)
     *
     * @param {string} address
     * @param {ethers.TypedDataDomain} domain
     * @param {Record<string, Array<ethers.TypedDataField>>} types
     * @param {Record<string, any>} value
     * @param {(string | ethers.JsonRpcProvider)} [provider]
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof Vault
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async typedDataSign(address: string, domain: ethers.TypedDataDomain, types: Record<string, Array<ethers.TypedDataField>>, value: Record<string, any>, provider?: string | ethers.JsonRpcProvider): Promise<Result<string, Error>> {
        // refer: ethers.js

        let _provider: ethers.JsonRpcProvider | null = null;
        if (provider !== undefined) {
            if (typeof provider === 'string') {
                _provider = new ethers.JsonRpcProvider(provider);
            } else {
                _provider = provider;
            }
        }

        // Populate any ENS names
        const populated = await ethers.TypedDataEncoder.resolveNames(domain, types, value, async (name: string) => {
            // @TODO: this should use resolveName; addresses don't
            //        need a provider

            ethers.assert(_provider != null, "cannot resolve ENS names without a provider", "UNSUPPORTED_OPERATION", {
                operation: "resolveName",
                info: { name }
            });

            const address = await _provider!.resolveName(name);
            ethers.assert(address != null, "unconfigured ENS name", "UNCONFIGURED_NAME", {
                value: name
            });

            return address;
        });

        const message = ethers.TypedDataEncoder.hash(populated.domain, types, populated.value);
        const ret = await this._rawSign(address, message);
        if (ret.isOk() === true) {
            this.emit('TypedDataSign', {
                address: address,
                message: message,
                signature: ret.OK
            });
        }
        return ret;
    }

}