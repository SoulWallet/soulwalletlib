export enum AddressType {
    Unknown = 0,
    SoulWallet = 1,
    Erc20 = 2,
    Erc721 = 3,
    Erc1155 = 4,
}

export interface MinTokenInfo {
    t: AddressType;
    n: string;
    s: string;
    d: number;
    l?: string;
}

export interface TokenInfo {
    chainId: number;
    address: string;
    type: AddressType;
    name: string;
    symbol: string;
    decimals: number;
    logoURI?: string;
}

