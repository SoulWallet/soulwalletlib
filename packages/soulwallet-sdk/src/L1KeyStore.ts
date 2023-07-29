import { IL1KeyStore, KeyStoreInfo } from "./interface/IL1KeyStore.js";
import { TypeGuard } from "./tools/typeGuard.js";
import { ethers } from "ethers";
import { ABI_KeyStore } from "@soulwallet/abi";
import { Hex } from "./tools/hex.js";
import { Ok, Err, Result } from '@soulwallet/result';
import { Convert } from './tools/convert.js';

/**
 * L1KeyStore
 *
 * @export
 * @class L1KeyStore
 * @extends {IL1KeyStore}
 */
export class L1KeyStore extends IL1KeyStore {

    static readonly days = 86400;

    readonly L1KeyStoreContractAddress: string;
    readonly L1Provider: ethers.JsonRpcProvider;
    readonly L1KeyStoreContract: ethers.Contract;


    /**
     * Creates an instance of IL1KeyStore.
     * @param {string} L1RPC
     * @param {string} L1KeyStoreContractAddress
     * @memberof IL1KeyStore
     */
    constructor(_L1Provider: string | ethers.JsonRpcProvider, _L1KeyStoreContractAddress: string) {
        super();

        const ret = TypeGuard.onlyAddress(_L1KeyStoreContractAddress);
        if (ret.isErr()) {
            throw new Error(ret.ERR);
        }

        if (typeof _L1Provider === 'string') {
            const ret = TypeGuard.httpOrHttps(_L1Provider);
            if (ret.isErr()) {
                throw new Error(ret.ERR);
            }
            this.L1Provider = new ethers.JsonRpcProvider(_L1Provider);
        } else {
            this.L1Provider = _L1Provider;
        }

        this.L1KeyStoreContractAddress = _L1KeyStoreContractAddress;

        this.L1KeyStoreContract = new ethers.Contract(this.L1KeyStoreContractAddress, ABI_KeyStore, this.L1Provider);
    }

    private static guardianSafePeriodGuard(guardianSafePeriod: number): Result<true, string> {
        if (guardianSafePeriod < (this.days * 2)) {
            return new Err("initialGuardianSafePeriod is too small");
        }
        if (guardianSafePeriod > (this.days * 30)) {
            return new Err("initialGuardianSafePeriod is too large");
        }
        return new Ok(true);
    }


    static getSlot(initialKey: string, initialGuardianHash: string, initialGuardianSafePeriod: number = 2 * this.days): string {
        let ret = TypeGuard.onlyAddress(initialKey);
        if (ret.isErr()) {
            throw new Error(ret.ERR);
        }
        ret = TypeGuard.onlyBytes32(initialGuardianHash);
        if (ret.isErr()) {
            throw new Error(ret.ERR);
        }
        ret = this.guardianSafePeriodGuard(initialGuardianSafePeriod);
        if (ret.isErr()) {
            throw new Error(ret.ERR);
        }

        // bytes32 initialKey, bytes32 initialGuardianHash, uint64 guardianSafePeriod
        // keccak256(abi.encode(initialKey, initialGuardianHash, guardianSafePeriod));  
        const _initialKey = Hex.paddingZero(initialKey, 32)
        const abiEncoded = new ethers.AbiCoder().encode(["bytes32", "bytes32", "uint64"], [_initialKey, initialGuardianHash, initialGuardianSafePeriod]);
        const keccak256 = ethers.keccak256(abiEncoded);
        return keccak256;
    }

    /**
     *
     *
     * @abstract
     * @param {string[]} guardians EOA/Smart contract address array (auto sort)
     * @param {number} threshold
     * @param {string} salt hex string (bytes32),default is 0
     * @return {*}  {string} keccak256 hash of the guardian set
     * @memberof IL1KeyStore
     */
    static calcGuardianHash(guardians: string[], threshold: number, salt: string = ethers.ZeroHash): string {
        /* 
        (address[] memory guardians, uint256 threshold, uint256 salt) =
            abi.decode(rawGuardian, (address[], uint256, uint256));
        */



        guardians.sort((a, b) => {
            {
                const ret = TypeGuard.onlyAddress(a);
                if (ret.isErr()) {
                    throw new Error(ret.ERR);
                }
            }

            const aBig = BigInt(a);
            const bBig = BigInt(b);
            if (aBig === bBig) {
                throw new Error(`guardian address is same: ${a}`);
            } else if (aBig < bBig) {
                return -1;
            } else {
                return 1;
            }
        });
        let ret = TypeGuard.onlyBytes32(salt);
        if (ret.isErr()) {
            throw new Error(ret.ERR);
        }

        const abiEncoded = new ethers.AbiCoder().encode(["address[]", "uint256", "uint256"], [guardians, threshold, salt]);
        const keccak256 = ethers.keccak256(abiEncoded);
        return keccak256;
    }

    async getKey(slot: string): Promise<Result<string, Error>> {
        const ret = TypeGuard.onlyBytes32(slot);
        if (ret.isErr()) {
            return new Err(
                new Error(ret.ERR)
            );
        }
        try {
            // function getKey(bytes32 slot) external view returns (bytes32 key);
            const data = await this.L1KeyStoreContract.getKey(slot);
            // bytes32 to address
            return new Ok(ethers.getAddress('0x' + data.slice(26)));
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(
                    new Error('unknown error')
                );
            }
        }
    }

    /**
     * get slot info
     *
     * @param {string} slot
     * @return {*}  {(Promise<Result<KeyStoreInfo, Error>>)} 
     * @memberof L1KeyStore
     */
    async getKeyStoreInfo(slot: string): Promise<Result<KeyStoreInfo, Error>> {
        const ret = TypeGuard.onlyBytes32(slot);
        if (ret.isErr()) {
            return new Err(
                new Error(ret.ERR)
            );
        }
        try {
            // function getKeyStoreInfo(bytes32 slot) external pure override returns (keyStoreInfo memory _keyStoreInfo)
            const data = await this.L1KeyStoreContract.getKeyStoreInfo(slot);
            /*
                data[0]     bytes32 key; 
                data[1]     uint256 nonce; 
                data[2]     bytes32 guardianHash; 
                data[3]     bytes32 pendingGuardianHash; 
                data[4]     uint64 guardianActivateAt; 
                data[5]     uint64 guardianSafePeriod; 
                data[6]     uint64 pendingGuardianSafePeriod; 
                data[7]     uint64 guardianSafePeriodActivateAt;
            */
            // bytes32 to address
            const key = ethers.getAddress('0x' + data[0].slice(26));
            const _keyStoreInfo: KeyStoreInfo = {
                key: key,
                nonce: Convert.bigIntToNumber(data[1]),
                guardianHash: data[2],
                pendingGuardianHash: data[3],
                guardianActivateAt: Convert.bigIntToNumber(data[4]),
                guardianSafePeriod: Convert.bigIntToNumber(data[5]),
                pendingGuardianSafePeriod: Convert.bigIntToNumber(data[6]),
                guardianSafePeriodActivateAt: Convert.bigIntToNumber(data[7])
            }
            return new Ok(_keyStoreInfo);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(
                    new Error('unknown error')
                );
            }
        }
    }

}