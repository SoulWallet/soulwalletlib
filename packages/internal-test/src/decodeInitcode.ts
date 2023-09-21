import { ethers } from "ethers";
import { SoulWallet, Transaction, Bundler, UserOpUtils, UserOperation } from "@soulwallet_test/sdk";
import { Vault } from '@soulwallet_test/keyvault';

import { ABI_SoulWalletFactory, ABI_SoulWallet } from "@soulwallet_test/abi";


export class DecodeInitCode {
    async run(): Promise<void> {
        let initCode = '0x576c13ccb03c21df9eeca0832719f0f6ffdc934ba1aafc9e000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000204a6c87ecb000000000000000000000000b8e9232d5347a6b466f3036278a4d84f22f23bf9000000000000000000000000b8466fa7777fbc8046fe92adab58736def8b4c8f000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000347a711e826b6383d6791cb43bfc0a4b72a2940183000000000000000000000000000000000000000000000000000000000002a300000000000000000000000000000000000000000000000000000000000000000000000000000000000000007459b84bfaaa906a84152ded63d964cff913308921000000000000000000000000b8e9232d5347a6b466f3036278a4d84f22f23bf9ead3bbeb532f368b2ce8a63c1ff966a5cddd648ede12c219c449de5f717c415a000000000000000000000000000000000000000000000000000000000002a300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
        const soulWalletFactoryAddress = initCode.substring(0, 42);
        console.log('soulWalletFactoryAddress: ', soulWalletFactoryAddress);
        initCode = '0x' + initCode.substring(42);
        const createWalletArgs = new ethers.Interface(ABI_SoulWalletFactory).decodeFunctionData('createWallet', initCode);
        let initializeData = createWalletArgs[0];
        //console.log('initializeData: ', initializeData);
        const salt = createWalletArgs[1];
        console.log('salt: ', salt);
        const walletInitializeArgs = new ethers.Interface(ABI_SoulWallet).decodeFunctionData('initialize', initializeData);
     
        const initialKey = walletInitializeArgs[0];
        console.log('initialKey: ', initialKey);
        const defalutCallbackHandlerAddress = walletInitializeArgs[1];
        console.log('defalutCallbackHandlerAddress: ', defalutCallbackHandlerAddress);
        const securityControlModuleAndData = walletInitializeArgs[2][0];
        console.log('securityControlModuleAndData: ', securityControlModuleAndData);
        let keyStoreModuleAndData = walletInitializeArgs[2][1];
        const keyStoreModuleAddress = keyStoreModuleAndData.substring(0, 42);
        console.log('keyStoreModuleAddress: ', keyStoreModuleAddress);
        //  const keyStoreInitData = new ethers.AbiCoder().encode(["bytes32", "bytes32", "uint64"], [_initialKey, initialGuardianHash, initialGuardianSafePeriod]);
        keyStoreModuleAndData = '0x' + keyStoreModuleAndData.substring(42);
        const keyStoreInitDataArgs = new ethers.AbiCoder().decode(["bytes32", "bytes32", "uint64"], keyStoreModuleAndData);
        const _initialKey = keyStoreInitDataArgs[0];
        console.log('_initialKey: ', _initialKey);
        const initialGuardianHash = keyStoreInitDataArgs[1];
        console.log('initialGuardianHash: ', initialGuardianHash);
        const initialGuardianSafePeriod = keyStoreInitDataArgs[2];
        console.log('initialGuardianSafePeriod: ', initialGuardianSafePeriod);

    }
}