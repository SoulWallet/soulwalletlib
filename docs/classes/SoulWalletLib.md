[soul-wallet-lib](../README.md) / [Exports](../modules.md) / SoulWalletLib

# Class: SoulWalletLib

## Table of contents

### Constructors

- [constructor](SoulWalletLib.md#constructor)

### Properties

- [Bundler](SoulWalletLib.md#bundler)
- [Guardian](SoulWalletLib.md#guardian)
- [Tokens](SoulWalletLib.md#tokens)
- [Utils](SoulWalletLib.md#utils)
- [\_deployFactory](SoulWalletLib.md#_deployfactory)
- [\_singletonFactory](SoulWalletLib.md#_singletonfactory)
- [Defines](SoulWalletLib.md#defines)

### Accessors

- [singletonFactory](SoulWalletLib.md#singletonfactory)

### Methods

- [activateWalletOp](SoulWalletLib.md#activatewalletop)
- [calculateWalletAddress](SoulWalletLib.md#calculatewalletaddress)
- [calculateWalletAddressByCode](SoulWalletLib.md#calculatewalletaddressbycode)
- [calculateWalletAddressByCodeHash](SoulWalletLib.md#calculatewalletaddressbycodehash)
- [getInitializeData](SoulWalletLib.md#getinitializedata)
- [getNonce](SoulWalletLib.md#getnonce)
- [getPackedInitCodeUsingWalletFactory](SoulWalletLib.md#getpackedinitcodeusingwalletfactory)
- [getPaymasterData](SoulWalletLib.md#getpaymasterdata)
- [getPaymasterExchangePrice](SoulWalletLib.md#getpaymasterexchangeprice)
- [getWalletCode](SoulWalletLib.md#getwalletcode)
- [number2Bytes32](SoulWalletLib.md#number2bytes32)
- [paymasterSupportedToken](SoulWalletLib.md#paymastersupportedtoken)

## Constructors

### constructor

• **new SoulWalletLib**(`singletonFactory?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `singletonFactory?` | `string` | the singletonFactory address |

#### Defined in

[src/exportLib/soulWalletLib.ts:57](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L57)

## Properties

### Bundler

• **Bundler**: typeof [`Bundler`](internal_.Bundler.md) = `Bundler`

#### Defined in

[src/exportLib/soulWalletLib.ts:94](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L94)

___

### Guardian

• **Guardian**: [`Guardian`](internal_.Guardian.md)

#### Defined in

[src/exportLib/soulWalletLib.ts:49](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L49)

___

### Tokens

• **Tokens**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ERC1155` | [`ERC1155`](internal_.ERC1155.md) |
| `ERC20` | [`ERC20`](internal_.ERC20.md) |
| `ERC721` | [`ERC721`](internal_.ERC721.md) |
| `ETH` | [`ETH`](internal_.ETH.md) |

#### Defined in

[src/exportLib/soulWalletLib.ts:95](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L95)

___

### Utils

• **Utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DecodeCallData` | typeof [`DecodeCallData`](internal_.DecodeCallData.md) |
| `deployFactory` | [`DeployFactory`](internal_.DeployFactory.md) |
| `fromTransaction` | (`etherProvider`: [`BaseProvider`](internal_.BaseProvider.md), `entryPointAddress`: `string`, `transcations`: [`ITransaction`](../interfaces/ITransaction.md)[], `nonce`: [`NumberLike`](../modules/internal_.md#numberlike), `maxFeePerGas`: [`NumberLike`](../modules/internal_.md#numberlike), `maxPriorityFeePerGas`: [`NumberLike`](../modules/internal_.md#numberlike), `paymasterAndData`: `string`) => `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\> |
| `getNonce` | (`walletAddress`: `string`, `etherProvider`: [`BaseProvider`](internal_.BaseProvider.md), `defaultBlock`: `string`) => `Promise`<`number`\> |
| `suggestedGasFee` | typeof [`CodefiGasFees`](internal_.CodefiGasFees.md) |
| `tokenAndPaymaster` | typeof [`TokenAndPaymaster`](internal_.TokenAndPaymaster.md) |

#### Defined in

[src/exportLib/soulWalletLib.ts:44](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L44)

___

### \_deployFactory

• `Private` **\_deployFactory**: [`DeployFactory`](internal_.DeployFactory.md)

#### Defined in

[src/exportLib/soulWalletLib.ts:39](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L39)

___

### \_singletonFactory

• `Private` **\_singletonFactory**: `string`

#### Defined in

[src/exportLib/soulWalletLib.ts:36](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L36)

___

### Defines

▪ `Static` **Defines**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AddressZero` | `string` |
| `SingletonFactoryAddress` | `string` |
| `bytes32_zero` | `string` |

#### Defined in

[src/exportLib/soulWalletLib.ts:87](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L87)

## Accessors

### singletonFactory

• `get` **singletonFactory**(): `string`

get singletonFactory address

#### Returns

`string`

address

#### Defined in

[src/exportLib/soulWalletLib.ts:80](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L80)

## Methods

### activateWalletOp

▸ **activateWalletOp**(`walletLogicAddress`, `entryPointAddress`, `ownerAddress`, `upgradeDelay`, `guardianDelay`, `guardianAddress`, `paymasterAndData`, `maxFeePerGas`, `maxPriorityFeePerGas`, `salt?`, `walletFactory?`, `singletonFactory?`, `walletProxyConfig?`): [`UserOperation`](UserOperation.md)

get the userOperation for active (first time) the wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `walletLogicAddress` | `string` | the wallet logic contract address |
| `entryPointAddress` | `string` | the entryPoint address |
| `ownerAddress` | `string` | the owner address |
| `upgradeDelay` | `number` | the upgrade delay time |
| `guardianDelay` | `number` | the guardian delay time |
| `guardianAddress` | `string` | the guardian contract address |
| `paymasterAndData` | `string` | the paymaster address and data |
| `maxFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) | the max fee per gas |
| `maxPriorityFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) | the max priority fee per gas |
| `salt?` | `number` | the salt number,default is 0 |
| `walletFactory?` | `string` | the walletFactory contract address |
| `singletonFactory?` | `string` | the singletonFactory contract address |
| `walletProxyConfig?` | `Object` | the walletProxyConfig |
| `walletProxyConfig.bytecode` | [`BytesLike`](../modules/internal_.md#byteslike) \| { `object`: `string`  } | - |
| `walletProxyConfig.contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) | - |

#### Returns

[`UserOperation`](UserOperation.md)

the userOperation

#### Defined in

[src/exportLib/soulWalletLib.ts:209](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L209)

___

### calculateWalletAddress

▸ **calculateWalletAddress**(`walletLogicAddress`, `entryPointAddress`, `ownerAddress`, `upgradeDelay`, `guardianDelay`, `guardianAddress`, `salt?`, `singletonFactory?`, `walletProxyConfig?`): `string`

calculate wallet address by owner address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `walletLogicAddress` | `string` | the wallet logic contract address |
| `entryPointAddress` | `string` | the entryPoint address |
| `ownerAddress` | `string` | the owner address |
| `upgradeDelay` | `number` | the upgrade delay time |
| `guardianDelay` | `number` | the guardian delay time |
| `guardianAddress` | `string` | the guardian contract address |
| `salt?` | `number` | the salt number,default is 0 |
| `singletonFactory?` | `string` | the singletonFactory address,default is SingletonFactoryAddress |
| `walletProxyConfig?` | `Object` | the wallet proxy config |
| `walletProxyConfig.bytecode` | [`BytesLike`](../modules/internal_.md#byteslike) \| { `object`: `string`  } | - |
| `walletProxyConfig.contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) | - |

#### Returns

`string`

the wallet address

#### Defined in

[src/exportLib/soulWalletLib.ts:173](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L173)

___

### calculateWalletAddressByCode

▸ **calculateWalletAddressByCode**(`initContract`, `initArgs`, `salt`): `string`

calculate wallet address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initContract` | [`IContract`](../interfaces/internal_.IContract.md) | the init Contract |
| `initArgs` | `undefined` \| `any`[] | the init args |
| `salt` | `number` | the salt number |

#### Returns

`string`

wallet address

#### Defined in

[src/exportLib/soulWalletLib.ts:366](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L366)

___

### calculateWalletAddressByCodeHash

▸ `Private` **calculateWalletAddressByCodeHash**(`initCodeHash`, `salt?`, `singletonFactory?`): `string`

calculate wallet address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initCodeHash` | `string` | the init code after keccak256 |
| `salt?` | `number` | the salt number |
| `singletonFactory?` | `string` | the singleton factory address |

#### Returns

`string`

the wallet address

#### Defined in

[src/exportLib/soulWalletLib.ts:397](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L397)

___

### getInitializeData

▸ `Private` **getInitializeData**(`entryPointAddress`, `ownerAddress`, `upgradeDelay`, `guardianDelay`, `guardianAddress`): `string`

get initialize data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entryPointAddress` | `string` | the entryPoint address |
| `ownerAddress` | `string` | the owner address |
| `upgradeDelay` | `number` | the upgrade delay time |
| `guardianDelay` | `number` | the guardian delay time |
| `guardianAddress` | `string` | the guardian contract address |

#### Returns

`string`

inithex

#### Defined in

[src/exportLib/soulWalletLib.ts:112](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L112)

___

### getNonce

▸ `Private` **getNonce**(`walletAddress`, `etherProvider`, `defaultBlock?`): `Promise`<`number`\>

get nonce number from contract wallet

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `walletAddress` | `string` | `undefined` | same as userOperation.sender |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) | `undefined` | the ethers.js provider e.g. ethers.provider |
| `defaultBlock` | `string` | `'latest'` | "earliest", "latest" and "pending" |

#### Returns

`Promise`<`number`\>

the next nonce number

#### Defined in

[src/exportLib/soulWalletLib.ts:416](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L416)

___

### getPackedInitCodeUsingWalletFactory

▸ `Private` **getPackedInitCodeUsingWalletFactory**(`walletFactory`, `walletLogicAddress`, `entryPointAddress`, `ownerAddress`, `upgradeDelay`, `guardianDelay`, `guardianAddress`, `salt?`, `walletFactoryInterface?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletFactory` | `undefined` \| `string` |
| `walletLogicAddress` | `undefined` \| `string` |
| `entryPointAddress` | `string` |
| `ownerAddress` | `string` |
| `upgradeDelay` | `number` |
| `guardianDelay` | `number` |
| `guardianAddress` | `string` |
| `salt?` | `number` |
| `walletFactoryInterface?` | readonly (`string` \| [`Fragment`](internal_.Fragment.md) \| [`JsonFragment`](../interfaces/internal_.JsonFragment.md))[] |

#### Returns

`string`

#### Defined in

[src/exportLib/soulWalletLib.ts:251](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L251)

___

### getPaymasterData

▸ **getPaymasterData**(`payMasterAddress`, `token`, `maxCost`): `string`

get paymaster data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payMasterAddress` | `string` | paymaster contract address |
| `token` | `string` | token address |
| `maxCost` | [`BigNumber`](internal_.BigNumber.md) | token max cost |

#### Returns

`string`

paymasterAndData(hex string)

#### Defined in

[src/exportLib/soulWalletLib.ts:352](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L352)

___

### getPaymasterExchangePrice

▸ **getPaymasterExchangePrice**(`etherProvider`, `payMasterAddress`, `token`, `fetchTokenDecimals?`): `Promise`<{ `decimals`: `number` ; `price`: [`BigNumber`](internal_.BigNumber.md) ; `tokenDecimals`: `undefined` \| `number`  }\>

get paymaster exchange price

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) | `undefined` | the ethers.js provider e.g. ethers.provider |
| `payMasterAddress` | `string` | `undefined` | paymaster contract address |
| `token` | `string` | `undefined` | token address |
| `fetchTokenDecimals` | `boolean` | `false` | fetch token decimals or not |

#### Returns

`Promise`<{ `decimals`: `number` ; `price`: [`BigNumber`](internal_.BigNumber.md) ; `tokenDecimals`: `undefined` \| `number`  }\>

exchange price

#### Defined in

[src/exportLib/soulWalletLib.ts:316](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L316)

___

### getWalletCode

▸ **getWalletCode**(`walletLogicAddress`, `entryPointAddress`, `ownerAddress`, `upgradeDelay`, `guardianDelay`, `guardianAddress`, `walletProxyConfig?`): `string`

get wallet code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `walletLogicAddress` | `string` | the wallet logic contract address |
| `entryPointAddress` | `string` | the entryPoint address |
| `ownerAddress` | `string` | the owner address |
| `upgradeDelay` | `number` | the upgrade delay time |
| `guardianDelay` | `number` | the guardian delay time |
| `guardianAddress` | `string` | the guardian contract address |
| `walletProxyConfig?` | `Object` | the wallet proxy config |
| `walletProxyConfig.bytecode` | [`BytesLike`](../modules/internal_.md#byteslike) \| { `object`: `string`  } | - |
| `walletProxyConfig.contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) | - |

#### Returns

`string`

the wallet code hex string

#### Defined in

[src/exportLib/soulWalletLib.ts:137](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L137)

___

### number2Bytes32

▸ **number2Bytes32**(`num?`): `string`

convert number to bytes32

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num?` | `number` | the number |

#### Returns

`string`

bytes32

#### Defined in

[src/exportLib/soulWalletLib.ts:383](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L383)

___

### paymasterSupportedToken

▸ **paymasterSupportedToken**(`etherProvider`, `payMasterAddress`, `tokens`): `Promise`<`string`[]\>

check if the token is supported by paymaster

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) | the ethers.js provider e.g. ethers.provider |
| `payMasterAddress` | `string` | paymaster contract address |
| `tokens` | `string`[] | token address list |

#### Returns

`Promise`<`string`[]\>

supported token address list

#### Defined in

[src/exportLib/soulWalletLib.ts:292](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/exportLib/soulWalletLib.ts#L292)
