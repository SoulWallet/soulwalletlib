import { Result } from "ethers";
import { TokenInfo } from "@soulwallet/assets";

export interface Method {
    bytes4: string;
    name?: string;
    text?: string;
    params: Result;
}

export interface DecodeResult {
    from: string;
    fromInfo?: TokenInfo;
    to: string;
    toInfo?: TokenInfo;
    value: bigint;
    method?: Method;
}