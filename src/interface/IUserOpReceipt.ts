/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-12 21:55:05
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-12 22:00:06
 */



export interface ITransactionReceipt {
    to: string;
    from: string;
    contractAddress?: any;
    transactionIndex: string;
    gasUsed: string;
    logsBloom: string;
    blockHash: string;
    transactionHash: string;
    logs: ITransactionReceiptLog[];
    blockNumber: string;
    confirmations: string;
    cumulativeGasUsed: string;
    effectiveGasPrice: string;
    status: string;
    type: string;
    byzantium: boolean;
}
export interface ITransactionReceiptLog {
    transactionIndex: string;
    blockNumber: string;
    transactionHash: string;
    address: string;
    topics: string[];
    data: string;
    logIndex: string;
    blockHash: string;
}
export interface IUserOpReceipt {
    userOpHash: string;
    sender: string;
    nonce: string;
    actualGasCost: string;
    actualGasUsed: string;
    success: boolean;
    logs: ITransactionReceiptLog[];
    receipt: ITransactionReceipt;
}