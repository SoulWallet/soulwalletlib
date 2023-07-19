import { ResultWithErrors } from "internal-interface";

export class TypeGuard {

    static onlyAddress(address: string): ResultWithErrors<true, string> {
        const regex = /^0x[a-fA-F0-9]{40}$/;
        if (!regex.test(address)) {
            return new ResultWithErrors<true, string>(false, undefined, "address is invalid");
        }
        return new ResultWithErrors<true, string>(true, true);
    }

    static onlyBytes32(bytes32: string): ResultWithErrors<true, string> {
        const regex = /^0x[a-fA-F0-9]{64}$/;
        if (!regex.test(bytes32)) {
            return new ResultWithErrors<true, string>(false, undefined, "bytes32 is invalid");
        }
        return new ResultWithErrors<true, string>(true, true);
    }

    static maxToUint64(num: string): ResultWithErrors<bigint, string> {
        const bn = BigInt(num);
        /* 
        type(uint64).max = 0xffffffffffffffff
        */
        if (bn > (BigInt("0xffffffffffffffff"))) {
            // throw new Error("num is too large");
            return new ResultWithErrors<bigint, string>(false, undefined, "num is too large");
        }
        return new ResultWithErrors<bigint, string>(true, bn);
    }

    static maxToUint192(num: string): ResultWithErrors<bigint, string> {
        const bn = BigInt(num);
        /* 
        type(uint192).max =  0xffffffffffffffffffffffffffffffffffffffffffffffff
        */
        if (bn > (BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffff"))) {
            // throw new Error("num is too large");
            return new ResultWithErrors<bigint, string>(false, undefined, "num is too large");
        }
        return new ResultWithErrors<bigint, string>(true, bn);
    }

    static maxToUint256(num: string): ResultWithErrors<bigint, string> {
        const bn = BigInt(num);
        /* 
        type(uint256).max = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        */
        if (bn > (BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"))) {
            return new ResultWithErrors<bigint, string>(false, undefined, "num is too large");
        }
        return new ResultWithErrors<bigint, string>(true, bn);
    }

    static httpOrHttps(url: string): ResultWithErrors<true, string> {
        const regex = /^https?:\/\/.+/;
        if (!regex.test(url)) {
            return new ResultWithErrors<true, string>(false, undefined, "url is invalid");
        }
        return new ResultWithErrors<true, string>(true, true);
    }

    static onlyBytes(bytes: string): ResultWithErrors<true, string> {
        // start with 0x, and at least 2 hex chars, and length is even number
        if (bytes === "0x") {
            return new ResultWithErrors<true, string>(true, true);
        }

        const regex = /^0x([0-9a-f][0-9a-f])*$/i;
        if (!regex.test(bytes)) {
            return new ResultWithErrors<true, string>(false, undefined, "bytes is invalid");
        }
        return new ResultWithErrors<true, string>(true, true);

    }


}