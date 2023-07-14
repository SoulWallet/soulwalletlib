export class Hex {
    public static paddingZero(value: string | number, bytesLen: number): string {
        if (typeof value === 'string') {
            if (value.startsWith('0x')) {
                value = value.slice(2);
            }
            const len = bytesLen * 2;
            if (value.length > len) {
                throw new Error(`value ${value} length is greater than ${len}`);
            }
            return '0x' + '0'.repeat(len - value.length) + value;
        } else {
            return this.paddingZero(value.toString(16), bytesLen);
        }
    }
}