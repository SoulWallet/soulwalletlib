//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
    {
        "inputs": [
            {
                "internalType": "contract IValidator",
                "name": "_validator",
                "type": "address"
            },
            {
                "internalType": "contract IKeyStoreStorage",
                "name": "_keystorStorage",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "ECDSAInvalidSignature",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "length",
                "type": "uint256"
            }
        ],
        "name": "ECDSAInvalidSignatureLength",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "ECDSAInvalidSignatureS",
        "type": "error"
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
        "name": "InvalidShortString",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NOT_INITIALIZED",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "str",
                "type": "string"
            }
        ],
        "name": "StringTooLong",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UNAUTHORIZED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UNTRUSTED_KEYSTORE_LOGIC",
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
                "internalType": "uint256",
                "name": "guardianSafePeriod",
                "type": "uint256"
            }
        ],
        "name": "CancelSetGuardianSafePeriod",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "EIP712DomainChanged",
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
                "internalType": "uint256",
                "name": "guardianSafePeriod",
                "type": "uint256"
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
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "key",
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
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newLogic",
                "type": "address"
            }
        ],
        "name": "KeyStoreUpgraded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
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
                "internalType": "uint256",
                "name": "effectAt",
                "type": "uint256"
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
                "internalType": "uint256",
                "name": "guardianSafePeriod",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "effectAt",
                "type": "uint256"
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
                "name": "rawOwners",
                "type": "bytes"
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
                "name": "rawOwners",
                "type": "bytes"
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
        "inputs": [],
        "name": "eip712Domain",
        "outputs": [
            {
                "internalType": "bytes1",
                "name": "fields",
                "type": "bytes1"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "version",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "chainId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "verifyingContract",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256[]",
                "name": "extensions",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "logic",
                "type": "address"
            }
        ],
        "name": "enableTrustedKeystoreLogic",
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
                        "internalType": "uint256",
                        "name": "guardianActivateAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "guardianSafePeriod",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pendingGuardianSafePeriod",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "guardianSafePeriodActivateAt",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct IKeyStore.keyStoreInfo",
                "name": "_keyStoreInfo",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "rawOwners",
                "type": "bytes"
            }
        ],
        "name": "getOwnersKeyHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "key",
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
                "name": "initialKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "initialGuardianHash",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "guardianSafePeriod",
                "type": "uint256"
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
        "inputs": [],
        "name": "keyStoreStorage",
        "outputs": [
            {
                "internalType": "contract IKeyStoreStorage",
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
        "inputs": [],
        "name": "owner",
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
        "inputs": [],
        "name": "renounceOwnership",
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
                "internalType": "uint256",
                "name": "initialGuardianSafePeriod",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "newGuardianHash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "rawOwners",
                "type": "bytes"
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
                "name": "rawOwners",
                "type": "bytes"
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
                "internalType": "uint256",
                "name": "initialGuardianSafePeriod",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "newGuardianSafePeriod",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "rawOwners",
                "type": "bytes"
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
                "internalType": "uint256",
                "name": "newGuardianSafePeriod",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "rawOwners",
                "type": "bytes"
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
                "internalType": "uint256",
                "name": "initialGuardianSafePeriod",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "newKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "rawOwners",
                "type": "bytes"
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
        "name": "setKeyByGuardian",
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
                "name": "rawOwners",
                "type": "bytes"
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
        "name": "setKeyByGuardian",
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
                "internalType": "uint256",
                "name": "initialGuardianSafePeriod",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "newKey",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "rawOwners",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "keySignature",
                "type": "bytes"
            }
        ],
        "name": "setKeyByOwner",
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
                "name": "rawOwners",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "keySignature",
                "type": "bytes"
            }
        ],
        "name": "setKeyByOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
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
                "internalType": "address",
                "name": "newLogic",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "keySignature",
                "type": "bytes"
            }
        ],
        "name": "upgradeKeystore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "validator",
        "outputs": [
            {
                "internalType": "contract IValidator",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];