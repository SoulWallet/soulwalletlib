@soulwallet/result / [Modules](modules.md)

<h1 align="center">
   <b>
        @soulwallet/result
    </b>
</h1>

<p align="center">A lib designed based on the philosophy of "Errors are values" (similar to Rust).</p>

<p align="center">
    <a href="https://github.com/SoulWallet/soulwalletlib/tree/develop/packages/soulwallet-result"><b>Code</b></a> •
    <a href="https://github.com/SoulWallet/soulwalletlib/blob/develop/packages/soulwallet-result/docs/modules.md"><b>Documentation</b></a>
</p>

## Table of Contents

  - [Installing](#installing)
    
  - [Example](#example)

  - [License](#license)

## Installing

Using npm:

```bash
$ npm install @soulwallet/result
```

Using yarn:

```bash
$ yarn add @soulwallet/result
```

Using pnpm:

```bash
$ pnpm add @soulwallet/result
```

Once the package is installed, you can import the library using `import` approach:

```bash
import { Result, Ok, Err } from '@soulwallet/result'
```

## Example

```typescript
import { Result, Ok, Err } from '@soulwallet/result'

async function div(a: number, b: number): Promise<Result<number, Error>> {
    if (b === 0) {
        return new Err(new Error('Division by zero'));
    }
    return new Ok(a / b);
}

async function test() {
    const result = await div(10, 2);
    if (result.isErr()) {
        console.log(`error: ${result.ERR.message}`);
    } else {
        console.log(`result: ${result.OK}`);
    }
}
```

## License

ISC
