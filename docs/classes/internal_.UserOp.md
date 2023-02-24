[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / UserOp

# Class: UserOp

[<internal>](../modules/internal_.md).UserOp

## Table of contents

### Constructors

- [constructor](internal_.UserOp.md#constructor)

### Properties

- [DefaultGasOverheads](internal_.UserOp.md#defaultgasoverheads)

### Methods

- [\_signReuestId](internal_.UserOp.md#_signreuestid)
- [\_signUserOp](internal_.UserOp.md#_signuserop)
- [callDataCost](internal_.UserOp.md#calldatacost)
- [encode](internal_.UserOp.md#encode)
- [getUserOpHash](internal_.UserOp.md#getuserophash)
- [packUserOp](internal_.UserOp.md#packuserop)
- [payMasterSignHash](internal_.UserOp.md#paymastersignhash)
- [signUserOp](internal_.UserOp.md#signuserop)
- [signUserOpWithPersonalSign](internal_.UserOp.md#signuseropwithpersonalsign)

## Constructors

### constructor

• **new UserOp**()

#### Defined in

[src/utils/userOp.ts:18](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/userOp.ts#L18)

## Properties

### DefaultGasOverheads

• `Private` **DefaultGasOverheads**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bundleSize` | `number` |
| `fixed` | `number` |
| `nonZeroByte` | `number` |
| `perUserOp` | `number` |
| `perUserOpWord` | `number` |
| `sigSize` | `number` |
| `zeroByte` | `number` |

#### Defined in

[src/utils/userOp.ts:30](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/userOp.ts#L30)

## Methods

### \_signReuestId

▸ **_signReuestId**(`userOpHash`, `privateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpHash` | `string` |
| `privateKey` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/userOp.ts:129](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/userOp.ts#L129)

___

### \_signUserOp

▸ `Private` **_signUserOp**(`op`, `entryPointAddress`, `chainId`, `privateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`UserOperation`](UserOperation.md) |
| `entryPointAddress` | `string` |
| `chainId` | `number` |
| `privateKey` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/userOp.ts:124](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/userOp.ts#L124)

___

### callDataCost

▸ **callDataCost**(`op`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`UserOperation`](UserOperation.md) |

#### Returns

`number`

#### Defined in

[src/utils/userOp.ts:41](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/userOp.ts#L41)

___

### encode

▸ `Private` **encode**(`typevalues`, `forSignature`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typevalues` | { `type`: `string` ; `val`: `any`  }[] |
| `forSignature` | `boolean` |

#### Returns

`string`

#### Defined in

[src/utils/userOp.ts:23](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/userOp.ts#L23)

___

### getUserOpHash

▸ **getUserOpHash**(`op`, `entryPointAddress`, `chainId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`UserOperation`](UserOperation.md) |
| `entryPointAddress` | `string` |
| `chainId` | `number` |

#### Returns

`string`

#### Defined in

[src/utils/userOp.ts:115](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/userOp.ts#L115)

___

### packUserOp

▸ **packUserOp**(`op`, `forSignature?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `op` | [`UserOperation`](UserOperation.md) | `undefined` |
| `forSignature` | `boolean` | `true` |

#### Returns

`string`

#### Defined in

[src/utils/userOp.ts:70](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/userOp.ts#L70)

___

### payMasterSignHash

▸ **payMasterSignHash**(`op`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`UserOperation`](UserOperation.md) |

#### Returns

`string`

#### Defined in

[src/utils/userOp.ts:178](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/userOp.ts#L178)

___

### signUserOp

▸ **signUserOp**(`op`, `entryPointAddress`, `chainId`, `privateKey`): `string`

sign a user operation with the given private key

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`UserOperation`](UserOperation.md) |
| `entryPointAddress` | `string` |
| `chainId` | `number` |
| `privateKey` | `string` |

#### Returns

`string`

signature

#### Defined in

[src/utils/userOp.ts:151](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/userOp.ts#L151)

___

### signUserOpWithPersonalSign

▸ **signUserOpWithPersonalSign**(`signAddress`, `signature`, `deadline?`): `string`

sign a user operation with the UserOpHash signature

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `signAddress` | `string` | `undefined` | signer address |
| `signature` | `string` | `undefined` | the signature of the UserOpHash |
| `deadline` | `number` | `0` | deadline (block time), default 0 |

#### Returns

`string`

signature

#### Defined in

[src/utils/userOp.ts:163](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/userOp.ts#L163)
