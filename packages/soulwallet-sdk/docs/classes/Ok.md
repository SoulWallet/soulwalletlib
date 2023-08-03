[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / Ok

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

packages/soulwallet-result/lib.cjs/Result.d.ts:20

## Properties

### \_value

• `Private` `Readonly` **\_value**: `any`

#### Defined in

packages/soulwallet-result/lib.cjs/Result.d.ts:14

## Accessors

### ERR

• `get` **ERR**(): `E`

Gets the error.

**`Memberof`**

Ok

#### Returns

`E`

#### Defined in

packages/soulwallet-result/lib.cjs/Result.d.ts:36

___

### OK

• `get` **OK**(): `T`

Gets the successful result value.

**`Memberof`**

Ok

#### Returns

`T`

#### Defined in

packages/soulwallet-result/lib.cjs/Result.d.ts:28

## Methods

### isErr

▸ **isErr**(): `boolean`

**`Memberof`**

Ok

#### Returns

`boolean`

{boolean}

#### Defined in

packages/soulwallet-result/lib.cjs/Result.d.ts:50

___

### isOk

▸ **isOk**(): `boolean`

**`Memberof`**

Ok

#### Returns

`boolean`

{boolean}

#### Defined in

packages/soulwallet-result/lib.cjs/Result.d.ts:43
