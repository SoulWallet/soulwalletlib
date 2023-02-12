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
