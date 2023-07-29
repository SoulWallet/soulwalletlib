export class Convert {
    public static bigIntToNumber(value: bigint): number {
        if (value > Number.MAX_SAFE_INTEGER) {
            throw new Error(`value ${value} is greater than Number.MAX_SAFE_INTEGER`);
        }
        return Number(value);
    }
}