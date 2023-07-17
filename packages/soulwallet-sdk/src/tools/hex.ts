export class Hex {
    public static paddingZero(value: string | number | bigint, bytesLen: number): string {
        if (typeof value === 'string') {
            if (value.startsWith('0x')) {
                value = value.slice(2);
            }
            const len = bytesLen * 2;
            if (value.length > len) {
                throw new Error(`value ${value} length is greater than ${len}`);
            }
            return '0x' + '0'.repeat(len - value.length) + value.toLowerCase();
        }
        else if (typeof value === 'number' || typeof value === 'bigint') {
            return this.paddingZero(value.toString(16), bytesLen);
        } else {
            throw new Error(`value ${value} is not string | number | bigint`);
        }
    }
}