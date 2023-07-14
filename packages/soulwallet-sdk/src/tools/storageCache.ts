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

    private storage: Record<string, any> = {};

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
        this.storage[key] = value;
    }

    /**
     *
     *
     * @template T
     * @param {string} key
     * @param {T} defaultValue
     * @return {*}  {T}
     * @memberof StorageCache
     */
    public get<T>(key: string, defaultValue: T): T {
        if (key in this.storage) {
            return this.storage[key];
        }
        return defaultValue;
    }
} 