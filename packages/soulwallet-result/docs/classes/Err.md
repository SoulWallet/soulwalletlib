[@soulwallet/result](../README.md) / [Modules](../modules.md) / Err

# Class: Err<T, E\>

Defines an Err class, representing a failed operation result.

**`Export`**

## Type parameters

| Name |
| :------ |
| `T` |
| `E` |

## Table of contents

### Constructors

- [constructor](Err.md#constructor)

### Properties

- [\_error](Err.md#_error)

### Accessors

- [ERR](Err.md#err)
- [OK](Err.md#ok)

### Methods

- [isErr](Err.md#iserr)
- [isOk](Err.md#isok)

## Constructors

### constructor

• **new Err**<`T`, `E`\>(`error`)

Creates an instance of Err.

**`Memberof`**

Err

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `E` |

#### Defined in

[Result.ts:86](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-result/src/Result.ts#L86)

## Properties

### \_error

• `Private` `Readonly` **\_error**: `undefined` \| `E` = `undefined`

#### Defined in

[Result.ts:79](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-result/src/Result.ts#L79)

## Accessors

### ERR

• `get` **ERR**(): `E`

Gets the error.

**`Memberof`**

Err

#### Returns

`E`

#### Defined in

[Result.ts:108](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-result/src/Result.ts#L108)

___

### OK

• `get` **OK**(): `T`

Gets the successful result value.

**`Memberof`**

Err

#### Returns

`T`

#### Defined in

[Result.ts:97](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-result/src/Result.ts#L97)

## Methods

### isErr

▸ **isErr**(): `boolean`

**`Memberof`**

Err

#### Returns

`boolean`

{boolean}

#### Defined in

[Result.ts:128](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-result/src/Result.ts#L128)

___

### isOk

▸ **isOk**(): `boolean`

**`Memberof`**

Err

#### Returns

`boolean`

{boolean}

#### Defined in

[Result.ts:118](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-result/src/Result.ts#L118)
