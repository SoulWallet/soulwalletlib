/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-09 18:27:55
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-09 18:30:57
 */
class SingletonFactoryStorage {
    private static instance: SingletonFactoryStorage;
    private _singletonFactoryAddress?: string;
    private constructor() {
    }

    public static getInstance() {
        if (!SingletonFactoryStorage.instance) {
            SingletonFactoryStorage.instance = new SingletonFactoryStorage();
        }

        return SingletonFactoryStorage.instance;
    }

    public save(address: string) {
        this._singletonFactoryAddress = address;
    }

    public get address(): string {
        if (this._singletonFactoryAddress) {
            return this._singletonFactoryAddress;
        }
        throw new Error('singletonFactoryAddress is not set');
    }

}