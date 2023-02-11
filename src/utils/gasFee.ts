/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-12-28 20:46:15
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-11 12:46:59
 */
import { HttpRequest } from './httpRequest';
import { SuggestedGasFees, gasPrices } from '../entity/codefiGasFees';

export class CodefiGasFees {
    /* 
    https://gas-api.metaswap.codefi.network/networks/1/suggestedGasFees
    https://gas-api.metaswap.codefi.network/networks/1/gasPrices
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

