[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / TokenAndPaymaster

# Class: TokenAndPaymaster

[<internal>](../modules/internal_.md).TokenAndPaymaster

TokenPaymaster helper

## Table of contents

### Constructors

- [constructor](internal_.TokenAndPaymaster.md#constructor)

### Methods

- [pack](internal_.TokenAndPaymaster.md#pack)
- [unpack](internal_.TokenAndPaymaster.md#unpack)

## Constructors

### constructor

• **new TokenAndPaymaster**()

## Methods

### pack

▸ `Static` **pack**(`tokenAndPaymaster`): `string`

pack token and paymaster to bytes

**`Static`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAndPaymaster` | [`ITokenAndPaymaster`](../interfaces/internal_.ITokenAndPaymaster.md)[] |

#### Returns

`string`

the packed bytes

#### Defined in

[src/utils/tokenAndPaymaster.ts:24](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokenAndPaymaster.ts#L24)

___

### unpack

▸ `Static` **unpack**(`data`): [`ITokenAndPaymaster`](../interfaces/internal_.ITokenAndPaymaster.md)[]

unpack bytes to token and paymaster

**`Static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | the packed bytes |

#### Returns

[`ITokenAndPaymaster`](../interfaces/internal_.ITokenAndPaymaster.md)[]

the unpacked token and paymaster

#### Defined in

[src/utils/tokenAndPaymaster.ts:67](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokenAndPaymaster.ts#L67)
