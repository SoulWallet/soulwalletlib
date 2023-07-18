[@soulwallet/sdk](../README.md) / [Exports](../modules.md) / ResultWithErrors

# Class: ResultWithErrors<SUCC, ERR\>

**`Export`**

## Type parameters

| Name |
| :------ |
| `SUCC` |
| `ERR` |

## Table of contents

### Constructors

- [constructor](ResultWithErrors.md#constructor)

### Properties

- [errors](ResultWithErrors.md#errors)
- [result](ResultWithErrors.md#result)
- [succ](ResultWithErrors.md#succ)

## Constructors

### constructor

• **new ResultWithErrors**<`SUCC`, `ERR`\>(`succ`, `result`, `errors?`)

#### Type parameters

| Name |
| :------ |
| `SUCC` |
| `ERR` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `succ` | `boolean` | `undefined` |
| `result` | `undefined` \| `SUCC` | `undefined` |
| `errors` | `undefined` \| `ERR` | `undefined` |

#### Defined in

[packages/soulwallet-sdk/src/interface/returnWithErrors.ts:13](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-sdk/src/interface/returnWithErrors.ts#L13)

## Properties

### errors

• **errors**: `undefined` \| `ERR` = `undefined`

#### Defined in

[packages/soulwallet-sdk/src/interface/returnWithErrors.ts:11](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-sdk/src/interface/returnWithErrors.ts#L11)

___

### result

• **result**: `undefined` \| `SUCC` = `undefined`

#### Defined in

[packages/soulwallet-sdk/src/interface/returnWithErrors.ts:12](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-sdk/src/interface/returnWithErrors.ts#L12)

___

### succ

• **succ**: `boolean` = `false`

#### Defined in

[packages/soulwallet-sdk/src/interface/returnWithErrors.ts:10](https://github.com/jayden-sudo/soulwalletlib/blob/7619b45/packages/soulwallet-sdk/src/interface/returnWithErrors.ts#L10)
