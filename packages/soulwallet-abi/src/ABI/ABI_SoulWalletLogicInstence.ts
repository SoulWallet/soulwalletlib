//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_entryPoint",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "defaultValidator",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "soulWalletLogic",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract SoulWallet"
      }
    ],
    "stateMutability": "view"
  }
];