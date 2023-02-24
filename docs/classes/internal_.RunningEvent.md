[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / RunningEvent

# Class: RunningEvent

[<internal>](../modules/internal_.md).RunningEvent

## Table of contents

### Constructors

- [constructor](internal_.RunningEvent.md#constructor)

### Properties

- [\_listeners](internal_.RunningEvent.md#_listeners)
- [filter](internal_.RunningEvent.md#filter)
- [tag](internal_.RunningEvent.md#tag)

### Methods

- [addListener](internal_.RunningEvent.md#addlistener)
- [getEmit](internal_.RunningEvent.md#getemit)
- [listenerCount](internal_.RunningEvent.md#listenercount)
- [listeners](internal_.RunningEvent.md#listeners)
- [prepareEvent](internal_.RunningEvent.md#prepareevent)
- [removeAllListeners](internal_.RunningEvent.md#removealllisteners)
- [removeListener](internal_.RunningEvent.md#removelistener)
- [run](internal_.RunningEvent.md#run)

## Constructors

### constructor

• **new RunningEvent**(`tag`, `filter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `filter` | [`EventFilter`](../modules/internal_.md#eventfilter) |

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:67

## Properties

### \_listeners

• `Private` **\_listeners**: `any`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:66

___

### filter

• `Readonly` **filter**: [`EventFilter`](../modules/internal_.md#eventfilter)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:65

___

### tag

• `Readonly` **tag**: `string`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:64

## Methods

### addListener

▸ **addListener**(`listener`, `once`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`Listener`](../modules/internal_.md#listener) |
| `once` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:68

___

### getEmit

▸ **getEmit**(`event`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../interfaces/internal_.Event-1.md) |

#### Returns

`any`[]

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:75

___

### listenerCount

▸ **listenerCount**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:72

___

### listeners

▸ **listeners**(): [`Listener`](../modules/internal_.md#listener)[]

#### Returns

[`Listener`](../modules/internal_.md#listener)[]

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:71

___

### prepareEvent

▸ **prepareEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../interfaces/internal_.Event-1.md) |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:74

___

### removeAllListeners

▸ **removeAllListeners**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:70

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:69

___

### run

▸ **run**(`args`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `any`[] |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:73
