/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-21 15:37:48
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 17:13:21
 */

export interface walletInitParams {
    walletFactory: string;
    proxyCode: string;
    walletImpl: string;
    singletonFactory: string;
    supportChains?: number[];
}

export class walletParams {

    private _factoryMap = new Map<string, walletInitParams>();

    constructor() {
        this._factoryMap.set('1', {
            walletFactory: "",
            proxyCode: "0x",
            walletImpl: "0x",
            singletonFactory: "0x"
        });
    }
}