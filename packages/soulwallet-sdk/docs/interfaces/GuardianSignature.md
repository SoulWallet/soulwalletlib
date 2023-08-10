[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / GuardianSignature

# Interface: GuardianSignature

## Table of contents

### Properties

- [address](GuardianSignature.md#address)
- [signature](GuardianSignature.md#signature)
- [signatureType](GuardianSignature.md#signaturetype)

## Properties

### address

• **address**: `string`

Guardian address

**`Memberof`**

GuardianSignature

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:19](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L19)

___

### signature

• `Optional` **signature**: `string`

Signature

**`Memberof`**

GuardianSignature

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:27](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L27)

___

### signatureType

• **signatureType**: ``0`` \| ``1`` \| ``2`` \| ``3``

0:EIP-1271 signature, 1:approved onchain before, 2:EOA signature, 3:No signature provided

**`Memberof`**

GuardianSignature

#### Defined in

[packages/soulwallet-sdk/src/interface/IL1KeyStore.ts:11](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/interface/IL1KeyStore.ts#L11)
