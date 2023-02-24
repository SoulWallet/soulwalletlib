/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-12-28 20:46:15
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 17:36:35
 */
import { HttpRequest } from './httpRequest';
import { SuggestedGasFees, gasPrices } from '../entity/codefiGasFees';

/**
 * gas fee
 * @class CodefiGasFees
 */
export class CodefiGasFees {

    /**
     * get gas fees
     * @static
     * @link https://gas-api.metaswap.codefi.network/networks/1/suggestedGasFees
     * @param {number} chainId the chain id
     * @returns {Promise<SuggestedGasFees | null>} the gas fees
     */
    static async getEIP1559GasFees(chainId: number): Promise<SuggestedGasFees | null> {
        try {
            const url = `https://gas-api.metaswap.codefi.network/networks/${chainId}/suggestedGasFees`;
            const response = await HttpRequest.get(url);
            if (response) {
                const gas = response as SuggestedGasFees;
                if (gas) {
                    return gas;
                }
            }
        } catch (error) {
            console.log(error);
        }

        return null;
    }

    /**
     * get legacy gas prices
     * @static
     * @link https://gas-api.metaswap.codefi.network/networks/1/gasPrices
     * @param {number} chainId the chain id
     * @returns {Promise<gasPrices | null>} the gas prices
     */
    static async getLegacyGasPrices(chainId: number): Promise<gasPrices | null> {
        try {
            const url = `https://gas-api.metaswap.codefi.network/networks/${chainId}/gasPrices`;
            const response = await HttpRequest.get(url);
            if (response) {
                const gas = response as gasPrices;
                if (gas) {
                    return gas;
                }
            }
        } catch (error) {
            console.log(error);
        }
        return null;
    }
}

