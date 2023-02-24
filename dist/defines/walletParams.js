"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-21 15:37:48
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 17:13:21
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletParams = void 0;
class walletParams {
    constructor() {
        this._factoryMap = new Map();
        this._factoryMap.set('1', {
            walletFactory: "",
            proxyCode: "0x",
            walletImpl: "0x",
            singletonFactory: "0x"
        });
    }
}
exports.walletParams = walletParams;
//# sourceMappingURL=walletParams.js.map