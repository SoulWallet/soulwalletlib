[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / DeployFactory

# Class: DeployFactory

[<internal>](../modules/internal_.md).DeployFactory

deploy factory contract

## Table of contents

### Constructors

- [constructor](internal_.DeployFactory.md#constructor)

### Properties

- [\_singletonFactory](internal_.DeployFactory.md#_singletonfactory)

### Methods

- [deploy](internal_.DeployFactory.md#deploy)
- [getAddress](internal_.DeployFactory.md#getaddress)
- [getFactory](internal_.DeployFactory.md#getfactory)

## Constructors

### constructor

• **new DeployFactory**(`singletonFactory`)

Creates an instance of DeployFactory.

**`Memberof`**

DeployFactory

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `singletonFactory` | `string` | singleton factory address |

#### Defined in

[src/utils/deployFactory.ts:31](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/deployFactory.ts#L31)

## Properties

### \_singletonFactory

• `Private` **\_singletonFactory**: `string`

#### Defined in

[src/utils/deployFactory.ts:23](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/deployFactory.ts#L23)

## Methods

### deploy

▸ **deploy**(`logicContractAddress`, `etherProvider`, `signer`, `salt?`, `ver?`, `walletFactoryConfig?`): `Promise`<`string`\>

deploy factory contract( if etherProvider is set)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `logicContractAddress` | `string` | `undefined` | account logic contract address |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) | `undefined` | ether provider |
| `signer` | [`Signer`](internal_.Signer.md) | `undefined` | signer |
| `salt?` | `string` | `undefined` | salt |
| `ver?` | `number` | `1` | version |
| `walletFactoryConfig?` | `Object` | `undefined` | wallet factory config |
| `walletFactoryConfig.bytecode` | [`BytesLike`](../modules/internal_.md#byteslike) \| { `object`: `string`  } | `undefined` | - |
| `walletFactoryConfig.contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) | `undefined` | - |

#### Returns

`Promise`<`string`\>

factory address

#### Defined in

[src/utils/deployFactory.ts:93](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/deployFactory.ts#L93)

___

### getAddress

▸ **getAddress**(`logicContractAddress`, `salt?`, `ver?`, `walletFactoryConfig?`): `string`

get factory address

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `logicContractAddress` | `string` | `undefined` | account logic contract address |
| `salt?` | `string` | `undefined` | salt |
| `ver?` | `number` | `1` | version |
| `walletFactoryConfig?` | `Object` | `undefined` | wallet factory config |
| `walletFactoryConfig.bytecode` | [`BytesLike`](../modules/internal_.md#byteslike) \| { `object`: `string`  } | `undefined` | - |
| `walletFactoryConfig.contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) | `undefined` | - |

#### Returns

`string`

factory address

#### Defined in

[src/utils/deployFactory.ts:75](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/deployFactory.ts#L75)

___

### getFactory

▸ `Private` **getFactory**(`logicContractAddress`, `salt?`, `ver?`, `walletFactoryConfig?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `logicContractAddress` | `string` | `undefined` |
| `salt?` | `string` | `undefined` |
| `ver` | `number` | `1` |
| `walletFactoryConfig?` | `Object` | `undefined` |
| `walletFactoryConfig.bytecode` | [`BytesLike`](../modules/internal_.md#byteslike) \| { `object`: `string`  } | `undefined` |
| `walletFactoryConfig.contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) | `undefined` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `factoryAddress` | `string` |
| `initCodeWithArgs` | `string` |

#### Defined in

[src/utils/deployFactory.ts:35](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/deployFactory.ts#L35)
