/**
 * gas fee interface
 * @interface fee
 * @property {string} suggestedMaxPriorityFeePerGas the suggested max priority fee per gas
 * @property {string} suggestedMaxFeePerGas the suggested max fee per gas
 * @property {number} minWaitTimeEstimate the min wait time estimate
 * @property {number} maxWaitTimeEstimate the max wait time estimate
 */
export interface fee {
    suggestedMaxPriorityFeePerGas: string;
    suggestedMaxFeePerGas: string;
    minWaitTimeEstimate: number;
    maxWaitTimeEstimate: number;
}
/**
 * suggested gas fees interface
 * @interface SuggestedGasFees
 * @property {fee} low the low fee
 * @property {fee} medium the medium fee
 * @property {fee} high the high fee
 */
export interface SuggestedGasFees {
    low: fee;
    medium: fee;
    high: fee;
    estimatedBaseFee: string;
    networkCongestion: number;
    latestPriorityFeeRange: string[];
    historicalPriorityFeeRange: string[];
    historicalBaseFeeRange: string[];
    priorityFeeTrend: string;
    baseFeeTrend: string;
}
/**
 * gas prices interface
 * @interface gasPrices
 * @property {string} SafeGasPrice the safe gas price
 * @property {string} ProposeGasPrice the propose gas price
 * @property {string} FastGasPrice the fast gas price
 */
export interface gasPrices {
    SafeGasPrice: string;
    ProposeGasPrice: string;
    FastGasPrice: string;
}
