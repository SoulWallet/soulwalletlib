import { SuggestedGasFees, gasPrices } from '../entity/codefiGasFees';
/**
 * gas fee
 * @class CodefiGasFees
 */
export declare class CodefiGasFees {
    /**
     * get gas fees
     * @static
     * @link https://gas-api.metaswap.codefi.network/networks/1/suggestedGasFees
     * @param {number} chainId the chain id
     * @returns {Promise<SuggestedGasFees | null>} the gas fees
     */
    static getEIP1559GasFees(chainId: number): Promise<SuggestedGasFees | null>;
    /**
     * get legacy gas prices
     * @static
     * @link https://gas-api.metaswap.codefi.network/networks/1/gasPrices
     * @param {number} chainId the chain id
     * @returns {Promise<gasPrices | null>} the gas prices
     */
    static getLegacyGasPrices(chainId: number): Promise<gasPrices | null>;
}
