@soulwallet/assets / [Modules](modules.md)

<h1 align="center">
   <b>
        @soulwallet/assets
    </b>
</h1>

<p align="center">
A database of token
</p>

<p align="center">
    <a href="https://github.com/SoulWallet/soulwalletlib/tree/develop/packages/soulwallet-assets"><b>Code</b></a> •
    <a href="https://github.com/SoulWallet/soulwalletlib/blob/develop/packages/soulwallet-assets/docs/modules.md"><b>Documentation</b></a>
</p>

## Table of Contents

  - [Installing](#installing)
    
  - [Example](#example)

  - [License](#license)

## Installing

Using npm:

```bash
$ npm install @soulwallet/assets
```

Using yarn:

```bash
$ yarn add @soulwallet/assets
```

Using pnpm:

```bash
$ pnpm add @soulwallet/assets
```

Once the package is installed, you can import the library using `import` approach:

```bash
import { getAsset } from "@soulwallet/assets";
```

## Example

```typescript
import { getAsset } from "@soulwallet/assets";

async function main(chainId: number, address: string) {
    const ret = await getAsset(chainId, address);
    if (ret.isOk()) {
        console.log(ret.OK);
    }
}
```

## License

ISC
