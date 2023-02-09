/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-11-04 23:45:24
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-08 16:11:10
 */

import { IContract } from './icontract';

const ABI: any =
	[
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "logic",
					"type": "address"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"stateMutability": "payable",
			"type": "constructor"
		},
		{
			"stateMutability": "payable",
			"type": "fallback"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		}
	]

	;

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
                        "name": "logic",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "stateMutability": "payable",
                "type": "constructor"
            },
            {
                "stateMutability": "payable",
                "type": "fallback"
            },
            {
                "stateMutability": "payable",
                "type": "receive"
            }
        ],
        "devdoc": {
            "kind": "dev",
            "methods": {
                "constructor": {
                    "details": "Initializes the upgradeable proxy with an initial implementation specified by `logic`. If `data` is nonempty, it's used as data in a delegate call to `logic`. This will typically be an encoded function call, and allows initializing the storage of the proxy like a Solidity constructor."
                }
            },
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
            "contracts/SoulWalletProxy.sol": "SoulWalletProxy"
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
        "@openzeppelin/contracts/utils/Address.sol": {
            "keccak256": "0xf96f969e24029d43d0df89e59d365f277021dac62b48e1c1e3ebe0acdd7f1ca1",
            "license": "MIT",
            "urls": [
                "bzz-raw://ec772b45a624be516f1c81970caa8a2e144301e9d0921cbc1a2789fef39a1269",
                "dweb:/ipfs/QmNyjwxCrGhQMyzLD93oUobJXVe9ceJvRvfXwbEtuxPiEj"
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
        }
    },
    "version": 1
}
	
	*/
const bytecode =
	'0x608060405260405161062438038061062483398101604081905261002291610240565b61002c8282610033565b505061035d565b61003c82610055565b61005082826100b160201b6100491760201c565b505050565b61007d817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6001600160a01b038116807fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a25050565b60606100d683836040518060600160405280602781526020016105fd602791396100dd565b9392505050565b6060600080856001600160a01b0316856040516100fa919061030e565b600060405180830381855af49150503d8060008114610135576040519150601f19603f3d011682016040523d82523d6000602084013e61013a565b606091505b50909250905061014c86838387610156565b9695505050505050565b606083156101ca5782516000036101c3576001600160a01b0385163b6101c35760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b50816101d4565b6101d483836101dc565b949350505050565b8151156101ec5781518083602001fd5b8060405162461bcd60e51b81526004016101ba919061032a565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561023757818101518382015260200161021f565b50506000910152565b6000806040838503121561025357600080fd5b82516001600160a01b038116811461026a57600080fd5b60208401519092506001600160401b038082111561028757600080fd5b818501915085601f83011261029b57600080fd5b8151818111156102ad576102ad610206565b604051601f8201601f19908116603f011681019083821181831017156102d5576102d5610206565b816040528281528860208487010111156102ee57600080fd5b6102ff83602083016020880161021c565b80955050505050509250929050565b6000825161032081846020870161021c565b9190910192915050565b602081526000825180602084015261034981604085016020870161021c565b601f01601f19169190910160400192915050565b6102918061036c6000396000f3fe60806040523661001357610011610017565b005b6100115b6100476100427f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b610075565b565b606061006e838360405180606001604052806027815260200161023560279139610099565b9392505050565b3660008037600080366000845af43d6000803e808015610094573d6000f35b3d6000fd5b6060600080856001600160a01b0316856040516100b691906101e5565b600060405180830381855af49150503d80600081146100f1576040519150601f19603f3d011682016040523d82523d6000602084013e6100f6565b606091505b509150915061010786838387610111565b9695505050505050565b6060831561018557825160000361017e576001600160a01b0385163b61017e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b508161018f565b61018f8383610197565b949350505050565b8151156101a75781518083602001fd5b8060405162461bcd60e51b81526004016101759190610201565b60005b838110156101dc5781810151838201526020016101c4565b50506000910152565b600082516101f78184602087016101c1565b9190910192915050565b60208152600082518060208401526102208160408501602087016101c1565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e4907279244dc7fb8e3f348cb6c963fee12c4d9238ccfa9540390061df90c93f64736f6c63430008110033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564'
	;


const contract: IContract = {
	ABI,
	bytecode
}

export { contract as WalletProxyContract };