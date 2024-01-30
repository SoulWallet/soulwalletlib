import {
    ABI_KeyStore,
    ABI_SoulWallet,
    ABI_SoulWalletFactory,
    ABI_SoulWalletProxy,
    ABI_ERC20Paymaster,
    ABI_ReceivePayment,
    ABI_EntryPoint
} from '..';
import { describe, expect, test } from '@jest/globals';

describe('ABI', () => {
    test('ABI defined', () => {
        expect(ABI_KeyStore).toBeDefined();
        expect(ABI_SoulWallet).toBeDefined();
        expect(ABI_SoulWalletFactory).toBeDefined();
        expect(ABI_SoulWalletProxy).toBeDefined();
        expect(ABI_ERC20Paymaster).toBeDefined();
        expect(ABI_ReceivePayment).toBeDefined();
        expect(ABI_EntryPoint).toBeDefined();
    });
});