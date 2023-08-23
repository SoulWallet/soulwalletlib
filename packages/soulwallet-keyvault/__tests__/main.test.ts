import {
    Vault, VaultEvents, SignData,
    Ok, Err, Result,
    ABFA
} from '..';
import { describe, expect, test } from '@jest/globals';

const tag = new Date().getTime().toString() + Math.random().toString();
describe('KeyVault', () => {
    test('init', async () => {
        let vault: Vault = new Vault(tag);
        {
            const ret = await vault.isInitialized();
            expect(ret.OK).toBe(false);
        }
        {
            const ret = await vault.init('password');
            expect(ret.isOk()).toBe(true);
        }
        {
            const ret = await vault.isInitialized();
            expect(ret.OK).toBe(true);
        }
        {
            const ret = await vault.isLocked();
            expect(ret.OK).toBe(false);
        }
        {
            const ret = await vault.lock();
            expect(ret.isOk()).toBe(true);
        }
        {
            const ret = await vault.isLocked();
            expect(ret.OK).toBe(true);
        }
    });


    test('unlock', async () => {
        let vault: Vault = new Vault(tag);
        {
            const ret = await vault.isInitialized();
            expect(ret.OK).toBe(true);
        }
        {
            const ret = await vault.isLocked();
            expect(ret.OK).toBe(true);
        }
        {
            const ret = await vault.unlock('password1');
            expect(ret.isOk()).toBe(false);
        }
        {
            const ret = await vault.unlock('password');
            expect(ret.isOk()).toBe(true);
        }
        await vault.lock();
    });

    test('sign', async () => {
        let vault: Vault = new Vault(tag);
        {
            const ret = await vault.isInitialized();
            expect(ret.OK).toBe(true);
        }
        {
            const ret = await vault.isLocked();
            expect(ret.OK).toBe(true);
        }
        {
            const ret = await vault.unlock('password');
            expect(ret.isOk()).toBe(true);
        }
        {
            const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
            const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
            const domain = {
                name: "KeyStore",
                version: "1",
                chainId: "1",
                verifyingContract: "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8",
            };
            // SocialRecovery(bytes32 keyStoreSlot,uint256 nonce,bytes32 newSigner) 
            const types = {
                SocialRecovery: [
                    { name: "keyStoreSlot", type: "bytes32" },
                    { name: "nonce", type: "uint256" },
                    { name: "newSigner", type: "bytes32" },
                ],
            };
            const message = {
                keyStoreSlot: "0xc51741c8874df1df257297f788f646814d6942f81b1838c5467796268fde8957",
                nonce: "1",
                newSigner: "0x000000000000000000000000f8e81D47203A594245E36C48e151709F0C19fBe8",
            };
            await vault.importSigner(privateKey);
            const ret = await vault.typedDataSign(address, domain, types, message);
            expect(ret.isOk()).toBe(true);
            expect(ret.OK).toBe('0x36a9d704c58920da18f1bf2102126552d2dada4e18d53b5765fddbd5049a69f56724472e069a452467cd5ae6f834345578833c24702264f1c7a4c5111eaf41591c');

        }
        await vault.lock();
    });

});
