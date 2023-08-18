import soulWalletBytes4 from './soulwalletBytes4.js';
import hotBytes4 from './hotBytes4.js';
import { getAsset } from "@soulwallet/assets";
import { Ok, Err, Result } from '@soulwallet/result';
import { DecodeResult, Method } from './interface/decodeData.js';
import { ethers } from 'ethers';
import { Bytes4 } from './interface/bytes4.js';

export interface IUserOperation {
    sender: string;
    callData: string;
}

/**
 * Decode the transaction data (userOp.calldata).
 *
 * @class Decoder
 */
class Decoder {

    /**
     * Decode the transaction data (userOp.calldata).
     * @description: Why use async: May be use some online services in the future, use the async keyword ensures that the interface signature will not need to change in the future.
     *
     * @static
     * @param {number} chainId
     * @param {string} from
     * @param {string} to
     * @param {string} calldata
     * @return {*}  {Promise<Result<DecodeResult[], Error>>}
     * @memberof Decoder
     */
    public static async decode(chainId: number, from: string, to: string, calldata: string): Promise<Result<DecodeResult[], Error>> {
        calldata = calldata.toLowerCase();

        const ret: DecodeResult[] = [];
        if (calldata.length < 10) {
            return new Ok(ret);
        }

        // get 4bytes from calldata
        const bytes4 = calldata.substring(0, 10);
        let _from = from;
        let _to: string[] = [];
        let _value: bigint[] = [];
        let _data: string[] = [];
        if (bytes4 === '0x18dfb3c7') {
            // b.set('0x18dfb3c7',{text:'executeBatch(address[],bytes[])',bytes4:'0x18dfb3c7'});
            const fun = soulWalletBytes4.get('0x18dfb3c7')!;
            const iface = new ethers.Interface(['function ' + fun.text]);
            const decodedData = iface.decodeFunctionData(fun.text.substring(0, fun.text.indexOf('(')), calldata);
            _from = to;
            _to = decodedData[0];
            _data = decodedData[1];
        } else if (bytes4 === '0x47e1da2a') {
            // b.set('0x47e1da2a',{text:'executeBatch(address[],uint256[],bytes[])',bytes4:'0x47e1da2a'});
            const fun = soulWalletBytes4.get('0x47e1da2a')!;
            const iface = new ethers.Interface(['function ' + fun.text]);
            const decodedData = iface.decodeFunctionData(fun.text.substring(0, fun.text.indexOf('(')), calldata);
            _from = to;
            _to = decodedData[0];
            _value = decodedData[1];
            _data = decodedData[2];
        } else if (bytes4 === '0xb61d27f6') {
            // b.set('0xb61d27f6',{text:'execute(address,uint256,bytes)',bytes4:'0xb61d27f6'});
            const fun = soulWalletBytes4.get('0xb61d27f6')!;
            const iface = new ethers.Interface(['function ' + fun.text]);
            const decodedData = iface.decodeFunctionData(fun.text.substring(0, fun.text.indexOf('(')), calldata);
            _from = to;
            _to = [decodedData[0]];
            _value = [decodedData[1]];
            _data = [decodedData[2]];
        } else {
            _to = [to];
            _data = [calldata];
        }

        for (let i = 0; i < _to.length; i++) {
            let value = BigInt(0);
            if (_value.length > 0) {
                value = _value[i];
            }

            const decodeResult = await this.decodeItem(_from, _to[i], value, _data[i], chainId);
            if (decodeResult.isErr() === true) {
                return new Err(
                    new Error('decode error')
                );
            }
            ret.push(decodeResult.OK);
        }

        return new Ok(ret);
    }

    private static async decodeFunctionParams(calldata: string): Promise<Result<Method, Error>> {
        if (calldata.length >= 10) {
            const bytes4 = calldata.substring(0, 10);
            let fun: Bytes4 | undefined = undefined;
            let _fun = soulWalletBytes4.get(bytes4);
            if (_fun) {
                fun = _fun;
            } else {
                _fun = hotBytes4.get(bytes4);
                if (_fun) {
                    fun = _fun;
                }
            }
            if (fun) {
                const iface = new ethers.Interface(['function ' + fun.text]);
                const name = fun.text.substring(0, fun.text.indexOf('('));
                try {
                    const decodedData = iface.decodeFunctionData(name, calldata);
                    const method: Method = {
                        bytes4: bytes4,
                        name: name,
                        text: fun.text,
                        params: decodedData
                    }
                    return new Ok(method);
                } catch (error: unknown) {
                    return new Err(
                        new Error('decodeFunctionParams error')
                    );
                }
            }
        }
        return new Err(
            new Error('decodeFunctionParams error')
        );
    }


    private static async decodeItem(from: string, to: string, value: bigint, calldata: string, chainId: number): Promise<Result<DecodeResult, Error>> {
        const decodeResult: DecodeResult = {
            from: from,
            fromInfo: undefined,
            to: to,
            toInfo: undefined,
            value: value,
            method: undefined
        };

        const fromInfoRet = await getAsset(chainId, from);
        if (fromInfoRet.isOk() === true) {
            decodeResult.fromInfo = fromInfoRet.OK;
        }

        const toInfoRet = await getAsset(chainId, to);
        if (toInfoRet.isOk() === true) {
            decodeResult.toInfo = toInfoRet.OK;
        }

        const params = await this.decodeFunctionParams(calldata);
        if (params.isOk() === true) {
            decodeResult.method = params.OK;
        }

        return new Ok(decodeResult);
    }


}

/**
    * Decode the transaction data (userOp.calldata, interaction from soulwallet contract only).
    *
    * @static
    * @param {number} chainId
    * @param {string} entrypoint contract address
    * @param {IUserOperation} userOperation struct
    * @return {*}  {Promise<Result<DecodeResult[], Error>>}
    * @memberof Decoder
    */
export async function DecodeUserOp(chainId: number, entrypoint: string, userOperations: IUserOperation): Promise<Result<DecodeResult[], Error>> {
    const { sender, callData } = userOperations;
    return await Decoder.decode(chainId, entrypoint, sender, callData);
}