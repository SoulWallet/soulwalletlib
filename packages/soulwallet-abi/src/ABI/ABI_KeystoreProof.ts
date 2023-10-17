//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_l1KeystoreAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_stateRootHistoryAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "stateRoot",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "storageRoot",
                "type": "bytes32"
            }
        ],
        "name": "KeyStoreStorageProved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "l1Slot",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "signingKeyHash",
                "type": "bytes32"
            }
        ],
        "name": "L1KeyStoreProved",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "L1_KEYSTORE_ADDRESS",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "STATE_ROOT_HISTORY_ADDESS",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "l1Slot",
                "type": "bytes32"
            }
        ],
        "name": "keystoreBySlot",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "signingKeyHash",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "l1SlotToRawOwners",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "l1SlotToSigningKey",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "lastProofBlock",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastestProofL1BlockNumber",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "stateRoot",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "accountProof",
                "type": "bytes"
            }
        ],
        "name": "proofKeystoreStorageRoot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "l1Slot",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "stateRoot",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "newSigningKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "rawOwners",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "keyProof",
                "type": "bytes"
            }
        ],
        "name": "proofL1Keystore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "l1Slot",
                "type": "bytes32"
            }
        ],
        "name": "rawOwnersBySlot",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "owners",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "stateRootToKeystoreStorageRoot",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];