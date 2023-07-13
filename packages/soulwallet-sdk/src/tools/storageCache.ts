/**
 * 
 *
 * @export
 * @class storageCache
 */
export class StorageCache {
    private static instance: StorageCache;

    public static getInstance(): StorageCache {
        if (!StorageCache.instance)
            StorageCache.instance = new StorageCache();
        return StorageCache.instance;
    }

    private static storage: Record<string, any>;

    private constructor() {
    }

    /**
     *
     *
     * @template T
     * @param {string} key
     * @param {T} value
     * @memberof storageCache
     */
    public set<T>(key: string, value: T) {
        StorageCache.storage[key] = value;
    }

    /**
     *
     *
     * @template T
     * @param {string} key
     * @return {*}  {T}
     * @memberof storageCache
     */
    public get<T>(key: string): T {
        return StorageCache.storage[key];
    }
} 