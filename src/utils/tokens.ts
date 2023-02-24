/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-09-21 21:45:49
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 21:46:25
 */
import { UserOperation } from "../entity/userOperation";
import { execFromEntryPoint, execBatchFromEntryPoint, ERC1155 as erc1155, ERC20 as erc20, ERC721 as erc721 } from "../defines/ABI";
import { BigNumber, ethers } from "ethers";
import { NumberLike } from "../defines/numberLike";
import { IApproveToken } from "../interface/IApproveToken";

/**
 * token interface
 * @class Token
 */
export class Token {

    async createOp(etherProvider: ethers.providers.BaseProvider, walletAddress: string, nonce: NumberLike,
        entryPointAddress: string, paymasterAndData: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, callContract: string, encodeABI: string, value: string = '0') {

        walletAddress = ethers.utils.getAddress(walletAddress);

        let userOperation: UserOperation = new UserOperation();
        userOperation.nonce = nonce;
        userOperation.sender = walletAddress;
        userOperation.paymasterAndData = paymasterAndData;
        userOperation.maxFeePerGas = maxFeePerGas;
        userOperation.maxPriorityFeePerGas = maxPriorityFeePerGas;

        userOperation.callData = new ethers.utils.Interface(execFromEntryPoint)
            .encodeFunctionData("execFromEntryPoint",
                [callContract, value, encodeABI]);
        let gasEstimated = await userOperation.estimateGas(entryPointAddress,
            etherProvider
        );
        if (!gasEstimated) {
            return null;
        }

        return userOperation;
    }
}

/**
 * erc20 token class
 * @class ERC20
 * 
 */
export class ERC20 {

    private _token;

    /**
     * @constructor
     * 
     */
    constructor() {
        this._token = new Token();
    }

    private getContract(etherProvider: ethers.providers.BaseProvider, contractAddress: string) {
        return new ethers.Contract(contractAddress, erc20, etherProvider);
    }

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
    async approve(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _spender: string, _value: string) {

        let encodeABI = new ethers.utils.Interface(erc20).encodeFunctionData("approve", [_spender, _value]);
        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
    }

    private readonly MAX_INT256 = '115792089237316195423570985008687907853269984665640564039457584007913129639935'; //uint256 MAX_INT = 2**256 - 1


    private async approveGasLimit(etherProvider: ethers.providers.BaseProvider, walletAddress: string, approveData: IApproveToken) {
        if (approveData.value === undefined) {
            approveData.value = this.MAX_INT256;
        }
        let callGasLimit = await etherProvider.estimateGas({
            from: walletAddress,
            to: approveData.token,
            data: new ethers.utils.Interface(erc20).encodeFunctionData("approve", [approveData.spender, approveData.value])
        });
        return callGasLimit;
    }


