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

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:93](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L93)

___

### guardianHash

• **guardianHash**: `string`

The hash of the 'raw guardian' of the slot

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:78](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L78)

___

### guardianSafePeriod

• **guardianSafePeriod**: `number`

The safe period of the slot

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:101](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L101)

___

### guardianSafePeriodActivateAt

• **guardianSafePeriodActivateAt**: `number`

unix timestamp (second) of when the `pendingGuardianSafePeriod` is activated

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:117](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L117)

___

### key

• **key**: `string`

The address of the signer

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:64](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L64)

___

### nonce

• **nonce**: `number`

The nonce of the slot

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:71](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L71)

___

### pendingGuardianHash

• **pendingGuardianHash**: `string`

The hash of the 'raw pending guardian' of the slot

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:85](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L85)

___

### pendingGuardianSafePeriod

• **pendingGuardianSafePeriod**: `number`

new guardian safe period

**`Memberof`**

KeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:109](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L109)
