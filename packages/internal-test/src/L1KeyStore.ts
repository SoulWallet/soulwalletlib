import { ethers } from "ethers";
import { L1KeyStore } from "@soulwallet/sdk";

export class L1KeyStoreTest {
    readonly rpc: string;
    readonly keyStoreAddress: string;

    constructor(
        _rpc: string,
        _keyStoreAddress: string
    ) {
        this.rpc = _rpc;
        this.keyStoreAddress = _keyStoreAddress;
    }

    async run(): Promise<void> {
        {
            const _keyStoreAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';
            const _slot = '0xc83ce2ae5f0849408e8430aab8302ba83b8993ccec901ca1a9f5136a3892afbc';
            const _nonce = 2;
            const _data = '0xf4bc49ca280d06067cb80250fb6d68e297fbf1bcabe8c633d2e27070278e9e75';

            const _expectedValue = '0xa5eb3cebaea0e65f20767bc73febb028c24e68181a215203d805515db724d14c';

            const _value = L1KeyStore.getSigHash(_keyStoreAddress, _slot, _nonce, _data)

            if (_value !== _expectedValue) {
                throw new Error(`Expected ${_expectedValue} but got ${_value}`);
            }
        }

        const _L1KeyStore = new L1KeyStore(this.rpc, this.keyStoreAddress);
        {
            const _slot = '0xc83ce2ae5f0849408e8430aab8302ba83b8993ccec901ca1a9f5136a3892afbc';
            const _newKey = L1KeyStore.addressToBytes32('0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');
            const _value = await _L1KeyStore.getSetKeySigHash(_slot, _newKey);
            if (_value.isErr()) {
                throw new Error(`Expected Ok but got Err: ${_value.ERR.message}`);
            }
        }
        {
            const _slot = '0xc83ce2ae5f0849408e8430aab8302ba83b8993ccec901ca1a9f5136a3892afbc';
            const _newGuardianHash = '0xf4bc49ca280d06067cb80250fb6d68e297fbf1bcabe8c633d2e27070278e9e75';
            const _value = await _L1KeyStore.getSetGuardianSigHash(_slot, _newGuardianHash);
            if (_value.isErr()) {
                throw new Error(`Expected Ok but got Err: ${_value.ERR.message}`);
            }
        }







    }
}