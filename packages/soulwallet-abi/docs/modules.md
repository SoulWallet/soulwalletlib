[@soulwallet/abi](README.md) / Exports

# @soulwallet/abi

## Table of contents

### Variables

- [ABI\_ArbKnownStateRootWithHistory](modules.md#abi_arbknownstaterootwithhistory)
- [ABI\_Dailylimit](modules.md#abi_dailylimit)
- [ABI\_ERC20Paymaster](modules.md#abi_erc20paymaster)
- [ABI\_EntryPoint](modules.md#abi_entrypoint)
- [ABI\_KeyStore](modules.md#abi_keystore)
- [ABI\_KeyStoreModule](modules.md#abi_keystoremodule)
- [ABI\_KeystoreProof](modules.md#abi_keystoreproof)
- [ABI\_OpKnownStateRootWithHistory](modules.md#abi_opknownstaterootwithhistory)
- [ABI\_SecurityControlModule](modules.md#abi_securitycontrolmodule)
- [ABI\_Simple2FA](modules.md#abi_simple2fa)
- [ABI\_SocialRecoveryModule](modules.md#abi_socialrecoverymodule)
- [ABI\_SoulWallet](modules.md#abi_soulwallet)
- [ABI\_SoulWalletFactory](modules.md#abi_soulwalletfactory)
- [ABI\_SoulWalletProxy](modules.md#abi_soulwalletproxy)
- [ABI\_TrustedModuleManager](modules.md#abi_trustedmodulemanager)
- [ABI\_TrustedPluginManager](modules.md#abi_trustedpluginmanager)
- [ABI\_Upgrade](modules.md#abi_upgrade)

## Variables

### ABI\_ArbKnownStateRootWithHistory

• **ABI\_ArbKnownStateRootWithHistory**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_l1Target"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "uint256"; `name`: `string` = "blockNumber"; `type`: `string` = "uint256" }[] ; `name`: `string` = "L1BLockSyncd"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = "\_stateRoot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "stateRootInfo"; `outputs`: ({ `components?`: `undefined` ; `internalType`: `string` = "bool"; `name`: `string` = "result"; `type`: `string` = "bool" } \| { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "storageRootHash"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct BlockInfo"; `name`: `string` = "info"; `type`: `string` = "tuple" })[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_ArbKnownStateRootWithHistory.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_ArbKnownStateRootWithHistory.ts#L3)

___

### ABI\_Dailylimit

• **ABI\_Dailylimit**: ({ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "UNSUPPORTED\_SIGNTYPE"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "error" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = false; `internalType`: `string` = "address[]"; `name`: `string` = "token"; `type`: `string` = "address[]" }[] ; `name`: `string` = "CancelSetDailyLimit"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "getDailyLimit"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "dailyLimit"; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: ({ `components`: { `internalType`: `string` = "address"; `name`: `string` = "sender"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct UserOperation"; `name`: `string` = "userOp"; `type`: `string` = "tuple" } \| { `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" })[] ; `name`: `string` = "guardHook"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_Dailylimit.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_Dailylimit.ts#L3)

___

### ABI\_ERC20Paymaster

• **ABI\_ERC20Paymaster**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "contract IEntryPoint"; `name`: `string` = "\_entryPoint"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "token"; `type`: `string` = "address" }[] ; `name`: `string` = "ConfigUpdated"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: ({ `components`: { `internalType`: `string` = "address"; `name`: `string` = "sender"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct UserOperation"; `name`: `string` = "userOp"; `type`: `string` = "tuple" } \| { `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" })[] ; `name`: `string` = "validatePaymasterUserOp"; `outputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "context"; `type`: `string` = "bytes" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_ERC20Paymaster.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_ERC20Paymaster.ts#L3)

___

### ABI\_EntryPoint

• **ABI\_EntryPoint**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "preOpGas"; `type`: `string` = "uint256" }[] ; `name`: `string` = "ExecutionResult"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "error" } \| { `anonymous?`: `undefined` = false; `inputs`: { `components`: ({ `components?`: `undefined` ; `internalType`: `string` = "address"; `name`: `string` = "aggregator"; `type`: `string` = "address" } \| { `components`: { `internalType`: `string` = "uint256"; `name`: `string` = "stake"; `type`: `string` = "uint256" }[] ; `internalType`: `string` = "struct IStakeManager.StakeInfo"; `name`: `string` = "stakeInfo"; `type`: `string` = "tuple" })[] ; `internalType`: `string` = "struct IEntryPoint.AggregatorStakeInfo"; `name`: `string` = "aggregatorInfo"; `type`: `string` = "tuple" }[] ; `name`: `string` = "ValidationResultWithAggregation"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "error" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "AccountDeployed"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "account"; `type`: `string` = "address" }[] ; `name`: `string` = "getDepositInfo"; `outputs`: { `components`: { `internalType`: `string` = "uint112"; `name`: `string` = "deposit"; `type`: `string` = "uint112" }[] ; `internalType`: `string` = "struct IStakeManager.DepositInfo"; `name`: `string` = "info"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: ({ `components?`: `undefined` ; `internalType`: `string` = "bytes"; `name`: `string` = "callData"; `type`: `string` = "bytes" } \| { `components`: ({ `components`: { `internalType`: `string` = "address"; `name`: `string` = "sender"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct EntryPoint.MemoryUserOp"; `name`: `string` = "mUserOp"; `type`: `string` = "tuple" } \| { `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" })[] ; `internalType`: `string` = "struct EntryPoint.UserOpInfo"; `name`: `string` = "opInfo"; `type`: `string` = "tuple" })[] ; `name`: `string` = "innerHandleOp"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "actualGasCost"; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs?`: `undefined` ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "payable"; `type`: `string` = "receive" })[]

#### Defined in

[ABI/ABI_EntryPoint.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_EntryPoint.ts#L3)

___

### ABI\_KeyStore

• **ABI\_KeyStore**: ({ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "GUARDIAN\_SIGNATURE\_INVALID"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "error" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "guardian"; `type`: `string` = "address" }[] ; `name`: `string` = "ApproveHash"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "rawGuardian"; `type`: `string` = "bytes" }[] ; `name`: `string` = "getGuardianHash"; `outputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = "guardianHash"; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = "slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "getKeyStoreInfo"; `outputs`: { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "key"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct IKeyStore.keyStoreInfo"; `name`: `string` = "\_keyStoreInfo"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_KeyStore.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_KeyStore.ts#L3)

___

### ABI\_KeyStoreModule

• **ABI\_KeyStoreModule**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_keyStoreProof"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "\_wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "KeyStoreSyncd"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `name`: `string` = "l1Slot"; `outputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = ""; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_KeyStoreModule.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_KeyStoreModule.ts#L3)

___

### ABI\_KeystoreProof

• **ABI\_KeystoreProof**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_l1KeystoreAddress"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = false; `internalType`: `string` = "bytes32"; `name`: `string` = "stateRoot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "KeyStoreStorageProofed"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = "l1Slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "keystoreBySlot"; `outputs`: { `internalType`: `string` = "address"; `name`: `string` = "signingKey"; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_KeystoreProof.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_KeystoreProof.ts#L3)

___

### ABI\_OpKnownStateRootWithHistory

• **ABI\_OpKnownStateRootWithHistory**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_l1block"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "uint256"; `name`: `string` = "blockNumber"; `type`: `string` = "uint256" }[] ; `name`: `string` = "L1BLockSyncd"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = "\_stateRoot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "stateRootInfo"; `outputs`: ({ `components?`: `undefined` ; `internalType`: `string` = "bool"; `name`: `string` = "result"; `type`: `string` = "bool" } \| { `components`: { `internalType`: `string` = "bytes32"; `name`: `string` = "storageRootHash"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct BlockInfo"; `name`: `string` = "info"; `type`: `string` = "tuple" })[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_OpKnownStateRootWithHistory.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_OpKnownStateRootWithHistory.ts#L3)

___

### ABI\_SecurityControlModule

• **ABI\_SecurityControlModule**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "contract ITrustedContractManager"; `name`: `string` = "\_trustedModuleManager"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = "txId"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "AlreadyQueuedError"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "error" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "txId"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "Cancel"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "uint128"; `name`: `string` = "\_seed"; `type`: `string` = "uint128" }[] ; `name`: `string` = "getTxId"; `outputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = ""; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_target"; `type`: `string` = "address" }[] ; `name`: `string` = "getWalletConfig"; `outputs`: { `components`: { `internalType`: `string` = "uint128"; `name`: `string` = "seed"; `type`: `string` = "uint128" }[] ; `internalType`: `string` = "struct IBaseSecurityControlModule.WalletConfig"; `name`: `string` = ""; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_SecurityControlModule.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_SecurityControlModule.ts#L3)

___

### ABI\_Simple2FA

• **ABI\_Simple2FA**: ({ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "PluginDeInit"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes32"; `name`: `string` = "\_safeLockHash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "getSafeLockStatus"; `outputs`: { `internalType`: `string` = "uint64"; `name`: `string` = "unLockTime"; `type`: `string` = "uint64" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: ({ `components`: { `internalType`: `string` = "address"; `name`: `string` = "sender"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct UserOperation"; `name`: `string` = "userOp"; `type`: `string` = "tuple" } \| { `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" })[] ; `name`: `string` = "guardHook"; `outputs`: `never`[] = []; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_Simple2FA.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_Simple2FA.ts#L3)

___

### ABI\_SocialRecoveryModule

• **ABI\_SocialRecoveryModule**: ({ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "ADDRESS\_ALREADY\_EXISTS"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "error" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "AnonymousGuardianRevealed"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "encodeSocialRecoveryData"; `outputs`: { `internalType`: `string` = "bytes"; `name`: `string` = ""; `type`: `string` = "bytes" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_SocialRecoveryModule.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_SocialRecoveryModule.ts#L3)

___

### ABI\_SoulWallet

• **ABI\_SoulWallet**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "contract IEntryPoint"; `name`: `string` = "\_EntryPoint"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "ADDRESS\_ALREADY\_EXISTS"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "error" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "hash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "ApproveHash"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs?`: `undefined` ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "payable"; `type`: `string` = "fallback" } \| { `anonymous?`: `undefined` = false; `inputs`: ({ `components`: { `internalType`: `string` = "address"; `name`: `string` = "sender"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct UserOperation"; `name`: `string` = "userOp"; `type`: `string` = "tuple" } \| { `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" })[] ; `name`: `string` = "validateUserOp"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "validationData"; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_SoulWallet.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_SoulWallet.ts#L3)

___

### ABI\_SoulWalletFactory

• **ABI\_SoulWalletFactory**: ({ `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_walletImpl"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `inputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "\_initializer"; `type`: `string` = "bytes" }[] ; `name`: `string` = "createWallet"; `outputs`: { `internalType`: `string` = "address"; `name`: `string` = "proxy"; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_SoulWalletFactory.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_SoulWalletFactory.ts#L3)

___

### ABI\_SoulWalletProxy

• **ABI\_SoulWalletProxy**: ({ `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "logic"; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `inputs?`: `undefined` ; `stateMutability`: `string` = "payable"; `type`: `string` = "fallback" })[]

#### Defined in

[ABI/ABI_SoulWalletProxy.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_SoulWalletProxy.ts#L3)

___

### ABI\_TrustedModuleManager

• **ABI\_TrustedModuleManager**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_owner"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "module"; `type`: `string` = "address" }[] ; `name`: `string` = "isTrustedContract"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_TrustedModuleManager.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_TrustedModuleManager.ts#L3)

___

### ABI\_TrustedPluginManager

• **ABI\_TrustedPluginManager**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_owner"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "module"; `type`: `string` = "address" }[] ; `name`: `string` = "isTrustedContract"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_TrustedPluginManager.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_TrustedPluginManager.ts#L3)

___

### ABI\_Upgrade

• **ABI\_Upgrade**: ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_newImplementation"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "validateUserOp"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "ModuleDeInit"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "pure"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "bytes4"; `name`: `string` = "interfaceId"; `type`: `string` = "bytes4" }[] ; `name`: `string` = "supportsInterface"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_Upgrade.ts:3](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-abi/src/ABI/ABI_Upgrade.ts#L3)
