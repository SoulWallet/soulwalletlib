import { ethers } from 'ethers';
import { TypeGuard } from './typeGuard.js';
import { P256Lib } from './p256lib.js';
import { Hex } from './hex.js';
import { Base64Url } from './base64Url.js';

export interface ECCPoint {
    /**
     * Hex string of x coordinate
     *
     * @type {string}
     * @memberof ECCPoint
     */
    x: string;
    /**
     * Hex string of y coordinate
     *
     * @type {string}
     * @memberof ECCPoint
     */
    y: string;
}
export class WebAuthN {

    /**
     * 
     *
     * @static
     * @param {ECCPoint} point
     * @return {*}  {string}
     * @memberof P256
     */
    public static publicKeyToAddress(point: ECCPoint): string {
        if (TypeGuard.onlyBytes32(point.x).isErr() === true) { throw new Error(`invalid key.x: ${point.x}`); }
        if (TypeGuard.onlyBytes32(point.y).isErr() === true) { throw new Error(`invalid key.y: ${point.y}`); }
        // keccak256(abi.encodePacked(uint256 Qx,uint256 Qy));
        const _key = ethers.keccak256(ethers.solidityPacked(["uint256", "uint256"], [point.x, point.y]));
        return _key;
    }

    /**
     *
     *
     * @static
     * @param {string} r r
     * @param {string} s s
     * @param {string} message userOp hash
     * @param {string} authenticatorData hex string of authenticatorData
     * @param {string} clientDataSuffix clientDataSuffix string
     * @param {string} [clientDataPrefix='{"type":"webauthn.get","challenge":"'] clientDataPrefix
     * @return {*}  {{
     *             0: ECCPoint,
     *             1: ECCPoint
     *         }}
     * @memberof WebAuthN
     */
    public static recoverWebAuthN(
        message: string,
        r: string, s: string,
        authenticatorData: string,
        clientDataSuffix: string,
        clientDataPrefix?: string
    ): {
        0: ECCPoint,
        1: ECCPoint
    } {
        if (typeof clientDataPrefix === 'undefined') {
            clientDataPrefix = '{"type":"webauthn.get","challenge":"'
        }
        if (TypeGuard.onlyBytes32(message).isErr() === true) { throw new Error(`invalid message.x: ${message}`); }
        const messageBase64Url = Base64Url.bytes32Tobase64Url(message);
        const clientDataJSON: string = clientDataPrefix + messageBase64Url + clientDataSuffix;
        // check clientDataJSON is valid JSON
        JSON.parse(clientDataJSON);
        let clientDataJSONHash: string = ethers.sha256(ethers.toUtf8Bytes(clientDataJSON));
        if (authenticatorData.startsWith('0x')) authenticatorData = authenticatorData.slice(2);
        if (clientDataJSONHash.startsWith('0x')) clientDataJSONHash = clientDataJSONHash.slice(2);
        const _message = ethers.sha256('0x' + authenticatorData + clientDataJSONHash);
        return WebAuthN.recover(_message, r, s);
    }

    /**
     *
     *
     * @static
     * @param {string} rawMessage
     * @param {string} r
     * @param {string} s
     * @return {*}  {{
     *         0: ECCPoint,
     *         1: ECCPoint
     *     }}
     * @memberof P256
     */
    public static recover(rawMessage: string, r: string, s: string): {
        0: ECCPoint,
        1: ECCPoint
    } {
        if (TypeGuard.onlyBytes32(rawMessage).isErr() === true) { throw new Error(`invalid message.x: ${rawMessage}`); }
        if (TypeGuard.onlyBytes32(r).isErr() === true) { throw new Error(`invalid r: ${r}`); }
        if (TypeGuard.onlyBytes32(s).isErr() === true) { throw new Error(`invalid s: ${s}`); }
        const _message = BigInt(rawMessage);
        const _r = BigInt(r);
        const _s = BigInt(s);
        const p = {
            0: { x: ethers.ZeroHash, y: ethers.ZeroHash },
            1: { x: ethers.ZeroHash, y: ethers.ZeroHash }
        };
        try {
            const p1 = P256Lib.ec_recover_r1(_message, BigInt(27), _r, _s);
            p[0].x = Hex.paddingZero(p1.x, 32);
            p[0].y = Hex.paddingZero(p1.y, 32);
        } catch (e) {
            console.log(e);
        }

        try {
            const p2 = P256Lib.ec_recover_r1(_message, BigInt(28), _r, _s);
            p[1].x = Hex.paddingZero(p2.x, 32);
            p[1].y = Hex.paddingZero(p2.y, 32);
        } catch (e) {
            console.log(e);
        }

        return p;
    }
}
