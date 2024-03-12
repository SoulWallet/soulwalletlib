//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "defaultCallbackHandler",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "owners",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "modules",
        "type": "bytes[]",
        "internalType": "bytes[]"
      },
      {
        "name": "hooks",
        "type": "bytes[]",
        "internalType": "bytes[]"
      },
      {
        "name": "salt",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "entryPoint",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract EntryPoint"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "soulWallet",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract ISoulWallet"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "soulWalletDefaultValidator",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract SoulWalletDefaultValidator"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "soulWalletFactory",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract SoulWalletFactory"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "soulWalletLogicInstence",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract SoulWalletLogicInstence"
      }
    ],
    "stateMutability": "view"
  }
];