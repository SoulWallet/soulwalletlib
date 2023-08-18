import { Vault } from './vault.js';
import { Ok, Err, Result } from '@soulwallet/result';
import { AES_256_GCM, ECDSA, ABFA } from './crypto.js';
import { SignData, VaultEvents } from './interface/IVault.js';
import { lock } from 'ethers';

export {
    Vault, VaultEvents, SignData,
    Ok, Err, Result,
    ABFA
}

export * from './vault.js';