import { BN } from "bn.js"

export class TypeGuard {

    static onlyAddress(address: string) {
        const regex = /^0x[a-fA-F0-9]{40}$/;
        if (!regex.test(address)) {
            throw new Error("address is invalid");
        }
    }

    static onlyBytes32(bytes32: string) {
        const regex = /^0x[a-fA-F0-9]{64}$/;
        if (!regex.test(bytes32)) {
            throw new Error("bytes32 is invalid");
        }
    }

    static maxToUint64(num: string) {
        const bn = new BN(num);
        /* 
        type(uint64).max = 0xffffffffffffffff
        */
        if (bn.gt(new BN("0xffffffffffffffff"))) {
            throw new Error("num is too large");
        }
        return bn;
    }

    static maxToUint256(num: string) {
        const bn = new BN(num);
        /* 
        type(uint256).max = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        */
        if (bn.gt(new BN("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"))) {
            throw new Error("num is too large");
        }
        return bn;
    }

    static httpOrHttps(url: string) {
        const regex = /^https?:\/\/.+/;
        if (!regex.test(url)) {
            throw new Error("url is invalid");
        }
    }

    static onlyBytes(bytes: string) {
        // start with 0x, and at least 2 hex chars, and length is even number
        if (bytes === "0x") {
            return;
        }
        const regex = /^0x[a-fA-F0-9]{2,}$/;
        if (!regex.test(bytes)) {
            throw new Error("bytes is invalid");
        }
        if (bytes.length % 2 !== 0) {
            throw new Error("bytes is invalid");
        }


    }


}