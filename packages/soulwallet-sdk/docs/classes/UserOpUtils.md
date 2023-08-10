[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / UserOpUtils

# Class: UserOpUtils

UserOpUtils

**`Export`**

## Table of contents

### Constructors

- [constructor](UserOpUtils.md#constructor)

### Methods

- [getUserOpHash](UserOpUtils.md#getuserophash)
- [userOperationFromJSON](UserOpUtils.md#useroperationfromjson)
- [userOperationToJSON](UserOpUtils.md#useroperationtojson)

## Constructors

### constructor

• **new UserOpUtils**()

## Methods

### getUserOpHash

▸ `Static` **getUserOpHash**(`userOp`, `entryPoint`, `chainId`): `string`

getUserOpHash

**`Static`**

**`Memberof`**

UserOpUtils

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) | UserOperation |
| `entryPoint` | `string` | entryPoint contract address |
| `chainId` | `number` | chainId |

#### Returns

`string`

{string}

#### Defined in

[packages/soulwallet-sdk/src/userOpUtils.ts:47](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/userOpUtils.ts#L47)

___

### userOperationFromJSON

▸ `Static` **userOperationFromJSON**(`json`): [`UserOperation`](../modules.md#useroperation)

userOperationFromJSON

**`Static`**

**`Memberof`**

UserOpUtils

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`UserOperation`](../modules.md#useroperation)

{UserOperation} UserOperation

#### Defined in

[packages/soulwallet-sdk/src/userOpUtils.ts:33](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/userOpUtils.ts#L33)

___

### userOperationToJSON

▸ `Static` **userOperationToJSON**(`userOp`): `string`

userOperationToJSON

**`Static`**

**`Memberof`**

UserOpUtils

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) | UserOperation |

#### Returns

`string`

{string} json

#### Defined in

[packages/soulwallet-sdk/src/userOpUtils.ts:21](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/userOpUtils.ts#L21)
