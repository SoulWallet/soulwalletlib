//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
  {
    "type": "function",
    "name": "keyStoreBySlot",
    "inputs": [
      {
        "name": "l1Slot",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "signingKeyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rawOwnersBySlot",
    "inputs": [
      {
        "name": "l1Slot",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "owners",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  }
];