import { UserOperation } from "../entity/userOperation";
import { ethers } from "ethers";
import { NumberLike } from "../defines/numberLike";
import { IApproveToken } from "../interface/IApproveToken";
/**
 * token interface
 * @class Token
 */
export declare class Token {
    /**
     *
     *
     * @param {ethers.providers.BaseProvider} etherProvider
     * @param {string} walletAddress
     * @param {NumberLike} nonce
     * @param {string} entryPointAddress
     * @param {string} paymasterAndData
     * @param {NumberLike} maxFeePerGas
     * @param {NumberLike} maxPriorityFeePerGas
     * @param {string} callContract
     * @param {string} encodeABI
     * @param {string} [value='0']
     * @return {*}
     * @memberof Token
     */
    createOp(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAndData: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, callContract: string, encodeABI: string, value?: string): Promise<UserOperation | null>;
}
/**
 * erc20 token class
 * @class ERC20
 *
 */
export declare class ERC20 {
    private _token;
    /**
     * @constructor
     *
     */
    constructor();
    private getContract;
    /**
     * approve token to spender
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _spender the spender address
     * @param {string} _value the value
     * @returns {Promise<UserOperation | null>} the userOperation
     */
    approve(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _spender: string, _value: string): Promise<UserOperation | null>;
    private readonly MAX_INT256;
    private approveGasLimit;
    /**
     * get approve call data (use activate wallet)
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {IApproveToken[]} approveData the approve data
     * @returns {Promise<{callData: string, callGasLimit: string}>} the call data
     */
    getApproveCallData(etherProvider: ethers.providers.BaseProvider, walletAddress: string, approveData: IApproveToken[]): Promise<{
        callData: string;
        callGasLimit: string;
    }>;
    /**
     * transfer token
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _to the to address
     * @param {string} _value the value
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    transferFrom(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _from: string, _to: string, _value: string): Promise<UserOperation | null>;
    /**
     * transfer token
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _to the to address
     * @param {string} _value the value
     * @returns {Promise<UserOperation | null>} the userOperation
     */
    transfer(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _to: string, _value: string): Promise<UserOperation | null>;
}
/**
 * ERC721
 * @class
 */
export declare class ERC721 {
    private _token;
    /**
     * @constructor
     */
    constructor();
    private getContract;
    /**
     * approve token to spender
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _spender the spender address
     * @param {string} _tokenId the token id
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    approve(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _spender: string, _tokenId: string): Promise<UserOperation | null>;
    /**
     * transfer token
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _to the to address
     * @param {string} _tokenId the token id
     * @returns {Promise<UserOperation | null>} the userOperation
     */
    transferFrom(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _from: string, _to: string, _tokenId: string): Promise<UserOperation | null>;
    /**
     * transfer token
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _to the to address
     * @param {string} _tokenId the token id
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    transfer(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _to: string, _tokenId: string): Promise<UserOperation | null>;
    /**
     * safe transfer token
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _to the to address
     * @param {string} _tokenId the token id
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    safeTransferFrom(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _from: string, _to: string, _tokenId: string): Promise<UserOperation | null>;
    /**
     * Enable or disable approval for a third party ("operator") to manage all of `msg.sender`'s assets
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _operator the operator address
     * @param {boolean} _approved the approved
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    setApprovalForAll(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _operator: string, _approved: boolean): Promise<UserOperation | null>;
}
/**
 * ERC1155
 * @class
 */
export declare class ERC1155 {
    private _token;
    /**
     * @constructor
     */
    constructor();
    private getContract;
    /**
     * safeTransferFrom
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _from the from address
     * @param {string} _to the to address
     * @param {string} _id the id
     * @param {string} _value the value
     * @param {string} _data the data
     * @returns {Promise<UserOperation | null>} the userOperation
     */
    safeTransferFrom(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _from: string, _to: string, _id: string, _value: string, _data: string): Promise<UserOperation | null>;
    /**
     * safeBatchTransferFrom
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _from the from address
     * @param {string} _to the to address
     * @param {string} _ids the ids
     * @param {string} _values the values
     * @param {string} _data the data
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    safeBatchTransferFrom(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _from: string, _to: string, _ids: string, _values: string, _data: string): Promise<UserOperation | null>;
    /**
     * Enable or disable approval for a third party ("operator") to manage all of `msg.sender`'s assets
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} _token the token address
     * @param {string} _operator the operator address
     * @param {boolean} _approved the approved
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    setApprovalForAll(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _operator: string, _approved: boolean): Promise<UserOperation | null>;
}
/**
 * ETH
 * @class
 */
export declare class ETH {
    private _token;
    /**
     * @constructor
     */
    constructor();
    /**
     * transfer
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {NumberLike} nonce the nonce
     * @param {string} entryPointAddress the entry point address
     * @param {string} paymasterAddress the paymaster address
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string} to the to address
     * @param {string} value the value
     * @returns {Promise<UserOperation | null>} the userOperation
     *
     */
    transfer(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike, entryPointAddress: string, paymasterAddress: string, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, to: string, value: string): Promise<UserOperation | null>;
}
