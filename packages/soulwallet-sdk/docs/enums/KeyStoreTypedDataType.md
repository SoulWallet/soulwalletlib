[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / KeyStoreTypedDataType

# Enumeration: KeyStoreTypedDataType

## Table of contents

### Enumeration Members

- [TYPE\_HASH\_CANCEL\_SET\_GUARDIAN](KeyStoreTypedDataType.md#type_hash_cancel_set_guardian)
- [TYPE\_HASH\_CANCEL\_SET\_GUARDIAN\_SAFE\_PERIOD](KeyStoreTypedDataType.md#type_hash_cancel_set_guardian_safe_period)
- [TYPE\_HASH\_SET\_GUARDIAN](KeyStoreTypedDataType.md#type_hash_set_guardian)
- [TYPE\_HASH\_SET\_GUARDIAN\_SAFE\_PERIOD](KeyStoreTypedDataType.md#type_hash_set_guardian_safe_period)
- [TYPE\_HASH\_SET\_KEY](KeyStoreTypedDataType.md#type_hash_set_key)
- [TYPE\_HASH\_SOCIAL\_RECOVERY](KeyStoreTypedDataType.md#type_hash_social_recovery)

## Enumeration Members

### TYPE\_HASH\_CANCEL\_SET\_GUARDIAN

• **TYPE\_HASH\_CANCEL\_SET\_GUARDIAN** = ``"TYPE_HASH_CANCEL_SET_GUARDIAN"``

keccak256("CancelSetGuardian(bytes32 keyStoreSlot,uint256 nonce)");

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:46](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L46)

___

### TYPE\_HASH\_CANCEL\_SET\_GUARDIAN\_SAFE\_PERIOD

• **TYPE\_HASH\_CANCEL\_SET\_GUARDIAN\_SAFE\_PERIOD** = ``"TYPE_HASH_CANCEL_SET_GUARDIAN_SAFE_PERIOD"``

keccak256("CancelSetGuardianSafePeriod(bytes32 keyStoreSlot,uint256 nonce)");

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:50](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L50)

___

### TYPE\_HASH\_SET\_GUARDIAN

• **TYPE\_HASH\_SET\_GUARDIAN** = ``"TYPE_HASH_SET_GUARDIAN"``

keccak256("SetGuardian(bytes32 keyStoreSlot,uint256 nonce,bytes32 newGuardianHash)");

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:38](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L38)

___

### TYPE\_HASH\_SET\_GUARDIAN\_SAFE\_PERIOD

• **TYPE\_HASH\_SET\_GUARDIAN\_SAFE\_PERIOD** = ``"TYPE_HASH_SET_GUARDIAN_SAFE_PERIOD"``

keccak256("SetGuardianSafePeriod(bytes32 keyStoreSlot,uint256 nonce,uint64 newGuardianSafePeriod)");

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:42](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L42)

___

### TYPE\_HASH\_SET\_KEY

• **TYPE\_HASH\_SET\_KEY** = ``"TYPE_HASH_SET_KEY"``

keccak256("SetKey(bytes32 keyStoreSlot,uint256 nonce,bytes32 newSigner)");

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:34](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L34)

___

### TYPE\_HASH\_SOCIAL\_RECOVERY

• **TYPE\_HASH\_SOCIAL\_RECOVERY** = ``"TYPE_HASH_SOCIAL_RECOVERY"``

keccak256("SocialRecovery(bytes32 keyStoreSlot,uint256 nonce,bytes32 newSigner)");

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:54](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L54)
