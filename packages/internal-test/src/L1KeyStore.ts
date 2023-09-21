import { TypedDataDomain, TypedDataField, ethers } from "ethers";
import { GuardianSignature, KeyStoreTypedDataType, L1KeyStore } from "@soulwallet_test/sdk";
import { ABI_KeyStore } from "@soulwallet_test/abi";

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
            if (_value.isErr() === true) {
                throw new Error(`Expected Ok but got Err: ${_value.ERR.message}`);
            }
        }
        {
            const _slot = '0xc83ce2ae5f0849408e8430aab8302ba83b8993ccec901ca1a9f5136a3892afbc';
            const _newGuardianHash = '0xf4bc49ca280d06067cb80250fb6d68e297fbf1bcabe8c633d2e27070278e9e75';
            const _value = await _L1KeyStore.getSetGuardianSigHash(_slot, _newGuardianHash);
            if (_value.isErr() === true) {
                throw new Error(`Expected Ok but got Err: ${_value.ERR.message}`);
            }
        }

        {
            // social recovery test
            const guardianCount = 15;
            const threshold = 8;

            const guardians: string[] = [];
            const guardiansAccount: ethers.HDNodeWallet[] = [];
            for (let index = 0; index < guardianCount; index++) {
                const account = ethers.Wallet.createRandom();
                guardians.push(account.address);
                guardiansAccount.push(account);
            }
            const initialKey: string = '0x0000000000000000000000000000000000000000000000000000000000000001';
            const initialGuardianHash: string = L1KeyStore.calcGuardianHash(guardians, threshold);
            const slot = L1KeyStore.getSlot(initialKey, initialGuardianHash);

            /* 
            function setKey(
                bytes32 initialKey,
                bytes32 initialGuardianHash,
                uint64 initialGuardianSafePeriod,
                bytes32 newKey,
                bytes calldata rawGuardian,
                bytes calldata guardianSignature
            ) external;
            */
            const provider = new ethers.JsonRpcProvider(this.rpc);
            const keyStoreContract = new ethers.Contract(this.keyStoreAddress, ABI_KeyStore, provider);
            const newSigner = "0x000000000000000000000000f8e81D47203A594245E36C48e151709F0C19fBe8";
            const keyInfo = await _L1KeyStore.getKeyStoreInfo(slot);

            const ret = await _L1KeyStore.getTypedData(KeyStoreTypedDataType.TYPE_HASH_SOCIAL_RECOVERY,
                slot,
                newSigner
            );
            if (ret.isErr() === true) {
                throw new Error(`Expected Ok but got Err: ${ret.ERR.message}`);
            }
            let domain: TypedDataDomain = ret.OK.domain;
            let types: Record<string, Array<TypedDataField>> = ret.OK.types;
            let message: Record<string, any> = ret.OK.value;




            const days = 86400;


            const guardianSignature: GuardianSignature[] = [];
            for (let index = 0; index < guardianCount; index++) {
                const _guardianAddress = guardians[index];
                guardianSignature.push({
                    // 0:EIP-1271 signature, 1:approved onchain before, 2:EOA signature, 3:No signature provided
                    signatureType: 3,
                    address: _guardianAddress
                });
            }
            for (let index = 0; index < threshold; index++) {
                guardianSignature[index].signatureType = 2;
                guardianSignature[index].signature = await guardiansAccount[index].signTypedData(domain, types, message);
            }
            {
                const typedMessage = ethers.TypedDataEncoder.hash(domain, types, message);
                if (typedMessage !== ret.OK.typedMessage) {
                    throw new Error(`Expected ${ret.OK.typedMessage} but got ${typedMessage}`);
                }
            }

            const packedGuardianSignature = L1KeyStore.packGuardianSignature(guardianSignature);

            /* 

             function setKey(
                bytes32 initialKey,
                bytes32 initialGuardianHash,
                uint64 initialGuardianSafePeriod,
                bytes32 newKey,
                bytes calldata rawGuardian,
                bytes calldata guardianSignature
            )
            OR
            function setKey(bytes32 slot, bytes32 newKey, bytes calldata rawGuardian, bytes calldata guardianSignature)
            */

            const signer = await provider.getSigner();

            if (keyInfo.OK.key === ethers.ZeroHash) {
                const tx = await signer.sendTransaction({
                    to: this.keyStoreAddress,
                    data: keyStoreContract.interface.encodeFunctionData("setKey(bytes32,bytes32,uint64,bytes32,bytes,bytes)", [
                        initialKey,
                        initialGuardianHash,
                        days * 2,
                        message.newSigner,
                        L1KeyStore.getGuardianBytes(guardians, threshold),
                        packedGuardianSignature
                    ])
                });
                console.log(`tx: ${tx.hash}`);
            } else {
                const tx = await signer.sendTransaction({
                    to: this.keyStoreAddress,
                    data: keyStoreContract.interface.encodeFunctionData("setKey(bytes32,bytes32,bytes,bytes)", [
                        slot,
                        message.newSigner,
                        L1KeyStore.getGuardianBytes(guardians, threshold),
                        packedGuardianSignature
                    ])
                });
                console.log(`tx: ${tx.hash}`);
            }

            const keyInfo_new = await _L1KeyStore.getKeyStoreInfo(slot);
            if (keyInfo_new.OK.key.toLowerCase() !== message.newSigner.toLowerCase()) {
                throw new Error(`Expected ${message.newSigner} but got ${keyInfo_new.OK.key}`);
            }
        }







    }
}