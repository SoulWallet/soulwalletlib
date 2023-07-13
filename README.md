<h1 align="center">
   <b>
        soul-wallet-lib (draft)
    </b>
</h1>

<p align="center">The interaction library for SoulWallet</p>

<p align="center">
    <a href="https://github.com/proofofsoulprotocol/soul-wallet-contract/"><b>Compatible Contracts</b></a>
</p>


## Table of Contents

  - [Features](#features)

  - [Installing](#installing)
    
  - [Example](#example)

  - [License](#license)

    

## Features

- All-In-One

- UserOperation can be built with a single function

- Built-in Bundler module

- Built-in CallData parsing module

- Built-in common operations, such as ERC20 ERC721 ERC1155 (e.g. you can create a transfer UserOperation with one function)

- Auto update preVerificationGas (lower deposit requirements for user)

- ⚠️ Note: current version will refactor the code in the future and cannot guarantee compatibility

  

## Installing

Using npm:

```bash
$ npm install @soulwallet/sdk
```

Using yarn:

```bash
$ yarn add @soulwallet/sdk
```

Using pnpm:

```bash
$ pnpm add @soulwallet/sdk
```
