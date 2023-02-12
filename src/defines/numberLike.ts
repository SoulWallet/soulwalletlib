/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-12-19 09:43:11
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-12 23:00:03
 */

import { BigNumber } from "@ethersproject/bignumber";

export type NumberLike = number | string;//| BigNumber;


export function isNumberLike(value: any): boolean {
    return typeof value === "number" || typeof value === "string";
}

export function toDecString(value: NumberLike): string {
    return BigNumber.from(value).toString();
}

export function toHexString(value: NumberLike): string {
    if (typeof value === "number" || (typeof value === "string" && !value.startsWith('0x'))) {
        return BigNumber.from(value).toHexString();
    }
    return value;
}

export function toNumber(value: NumberLike): number {
    return BigNumber.from(value).toNumber();
}