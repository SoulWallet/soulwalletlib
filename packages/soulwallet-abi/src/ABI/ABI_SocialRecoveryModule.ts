//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
    {
        "inputs": [],
        "name": "ADDRESS_ALREADY_EXISTS",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INVALID_ADDRESS",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address[]",
                "name": "guardians",
                "type": "address[]"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "guardianHash",
                "type": "bytes32"
            }
        ],
        "name": "AnonymousGuardianRevealed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "guardian",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "recoveryHash",
                "type": "bytes32"
            }
        ],
        "name": "ApproveRecovery",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            }
        ],
        "name": "ModuleDeInit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            }
        ],
        "name": "ModuleInit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address[]",
                "name": "_newOwners",
                "type": "address[]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_nonce",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "executeAfter",
                "type": "uint256"
            }
        ],
        "name": "PendingRecovery",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address[]",
                "name": "_newOwners",
                "type": "address[]"
            }
        ],
        "name": "SocialRecovery",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_nonce",
                "type": "uint256"
            }
        ],
        "name": "SocialRecoveryCanceled",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "NAME",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "VERSION",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "_newOwners",
                "type": "address[]"
            }
        ],
        "name": "approveRecovery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "_newOwners",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "signatureCount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "signatures",
                "type": "bytes"
            }
        ],
        "name": "batchApproveRecovery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            }
        ],
        "name": "cancelRecovery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            }
        ],
        "name": "cancelSetGuardians",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "dataHash",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "signatureCount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "signatures",
                "type": "bytes"
            }
        ],
        "name": "checkNSignatures",
        "outputs": [],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "domainSeparator",
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
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "_newOwners",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "_nonce",
                "type": "uint256"
            }
        ],
        "name": "encodeSocialRecoveryData",
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
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            }
        ],
        "name": "executeRecovery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "guardians",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
            }
        ],
        "name": "getAnomousGuardianHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getChainId",
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
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            }
        ],
        "name": "getGuardians",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "_newOwners",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "_nonce",
                "type": "uint256"
            }
        ],
        "name": "getSocialRecoveryHash",
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
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            }
        ],
        "name": "guardiansCount",
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
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_guardian",
                "type": "address"
            }
        ],
        "name": "isGuardian",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
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
        "name": "requiredFunctions",
        "outputs": [
            {
                "internalType": "bytes4[]",
                "name": "",
                "type": "bytes4[]"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "guardians",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
            }
        ],
        "name": "revealAnomousGuardians",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            }
        ],
        "name": "threshold",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_threshold",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_guardians",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "_threshold",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "_guardianHash",
                "type": "bytes32"
            }
        ],
        "name": "updateGuardians",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "walletDeInit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "walletInit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];