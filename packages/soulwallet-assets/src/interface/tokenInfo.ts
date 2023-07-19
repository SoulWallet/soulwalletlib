export enum AddressType {
    Unknown = 0,
    SoulWallet = 1,
    Erc20 = 2,
    Erc721 = 3,
    Erc1155 = 4,
}


export interface TokenInfo {
    chainId: number;
    type: AddressType;
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI?: string;
}

