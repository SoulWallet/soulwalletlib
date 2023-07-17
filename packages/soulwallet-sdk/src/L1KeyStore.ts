import { IL1KeyStore } from "./interface/IL1KeyStore.js";
import { TypeGuard } from "./tools/typeGuard.js";
import { ethers } from "ethers";
import { ABI_KeyStore } from "@soulwallet/abi";
import { Hex } from "./tools/hex.js";


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

        TypeGuard.onlyAddress(_L1KeyStoreContractAddress);

        if (typeof _L1Provider === 'string') {
            TypeGuard.httpOrHttps(_L1Provider);
            this.L1Provider = new ethers.JsonRpcProvider(_L1Provider);
        } else {
            this.L1Provider = _L1Provider;
        }

        this.L1KeyStoreContractAddress = _L1KeyStoreContractAddress;

        this.L1KeyStoreContract = new ethers.Contract(this.L1KeyStoreContractAddress, ABI_KeyStore, this.L1Provider);
    }

    private static guardianSafePeriodGuard(guardianSafePeriod: number) {
        if (guardianSafePeriod < (this.days * 2)) {
            throw new Error("initialGuardianSafePeriod is too small");
        }
        if (guardianSafePeriod > (this.days * 30)) {
            throw new Error("initialGuardianSafePeriod is too large");
        }
    }


    static getSlot(initialKey: string, initialGuardianHash: string, initialGuardianSafePeriod: number = 2 * this.days): string {
        TypeGuard.onlyAddress(initialKey);
        TypeGuard.onlyBytes32(initialGuardianHash);
        this.guardianSafePeriodGuard(initialGuardianSafePeriod);

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
            TypeGuard.onlyAddress(a);
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
        TypeGuard.onlyBytes32(salt);

        const abiEncoded = new ethers.AbiCoder().encode(["address[]", "uint256", "uint256"], [guardians, threshold, salt]);
        const keccak256 = ethers.keccak256(abiEncoded);
        return keccak256;
    }

    async getKey(slot: string): Promise<string> {
        TypeGuard.onlyBytes32(slot);
        // function getKey(bytes32 slot) external view returns (bytes32 key);
        const data = await this.L1KeyStoreContract.getKey(slot);
        // bytes32 to address
        return ethers.getAddress('0x' + data.slice(26));
    }

}