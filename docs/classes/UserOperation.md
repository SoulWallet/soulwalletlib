[soul-wallet-lib](../README.md) / [Exports](../modules.md) / UserOperation

# Class: UserOperation

**`Description`**

UserOperation class

**`Example`**

```ts
const userOperation = new UserOperation();
```

**`Property`**

the sender address

**`Property`**

the nonce

**`Property`**

the initCode

**`Property`**

the callData

**`Property`**

the preVerificationGas

**`Property`**

the verificationGasLimit

**`Property`**

the maxFeePerGas

**`Property`**

the maxPriorityFeePerGas

**`Property`**

the paymasterAndData

**`Property`**

the signature

## Table of contents

### Constructors

- [constructor](UserOperation.md#constructor)

### Properties

- [\_callData](UserOperation.md#_calldata)
- [\_callGasLimit](UserOperation.md#_callgaslimit)
- [\_initCode](UserOperation.md#_initcode)
- [\_maxFeePerGas](UserOperation.md#_maxfeepergas)
- [\_maxPriorityFeePerGas](UserOperation.md#_maxpriorityfeepergas)
- [\_nonce](UserOperation.md#_nonce)
- [\_paymasterAndData](UserOperation.md#_paymasteranddata)
- [\_preVerificationGas](UserOperation.md#_preverificationgas)
- [\_sender](UserOperation.md#_sender)
- [\_signature](UserOperation.md#_signature)
- [\_userOp](UserOperation.md#_userop)
- [\_verificationGasLimit](UserOperation.md#_verificationgaslimit)

### Accessors

- [callData](UserOperation.md#calldata)
- [callGasLimit](UserOperation.md#callgaslimit)
- [initCode](UserOperation.md#initcode)
- [maxFeePerGas](UserOperation.md#maxfeepergas)
- [maxPriorityFeePerGas](UserOperation.md#maxpriorityfeepergas)
- [nonce](UserOperation.md#nonce)
- [paymasterAndData](UserOperation.md#paymasteranddata)
- [preVerificationGas](UserOperation.md#preverificationgas)
- [sender](UserOperation.md#sender)
- [signature](UserOperation.md#signature)
- [verificationGasLimit](UserOperation.md#verificationgaslimit)

### Methods

- [alignment](UserOperation.md#alignment)
- [calcGas](UserOperation.md#calcgas)
- [estimateGas](UserOperation.md#estimategas)
- [getStruct](UserOperation.md#getstruct)
- [getUserOpHash](UserOperation.md#getuserophash)
- [getUserOpHashWithDeadline](UserOperation.md#getuserophashwithdeadline)
- [payMasterSignHash](UserOperation.md#paymastersignhash)
- [requiredPrefund](UserOperation.md#requiredprefund)
- [sign](UserOperation.md#sign)
- [signWithSignature](UserOperation.md#signwithsignature)
- [toJSON](UserOperation.md#tojson)
- [toTuple](UserOperation.md#totuple)
- [fromJSON](UserOperation.md#fromjson)
- [fromObject](UserOperation.md#fromobject)

## Constructors

### constructor

• **new UserOperation**()

#### Defined in

[src/entity/userOperation.ts:33](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L33)

## Properties

### \_callData

• `Private` **\_callData**: `string` = `'0x'`

#### Defined in

[src/entity/userOperation.ts:64](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L64)

___

### \_callGasLimit

• `Private` **\_callGasLimit**: [`NumberLike`](../modules/internal_.md#numberlike) = `0`

#### Defined in

[src/entity/userOperation.ts:74](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L74)

___

### \_initCode

• `Private` **\_initCode**: `string` = `'0x'`

#### Defined in

[src/entity/userOperation.ts:54](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L54)

___

### \_maxFeePerGas

• `Private` **\_maxFeePerGas**: [`NumberLike`](../modules/internal_.md#numberlike) = `0`

#### Defined in

[src/entity/userOperation.ts:95](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L95)

___

### \_maxPriorityFeePerGas

• `Private` **\_maxPriorityFeePerGas**: [`NumberLike`](../modules/internal_.md#numberlike) = `0`

#### Defined in

[src/entity/userOperation.ts:102](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L102)

___

### \_nonce

• `Private` **\_nonce**: [`NumberLike`](../modules/internal_.md#numberlike) = `0`

#### Defined in

[src/entity/userOperation.ts:47](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L47)

___

### \_paymasterAndData

• `Private` **\_paymasterAndData**: `string` = `'0x'`

#### Defined in

[src/entity/userOperation.ts:109](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L109)

___

### \_preVerificationGas

• `Private` **\_preVerificationGas**: [`NumberLike`](../modules/internal_.md#numberlike) = `47000`

#### Defined in

[src/entity/userOperation.ts:88](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L88)

___

### \_sender

• `Private` **\_sender**: `string` = `''`

#### Defined in

[src/entity/userOperation.ts:36](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L36)

___

### \_signature

• `Private` **\_signature**: `string` = `'0x'`

#### Defined in

[src/entity/userOperation.ts:119](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L119)

___

### \_userOp

• `Private` **\_userOp**: [`UserOp`](internal_.UserOp.md)

#### Defined in

[src/entity/userOperation.ts:27](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L27)

___

### \_verificationGasLimit

• `Private` **\_verificationGasLimit**: [`NumberLike`](../modules/internal_.md#numberlike) = `450000`

#### Defined in

[src/entity/userOperation.ts:81](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L81)

## Accessors

### callData

• `get` **callData**(): `string`

#### Returns

`string`

#### Defined in

[src/entity/userOperation.ts:65](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L65)

• `set` **callData**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:68](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L68)

___

### callGasLimit

• `get` **callGasLimit**(): [`NumberLike`](../modules/internal_.md#numberlike)

#### Returns

[`NumberLike`](../modules/internal_.md#numberlike)

#### Defined in

[src/entity/userOperation.ts:75](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L75)

• `set` **callGasLimit**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NumberLike`](../modules/internal_.md#numberlike) |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:78](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L78)

___

### initCode

• `get` **initCode**(): `string`

#### Returns

`string`

#### Defined in

[src/entity/userOperation.ts:55](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L55)

• `set` **initCode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:58](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L58)

___

### maxFeePerGas

• `get` **maxFeePerGas**(): [`NumberLike`](../modules/internal_.md#numberlike)

#### Returns

[`NumberLike`](../modules/internal_.md#numberlike)

#### Defined in

[src/entity/userOperation.ts:96](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L96)

• `set` **maxFeePerGas**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NumberLike`](../modules/internal_.md#numberlike) |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:99](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L99)

___

### maxPriorityFeePerGas

• `get` **maxPriorityFeePerGas**(): [`NumberLike`](../modules/internal_.md#numberlike)

#### Returns

[`NumberLike`](../modules/internal_.md#numberlike)

#### Defined in

[src/entity/userOperation.ts:103](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L103)

• `set` **maxPriorityFeePerGas**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NumberLike`](../modules/internal_.md#numberlike) |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:106](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L106)

___

### nonce

• `get` **nonce**(): [`NumberLike`](../modules/internal_.md#numberlike)

#### Returns

[`NumberLike`](../modules/internal_.md#numberlike)

#### Defined in

[src/entity/userOperation.ts:48](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L48)

• `set` **nonce**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NumberLike`](../modules/internal_.md#numberlike) |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:51](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L51)

___

### paymasterAndData

• `get` **paymasterAndData**(): `string`

#### Returns

`string`

#### Defined in

[src/entity/userOperation.ts:110](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L110)

• `set` **paymasterAndData**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:113](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L113)

___

### preVerificationGas

• `get` **preVerificationGas**(): [`NumberLike`](../modules/internal_.md#numberlike)

#### Returns

[`NumberLike`](../modules/internal_.md#numberlike)

#### Defined in

[src/entity/userOperation.ts:89](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L89)

• `set` **preVerificationGas**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NumberLike`](../modules/internal_.md#numberlike) |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:92](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L92)

___

### sender

• `get` **sender**(): `string`

#### Returns

`string`

#### Defined in

[src/entity/userOperation.ts:38](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L38)

• `set` **sender**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:41](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L41)

___

### signature

• `get` **signature**(): `string`

#### Returns

`string`

#### Defined in

[src/entity/userOperation.ts:120](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L120)

• `set` **signature**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:123](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L123)

___

### verificationGasLimit

• `get` **verificationGasLimit**(): [`NumberLike`](../modules/internal_.md#numberlike)

#### Returns

[`NumberLike`](../modules/internal_.md#numberlike)

#### Defined in

[src/entity/userOperation.ts:82](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L82)

• `set` **verificationGasLimit**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NumberLike`](../modules/internal_.md#numberlike) |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:85](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L85)

## Methods

### alignment

▸ **alignment**(): `void`

**`Description`**

convert NumberLike property to hex string

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:176](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L176)

___

### calcGas

▸ `Private` **calcGas**(): `void`

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:324](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L324)

___

### estimateGas

▸ **estimateGas**(`entryPointAddress`, `etherProvider`): `Promise`<`boolean`\>

**`Description`**

estimate gas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entryPointAddress` | `string` | the entry point address |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) | the ethers.js provider e.g. ethers.provider |

#### Returns

`Promise`<`boolean`\>

true or false

#### Defined in

[src/entity/userOperation.ts:369](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L369)

___

### getStruct

▸ **getStruct**(): `Object`

**`Description`**

convert to userOperation struct

#### Returns

`Object`

the userOperation struct

| Name | Type |
| :------ | :------ |
| `callData` | `string` |
| `callGasLimit` | [`NumberLike`](../modules/internal_.md#numberlike) |
| `initCode` | `string` |
| `maxFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) |
| `maxPriorityFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) |
| `nonce` | [`NumberLike`](../modules/internal_.md#numberlike) |
| `paymasterAndData` | `string` |
| `preVerificationGas` | [`NumberLike`](../modules/internal_.md#numberlike) |
| `sender` | `string` |
| `signature` | `string` |
| `verificationGasLimit` | [`NumberLike`](../modules/internal_.md#numberlike) |

#### Defined in

[src/entity/userOperation.ts:155](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L155)

___

### getUserOpHash

▸ **getUserOpHash**(`entryPointAddress`, `chainId`): `string`

**`Description`**

get the UserOpHash (userOp hash)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entryPointAddress` | `string` | the entry point address |
| `chainId` | `number` | the chain id |

#### Returns

`string`

the UserOpHash (userOp hash)

#### Defined in

[src/entity/userOperation.ts:432](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L432)

___

### getUserOpHashWithDeadline

▸ **getUserOpHashWithDeadline**(`entryPointAddress`, `chainId`, `deadline`): `string`

**`Description`**

get the UserOpHash (userOp hash) with deadline

**`Remarks`**

deadline is a timestamp in seconds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entryPointAddress` | `string` | the entry point address |
| `chainId` | `number` | the chain id |
| `deadline` | `number` | the deadline |

#### Returns

`string`

the UserOpHash (userOp hash) with deadline

#### Defined in

[src/entity/userOperation.ts:444](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L444)

___

### payMasterSignHash

▸ **payMasterSignHash**(): `string`

**`Description`**

get the paymaster sign hash

#### Returns

`string`

the paymaster sign hash

#### Defined in

[src/entity/userOperation.ts:396](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L396)

___

### requiredPrefund

▸ **requiredPrefund**(`basefee?`): [`BigNumber`](internal_.BigNumber.md)

**`Description`**

get the required prefund

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basefee?` | [`NumberLike`](../modules/internal_.md#numberlike) \| [`BigNumber`](internal_.BigNumber.md) | the basefee |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

the required prefund

#### Defined in

[src/entity/userOperation.ts:454](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L454)

___

### sign

▸ **sign**(`entryPoint`, `chainId`, `privateKey`): `void`

**`Description`**

sign the user operation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entryPoint` | `string` | the entry point address |
| `chainId` | `number` | the chain id |
| `privateKey` | `string` | the private key |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:407](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L407)

___

### signWithSignature

▸ **signWithSignature**(`signAddress`, `signature`): `void`

**`Description`**

sign the user operation with signature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signAddress` | `string` | the sign address |
| `signature` | `string` | the signature |

#### Returns

`void`

#### Defined in

[src/entity/userOperation.ts:421](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L421)

___

### toJSON

▸ **toJSON**(): `string`

**`Description`**

convert to userOperation json string

#### Returns

`string`

the userOperation json string

#### Defined in

[src/entity/userOperation.ts:190](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L190)

___

### toTuple

▸ **toTuple**(): `string`

**`Description`**

convert to userOperation tuple string

#### Returns

`string`

the userOperation tuple string

#### Defined in

[src/entity/userOperation.ts:133](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L133)

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`UserOperation`](UserOperation.md)

**`Description`**

convert from userOperation json string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `string` | the userOperation json string |

#### Returns

[`UserOperation`](UserOperation.md)

the userOperation object

#### Defined in

[src/entity/userOperation.ts:212](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L212)

___

### fromObject

▸ `Static` **fromObject**(`obj`): [`UserOperation`](UserOperation.md)

**`Description`**

convert from userOperation object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | the userOperation object |

#### Returns

[`UserOperation`](UserOperation.md)

the userOperation object

#### Defined in

[src/entity/userOperation.ts:271](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/entity/userOperation.ts#L271)
