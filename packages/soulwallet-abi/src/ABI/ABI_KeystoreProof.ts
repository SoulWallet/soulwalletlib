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
        "name": "KeyStoreStorageProofed",
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
                "internalType": "address",
                "name": "signingKey",
                "type": "address"
            }
        ],
        "name": "L1KeyStoreProofed",
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
                "internalType": "address",
                "name": "signingKey",
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
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "l1SlotToSigningKey",
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
                "internalType": "address",
                "name": "newSigningKey",
                "type": "address"
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