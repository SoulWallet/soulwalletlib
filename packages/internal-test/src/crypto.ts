import { Crypto } from '@soulwallet/keyvault';



export class CryptoTest {
    constructor() { }

    async run(): Promise<void> {
        const key = 'u0OCRxZ7zR5xh-JZXq3LmJxPpynpVi5z5GAGKceL9D4'
        const ecrypted = 'MDAxF8ZYP4CCCqFuLIoRYlBR6d8db1bIbvwMb77PPRVkMOtLw2LAmHm9cWD6cTvJPwQ0fdxdTQOR';
        const text = 'abcdef123456789abcdef123456789';
        const crypto = await Crypto.init(key);
        const data = await crypto.OK.decrypt(ecrypted);
        if (data.OK !== text) {
            throw new Error('decrypt failed');
        }
    }

}

