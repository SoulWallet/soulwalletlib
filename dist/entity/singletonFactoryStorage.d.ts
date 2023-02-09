declare class SingletonFactoryStorage {
    private static instance;
    private _singletonFactoryAddress?;
    private constructor();
    static getInstance(): SingletonFactoryStorage;
    save(address: string): void;
    get address(): string;
}
