/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-12-19 09:43:11
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-10 16:07:07
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
    return BigNumber.from(value).toHexString();
}

export function toNumber(value: NumberLike): number {
    return BigNumber.from(value).toNumber();
}