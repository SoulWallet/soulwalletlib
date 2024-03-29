# @soulwallet/abi

## 0.3.0

### Minor Changes

- 32f4da1: EntryPoint v0.7.0 Compatible

## 0.2.0

### Minor Changes

- ba276ce: Updated to support the latest contract

## 0.1.4

### Patch Changes

- fee433c: Updating Project License to Reflect Accurate Licensing

## 0.1.3

### Patch Changes

- 010e96d: - @soulwallet/keyvault

  - Updated ethers.js -> 6.8.1

  - @soulwallet/decoder

    - Updated bytes4 dictionary for contracts

  - @soulwallet/assets

    - Updated ERC20 database

      ```shell
      + Big Time
      + iExec RLC
      ```

  - @soulwallet/abi

    - Updated contract ABI

      - ```
        ABI_KeystoreProof.ts
        	lastestProofL1BlockNumber -> latestProofL1BlockNumber

        ABI_SoulWallet.ts
        	hash -> rawHash
        ```

  - @soulwallet/sdk

    - Supported RS256 signature algorithm

      ```js
      export interface RSAPublicKey {
        /**
         * Hex string of public exponent
         *
         * @type {string}
         * @memberof RSAPublicKey
         */
        e: string;

        /**
         * Hex string of public key
         *
         * @type {string}
         * @memberof RSAPublicKey
         */
        n: string;
      }
      ```

## 0.1.2

### Patch Changes

- passkey version merged into soulwallet@npmjs.com

## 0.1.1

### Patch Changes

- fe0c28b: Initial release of the package.
