[soul-wallet-lib](../README.md) / [Exports](../modules.md) / IResult

# Interface: IResult

## Table of contents

### Properties

- [error](IResult.md#error)
- [result](IResult.md#result)
- [status](IResult.md#status)

## Properties

### error

• `Optional` **error**: `string`

eg. "AA41 too little verificationGas" 
can not decode result | eth_call revert message

#### Defined in

[src/interface/IResult.ts:81](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/interface/IResult.ts#L81)

___

### result

• `Optional` **result**: [`IExecutionResult`](IExecutionResult.md) \| [`IFailedOp`](IFailedOp.md) \| [`IValidationResult`](IValidationResult.md)

#### Defined in

[src/interface/IResult.ts:75](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/interface/IResult.ts#L75)

___

### status

• **status**: `number`

#### Defined in

[src/interface/IResult.ts:71](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/interface/IResult.ts#L71)
