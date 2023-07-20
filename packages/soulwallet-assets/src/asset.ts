import { TokenInfo } from './interface/tokenInfo.js';
import tokenList from './tokens.js';
import { Ok, Err, Result } from '../../soulwallet-result/lib/main.js';

async function getAsset(chainId: number, address: string): Promise<Result<TokenInfo, string>> {
    const key = address.toLowerCase() + '|' + chainId;
    const token = tokenList.get(key);
    if (token) {
        return new Ok(token);
    }
    return new Err('Token not found');
}

export {
    getAsset
}
