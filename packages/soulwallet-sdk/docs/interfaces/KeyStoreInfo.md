[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / KeyStoreInfo

# Interface: KeyStoreInfo

## Table of contents

### Properties

- [guardianActivateAt](KeyStoreInfo.md#guardianactivateat)
- [guardianHash](KeyStoreInfo.md#guardianhash)
- [guardianSafePeriod](KeyStoreInfo.md#guardiansafeperiod)
- [guardianSafePeriodActivateAt](KeyStoreInfo.md#guardiansafeperiodactivateat)
- [key](KeyStoreInfo.md#key)
- [nonce](KeyStoreInfo.md#nonce)
- [pendingGuardianHash](KeyStoreInfo.md#pendingguardianhash)
- [pendingGuardianSafePeriod](KeyStoreInfo.md#pendingguardiansafeperiod)

## Properties

### guardianActivateAt

• **guardianActivateAt**: `number`

unix timestamp (second) of when the `pendingGuardianHash` is activated

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:39](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L39)

___

### guardianHash

• **guardianHash**: `string`

The hash of the 'raw guardian' of the slot

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:24](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L24)

___

### guardianSafePeriod

• **guardianSafePeriod**: `number`

The safe period of the slot

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:47](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L47)

___

### guardianSafePeriodActivateAt

• **guardianSafePeriodActivateAt**: `number`

unix timestamp (second) of when the `pendingGuardianSafePeriod` is activated

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:63](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L63)

___

### key

• **key**: `string`

The address of the signer

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:10](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L10)

___

### nonce

• **nonce**: `number`

The nonce of the slot

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:17](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L17)

___

### pendingGuardianHash

• **pendingGuardianHash**: `string`

The hash of the 'raw pending guardian' of the slot

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:31](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L31)

___

### pendingGuardianSafePeriod

• **pendingGuardianSafePeriod**: `number`

new guardian safe period

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:55](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L55)
