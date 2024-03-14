[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / UserOpErrors

# Class: UserOpErrors

UserOpErrors

**`Export`**

## Hierarchy

- `Error`

  ↳ **`UserOpErrors`**

## Table of contents

### Constructors

- [constructor](UserOpErrors.md#constructor)

### Properties

- [code](UserOpErrors.md#code)
- [data](UserOpErrors.md#data)
- [message](UserOpErrors.md#message)
- [name](UserOpErrors.md#name)
- [stack](UserOpErrors.md#stack)
- [prepareStackTrace](UserOpErrors.md#preparestacktrace)
- [stackTraceLimit](UserOpErrors.md#stacktracelimit)

### Methods

- [toString](UserOpErrors.md#tostring)
- [captureStackTrace](UserOpErrors.md#capturestacktrace)

## Constructors

### constructor

• **new UserOpErrors**(`code`, `message`, `data?`): [`UserOpErrors`](UserOpErrors.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `message` | `string` |
| `data?` | `any` |

#### Returns

[`UserOpErrors`](UserOpErrors.md)

#### Overrides

Error.constructor

#### Defined in

[packages/soulwallet-sdk/src/interface/IUserOpErrors.ts:27](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/interface/IUserOpErrors.ts#L27)

## Properties

### code

• **code**: `number`

The error code, all error codes are defined in UserOpErrorCodes.

**`Memberof`**

UserOpErrors

#### Defined in

[packages/soulwallet-sdk/src/interface/IUserOpErrors.ts:16](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/interface/IUserOpErrors.ts#L16)

___

### data

• **data**: `any`

The error data, it is optional.

**`Memberof`**

UserOpErrors

#### Defined in

[packages/soulwallet-sdk/src/interface/IUserOpErrors.ts:25](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/interface/IUserOpErrors.ts#L25)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:1076

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:1075

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:1077

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.11.10/node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@20.11.10/node_modules/@types/node/globals.d.ts:30

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IUserOpErrors.ts:33](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/interface/IUserOpErrors.ts#L33)

___

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.11.10/node_modules/@types/node/globals.d.ts:21
