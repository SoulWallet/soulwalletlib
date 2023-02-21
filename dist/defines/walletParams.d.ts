export interface walletInitParams {
    walletFactory: string;
    proxyCode: string;
    walletImpl: string;
    singletonFactory: string;
    supportChains?: number[];
}
export declare class walletParams {
    private _factoryMap;
    constructor();
}
