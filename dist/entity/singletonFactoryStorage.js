"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-09 18:27:55
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-09 18:30:57
 */
class SingletonFactoryStorage {
    constructor() {
    }
    static getInstance() {
        if (!SingletonFactoryStorage.instance) {
            SingletonFactoryStorage.instance = new SingletonFactoryStorage();
        }
        return SingletonFactoryStorage.instance;
    }
    save(address) {
        this._singletonFactoryAddress = address;
    }
    get address() {
        if (this._singletonFactoryAddress) {
            return this._singletonFactoryAddress;
        }
        throw new Error('singletonFactoryAddress is not set');
    }
}
//# sourceMappingURL=singletonFactoryStorage.js.map