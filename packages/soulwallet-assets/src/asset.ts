import { TokenInfo } from './interface/tokenInfo.js';
import tokenList from './tokens.js';
import { ResultWithErrors } from "internal-interface";

async function getAsset(chainId: number, address: string): Promise<ResultWithErrors<TokenInfo, string>> {
    const key = address.toLowerCase() + '|' + chainId;
    const token = tokenList.get(key);
    if (token) {
        return new ResultWithErrors<TokenInfo, string>(true, token);
    }
    return new ResultWithErrors<TokenInfo, string>(false, undefined, 'Token not found');
}

export {
    getAsset
}
