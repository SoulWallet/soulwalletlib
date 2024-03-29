# @soulwallet/keyvault

## 0.2.0

### Minor Changes

- ba276ce: Updated to support the latest contract

### Patch Changes

- Updated dependencies [ba276ce]
  - @soulwallet/result@0.2.0

## 0.1.5

### Patch Changes

- fee433c: Updating Project License to Reflect Accurate Licensing
- Updated dependencies [fee433c]
  - @soulwallet/result@0.1.3

## 0.1.4

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

## 0.1.3

### Patch Changes

- passkey version merged into soulwallet@npmjs.com
- Updated dependencies
  - @soulwallet/result@0.1.2

## 0.1.2

### Patch Changes

- 095ca67: Multiple KeyVault instances are allowed.

## 0.1.1

### Patch Changes

- fe0c28b: Initial release of the package.
- Updated dependencies [fe0c28b]
  - @soulwallet/result@0.1.1
