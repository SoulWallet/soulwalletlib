[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / UserOpUtils

# Class: UserOpUtils

UserOpUtils

**`Export`**

## Table of contents

### Constructors

- [constructor](UserOpUtils.md#constructor)

### Methods

- [getUserOpHash](UserOpUtils.md#getuserophash)
- [packUserOp](UserOpUtils.md#packuserop)
- [unpackUserOp](UserOpUtils.md#unpackuserop)
- [userOperationFromJSON](UserOpUtils.md#useroperationfromjson)
- [userOperationToJSON](UserOpUtils.md#useroperationtojson)

## Constructors

### constructor

• **new UserOpUtils**(): [`UserOpUtils`](UserOpUtils.md)

#### Returns

[`UserOpUtils`](UserOpUtils.md)

## Methods

### getUserOpHash

▸ **getUserOpHash**(`userOp`, `entryPoint`, `chainId`): `string`

getUserOpHash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) \| [`PackedUserOperation`](../modules.md#packeduseroperation) | UserOperation |
| `entryPoint` | `string` | entryPoint contract address |
| `chainId` | `number` | chainId |

#### Returns

`string`

{string}

**`Static`**

**`Memberof`**

UserOpUtils

#### Defined in

[packages/soulwallet-sdk/src/userOpUtils.ts:47](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/userOpUtils.ts#L47)

___

### packUserOp

▸ **packUserOp**(`userOp`): [`PackedUserOperation`](../modules.md#packeduseroperation)

packUserOp

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

[`PackedUserOperation`](../modules.md#packeduseroperation)

{PackedUserOperation}

**`Static`**

**`Memberof`**

UserOpUtils

#### Defined in

[packages/soulwallet-sdk/src/userOpUtils.ts:59](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/userOpUtils.ts#L59)

___

### unpackUserOp

▸ **unpackUserOp**(`packedUserOp`): [`UserOperation`](../modules.md#useroperation)

unpackUserOp

#### Parameters

| Name | Type |
| :------ | :------ |
| `packedUserOp` | [`PackedUserOperation`](../modules.md#packeduseroperation) |

#### Returns

[`UserOperation`](../modules.md#useroperation)

{UserOperation}

**`Static`**

**`Memberof`**

UserOpUtils

#### Defined in

[packages/soulwallet-sdk/src/userOpUtils.ts:71](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/userOpUtils.ts#L71)

___

### userOperationFromJSON

▸ **userOperationFromJSON**(`json`): [`UserOperation`](../modules.md#useroperation)

userOperationFromJSON

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`UserOperation`](../modules.md#useroperation)

{UserOperation} UserOperation

**`Static`**

**`Memberof`**

UserOpUtils

#### Defined in

[packages/soulwallet-sdk/src/userOpUtils.ts:33](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/userOpUtils.ts#L33)

___

### userOperationToJSON

▸ **userOperationToJSON**(`userOp`): `string`

userOperationToJSON

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) | UserOperation |

#### Returns

`string`

{string} json

**`Static`**

**`Memberof`**

UserOpUtils

#### Defined in

[packages/soulwallet-sdk/src/userOpUtils.ts:21](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/userOpUtils.ts#L21)
