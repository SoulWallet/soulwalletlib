// import { AES_256_GCM, ABFA, ECDSA } from '@soulwallet/keyvault';
import { ethers } from "ethers";



export class CryptoTest {
    constructor() { }

    async run(): Promise<void> {
        // {
        //     const key = 'u0OCRxZ7zR5xh-JZXq3LmJxPpynpVi5z5GAGKceL9D4'
        //     const ecrypted = 'MDAxF8ZYP4CCCqFuLIoRYlBR6d8db1bIbvwMb77PPRVkMOtLw2LAmHm9cWD6cTvJPwQ0fdxdTQOR';
        //     const text = 'abcdef123456789abcdef123456789';
        //     const crypto = await AES_256_GCM.init(key);
        //     const data = await crypto.OK.decrypt(ecrypted);
        //     if (data.OK !== text) {
        //         throw new Error('decrypt failed');
        //     }
        // }
        // {
        //     const key = (await ABFA.scrypt("password")).OK;
        //     const text = 'abcdef123456789abcdef123456789';
        //     const crypto = await AES_256_GCM.init(key);
        //     const encrypted = await crypto.OK.encrypt(text);
        //     const data = await crypto.OK.decrypt(encrypted.OK);
        //     if (data.OK !== text) {
        //         throw new Error('decrypt failed');
        //     }
        // }
        // {
        //     const password = 'password';
        //     const _timeBefore = Date.now();
        //     const re = await ABFA.scrypt(password);
        //     const _timeAfter = Date.now();
        //     console.log(`Time to derive key: ${_timeAfter - _timeBefore}ms`);
        //     console.log(re.OK);
        // }

        // {
        //     const privateKey = '0x4f7ef884a2fff8bcbfbe2377dd055e95acfae573a85d0217eb887b40c0ffa4d8';
        //     const address = '0x3C4938668423E3BF1caAE4C04461A3B76a3706Df';
        //     const message = '0x426d3189d9ed64fbfab235f05d9a0e102d575939a951a93ec8bbdeef05cd707b';
        //     const _ECDSA = new ECDSA();
        //     await _ECDSA.init(privateKey);
        //     // personalSign
        //     {
        //         const expectSignature = '0x4855eabbd24c5b982da5b62139658ac58578651bc218be5b387b2673699928bc5dc4c7a1f6f710e1ccd4e102b1c99bc4683cb9bff0fdeee9b02e42a4764134251c';
        //         const _signature = await _ECDSA.personalSign(message);
        //         if (_signature !== expectSignature) {
        //             throw new Error('signature mismatch');
        //         }
        //     }

        //     {
        //         // raw sign
        //         const expectSignature = '0xd07f389db784752d088f212f40e4a059cfa219ada6f86570e20024e1104621d44902ecea94a27e1cb7924b7a08e17773ae2f0f15cd503a81cd1fd3c26492249c1b';
        //         const _signature = await _ECDSA.sign(message);
        //         if (_signature !== expectSignature) {
        //             throw new Error('signature mismatch');
        //         }
        //     }

        // }


    }

}

