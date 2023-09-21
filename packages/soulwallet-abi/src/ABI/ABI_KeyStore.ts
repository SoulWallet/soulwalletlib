//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "GUARDIAN_SIGNATURE_INVALID",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "HASH_ALREADY_APPROVED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "HASH_ALREADY_REJECTED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INVALID_DATA",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INVALID_KEY",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INVALID_SIGNATURE",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INVALID_TIME_RANGE",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NOT_INITIALIZED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UNAUTHORIZED",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "guardian",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "ApproveHash",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "guardianHash",
                "type": "bytes32"
            }
        ],
        "name": "CancelSetGuardian",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "guardianSafePeriod",
                "type": "uint64"
            }
        ],
        "name": "CancelSetGuardianSafePeriod",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "guardianHash",
                "type": "bytes32"
            }
        ],
        "name": "GuardianChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "guardianSafePeriod",
                "type": "uint64"
            }
        ],
        "name": "GuardianSafePeriodChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
            }
        ],
        "name": "KeyChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "guardian",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "RejectHash",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "guardianHash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "effectAt",
                "type": "uint64"
            }
        ],
        "name": "SetGuardian",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "guardianSafePeriod",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "effectAt",
                "type": "uint64"
            }
        ],
        "name": "SetGuardianSafePeriod",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "approveHash",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "keySignature",
                "type": "bytes"
            }
        ],
        "name": "cancelSetGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "keySignature",
                "type": "bytes"
            }
        ],
        "name": "cancelSetGuardianSafePeriod",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "rawGuardian",
                "type": "bytes"
            }
        ],
        "name": "getGuardianHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "guardianHash",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            }
        ],
        "name": "getKey",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "key",
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
                "name": "slot",
                "type": "bytes32"
            }
        ],
        "name": "getKeyStoreInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "key",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nonce",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "guardianHash",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "pendingGuardianHash",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint64",
                        "name": "guardianActivateAt",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "guardianSafePeriod",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "pendingGuardianSafePeriod",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "guardianSafePeriodActivateAt",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct IKeyStore.keyStoreInfo",
                "name": "_keyStoreInfo",
                "type": "tuple"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "initialKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "initialGuardianHash",
                "type": "bytes32"
            },
            {
                "internalType": "uint64",
                "name": "guardianSafePeriod",
                "type": "uint64"
            }
        ],
        "name": "getSlot",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
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
                "name": "signingKey",
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
                "name": "slot",
                "type": "bytes32"
            }
        ],
        "name": "nonce",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_nonce",
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
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "rejectHash",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "newGuardianHash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "keySignature",
                "type": "bytes"
            }
        ],
        "name": "setGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "initialKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "initialGuardianHash",
                "type": "bytes32"
            },
            {
                "internalType": "uint64",
                "name": "initialGuardianSafePeriod",
                "type": "uint64"
            },
            {
                "internalType": "bytes32",
                "name": "newGuardianHash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "keySignature",
                "type": "bytes"
            }
        ],
        "name": "setGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "initialKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "initialGuardianHash",
                "type": "bytes32"
            },
            {
                "internalType": "uint64",
                "name": "initialGuardianSafePeriod",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "newGuardianSafePeriod",
                "type": "uint64"
            },
            {
                "internalType": "bytes",
                "name": "keySignature",
                "type": "bytes"
            }
        ],
        "name": "setGuardianSafePeriod",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "internalType": "uint64",
                "name": "newGuardianSafePeriod",
                "type": "uint64"
            },
            {
                "internalType": "bytes",
                "name": "keySignature",
                "type": "bytes"
            }
        ],
        "name": "setGuardianSafePeriod",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "newKey",
                "type": "bytes32"
            }
        ],
        "name": "setKey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "initialKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "initialGuardianHash",
                "type": "bytes32"
            },
            {
                "internalType": "uint64",
                "name": "initialGuardianSafePeriod",
                "type": "uint64"
            },
            {
                "internalType": "bytes32",
                "name": "newKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "rawGuardian",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "guardianSignature",
                "type": "bytes"
            }
        ],
        "name": "setKey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "initialKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "initialGuardianHash",
                "type": "bytes32"
            },
            {
                "internalType": "uint64",
                "name": "initialGuardianSafePeriod",
                "type": "uint64"
            },
            {
                "internalType": "bytes32",
                "name": "newKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "keySignature",
                "type": "bytes"
            }
        ],
        "name": "setKey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "newKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "keySignature",
                "type": "bytes"
            }
        ],
        "name": "setKey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "newKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "rawGuardian",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "guardianSignature",
                "type": "bytes"
            }
        ],
        "name": "setKey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];