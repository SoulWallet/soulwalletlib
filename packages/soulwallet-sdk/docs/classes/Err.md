[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / Err

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

packages/soulwallet-result/lib.cjs/Result.d.ts:67

## Properties

### \_error

• `Private` `Readonly` **\_error**: `any`

#### Defined in

packages/soulwallet-result/lib.cjs/Result.d.ts:61

## Accessors

### ERR

• `get` **ERR**(): `E`

Gets the error.

**`Memberof`**

Err

#### Returns

`E`

#### Defined in

packages/soulwallet-result/lib.cjs/Result.d.ts:83

___

### OK

• `get` **OK**(): `T`

Gets the successful result value.

**`Memberof`**

Err

#### Returns

`T`

#### Defined in

packages/soulwallet-result/lib.cjs/Result.d.ts:75

## Methods

### isErr

▸ **isErr**(): `boolean`

**`Memberof`**

Err

#### Returns

`boolean`

{boolean}

#### Defined in

packages/soulwallet-result/lib.cjs/Result.d.ts:97

___

### isOk

▸ **isOk**(): `boolean`

**`Memberof`**

Err

#### Returns

`boolean`

{boolean}

#### Defined in

packages/soulwallet-result/lib.cjs/Result.d.ts:90
