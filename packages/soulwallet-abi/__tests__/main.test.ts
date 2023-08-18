import {
    ABI_KeyStore,
    ABI_SoulWallet,
    ABI_SoulWalletFactory,
    ABI_SoulWalletProxy,
    ABI_Simple2FA,
    ABI_Dailylimit,
    ABI_SecurityControlModule,
    ABI_SocialRecoveryModule,
    ABI_Upgrade,
    ABI_TrustedModuleManager,
    ABI_TrustedPluginManager,
    ABI_OpKnownStateRootWithHistory,
    ABI_KnownStateRootWithHistoryBase,
    ABI_ArbKnownStateRootWithHistory,
    ABI_L1BlockInfoPassing,
    ABI_KeyStoreModule,
    ABI_KeystoreProof,
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
        expect(ABI_Simple2FA).toBeDefined();
        expect(ABI_Dailylimit).toBeDefined();
        expect(ABI_SecurityControlModule).toBeDefined();
        expect(ABI_SocialRecoveryModule).toBeDefined();
        expect(ABI_Upgrade).toBeDefined();
        expect(ABI_TrustedModuleManager).toBeDefined();
        expect(ABI_TrustedPluginManager).toBeDefined();
        expect(ABI_OpKnownStateRootWithHistory).toBeDefined();
        expect(ABI_KnownStateRootWithHistoryBase).toBeDefined();
        expect(ABI_ArbKnownStateRootWithHistory).toBeDefined();
        expect(ABI_L1BlockInfoPassing).toBeDefined();
        expect(ABI_KeyStoreModule).toBeDefined();
        expect(ABI_KeystoreProof).toBeDefined();
        expect(ABI_ERC20Paymaster).toBeDefined();
        expect(ABI_ReceivePayment).toBeDefined();
        expect(ABI_EntryPoint).toBeDefined();
    });
});