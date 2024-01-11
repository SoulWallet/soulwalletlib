[@soulwallet/abi](README.md) / Modules

# @soulwallet/abi

## Table of contents

### Variables

- [ABI\_ArbKeyStoreCrossChainMerkleRootManager](modules.md#abi_arbkeystorecrosschainmerklerootmanager)
- [ABI\_ArbMerkleRootHistory](modules.md#abi_arbmerkleroothistory)
- [ABI\_BaseKeyStore](modules.md#abi_basekeystore)
- [ABI\_BaseKeyStoreAdapter](modules.md#abi_basekeystoreadapter)
- [ABI\_BaseKeyStoreValidatorManager](modules.md#abi_basekeystorevalidatormanager)
- [ABI\_BaseMerkleTree](modules.md#abi_basemerkletree)
- [ABI\_BaseModule](modules.md#abi_basemodule)
- [ABI\_BaseSecurityControlModule](modules.md#abi_basesecuritycontrolmodule)
- [ABI\_Crypto2FAHook](modules.md#abi_crypto2fahook)
- [ABI\_DefaultCallbackHandler](modules.md#abi_defaultcallbackhandler)
- [ABI\_EIP1271Wallet](modules.md#abi_eip1271wallet)
- [ABI\_ERC1271Handler](modules.md#abi_erc1271handler)
- [ABI\_ERC20Paymaster](modules.md#abi_erc20paymaster)
- [ABI\_EntryPoint](modules.md#abi_entrypoint)
- [ABI\_Errors](modules.md#abi_errors)
- [ABI\_HelloWorld](modules.md#abi_helloworld)
- [ABI\_IBaseSecurityControlModule](modules.md#abi_ibasesecuritycontrolmodule)
- [ABI\_ICrossDomainMessenger](modules.md#abi_icrossdomainmessenger)
- [ABI\_IKeyStore](modules.md#abi_ikeystore)
- [ABI\_IKeyStoreModule](modules.md#abi_ikeystoremodule)
- [ABI\_IKeyStoreProof](modules.md#abi_ikeystoreproof)
- [ABI\_IKeyStoreStorage](modules.md#abi_ikeystorestorage)
- [ABI\_IKeyStoreValidator](modules.md#abi_ikeystorevalidator)
- [ABI\_IKeyStoreValidatorManager](modules.md#abi_ikeystorevalidatormanager)
- [ABI\_IL1ScrollMessenger](modules.md#abi_il1scrollmessenger)
- [ABI\_IMerkleRoot](modules.md#abi_imerkleroot)
- [ABI\_IMerkleTree](modules.md#abi_imerkletree)
- [ABI\_IOracle](modules.md#abi_ioracle)
- [ABI\_IScrollMessenger](modules.md#abi_iscrollmessenger)
- [ABI\_ISoulWallet](modules.md#abi_isoulwallet)
- [ABI\_ISoulWalletHookManager](modules.md#abi_isoulwallethookmanager)
- [ABI\_ISoulWalletModule](modules.md#abi_isoulwalletmodule)
- [ABI\_ISoulWalletModuleManager](modules.md#abi_isoulwalletmodulemanager)
- [ABI\_ISoulWalletOwnerManager](modules.md#abi_isoulwalletownermanager)
- [ABI\_ISoulWalletValidatorManager](modules.md#abi_isoulwalletvalidatormanager)
- [ABI\_ITrustedContractManager](modules.md#abi_itrustedcontractmanager)
- [ABI\_IUpgradable](modules.md#abi_iupgradable)
- [ABI\_IUpgrade](modules.md#abi_iupgrade)
- [ABI\_KeyStore](modules.md#abi_keystore)
- [ABI\_KeyStoreMerkleProof](modules.md#abi_keystoremerkleproof)
- [ABI\_KeyStoreModule](modules.md#abi_keystoremodule)
- [ABI\_KeyStoreStorage](modules.md#abi_keystorestorage)
- [ABI\_KeyStoreValidator](modules.md#abi_keystorevalidator)
- [ABI\_MerkleRootHistoryBase](modules.md#abi_merkleroothistorybase)
- [ABI\_NewImplementation](modules.md#abi_newimplementation)
- [ABI\_OpKeyStoreCrossChainMerkleRootManager](modules.md#abi_opkeystorecrosschainmerklerootmanager)
- [ABI\_OpMerkleRootHistory](modules.md#abi_opmerkleroothistory)
- [ABI\_RS256Verify](modules.md#abi_rs256verify)
- [ABI\_ReceivePayment](modules.md#abi_receivepayment)
- [ABI\_ScrollKeyStoreCrossChainMerkleRootManager](modules.md#abi_scrollkeystorecrosschainmerklerootmanager)
- [ABI\_ScrollMerkleRootHistory](modules.md#abi_scrollmerkleroothistory)
- [ABI\_SecurityControlModule](modules.md#abi_securitycontrolmodule)
- [ABI\_SoulWallet](modules.md#abi_soulwallet)
- [ABI\_SoulWalletDefaultValidator](modules.md#abi_soulwalletdefaultvalidator)
- [ABI\_SoulWalletFactory](modules.md#abi_soulwalletfactory)
- [ABI\_SoulWalletHookManager](modules.md#abi_soulwallethookmanager)
- [ABI\_SoulWalletModuleManager](modules.md#abi_soulwalletmodulemanager)
- [ABI\_SoulWalletOwnerManager](modules.md#abi_soulwalletownermanager)
- [ABI\_SoulWalletProxy](modules.md#abi_soulwalletproxy)
- [ABI\_SoulWalletUpgradeManager](modules.md#abi_soulwalletupgrademanager)
- [ABI\_SoulWalletValidatorManager](modules.md#abi_soulwalletvalidatormanager)
- [ABI\_TestOracle](modules.md#abi_testoracle)
- [ABI\_TimeLockEmailGuardian](modules.md#abi_timelockemailguardian)
- [ABI\_TokenERC20](modules.md#abi_tokenerc20)
- [ABI\_TrustedContractManager](modules.md#abi_trustedcontractmanager)
- [ABI\_TrustedHookManager](modules.md#abi_trustedhookmanager)
- [ABI\_TrustedModuleManager](modules.md#abi_trustedmodulemanager)
- [ABI\_TrustedValidatorManager](modules.md#abi_trustedvalidatormanager)
- [ABI\_UpgradeModule](modules.md#abi_upgrademodule)

## Variables

### ABI\_ArbKeyStoreCrossChainMerkleRootManager

• **ABI\_ArbKeyStoreCrossChainMerkleRootManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_l2Target"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "uint256"; `name`: `string` = "\_maxSubmissionCost"; `type`: `string` = "uint256" }[] ; `name`: `string` = "syncKeyStoreMerkleRootToArb"; `outputs`: \{ `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "payable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "uint256"; `name`: `string` = "ticketId"; `type`: `string` = "uint256" }[] ; `name`: `string` = "KeyStoreMerkleRootSyncedToArb"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_ArbKeyStoreCrossChainMerkleRootManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ArbKeyStoreCrossChainMerkleRootManager.ts#L3)

___

### ABI\_ArbMerkleRootHistory

• **ABI\_ArbMerkleRootHistory**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_l1Target"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "\_root"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "isKnownRoot"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "\_root"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "L1MerkleRootSynced"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_ArbMerkleRootHistory.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ArbMerkleRootHistory.ts#L3)

___

### ABI\_BaseKeyStore

• **ABI\_BaseKeyStore**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes"; `name`: `string` = "rawGuardian"; `type`: `string` = "bytes" }[] ; `name`: `string` = "getGuardianHash"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "guardianHash"; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "getKeyStoreInfo"; `outputs`: \{ `components`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "key"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct IKeyStore.keyStoreInfo"; `name`: `string` = "\_keyStoreInfo"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "CancelSetGuardian"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "INVALID\_DATA"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_BaseKeyStore.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_BaseKeyStore.ts#L3)

___

### ABI\_BaseKeyStoreAdapter

• **ABI\_BaseKeyStoreAdapter**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes"; `name`: `string` = "rawGuardian"; `type`: `string` = "bytes" }[] ; `name`: `string` = "getGuardianHash"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "guardianHash"; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "getKeyStoreInfo"; `outputs`: \{ `components`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "key"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct IKeyStore.keyStoreInfo"; `name`: `string` = "\_keyStoreInfo"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "CancelSetGuardian"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_BaseKeyStoreAdapter.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_BaseKeyStoreAdapter.ts#L3)

___

### ABI\_BaseKeyStoreValidatorManager

• **ABI\_BaseKeyStoreValidatorManager**: \{ `inputs`: `never`[] = []; `name`: `string` = "validator"; `outputs`: \{ `internalType`: `string` = "contract IKeyStoreValidator"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[]

#### Defined in

[ABI/ABI_BaseKeyStoreValidatorManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_BaseKeyStoreValidatorManager.ts#L3)

___

### ABI\_BaseMerkleTree

• **ABI\_BaseMerkleTree**: (\{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "getMerkleRoot"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = ""; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "bytes32"; `name`: `string` = "slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "newLeaf"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_BaseMerkleTree.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_BaseMerkleTree.ts#L3)

___

### ABI\_BaseModule

• **ABI\_BaseModule**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes4"; `name`: `string` = "interfaceId"; `type`: `string` = "bytes4" }[] ; `name`: `string` = "supportsInterface"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "ModuleDeInit"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_BaseModule.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_BaseModule.ts#L3)

___

### ABI\_BaseSecurityControlModule

• **ABI\_BaseSecurityControlModule**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "uint128"; `name`: `string` = "\_seed"; `type`: `string` = "uint128" }[] ; `name`: `string` = "getTxId"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = ""; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_target"; `type`: `string` = "address" }[] ; `name`: `string` = "getWalletConfig"; `outputs`: \{ `components`: \{ `internalType`: `string` = "uint128"; `name`: `string` = "seed"; `type`: `string` = "uint128" }[] ; `internalType`: `string` = "struct IBaseSecurityControlModule.WalletConfig"; `name`: `string` = ""; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "txId"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "Cancel"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "txId"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "AlreadyQueuedError"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_BaseSecurityControlModule.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_BaseSecurityControlModule.ts#L3)

___

### ABI\_Crypto2FAHook

• **ABI\_Crypto2FAHook**: (\{ `inputs`: (\{ `components`: \{ `internalType`: `string` = "address"; `name`: `string` = "sender"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct UserOperation"; `name`: `string` = "userOp"; `type`: `string` = "tuple" } \| \{ `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" })[] ; `name`: `string` = "preUserOpValidationHook"; `outputs`: `never`[] = []; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `inputs`: \{ `internalType`: `string` = "bytes4"; `name`: `string` = "interfaceId"; `type`: `string` = "bytes4" }[] ; `name`: `string` = "supportsInterface"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" } \| \{ `inputs`: \{ `internalType`: `string` = "uint256"; `name`: `string` = "length"; `type`: `string` = "uint256" }[] ; `name`: `string` = "ECDSAInvalidSignatureLength"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_Crypto2FAHook.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_Crypto2FAHook.ts#L3)

___

### ABI\_DefaultCallbackHandler

• **ABI\_DefaultCallbackHandler**: (\{ `inputs?`: `undefined` ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "payable"; `type`: `string` = "fallback" } \| \{ `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `name`: `string` = "onERC1155BatchReceived"; `outputs`: \{ `internalType`: `string` = "bytes4"; `name`: `string` = ""; `type`: `string` = "bytes4" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_DefaultCallbackHandler.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_DefaultCallbackHandler.ts#L3)

___

### ABI\_EIP1271Wallet

• **ABI\_EIP1271Wallet**: \{ `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "hash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "isValidSignature"; `outputs`: \{ `internalType`: `string` = "bytes4"; `name`: `string` = "magicValue"; `type`: `string` = "bytes4" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" }[]

#### Defined in

[ABI/ABI_EIP1271Wallet.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_EIP1271Wallet.ts#L3)

___

### ABI\_ERC1271Handler

• **ABI\_ERC1271Handler**: (\{ `inputs`: `never`[] = []; `name`: `string` = "getChainId"; `outputs`: \{ `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `inputs`: `never`[] = []; `name`: `string` = "CALLER\_MUST\_BE\_MODULE"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_ERC1271Handler.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ERC1271Handler.ts#L3)

___

### ABI\_ERC20Paymaster

• **ABI\_ERC20Paymaster**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "contract IEntryPoint"; `name`: `string` = "\_entryPoint"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: (\{ `components`: \{ `internalType`: `string` = "address"; `name`: `string` = "sender"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct UserOperation"; `name`: `string` = "userOp"; `type`: `string` = "tuple" } \| \{ `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" })[] ; `name`: `string` = "validatePaymasterUserOp"; `outputs`: \{ `internalType`: `string` = "bytes"; `name`: `string` = "context"; `type`: `string` = "bytes" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "token"; `type`: `string` = "address" }[] ; `name`: `string` = "ConfigUpdated"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "target"; `type`: `string` = "address" }[] ; `name`: `string` = "AddressEmptyCode"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_ERC20Paymaster.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ERC20Paymaster.ts#L3)

___

### ABI\_EntryPoint

• **ABI\_EntryPoint**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "uint256"; `name`: `string` = "preOpGas"; `type`: `string` = "uint256" }[] ; `name`: `string` = "ExecutionResult"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `components`: (\{ `components?`: `undefined` ; `internalType`: `string` = "address"; `name`: `string` = "aggregator"; `type`: `string` = "address" } \| \{ `components`: \{ `internalType`: `string` = "uint256"; `name`: `string` = "stake"; `type`: `string` = "uint256" }[] ; `internalType`: `string` = "struct IStakeManager.StakeInfo"; `name`: `string` = "stakeInfo"; `type`: `string` = "tuple" })[] ; `internalType`: `string` = "struct IEntryPoint.AggregatorStakeInfo"; `name`: `string` = "aggregatorInfo"; `type`: `string` = "tuple" }[] ; `name`: `string` = "ValidationResultWithAggregation"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "AccountDeployed"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "account"; `type`: `string` = "address" }[] ; `name`: `string` = "getDepositInfo"; `outputs`: \{ `components`: \{ `internalType`: `string` = "uint112"; `name`: `string` = "deposit"; `type`: `string` = "uint112" }[] ; `internalType`: `string` = "struct IStakeManager.DepositInfo"; `name`: `string` = "info"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: (\{ `components?`: `undefined` ; `internalType`: `string` = "bytes"; `name`: `string` = "callData"; `type`: `string` = "bytes" } \| \{ `components`: (\{ `components`: \{ `internalType`: `string` = "address"; `name`: `string` = "sender"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct EntryPoint.MemoryUserOp"; `name`: `string` = "mUserOp"; `type`: `string` = "tuple" } \| \{ `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" })[] ; `internalType`: `string` = "struct EntryPoint.UserOpInfo"; `name`: `string` = "opInfo"; `type`: `string` = "tuple" })[] ; `name`: `string` = "innerHandleOp"; `outputs`: \{ `internalType`: `string` = "uint256"; `name`: `string` = "actualGasCost"; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs?`: `undefined` ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "payable"; `type`: `string` = "receive" })[]

#### Defined in

[ABI/ABI_EntryPoint.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_EntryPoint.ts#L3)

___

### ABI\_Errors

• **ABI\_Errors**: \{ `inputs`: `never`[] = []; `name`: `string` = "ADDRESS\_ALREADY\_EXISTS"; `type`: `string` = "error" }[]

#### Defined in

[ABI/ABI_Errors.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_Errors.ts#L3)

___

### ABI\_HelloWorld

• **ABI\_HelloWorld**: \{ `inputs`: `never`[] = []; `name`: `string` = "output"; `outputs`: \{ `internalType`: `string` = "string"; `name`: `string` = ""; `type`: `string` = "string" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" }[]

#### Defined in

[ABI/ABI_HelloWorld.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_HelloWorld.ts#L3)

___

### ABI\_IBaseSecurityControlModule

• **ABI\_IBaseSecurityControlModule**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "uint128"; `name`: `string` = "\_seed"; `type`: `string` = "uint128" }[] ; `name`: `string` = "getTxId"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = ""; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_target"; `type`: `string` = "address" }[] ; `name`: `string` = "getWalletConfig"; `outputs`: \{ `components`: \{ `internalType`: `string` = "uint128"; `name`: `string` = "seed"; `type`: `string` = "uint128" }[] ; `internalType`: `string` = "struct IBaseSecurityControlModule.WalletConfig"; `name`: `string` = ""; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "txId"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "Cancel"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "txId"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "AlreadyQueuedError"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_IBaseSecurityControlModule.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IBaseSecurityControlModule.ts#L3)

___

### ABI\_ICrossDomainMessenger

• **ABI\_ICrossDomainMessenger**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_target"; `type`: `string` = "address" }[] ; `name`: `string` = "sendMessage"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "xDomainMessageSender"; `outputs`: \{ `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "msgHash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "FailedRelayedMessage"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_ICrossDomainMessenger.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ICrossDomainMessenger.ts#L3)

___

### ABI\_IKeyStore

• **ABI\_IKeyStore**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes"; `name`: `string` = "rawGuardian"; `type`: `string` = "bytes" }[] ; `name`: `string` = "getGuardianHash"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "guardianHash"; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "getKeyStoreInfo"; `outputs`: \{ `components`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "key"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct IKeyStore.keyStoreInfo"; `name`: `string` = "\_keyStoreInfo"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "CancelSetGuardian"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_IKeyStore.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IKeyStore.ts#L3)

___

### ABI\_IKeyStoreModule

• **ABI\_IKeyStoreModule**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "syncL1Keystore"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "\_wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "KeyStoreInited"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_IKeyStoreModule.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IKeyStoreModule.ts#L3)

___

### ABI\_IKeyStoreProof

• **ABI\_IKeyStoreProof**: \{ `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "l1Slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "keyStoreBySlot"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "signingKeyHash"; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[]

#### Defined in

[ABI/ABI_IKeyStoreProof.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IKeyStoreProof.ts#L3)

___

### ABI\_IKeyStoreStorage

• **ABI\_IKeyStoreStorage**: \{ `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "\_slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "getAddress"; `outputs`: \{ `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[]

#### Defined in

[ABI/ABI_IKeyStoreStorage.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IKeyStoreStorage.ts#L3)

___

### ABI\_IKeyStoreValidator

• **ABI\_IKeyStoreValidator**: \{ `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "rawHash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "recoverSignature"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "recovered"; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[]

#### Defined in

[ABI/ABI_IKeyStoreValidator.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IKeyStoreValidator.ts#L3)

___

### ABI\_IKeyStoreValidatorManager

• **ABI\_IKeyStoreValidatorManager**: \{ `inputs`: `never`[] = []; `name`: `string` = "validator"; `outputs`: \{ `internalType`: `string` = "contract IKeyStoreValidator"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[]

#### Defined in

[ABI/ABI_IKeyStoreValidatorManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IKeyStoreValidatorManager.ts#L3)

___

### ABI\_IL1ScrollMessenger

• **ABI\_IL1ScrollMessenger**: (\{ `anonymous?`: `undefined` = false; `inputs`: (\{ `components?`: `undefined` ; `internalType`: `string` = "address"; `name`: `string` = "from"; `type`: `string` = "address" } \| \{ `components`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "batchHash"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct IL1ScrollMessenger.L2MessageProof"; `name`: `string` = "proof"; `type`: `string` = "tuple" })[] ; `name`: `string` = "relayMessageWithProof"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "xDomainMessageSender"; `outputs`: \{ `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "messageHash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "FailedRelayedMessage"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

ABI/ABI_IL1ScrollMessenger.ts:3

___

### ABI\_IMerkleRoot

• **ABI\_IMerkleRoot**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "\_root"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "isKnownRoot"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "\_root"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "L1MerkleRootSynced"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_IMerkleRoot.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IMerkleRoot.ts#L3)

___

### ABI\_IMerkleTree

• **ABI\_IMerkleTree**: \{ `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "insertLeaf"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" }[]

#### Defined in

[ABI/ABI_IMerkleTree.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IMerkleTree.ts#L3)

___

### ABI\_IOracle

• **ABI\_IOracle**: \{ `inputs`: `never`[] = []; `name`: `string` = "decimals"; `outputs`: \{ `internalType`: `string` = "uint8"; `name`: `string` = ""; `type`: `string` = "uint8" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[]

#### Defined in

[ABI/ABI_IOracle.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IOracle.ts#L3)

___

### ABI\_IScrollMessenger

• **ABI\_IScrollMessenger**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "target"; `type`: `string` = "address" }[] ; `name`: `string` = "sendMessage"; `outputs`: `never`[] = []; `stateMutability`: `string` = "payable"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "xDomainMessageSender"; `outputs`: \{ `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "messageHash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "FailedRelayedMessage"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

ABI/ABI_IScrollMessenger.ts:3

___

### ABI\_ISoulWallet

• **ABI\_ISoulWallet**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `components`: \{ `internalType`: `string` = "address"; `name`: `string` = "target"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct Execution[]"; `name`: `string` = "executions"; `type`: `string` = "tuple[]" }[] ; `name`: `string` = "executeBatch"; `outputs`: `never`[] = []; `stateMutability`: `string` = "payable"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "hook"; `type`: `string` = "address" }[] ; `name`: `string` = "isInstalledHook"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "hook"; `type`: `string` = "address" }[] ; `name`: `string` = "HookInstalled"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_ISoulWallet.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ISoulWallet.ts#L3)

___

### ABI\_ISoulWalletHookManager

• **ABI\_ISoulWalletHookManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "hook"; `type`: `string` = "address" }[] ; `name`: `string` = "isInstalledHook"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "hook"; `type`: `string` = "address" }[] ; `name`: `string` = "HookInstalled"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_ISoulWalletHookManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ISoulWalletHookManager.ts#L3)

___

### ABI\_ISoulWalletModule

• **ABI\_ISoulWalletModule**: \{ `inputs`: \{ `internalType`: `string` = "bytes4"; `name`: `string` = "interfaceId"; `type`: `string` = "bytes4" }[] ; `name`: `string` = "supportsInterface"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[]

#### Defined in

[ABI/ABI_ISoulWalletModule.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ISoulWalletModule.ts#L3)

___

### ABI\_ISoulWalletModuleManager

• **ABI\_ISoulWalletModuleManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "module"; `type`: `string` = "address" }[] ; `name`: `string` = "isInstalledModule"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "module"; `type`: `string` = "address" }[] ; `name`: `string` = "ModuleInstalled"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_ISoulWalletModuleManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ISoulWalletModuleManager.ts#L3)

___

### ABI\_ISoulWalletOwnerManager

• **ABI\_ISoulWalletOwnerManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "owner"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "isOwner"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "owner"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "OwnerAdded"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_ISoulWalletOwnerManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ISoulWalletOwnerManager.ts#L3)

___

### ABI\_ISoulWalletValidatorManager

• **ABI\_ISoulWalletValidatorManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes"; `name`: `string` = "validatorAndData"; `type`: `string` = "bytes" }[] ; `name`: `string` = "installValidator"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "listValidator"; `outputs`: \{ `internalType`: `string` = "address[]"; `name`: `string` = "validators"; `type`: `string` = "address[]" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "validator"; `type`: `string` = "address" }[] ; `name`: `string` = "ValidatorInstalled"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_ISoulWalletValidatorManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ISoulWalletValidatorManager.ts#L3)

___

### ABI\_ITrustedContractManager

• **ABI\_ITrustedContractManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "addr"; `type`: `string` = "address" }[] ; `name`: `string` = "isTrustedContract"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "module"; `type`: `string` = "address" }[] ; `name`: `string` = "TrustedContractAdded"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_ITrustedContractManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ITrustedContractManager.ts#L3)

___

### ABI\_IUpgradable

• **ABI\_IUpgradable**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "oldImplementation"; `type`: `string` = "address" }[] ; `name`: `string` = "upgradeFrom"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "oldImplementation"; `type`: `string` = "address" }[] ; `name`: `string` = "Upgraded"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_IUpgradable.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IUpgradable.ts#L3)

___

### ABI\_IUpgrade

• **ABI\_IUpgrade**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "upgrade"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "newLogic"; `type`: `string` = "address" }[] ; `name`: `string` = "Upgrade"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_IUpgrade.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_IUpgrade.ts#L3)

___

### ABI\_KeyStore

• **ABI\_KeyStore**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "contract IKeyStoreValidator"; `name`: `string` = "\_validator"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes"; `name`: `string` = "rawGuardian"; `type`: `string` = "bytes" }[] ; `name`: `string` = "getGuardianHash"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "guardianHash"; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "getKeyStoreInfo"; `outputs`: \{ `components`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "key"; `type`: `string` = "bytes32" }[] ; `internalType`: `string` = "struct IKeyStore.keyStoreInfo"; `name`: `string` = "\_keyStoreInfo"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "guardian"; `type`: `string` = "address" }[] ; `name`: `string` = "ApproveHash"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "uint256"; `name`: `string` = "length"; `type`: `string` = "uint256" }[] ; `name`: `string` = "ECDSAInvalidSignatureLength"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_KeyStore.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_KeyStore.ts#L3)

___

### ABI\_KeyStoreMerkleProof

• **ABI\_KeyStoreMerkleProof**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_merkleRootHistory"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "l1Slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "keyStoreBySlot"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "signingKey"; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "bytes32"; `name`: `string` = "l1Slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "L1KeyStoreProved"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_KeyStoreMerkleProof.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_KeyStoreMerkleProof.ts#L3)

___

### ABI\_KeyStoreModule

• **ABI\_KeyStoreModule**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_keyStoreProof"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `name`: `string` = "l1Slot"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = ""; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "\_wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "KeyStoreInited"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_KeyStoreModule.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_KeyStoreModule.ts#L3)

___

### ABI\_KeyStoreStorage

• **ABI\_KeyStoreStorage**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_owner"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "\_slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "getAddress"; `outputs`: \{ `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "slot"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "KeystoreLogicSet"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_KeyStoreStorage.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_KeyStoreStorage.ts#L3)

___

### ABI\_KeyStoreValidator

• **ABI\_KeyStoreValidator**: (\{ `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "rawHash"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "recoverSignature"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "recovered"; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `inputs`: `never`[] = []; `name`: `string` = "INVALID\_SIGNTYPE"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_KeyStoreValidator.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_KeyStoreValidator.ts#L3)

___

### ABI\_MerkleRootHistoryBase

• **ABI\_MerkleRootHistoryBase**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "\_root"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "isKnownRoot"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "\_root"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "L1MerkleRootSynced"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_MerkleRootHistoryBase.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_MerkleRootHistoryBase.ts#L3)

___

### ABI\_NewImplementation

• **ABI\_NewImplementation**: (\{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "CURRENT\_UPGRADE\_SLOT"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = ""; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32[]"; `name`: `string` = "owners"; `type`: `string` = "bytes32[]" }[] ; `name`: `string` = "initialize"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "uint64"; `name`: `string` = "version"; `type`: `string` = "uint64" }[] ; `name`: `string` = "Initialized"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "INVALID\_LOGIC\_ADDRESS"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_NewImplementation.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_NewImplementation.ts#L3)

___

### ABI\_OpKeyStoreCrossChainMerkleRootManager

• **ABI\_OpKeyStoreCrossChainMerkleRootManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_l2Target"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "l1CrossDomainMessenger"; `outputs`: \{ `internalType`: `string` = "contract ICrossDomainMessenger"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "newOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "transferOwnership"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "uint256"; `name`: `string` = "ticketId"; `type`: `string` = "uint256" }[] ; `name`: `string` = "KeyStoreMerkleRootSyncedToOp"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_OpKeyStoreCrossChainMerkleRootManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_OpKeyStoreCrossChainMerkleRootManager.ts#L3)

___

### ABI\_OpMerkleRootHistory

• **ABI\_OpMerkleRootHistory**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_l1Target"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "\_root"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "isKnownRoot"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "\_root"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "L1MerkleRootSynced"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_OpMerkleRootHistory.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_OpMerkleRootHistory.ts#L3)

___

### ABI\_RS256Verify

• **ABI\_RS256Verify**: \{ `inputs`: `never`[] = []; `name`: `string` = "InvalidLength"; `type`: `string` = "error" }[]

#### Defined in

[ABI/ABI_RS256Verify.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_RS256Verify.ts#L3)

___

### ABI\_ReceivePayment

• **ABI\_ReceivePayment**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_owner"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "owner"; `outputs`: \{ `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "\_paymentId"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "pay"; `outputs`: `never`[] = []; `stateMutability`: `string` = "payable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_ReceivePayment.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_ReceivePayment.ts#L3)

___

### ABI\_ScrollKeyStoreCrossChainMerkleRootManager

• **ABI\_ScrollKeyStoreCrossChainMerkleRootManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_l2Target"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "l1KeyStore"; `outputs`: \{ `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "newOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "transferOwnership"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "uint256"; `name`: `string` = "ticketId"; `type`: `string` = "uint256" }[] ; `name`: `string` = "KeyStoreMerkleRootSyncedToScroll"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

ABI/ABI_ScrollKeyStoreCrossChainMerkleRootManager.ts:3

___

### ABI\_ScrollMerkleRootHistory

• **ABI\_ScrollMerkleRootHistory**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_l1Target"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "\_root"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "isKnownRoot"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "\_root"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "L1MerkleRootSynced"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

ABI/ABI_ScrollMerkleRootHistory.ts:3

___

### ABI\_SecurityControlModule

• **ABI\_SecurityControlModule**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "contract ITrustedContractManager"; `name`: `string` = "\_trustedModuleManager"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "uint128"; `name`: `string` = "\_seed"; `type`: `string` = "uint128" }[] ; `name`: `string` = "getTxId"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = ""; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_target"; `type`: `string` = "address" }[] ; `name`: `string` = "getWalletConfig"; `outputs`: \{ `components`: \{ `internalType`: `string` = "uint128"; `name`: `string` = "seed"; `type`: `string` = "uint128" }[] ; `internalType`: `string` = "struct IBaseSecurityControlModule.WalletConfig"; `name`: `string` = ""; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "txId"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "Cancel"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "txId"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "AlreadyQueuedError"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_SecurityControlModule.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_SecurityControlModule.ts#L3)

___

### ABI\_SoulWallet

• **ABI\_SoulWallet**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_entryPoint"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs?`: `undefined` ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "payable"; `type`: `string` = "fallback" } \| \{ `anonymous?`: `undefined` = false; `inputs`: (\{ `components`: \{ `internalType`: `string` = "address"; `name`: `string` = "sender"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct UserOperation"; `name`: `string` = "userOp"; `type`: `string` = "tuple" } \| \{ `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" })[] ; `name`: `string` = "validateUserOp"; `outputs`: \{ `internalType`: `string` = "uint256"; `name`: `string` = "validationData"; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "payable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "fallbackContract"; `type`: `string` = "address" }[] ; `name`: `string` = "FallbackChanged"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "ADDRESS\_ALREADY\_EXISTS"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_SoulWallet.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_SoulWallet.ts#L3)

___

### ABI\_SoulWalletDefaultValidator

• **ABI\_SoulWalletDefaultValidator**: (\{ `inputs`: (\{ `components`: \{ `internalType`: `string` = "address"; `name`: `string` = "sender"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct UserOperation"; `name`: `string` = ""; `type`: `string` = "tuple" } \| \{ `components?`: `undefined` ; `internalType`: `string` = "bytes32"; `name`: `string` = "userOpHash"; `type`: `string` = "bytes32" })[] ; `name`: `string` = "validateUserOp"; `outputs`: \{ `internalType`: `string` = "uint256"; `name`: `string` = "validationData"; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `inputs`: `never`[] = []; `name`: `string` = "INVALID\_SIGNTYPE"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_SoulWalletDefaultValidator.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_SoulWalletDefaultValidator.ts#L3)

___

### ABI\_SoulWalletFactory

• **ABI\_SoulWalletFactory**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_walletImpl"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes"; `name`: `string` = "\_initializer"; `type`: `string` = "bytes" }[] ; `name`: `string` = "createWallet"; `outputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "proxy"; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_SoulWalletFactory.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_SoulWalletFactory.ts#L3)

___

### ABI\_SoulWalletHookManager

• **ABI\_SoulWalletHookManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "hook"; `type`: `string` = "address" }[] ; `name`: `string` = "isInstalledHook"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "hook"; `type`: `string` = "address" }[] ; `name`: `string` = "HookInstalled"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "ADDRESS\_ALREADY\_EXISTS"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_SoulWalletHookManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_SoulWalletHookManager.ts#L3)

___

### ABI\_SoulWalletModuleManager

• **ABI\_SoulWalletModuleManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "module"; `type`: `string` = "address" }[] ; `name`: `string` = "isInstalledModule"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "module"; `type`: `string` = "address" }[] ; `name`: `string` = "ModuleInstalled"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "ADDRESS\_ALREADY\_EXISTS"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_SoulWalletModuleManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_SoulWalletModuleManager.ts#L3)

___

### ABI\_SoulWalletOwnerManager

• **ABI\_SoulWalletOwnerManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "owner"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "isOwner"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "bytes32"; `name`: `string` = "owner"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "OwnerAdded"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "CALLER\_MUST\_BE\_MODULE"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_SoulWalletOwnerManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_SoulWalletOwnerManager.ts#L3)

___

### ABI\_SoulWalletProxy

• **ABI\_SoulWalletProxy**: (\{ `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "logic"; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `inputs?`: `undefined` ; `stateMutability`: `string` = "payable"; `type`: `string` = "fallback" })[]

#### Defined in

[ABI/ABI_SoulWalletProxy.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_SoulWalletProxy.ts#L3)

___

### ABI\_SoulWalletUpgradeManager

• **ABI\_SoulWalletUpgradeManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "oldImplementation"; `type`: `string` = "address" }[] ; `name`: `string` = "upgradeFrom"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "oldImplementation"; `type`: `string` = "address" }[] ; `name`: `string` = "Upgraded"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_SoulWalletUpgradeManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_SoulWalletUpgradeManager.ts#L3)

___

### ABI\_SoulWalletValidatorManager

• **ABI\_SoulWalletValidatorManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes"; `name`: `string` = "validatorAndData"; `type`: `string` = "bytes" }[] ; `name`: `string` = "installValidator"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "listValidator"; `outputs`: \{ `internalType`: `string` = "address[]"; `name`: `string` = "validators"; `type`: `string` = "address[]" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "validator"; `type`: `string` = "address" }[] ; `name`: `string` = "ValidatorInstalled"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "ADDRESS\_ALREADY\_EXISTS"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_SoulWalletValidatorManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_SoulWalletValidatorManager.ts#L3)

___

### ABI\_TestOracle

• **ABI\_TestOracle**: (\{ `inputs`: \{ `internalType`: `string` = "int256"; `name`: `string` = "\_price"; `type`: `string` = "int256" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `inputs`: `never`[] = []; `name`: `string` = "decimals"; `outputs`: \{ `internalType`: `string` = "uint8"; `name`: `string` = ""; `type`: `string` = "uint8" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" })[]

#### Defined in

[ABI/ABI_TestOracle.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_TestOracle.ts#L3)

___

### ABI\_TimeLockEmailGuardian

• **ABI\_TimeLockEmailGuardian**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_keystoreAddr"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = "role"; `type`: `string` = "bytes32" }[] ; `name`: `string` = "getRoleAdmin"; `outputs`: \{ `internalType`: `string` = "bytes32"; `name`: `string` = ""; `type`: `string` = "bytes32" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "account"; `type`: `string` = "address" }[] ; `name`: `string` = "AccessControlUnauthorizedAccount"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_TimeLockEmailGuardian.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_TimeLockEmailGuardian.ts#L3)

___

### ABI\_TokenERC20

• **ABI\_TokenERC20**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "uint8"; `name`: `string` = "\_decimals"; `type`: `string` = "uint8" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "allowance"; `outputs`: \{ `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "spender"; `type`: `string` = "address" }[] ; `name`: `string` = "ERC20InsufficientAllowance"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_TokenERC20.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_TokenERC20.ts#L3)

___

### ABI\_TrustedContractManager

• **ABI\_TrustedContractManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "module"; `type`: `string` = "address" }[] ; `name`: `string` = "isTrustedContract"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_TrustedContractManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_TrustedContractManager.ts#L3)

___

### ABI\_TrustedHookManager

• **ABI\_TrustedHookManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_owner"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "module"; `type`: `string` = "address" }[] ; `name`: `string` = "isTrustedContract"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_TrustedHookManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_TrustedHookManager.ts#L3)

___

### ABI\_TrustedModuleManager

• **ABI\_TrustedModuleManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_owner"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "module"; `type`: `string` = "address" }[] ; `name`: `string` = "isTrustedContract"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_TrustedModuleManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_TrustedModuleManager.ts#L3)

___

### ABI\_TrustedValidatorManager

• **ABI\_TrustedValidatorManager**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_owner"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "module"; `type`: `string` = "address" }[] ; `name`: `string` = "isTrustedContract"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "error" })[]

#### Defined in

[ABI/ABI_TrustedValidatorManager.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_TrustedValidatorManager.ts#L3)

___

### ABI\_UpgradeModule

• **ABI\_UpgradeModule**: (\{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "address"; `name`: `string` = "\_newImplementation"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "OwnableInvalidOwner"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| \{ `anonymous?`: `undefined` = false; `inputs`: \{ `internalType`: `string` = "bytes4"; `name`: `string` = "interfaceId"; `type`: `string` = "bytes4" }[] ; `name`: `string` = "supportsInterface"; `outputs`: \{ `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "pure"; `type`: `string` = "function" } \| \{ `anonymous`: `boolean` = false; `inputs`: \{ `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "wallet"; `type`: `string` = "address" }[] ; `name`: `string` = "ModuleDeInit"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "payable"; `type`: `string` = "event" })[]

#### Defined in

[ABI/ABI_UpgradeModule.ts:3](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-abi/src/ABI/ABI_UpgradeModule.ts#L3)
