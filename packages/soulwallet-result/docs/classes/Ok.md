[@soulwallet/result](../README.md) / [Modules](../modules.md) / Ok

# Class: Ok<T, E\>

Defines an Ok class, representing a successful operation result.

**`Export`**

## Type parameters

| Name |
| :------ |
| `T` |
| `E` |

## Table of contents

### Constructors

- [constructor](Ok.md#constructor)

### Properties

- [\_value](Ok.md#_value)

### Accessors

- [ERR](Ok.md#err)
- [OK](Ok.md#ok)

### Methods

- [isErr](Ok.md#iserr)
- [isOk](Ok.md#isok)

## Constructors

### constructor

• **new Ok**<`T`, `E`\>(`value`)

Creates an instance of Ok.

**`Memberof`**

Ok

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Defined in

[Result.ts:22](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-result/src/Result.ts#L22)

## Properties

### \_value

• `Private` `Readonly` **\_value**: `undefined` \| `T` = `undefined`

#### Defined in

[Result.ts:15](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-result/src/Result.ts#L15)

## Accessors

### ERR

• `get` **ERR**(): `E`

Gets the error.

**`Memberof`**

Ok

#### Returns

`E`

#### Defined in

[Result.ts:44](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-result/src/Result.ts#L44)

___

### OK

• `get` **OK**(): `T`

Gets the successful result value.

**`Memberof`**

Ok

#### Returns

`T`

#### Defined in

[Result.ts:33](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-result/src/Result.ts#L33)

## Methods

### isErr

▸ **isErr**(): `boolean`

**`Memberof`**

Ok

#### Returns

`boolean`

{boolean}

#### Defined in

[Result.ts:64](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-result/src/Result.ts#L64)

___

### isOk

▸ **isOk**(): `boolean`

**`Memberof`**

Ok

#### Returns

`boolean`

{boolean}

#### Defined in

[Result.ts:54](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-result/src/Result.ts#L54)
