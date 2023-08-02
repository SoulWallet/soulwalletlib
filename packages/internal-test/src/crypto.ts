import { AES_256_GCM, ABFA, ECDSA } from '@soulwallet/keyvault';
import { ethers } from "ethers";



export class CryptoTest {
    constructor() { }

    async run(): Promise<void> {
        {
            const key = 'u0OCRxZ7zR5xh-JZXq3LmJxPpynpVi5z5GAGKceL9D4'
            const ecrypted = 'MDAxF8ZYP4CCCqFuLIoRYlBR6d8db1bIbvwMb77PPRVkMOtLw2LAmHm9cWD6cTvJPwQ0fdxdTQOR';
            const text = 'abcdef123456789abcdef123456789';
            const crypto = await AES_256_GCM.init(key);
            const data = await crypto.OK.decrypt(ecrypted);
            if (data.OK !== text) {
                throw new Error('decrypt failed');
            }
        }
        {
            const password = 'password';
            const _timeBefore = Date.now();
            const re = await ABFA.scrypt(password);
            const _timeAfter = Date.now();
            console.log(`Time to derive key: ${_timeAfter - _timeBefore}ms`);
            console.log(re.OK);
        }
        {
            // personalSign

            const wallet = ethers.Wallet.createRandom();
            const message = 'hello world';
            const signature = await wallet.signMessage(message);
            const recoveredAddress = ethers.verifyMessage(message, signature);
            if (recoveredAddress !== wallet.address) {
                throw new Error('address mismatch');
            }

            const _ECDSA = new ECDSA(wallet.privateKey);
            const _signature = await _ECDSA.personalSign(message);
            const _recoveredAddress = ethers.verifyMessage(message, _signature);
            if (_recoveredAddress !== _ECDSA.address) {
                throw new Error('address mismatch');
            }

        }

        {
            // raw Sign
            const wallet = ethers.Wallet.createRandom();
            const message = 'hello world';
            const signature = await wallet.signMessage(message);

        }
    }

}

