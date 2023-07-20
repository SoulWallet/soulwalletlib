import { TokenInfo } from './interface/tokenInfo.js';
import tokenList from './tokens.js';
import { Ok, Err, Result } from '../../soulwallet-result/lib/main.js';
import { UriCompression } from './uriCompression.js';

async function getAsset(chainId: number, address: string): Promise<Result<TokenInfo, string>> {
    const key = address.toLowerCase() + '|' + chainId;
    const token = tokenList.get(key);
    if (token) {
        return new Ok(
            {
                chainId: chainId,
                address: address,
                type: token.t,
                name: token.n,
                symbol: token.s,
                decimals: token.d,
                logoURI: UriCompression.decompressUri(token.l)
            });
    }
    return new Err('Token not found');
}

export {
    getAsset
}