    /**
     * get approve call data (use activate wallet)
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} walletAddress same as userOperation.sender
     * @param {IApproveToken[]} approveData the approve data
     * @returns {Promise<{callData: string, callGasLimit: string}>} the call data
     */
    async getApproveCallData(etherProvider: ethers.providers.BaseProvider, walletAddress: string, approveData: IApproveToken[]) {

        const approveCallData = {
            callData: '0x',
            callGasLimit: '0x0'
        };
        if (approveData.length > 0) {
            // if (approveData.length === 1) {
            //     const encodeABI = new ethers.utils.Interface(erc20).encodeFunctionData("approve", [
            //         approveData[0].spender,
            //         approveData[0].value === undefined ? this.MAX_INT256 : approveData[0].value
            //     ]);
            //     approveCallData.callData = new ethers.utils.Interface(execFromEntryPoint).encodeFunctionData("execFromEntryPoint", [approveData[0].token, 0, encodeABI]);
            //     approveCallData.callGasLimit = (await this.approveGasLimit(etherProvider, walletAddress, approveData[0])).add(21000).toHexString();
            // } else 
            {
                // order by approveData.token asc 
                approveData.sort((a, b) => {
                    const aBig = BigNumber.from(a.token);
                    const bBig = BigNumber.from(b.token);
                    if (aBig.eq(bBig)) {
                        throw new Error("token address is same");
                    } else if (aBig.lt(bBig)) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
                const token = [];
                const value = [];
                const data = [];
                let callGasLimit: BigNumber = BigNumber.from(21000);
                for (let i = 0; i < approveData.length; i++) {
                    token.push(approveData[i].token);
                    value.push(0);
                    callGasLimit = callGasLimit.add(await this.approveGasLimit(etherProvider, walletAddress, approveData[i]));
                    const encodeABI = new ethers.utils.Interface(erc20).encodeFunctionData("approve", [
                        approveData[i].spender,
                        approveData[i].value === undefined ? this.MAX_INT256 : approveData[i].value
                    ]);
                    //console.log(`token:${approveData[i].token},spender:${approveData[i].spender},value:${approveData[i].value}`);
                   
                    data.push(encodeABI);
                }
                approveCallData.callGasLimit = callGasLimit.toHexString();
                approveCallData.callData = new ethers.utils.Interface(execBatchFromEntryPoint).encodeFunctionData("execFromEntryPoint",
                    [token, value, data]);

            }
        }
        return approveCallData;
    }

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
    async transferFrom(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _from: string, _to: string, _value: string) {

        let encodeABI = new ethers.utils.Interface(erc20).encodeFunctionData("transferFrom", [_from, _to, _value]);
        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
    }

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
    async transfer(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _to: string, _value: string) {

        let encodeABI = new ethers.utils.Interface(erc20).encodeFunctionData("transfer", [_to, _value]);
        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
    }
}

/**
 * ERC721
 * @class
 */
export class ERC721 {
    private _token;

    /**
     * @constructor
     */
    constructor() {
        this._token = new Token();
    }

    private getContract(etherProvider: ethers.providers.BaseProvider, contractAddress: string) {
        return new ethers.Contract(contractAddress, erc721, etherProvider);
    }

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
    async approve(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _spender: string, _tokenId: string) {

        let encodeABI = new ethers.utils.Interface(erc721).encodeFunctionData("approve", [_spender, _tokenId]);
        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
    }

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
    async transferFrom(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _from: string, _to: string, _tokenId: string) {

        let encodeABI = new ethers.utils.Interface(erc721).encodeFunctionData("transferFrom", [_from, _to, _tokenId]);
        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
    }

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
    async transfer(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _to: string, _tokenId: string) {

        let encodeABI = new ethers.utils.Interface(erc721).encodeFunctionData("transfer", [_to, _tokenId]);
        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
    }

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
    async safeTransferFrom(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _from: string, _to: string, _tokenId: string) {

        let encodeABI = new ethers.utils.Interface(erc721).encodeFunctionData("safeTransferFrom", [_from, _to, _tokenId]);
        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
    }

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
    async setApprovalForAll(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _operator: string, _approved: boolean) {

        let encodeABI = new ethers.utils.Interface(erc721).encodeFunctionData("setApprovalForAll", [_operator, _approved]);
        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
    }


}


/**
 * ERC1155
 * @class
 */
export class ERC1155 {
    private _token;

    /**
     * @constructor
     */
    constructor() {
        this._token = new Token();
    }

    private getContract(etherProvider: ethers.providers.BaseProvider, contractAddress: string) {
        return new ethers.Contract(contractAddress, erc1155, etherProvider);
    }

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
    async safeTransferFrom(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _from: string, _to: string, _id: string, _value: string, _data: string) {

        let encodeABI = new ethers.utils.Interface(erc1155).encodeFunctionData("safeTransferFrom", [_from, _to, _id, _value, _data]);
        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
    }

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
    async safeBatchTransferFrom(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _from: string, _to: string, _ids: string, _values: string, _data: string) {

        let encodeABI = new ethers.utils.Interface(erc1155).encodeFunctionData("safeBatchTransferFrom", [_from, _to, _ids, _values, _data]);
        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
    }

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
    async setApprovalForAll(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, _token: string, _operator: string, _approved: boolean) {

        let encodeABI = new ethers.utils.Interface(erc1155).encodeFunctionData("setApprovalForAll", [_operator, _approved]);
        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, _token, encodeABI);
    }


}

/**
 * ETH
 * @class
 */
export class ETH {
    private _token;

    /**
     * @constructor
     */
    constructor() {
        this._token = new Token();
    }

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
    async transfer(etherProvider: ethers.providers.BaseProvider, walletAddress: string,
        nonce: NumberLike, entryPointAddress: string, paymasterAddress: string,
        maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, to: string, value: string) {

        return await this._token.createOp(etherProvider, walletAddress, nonce, entryPointAddress, paymasterAddress, maxFeePerGas, maxPriorityFeePerGas, to, '0x', value);
    }
}