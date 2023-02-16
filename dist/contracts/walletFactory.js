"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletFactoryContract = void 0;
const ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_walletImpl",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_singletonFactory",
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
                "indexed": true,
                "internalType": "address",
                "name": "_proxy",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_implementation",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "version",
                "type": "string"
            }
        ],
        "name": "SoulWalletCreated",
        "type": "event"
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
                "name": "_entryPoint",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "_upgradeDelay",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_guardianDelay",
                "type": "uint32"
            },
            {
                "internalType": "address",
                "name": "_guardian",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "_salt",
                "type": "bytes32"
            }
        ],
        "name": "createWallet",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_entryPoint",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "_upgradeDelay",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_guardianDelay",
                "type": "uint32"
            },
            {
                "internalType": "address",
                "name": "_guardian",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "_salt",
                "type": "bytes32"
            }
        ],
        "name": "getWalletAddress",
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
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isWalletActive",
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
        "inputs": [],
        "name": "singletonFactory",
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
        "name": "walletImpl",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
/*


{
    "compiler": {
        "version": "0.8.17+commit.8df45f5f"
    },
    "language": "Solidity",
    "output": {
        "abi": [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_walletImpl",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_singletonFactory",
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
                        "indexed": true,
                        "internalType": "address",
                        "name": "_proxy",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_implementation",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "version",
                        "type": "string"
                    }
                ],
                "name": "SoulWalletCreated",
                "type": "event"
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
                        "name": "_entryPoint",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint32",
                        "name": "_upgradeDelay",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "_guardianDelay",
                        "type": "uint32"
                    },
                    {
                        "internalType": "address",
                        "name": "_guardian",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "_salt",
                        "type": "bytes32"
                    }
                ],
                "name": "createWallet",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_entryPoint",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint32",
                        "name": "_upgradeDelay",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "_guardianDelay",
                        "type": "uint32"
                    },
                    {
                        "internalType": "address",
                        "name": "_guardian",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "_salt",
                        "type": "bytes32"
                    }
                ],
                "name": "getWalletAddress",
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
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "isWalletActive",
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
                "inputs": [],
                "name": "singletonFactory",
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
                "name": "walletImpl",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ],
        "devdoc": {
            "kind": "dev",
            "methods": {},
            "version": 1
        },
        "userdoc": {
            "kind": "user",
            "methods": {},
            "version": 1
        }
    },
    "settings": {
        "compilationTarget": {
            "contracts/SmartWalletFactory.sol": "SmartWalletFactory"
        },
        "evmVersion": "london",
        "libraries": {},
        "metadata": {
            "bytecodeHash": "ipfs"
        },
        "optimizer": {
            "enabled": true,
            "runs": 1
        },
        "remappings": []
    },
    "sources": {
        "@openzeppelin/contracts/access/IAccessControl.sol": {
            "keccak256": "0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57",
            "license": "MIT",
            "urls": [
                "bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a",
                "dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh"
            ]
        },
        "@openzeppelin/contracts/access/IAccessControlEnumerable.sol": {
            "keccak256": "0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676",
            "license": "MIT",
            "urls": [
                "bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276",
                "dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2"
            ]
        },
        "@openzeppelin/contracts/interfaces/IERC1271.sol": {
            "keccak256": "0x0705a4b1b86d7b0bd8432118f226ba139c44b9dcaba0a6eafba2dd7d0639c544",
            "license": "MIT",
            "urls": [
                "bzz-raw://c45b821ef9e882e57c256697a152e108f0f2ad6997609af8904cae99c9bd422e",
                "dweb:/ipfs/QmRKCJW6jjzR5UYZcLpGnhEJ75UVbH6EHkEa49sWx2SKng"
            ]
        },
        "@openzeppelin/contracts/token/ERC20/IERC20.sol": {
            "keccak256": "0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b",
            "license": "MIT",
            "urls": [
                "bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34",
                "dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr"
            ]
        },
        "@openzeppelin/contracts/utils/Address.sol": {
            "keccak256": "0xf96f969e24029d43d0df89e59d365f277021dac62b48e1c1e3ebe0acdd7f1ca1",
            "license": "MIT",
            "urls": [
                "bzz-raw://ec772b45a624be516f1c81970caa8a2e144301e9d0921cbc1a2789fef39a1269",
                "dweb:/ipfs/QmNyjwxCrGhQMyzLD93oUobJXVe9ceJvRvfXwbEtuxPiEj"
            ]
        },
        "@openzeppelin/contracts/utils/Context.sol": {
            "keccak256": "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
            "license": "MIT",
            "urls": [
                "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
                "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"
            ]
        },
        "@openzeppelin/contracts/utils/Strings.sol": {
            "keccak256": "0xa4d1d62251f8574deb032a35fc948386a9b4de74b812d4f545a1ac120486b48a",
            "license": "MIT",
            "urls": [
                "bzz-raw://8c969013129ba9e651a20735ef659fef6d8a1139ea3607bd4b26ddea2d645634",
                "dweb:/ipfs/QmVhVa6LGuzAcB8qgDtVHRkucn4ihj5UZr8xBLcJkP6ucb"
            ]
        },
        "@openzeppelin/contracts/utils/cryptography/ECDSA.sol": {
            "keccak256": "0xda898fa084aa1ddfdb346e6a40459e00a59d87071cce7c315a46d648dd71d0ba",
            "license": "MIT",
            "urls": [
                "bzz-raw://ce501a941f4aa1555c04dabb5e07992503bb6a9b32ff8f7cdcefdb4a742210cb",
                "dweb:/ipfs/QmeScPrUpdrGYs9BytV3Z5ZWJcBXtuAgCW4BLHua4xFUxx"
            ]
        },
        "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol": {
            "keccak256": "0xbc8d1f66b26e211a1f6f40a17453e9d5020ec96749014379205cff100809884c",
            "license": "MIT",
            "urls": [
                "bzz-raw://b9c056a3068bb6fe41b28239bd71acd3a5249d23ed089c874182a4e3d7e47df1",
                "dweb:/ipfs/QmdFFG7dxiZ5jBaaYDXPMiKVG9rNoMhvR7cBt5997E2pat"
            ]
        },
        "@openzeppelin/contracts/utils/introspection/ERC165.sol": {
            "keccak256": "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
            "license": "MIT",
            "urls": [
                "bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
                "dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"
            ]
        },
        "@openzeppelin/contracts/utils/introspection/IERC165.sol": {
            "keccak256": "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
            "license": "MIT",
            "urls": [
                "bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
                "dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"
            ]
        },
        "@openzeppelin/contracts/utils/math/Math.sol": {
            "keccak256": "0xa1e8e83cd0087785df04ac79fb395d9f3684caeaf973d9e2c71caef723a3a5d6",
            "license": "MIT",
            "urls": [
                "bzz-raw://33bbf48cc069be677705037ba7520c22b1b622c23b33e1a71495f2d36549d40b",
                "dweb:/ipfs/Qmct36zWXv3j7LZB83uwbg7TXwnZSN1fqHNDZ93GG98bGz"
            ]
        },
        "@openzeppelin/contracts/utils/structs/EnumerableSet.sol": {
            "keccak256": "0xc3ff3f5c4584e1d9a483ad7ced51ab64523201f4e3d3c65293e4ca8aeb77a961",
            "license": "MIT",
            "urls": [
                "bzz-raw://d7d3dd6067a994690471b5fc71b6f81fac3847798b37d404f74db00b4d3c3d0e",
                "dweb:/ipfs/QmRHF1RarifjNi93RttouNPkYZGyu6CD926PgRDzD5iL35"
            ]
        },
        "contracts/ACL.sol": {
            "keccak256": "0xdb6c36a4672b49af47ce7889db587ca4b695f257ea91012b5901c1c3ca9acbae",
            "license": "MIT",
            "urls": [
                "bzz-raw://b95769a8501b440c28f0720e2535f83ab4b8a69099b947dc2f7806125b2bb51b",
                "dweb:/ipfs/Qma2KULdJF4SrsXfY1MidYTpBVUq1MuArMW4zVCBaebqH1"
            ]
        },
        "contracts/AccountStorage.sol": {
            "keccak256": "0x6aeedd8f9d80ad3528d85d5021c924933a1c4fae67a25171a07ee29fe7d7806e",
            "license": "MIT",
            "urls": [
                "bzz-raw://fd350846269f42038c15a154e77c7537a8e68f511885811f5b7216154302c253",
                "dweb:/ipfs/Qmdabwx9HRCZioyUogXJQmGWHWPE4fkorZS8ono7Qy5beb"
            ]
        },
        "contracts/BaseAccount.sol": {
            "keccak256": "0xe4935b114c23792b56b45a6c61b4bb885a98b4d071ac850d1204e0dca582a76c",
            "license": "GPL-3.0",
            "urls": [
                "bzz-raw://b7259552425f41572049d400c09d90a45ca03c96501e64f6be81911c32208874",
                "dweb:/ipfs/QmS5X2USTaLPf28MaUGBy8mM2B6b4MAajrLxXSg7xeVopG"
            ]
        },
        "contracts/DefaultCallbackHandler.sol": {
            "keccak256": "0xf26235a5ed3e46fa4a8d9ee425929802539c1dac627a345281e70d6aef734c02",
            "license": "LGPL-3.0-only",
            "urls": [
                "bzz-raw://4c2c559281f9ee247a1e2854d3517b7b193bdb9c057bf28f3bb4584932fe6581",
                "dweb:/ipfs/QmTJGsiRNeSroXuL3Dot9mBgnG84FsJhgCGkudp4D5bwG7"
            ]
        },
        "contracts/SenderCreator.sol": {
            "keccak256": "0xd79cccf42d6d07c9d0c1b3932bde4a914d704d19f54dd92b7ec8d33b2da32332",
            "license": "GPL-3.0",
            "urls": [
                "bzz-raw://6fea76fae4bf244e62341d52cdc9adfd657b7a916903d256de23e43d1d9367f7",
                "dweb:/ipfs/QmQ7j19peES9jyDyDSLYzxuHC3LWfKdmDPvmT6y6AqfPhe"
            ]
        },
        "contracts/SmartWallet.sol": {
            "keccak256": "0x314de1ce28a041d3090670db3d685654b0aa8f0aa6ebda272a5a5743fde943f6",
            "license": "GPL-3.0",
            "urls": [
                "bzz-raw://cb4381f34215b3eb53029796719e2cf4df067a897dc21349fb00d7c10ddb8754",
                "dweb:/ipfs/QmeDcTc6HK2WAvSaybhL4iVo5QBRZnoKdLLx8b1Me1hQZo"
            ]
        },
        "contracts/SmartWalletFactory.sol": {
            "keccak256": "0xe722134b98bdedce8e389d8213b76030f065b5488822f36d7bc53b4fa2d8c511",
            "license": "GPL-3.0",
            "urls": [
                "bzz-raw://4a352770beb13b1bb8e25512b9daf0f5fb0dadba6e687a08fef6b349223ed495",
                "dweb:/ipfs/QmP6SDpJqZph271WwQafJ2ipHRWCX5uTcF3tgAhvwjbDWW"
            ]
        },
        "contracts/SoulWalletProxy.sol": {
            "keccak256": "0x94037a123b2733ad38e5b684fc5bcaaef9286b40770cc405cc13231b53a5bfa4",
            "license": "MIT",
            "urls": [
                "bzz-raw://b10cc9004fdba9975989598b0b9b183a8bbf57f72635879630c231fb293f70cb",
                "dweb:/ipfs/QmNgKxcX7dcvGaxjyf7uNV3cqJQ3uCMLjTD3mfjSg41S3J"
            ]
        },
        "contracts/guardian/GuardianControl.sol": {
            "keccak256": "0xd0dbb5c5422c450825b2f2c8784e35e1e8d5d15cfc373346c7c38d79afdea8a9",
            "license": "MIT",
            "urls": [
                "bzz-raw://d3fe41eca3df37b05ddf575e7dec32d0f7e1fd8678a435bc1d39a0c6fad1fa93",
                "dweb:/ipfs/QmUyYVmqA1kuAJSiizf2912f1dNsjv8vPPutX63CtTFr3a"
            ]
        },
        "contracts/helpers/Calldata.sol": {
            "keccak256": "0xd2f75263b80157c33ac15a8e401226fecb70d7977a9be7f62121f0e01fdf53bf",
            "license": "MIT",
            "urls": [
                "bzz-raw://a0301a0d46cf75a48b2846216f71838c3a9a092bf18ee027a1590b1f2184dc57",
                "dweb:/ipfs/QmNe7cFFhiZXM1xGRncs5f79WqLioLPcqrYskv8CDy4xZH"
            ]
        },
        "contracts/helpers/Signatures.sol": {
            "keccak256": "0xf18caca3e7487845afae8aa9aaa2635f12b7a556919d98b2e22317549bcfdb22",
            "license": "GPL-3.0",
            "urls": [
                "bzz-raw://c195974c82fc5d23ab5e8fdd975c210891aa24ed3a1b6f2e463813596c50849d",
                "dweb:/ipfs/QmXaiUdu57thmJ5ZUCtbzJ9AeiM3o8V6uVLmZk6Z1NPzUq"
            ]
        },
        "contracts/interfaces/IAccount.sol": {
            "keccak256": "0x113fb2de53e089f24ef98738c9aa9a14cd7266ddcedc5b5029657b06978cb86a",
            "license": "GPL-3.0",
            "urls": [
                "bzz-raw://68c7a372b4741d1d091ce5b5edd66794d151c3c5227b2fe52dd8b27f0415dfe5",
                "dweb:/ipfs/QmV19eLwbNVz3vWGTLqPrJrJyueXe7ievdjFkanf74GhmE"
            ]
        },
        "contracts/interfaces/IAggregator.sol": {
            "keccak256": "0xd9571db5b8274d652959060476948d100b07bf5a7e2468bde3b75063d68d3e26",
            "license": "GPL-3.0",
            "urls": [
                "bzz-raw://73fbcd16fc5aa422bc14e5f8e312aa8a1aa68a5b1cdbe89536954752df66b326",
                "dweb:/ipfs/Qmf4HRjWGump1Hn7um5yEFzjd4EpymEco8tbPyMcn85M9C"
            ]
        },
        "contracts/interfaces/ICreate2Deployer.sol": {
            "keccak256": "0xba7f42ff30bf38773251115e580ef245937cdedfc3f2bc21b3acc3610a67527b",
            "license": "GPL-3.0",
            "urls": [
                "bzz-raw://a7c9877063abd9de55a06950aec21b7fcac73139f3d7cf486315805479fa6d4c",
                "dweb:/ipfs/QmYhbLETBqrHKAcCgg6VqbpdwSKFFQ8KZ87L4LgYSmVGuW"
            ]
        },
        "contracts/interfaces/IERC1155TokenReceiver.sol": {
            "keccak256": "0xeae79b8200e6fcd0ba4e9dd21d304e35e2b1bcacc48b1d7164e3c821b9ab9fd4",
            "license": "LGPL-3.0-only",
            "urls": [
                "bzz-raw://af998c14f10b8d028e02e417637ef27889b91fa992f3cab3c3092d9db5ab4475",
                "dweb:/ipfs/QmaLvY69hERAhBWexMps42xC1iuVsyqWfhWRpoCMJicVgR"
            ]
        },
        "contracts/interfaces/IERC721TokenReceiver.sol": {
            "keccak256": "0x5d9c305bb31b8fa44b8cbc91365e09a78ce664e4e614febef8a875bb20116d6a",
            "license": "LGPL-3.0-only",
            "urls": [
                "bzz-raw://354144f84821d2efbea677dde6c3a1eab6b55912424960ca1d41bc804622d7a1",
                "dweb:/ipfs/QmUBHNfDreyuFQQFXpb74V9DgTQ3bLfUxZDxLhkdTzyVHX"
            ]
        },
        "contracts/interfaces/IERC777TokensRecipient.sol": {
            "keccak256": "0x47fd2689119390190bbe1f3bceaed6018f8303c8fa829268aba5d3dcee54a4d0",
            "license": "LGPL-3.0-only",
            "urls": [
                "bzz-raw://44ee20613577e45ff00710f5aa81ca82b843a9662e5af5d180f8455aa095a9fc",
                "dweb:/ipfs/QmQRszBEh8GeLBo1fwoFf9SqUaaHhU44rM2WNa44f1N7Cx"
            ]
        },
        "contracts/interfaces/IEntryPoint.sol": {
            "keccak256": "0x51e4234bc9255d961214066d0eb08cbabea3821db32dc62215672f6497962ef9",
            "license": "GPL-3.0",
            "urls": [
                "bzz-raw://67db72c8acb87fb77536c15ee14e65fb74f5c76cdf6a46dd0f45d88d5d20afec",
                "dweb:/ipfs/QmSiZd2KGfX5z9iEjGDoYfY8ync9kTUfdYMh1i8dnQFQUT"
            ]
        },
        "contracts/interfaces/IGuardianControl.sol": {
            "keccak256": "0x059ecf2fc75768c47bc1668b951b9731556197f69f5dd7cfd4ef6e627bcef161",
            "license": "MIT",
            "urls": [
                "bzz-raw://1953652cbf060e5a7d61395fc0dba56b1a6750b90d0d81e9d2e6e00730cca399",
                "dweb:/ipfs/QmdBhM3diNSFs9nCGgR4xLvi4kpCigp3UFPfHWUtV6X4Ca"
            ]
        },
        "contracts/interfaces/ILogicUpgradeControl.sol": {
            "keccak256": "0x8dcea39f5f4a1364d1d8e0597ae91cfc0022ce724d5177a81cb48ac1b434a451",
            "license": "MIT",
            "urls": [
                "bzz-raw://ff3bfd9dafa23f095c2c32e69f3eba09fdf33b62e8fa3248dd3520ed9b7d169c",
                "dweb:/ipfs/Qmcp9s2uWi5VWafa529x1L48mTpc6QJYeZMTrLF8KgNc3w"
            ]
        },
        "contracts/interfaces/IStakeManager.sol": {
            "keccak256": "0x1b7b01d6eb948213ad51b33c3951469af52e8001c1827dabacbd55eb1f0c90a3",
            "license": "GPL-3.0-only",
            "urls": [
                "bzz-raw://d164d7b2d8d24ceda5f395c435d457a19a2f3bfcb496317a7958f1a43da4672b",
                "dweb:/ipfs/QmXJ8SxCF8jZ1oLgDXvCXGi3xk7oVWMYz8MwtNSxVwzBCb"
            ]
        },
        "contracts/interfaces/UserOperation.sol": {
            "keccak256": "0x548134a6c652a9e4730beb582b94785587f93f91b0dded2a27bbda3048911ddd",
            "license": "GPL-3.0",
            "urls": [
                "bzz-raw://4156e408fb62a783d11293fc5b6880ec786e0d4b704abbd96fbe06ac3b03b806",
                "dweb:/ipfs/QmWoiGVR8xUQbHoP5AhM29DkezWGC7Cs66stCpMqkkP6Lq"
            ]
        },
        "contracts/utils/access/AccessControl.sol": {
            "keccak256": "0xf40e456867b2cd00fb531bf3979646a1dc8665cf867dcd7bcd31c5025325f19f",
            "license": "MIT",
            "urls": [
                "bzz-raw://7ff868d1ee4b5aae606fdc9f45ecf9e19dae2a0a3fda704e25c39bc8d4337757",
                "dweb:/ipfs/QmSpAiDSHCYBCeuZAbDZYL1tbCyoiC3QCjHB8iSU1U45yx"
            ]
        },
        "contracts/utils/access/AccessControlEnumerable.sol": {
            "keccak256": "0x1e2d6f7b3cb0bc1cb8d0713a3391363b81d44c3a6c82a8c2804827b166e086f1",
            "license": "MIT",
            "urls": [
                "bzz-raw://be2b6d4f61767cb09f548118be06b29051c45c7b94a37cf71005c7b1258a330f",
                "dweb:/ipfs/QmVCKaZRA5Sore1sLTe1jufD679DNL39AdP7Ksq2jgsg47"
            ]
        },
        "contracts/utils/upgradeable/Initializable.sol": {
            "keccak256": "0x0fd36ae3d9b2196581938ee078938aa8dfbb2c9d6f4b767f52203c017760300e",
            "license": "MIT",
            "urls": [
                "bzz-raw://f0d44093705d32345f81b72a0bcaec86f11c595779587a7e76936615a08f813e",
                "dweb:/ipfs/QmRHcHwQPuVStyZ9DUp1L64pWDrC7sT32beQGDftaiqqyD"
            ]
        },
        "contracts/utils/upgradeable/Upgradeable.sol": {
            "keccak256": "0x8f9253e360b517708df104ce794772234b4e7fcfbb4fc42d48de65f3a23f18e8",
            "license": "MIT",
            "urls": [
                "bzz-raw://570f47ec16fc51490eb0d32eead041fa72038a2006ae1a1874eaf66f4423cd54",
                "dweb:/ipfs/QmRwYsFtjBy9i49vaCPD5nsdmY5PHvoKcRezh1ftV2JSg5"
            ]
        },
        "contracts/utils/upgradeable/implementationSlot.sol": {
            "keccak256": "0x07d42e8c8dc11afc3e491e671f8c2727facb2a92b166d408a977662dcd40b1c0",
            "license": "MIT",
            "urls": [
                "bzz-raw://6da8c26d7719914dcbc715fa7b01e00a127f91a3d491641ce8bdd397253093d5",
                "dweb:/ipfs/QmQD9dKyeXtMD4Y1Lq2e5fmrKCf6fLn1gWKGfmLzLYscvu"
            ]
        },
        "contracts/utils/upgradeable/logicUpgradeControl.sol": {
            "keccak256": "0xa56f1a0a41e7e27141c357de64d79fa1a973e15d9284b7fd4a0d00e977c69587",
            "license": "MIT",
            "urls": [
                "bzz-raw://7f37704858ae627c2c19f39b87b0d6d4c8c8bcec86c724212e6d2516751bacc7",
                "dweb:/ipfs/QmbK96BPC5CiJBdxTnxNvJvRRuYaQeQtWDWyidrRM2Hy8m"
            ]
        }
    },
    "version": 1
}

*/
const bytecode = '0x60c060405234801561001057600080fd5b50604051610f32380380610f3283398101604081905261002f91610107565b6001600160a01b03821661007d5760405162461bcd60e51b815260206004820152601060248201526f3bb0b63632ba24b6b8361032b93937b960811b60448201526064015b60405180910390fd5b6001600160a01b0380831660805281166100d95760405162461bcd60e51b815260206004820152601660248201527f73696e676c65746f6e466163746f7279206572726f72000000000000000000006044820152606401610074565b6001600160a01b031660a0525061013a565b80516001600160a01b038116811461010257600080fd5b919050565b6000806040838503121561011a57600080fd5b610123836100eb565b9150610131602084016100eb565b90509250929050565b60805160a051610db26101806000396000818160d101528181610255015261037001526000818160a9015281816101a0015281816102b1015261043f0152610db26000f3fe60806040523480156200001157600080fd5b50600436106200006a5760003560e01c806330b8d376146200006f5780633943c03014620000a3578063bc10273e14620000cb578063d0ed7b9114620000f3578063f4528808146200012a578063ffa1ad741462000141575b600080fd5b62000086620000803660046200056c565b62000175565b6040516001600160a01b0390911681526020015b60405180910390f35b620000867f000000000000000000000000000000000000000000000000000000000000000081565b620000867f000000000000000000000000000000000000000000000000000000000000000081565b6200011962000104366004620005ec565b60006020819052908152604090205460ff1681565b60405190151581526020016200009a565b620000866200013b3660046200056c565b62000286565b6200016660405180604001604052806005815260200164302e302e3160d81b81525081565b6040516200009a919062000667565b600080604051806020016200018a906200052b565b6020820181038252601f19601f820116604052507f00000000000000000000000000000000000000000000000000000000000000008989898989604051602401620001da9594939291906200067c565b60408051601f19818403018152918152602080830180516001600160e01b031663209de19560e21b17905290516200021593929101620006b3565b60408051601f1981840301815290829052620002359291602001620006e1565b60405160208183030381529060405290506200027a8382805190602001207f000000000000000000000000000000000000000000000000000000000000000062000501565b98975050505050505050565b600080604051806020016200029b906200052b565b6020820181038252601f19601f820116604052507f00000000000000000000000000000000000000000000000000000000000000008989898989604051602401620002eb9594939291906200067c565b60408051601f19818403018152918152602080830180516001600160e01b031663209de19560e21b17905290516200032693929101620006b3565b60408051601f1981840301815290829052620003469291602001620006e1565b60408051601f198184030181529082905263257b1f8160e11b825291506000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690634af63f0290620003a9908590889060040162000714565b6020604051808303816000875af1158015620003c9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003ef919062000738565b90506001600160a01b0381166200043d5760405162461bcd60e51b815260206004820152600e60248201526d18dc99585d194c8819985a5b195960921b604482015260640160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316886001600160a01b0316826001600160a01b03167f8f4ebbea6fac3dc9485cb4581e23041567937fa082c34a8504307cd1b7ecc3da60405180604001604052806005815260200164302e302e3160d81b815250604051620004c9919062000667565b60405180910390a46001600160a01b0381166000908152602081905260409020805460ff191660011790559150509695505050505050565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b610624806200075983390190565b6001600160a01b03811681146200054f57600080fd5b50565b803563ffffffff811681146200056757600080fd5b919050565b60008060008060008060c087890312156200058657600080fd5b8635620005938162000539565b95506020870135620005a58162000539565b9450620005b56040880162000552565b9350620005c56060880162000552565b92506080870135620005d78162000539565b8092505060a087013590509295509295509295565b600060208284031215620005ff57600080fd5b81356200060c8162000539565b9392505050565b60005b838110156200063057818101518382015260200162000616565b50506000910152565b600081518084526200065381602086016020860162000613565b601f01601f19169290920160200192915050565b6020815260006200060c602083018462000639565b6001600160a01b039586168152938516602085015263ffffffff928316604085015291166060830152909116608082015260a00190565b6001600160a01b0383168152604060208201819052600090620006d99083018462000639565b949350505050565b60008351620006f581846020880162000613565b8351908301906200070b81836020880162000613565b01949350505050565b60408152600062000729604083018562000639565b90508260208301529392505050565b6000602082840312156200074b57600080fd5b81516200060c816200053956fe608060405260405161062438038061062483398101604081905261002291610240565b61002c8282610033565b505061035d565b61003c82610055565b61005082826100b160201b6100491760201c565b505050565b61007d817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6001600160a01b038116807fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a25050565b60606100d683836040518060600160405280602781526020016105fd602791396100dd565b9392505050565b6060600080856001600160a01b0316856040516100fa919061030e565b600060405180830381855af49150503d8060008114610135576040519150601f19603f3d011682016040523d82523d6000602084013e61013a565b606091505b50909250905061014c86838387610156565b9695505050505050565b606083156101ca5782516000036101c3576001600160a01b0385163b6101c35760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b50816101d4565b6101d483836101dc565b949350505050565b8151156101ec5781518083602001fd5b8060405162461bcd60e51b81526004016101ba919061032a565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561023757818101518382015260200161021f565b50506000910152565b6000806040838503121561025357600080fd5b82516001600160a01b038116811461026a57600080fd5b60208401519092506001600160401b038082111561028757600080fd5b818501915085601f83011261029b57600080fd5b8151818111156102ad576102ad610206565b604051601f8201601f19908116603f011681019083821181831017156102d5576102d5610206565b816040528281528860208487010111156102ee57600080fd5b6102ff83602083016020880161021c565b80955050505050509250929050565b6000825161032081846020870161021c565b9190910192915050565b602081526000825180602084015261034981604085016020870161021c565b601f01601f19169190910160400192915050565b6102918061036c6000396000f3fe60806040523661001357610011610017565b005b6100115b6100476100427f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b610075565b565b606061006e838360405180606001604052806027815260200161023560279139610099565b9392505050565b3660008037600080366000845af43d6000803e808015610094573d6000f35b3d6000fd5b6060600080856001600160a01b0316856040516100b691906101e5565b600060405180830381855af49150503d80600081146100f1576040519150601f19603f3d011682016040523d82523d6000602084013e6100f6565b606091505b509150915061010786838387610111565b9695505050505050565b6060831561018557825160000361017e576001600160a01b0385163b61017e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b508161018f565b61018f8383610197565b949350505050565b8151156101a75781518083602001fd5b8060405162461bcd60e51b81526004016101759190610201565b60005b838110156101dc5781810151838201526020016101c4565b50506000910152565b600082516101f78184602087016101c1565b9190910192915050565b60208152600082518060208401526102208160408501602087016101c1565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e4907279244dc7fb8e3f348cb6c963fee12c4d9238ccfa9540390061df90c93f64736f6c63430008110033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220ed13e6cd2defe91f344333bf548727ae718048cf87eeac4842b2b3de3c473b3064736f6c63430008110033';
const contract = {
    ABI,
    bytecode
};
exports.WalletFactoryContract = contract;
//# sourceMappingURL=walletFactory.js.map