// reference: https://github.com/rdubois-crypto/FreshCryptoLib/blob/master/solidity/src/FCL_elliptic.sol
class Point {
    constructor(x: bigint, y: bigint) {
        this.x = x;
        this.y = y;
    }
    x: bigint;
    y: bigint;
}

class ZZPoint {
    constructor(x: bigint, y: bigint, zz: bigint, zzz: bigint) {
        this.x = x;
        this.y = y;
        this.zz = zz;
        this.zzz = zzz;
    }
    x: bigint;
    y: bigint;
    zz: bigint;
    zzz: bigint;
}


//curve prime field modulus
const p = BigInt('0xFFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF');
//short weierstrass first coefficient
const a = BigInt('0xFFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC');
//short weierstrass second coefficient
const b = BigInt('0x5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B');
//generating point affine coordinates
const gx = BigInt('0x6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296');
const gy = BigInt('0x4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5');
//curve order (number of points)
const n = BigInt('0xFFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551');
/* -2 mod p constant, used to speed up inversion and doubling (avoid negation)*/
const minus_2 = BigInt('0xFFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFD');
/* -2 mod n constant, used to speed up inversion*/
const minus_2modn = BigInt('0xFFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC63254F');
//P+1 div 4
const pp1div4 = BigInt('0x3fffffffc0000000400000000000000000000000400000000000000000000000');
//arbitrary constant to express no quadratic residuosity
const _NOTSQUARE = BigInt('0xFFFFFFFF00000002000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF');
const _NOTONCURVE = BigInt('0xFFFFFFFF00000003000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF');


export class P256Lib {

    static modexp(base: bigint, exponent: bigint, modulus: bigint): bigint {
        if (modulus === BigInt(1)) return BigInt(0);
        let result = BigInt(1);
        base = base % modulus;
        if (base === BigInt(0)) return BigInt(0);
        while (exponent > BigInt(0)) {
            if (exponent % BigInt(2) === BigInt(1)) {
                result = (result * base) % modulus;
            }
            exponent = exponent >> BigInt(1);
            base = (base * base) % modulus;
        }
        return result;
    }

    static mulmod(a: bigint, b: bigint, m: bigint): bigint {
        return (a * b) % m;
    }
    static addmod(a: bigint, b: bigint, m: bigint): bigint {
        return (a + b) % m;
    }

    /**
     * /* inversion mod n via a^(n-2), use of precompiled using little Fermat theorem
     */
    static FCL_nModInv(u: bigint): bigint {
        return P256Lib.modexp(u, minus_2modn, n);
    }
    /**
     * @dev inversion mod nusing little Fermat theorem via a^(n-2), use of precompiled
     */
    static FCL_pModInv(u: bigint): bigint {
        return P256Lib.modexp(u, minus_2, p);
    }

    /// @notice Calculate one modular square root of a given integer. Assume that p=3 mod 4.
    /// @dev Uses the ModExp precompiled contract at address 0x05 for fast computation using little Fermat theorem
    /// @param self The integer of which to find the modular inverse
    /// @return result The modular inverse of the input integer. If the modular inverse doesn't exist, it revert the tx
    static SqrtMod(self: bigint): bigint {
        let result = P256Lib.modexp(self, pp1div4, p);

        if (P256Lib.mulmod(result, result, p) != self) {
            result = _NOTSQUARE;
        }

        return result;
    }

    static ec_Decompress(x: bigint, parity: bigint): bigint {
        let y2: bigint = P256Lib.mulmod(x, P256Lib.mulmod(x, x, p), p);//x3
        y2 = P256Lib.addmod(b, P256Lib.addmod(y2, P256Lib.mulmod(x, a, p), p), p);//x3+ax+b

        let y = P256Lib.SqrtMod(y2);
        if (y == _NOTSQUARE) {
            return _NOTONCURVE;
        }
        if ((y & BigInt(1)) != (parity & BigInt(1))) {
            y = p - y;
        }
        return y;
    }

    /**
     * @dev Convert from XYZZ rep to affine rep
    /*    https://hyperelliptic.org/EFD/g1p/auto-shortw-xyzz-3.html#addition-add-2008-s*/
    static ecZZ_SetAff(p1: ZZPoint): Point {
        const point: Point = new Point(BigInt(0), BigInt(0));
        let zzzInv: bigint = P256Lib.FCL_pModInv(p1.zzz); //1/zzz
        point.y = P256Lib.mulmod(p1.y, zzzInv, p); //Y/zzz
        const _b: bigint = P256Lib.mulmod(p1.zz, zzzInv, p); //1/z
        zzzInv = P256Lib.mulmod(_b, _b, p); //1/zz
        point.x = P256Lib.mulmod(p1.x, zzzInv, p); //X/zz
        return point;
    }

    /**
     * @dev Sutherland2008 add a ZZ point with a normalized point and greedy formulae
     * warning: assume that P1(x1,y1)!=P2(x2,y2), true in multiplication loop with prime order (cofactor 1)
     */
    static ecZZ_AddN(zzPoint: ZZPoint, point: Point): ZZPoint {
        const _zzPoint: ZZPoint = new ZZPoint(BigInt(0), BigInt(0), BigInt(0), BigInt(0));
        if (zzPoint.y === BigInt(0)) {
            _zzPoint.x = point.x;
            _zzPoint.y = point.y;
            _zzPoint.zz = BigInt(1);
            _zzPoint.zzz = BigInt(1);
        } else {
            const y1 = p - zzPoint.y;
            const y2 = P256Lib.addmod(P256Lib.mulmod(point.y, zzPoint.zzz, p), y1, p)
            const x2 = P256Lib.addmod(P256Lib.mulmod(point.x, zzPoint.zz, p), p - zzPoint.x, p)
            _zzPoint.x = P256Lib.mulmod(x2, x2, p) //PP = P^2
            _zzPoint.y = P256Lib.mulmod(_zzPoint.x, x2, p) //PPP = P*PP
            _zzPoint.zz = P256Lib.mulmod(zzPoint.zz, _zzPoint.x, p) ////ZZ3 = ZZ1*PP
            _zzPoint.zzz = P256Lib.mulmod(zzPoint.zzz, _zzPoint.y, p) ////ZZZ3 = ZZZ1*PPP
            const zz1 = P256Lib.mulmod(zzPoint.x, _zzPoint.x, p) //Q = X1*PP
            _zzPoint.x = P256Lib.addmod(P256Lib.addmod(P256Lib.mulmod(y2, y2, p), p - _zzPoint.y, p), P256Lib.mulmod(minus_2, zz1, p), p) //R^2-PPP-2*Q
            _zzPoint.y = P256Lib.addmod(P256Lib.mulmod(P256Lib.addmod(zz1, p - _zzPoint.x, p), y2, p), P256Lib.mulmod(y1, _zzPoint.y, p), p) //R*(Q-X3)

        }
        return _zzPoint;
    }

    /**
     * @dev Check if the curve is the zero curve in affine rep.
     */
    // uint256 x, uint256 y)
    static ecAff_IsZero(y: bigint): boolean {
        return (y == BigInt(0));
    }


    /**
     * @dev Add two elliptic curve points in affine coordinates.
     */
    static ecAff_add(p1: Point, p2: Point): Point {
        if (P256Lib.ecAff_IsZero(p1.y)) return p2;
        if (P256Lib.ecAff_IsZero(p2.y)) return p1;
        const _point = P256Lib.ecZZ_AddN(new ZZPoint(p1.x, p1.y, BigInt(1), BigInt(1)), p2);
        return P256Lib.ecZZ_SetAff(_point);
    }

    /**
     * @dev Computation of uG+vQ using Strauss-Shamir's trick, G basepoint, Q public key
     *       Returns affine representation of point (normalized)       
     */
    static ecZZ_mulmuladd(
        point: Point,
        scalar_u: bigint,
        scalar_v: bigint
    ): Point {
        if (scalar_u == BigInt(0) && scalar_v == BigInt(0)) {
            return new Point(BigInt(0), BigInt(0));
        }
        const H = P256Lib.ecAff_add(new Point(gx, gy), point); //will not work if Q=P, obvious forbidden private key
        let index: bigint = BigInt(255);
        let _point: Point = new Point(BigInt(0), BigInt(0));
        {
            let T4 = (((scalar_v >> index) & BigInt(1)) << BigInt(1)) + ((scalar_u >> index) & BigInt(1));
            while (T4 === BigInt(0)) {
                index--;
                T4 = (((scalar_v >> index) & BigInt(1)) << BigInt(1)) + ((scalar_u >> index) & BigInt(1));
            }
            T4 = (((scalar_v >> index) & BigInt(1)) << BigInt(1)) + ((scalar_u >> index) & BigInt(1));
            if (T4 == BigInt(1)) {
                _point.x = gx;
                _point.y = gy;
            } else if (T4 == BigInt(2)) {
                _point.x = point.x;
                _point.y = point.y;
            } else if (T4 == BigInt(3)) {
                _point.x = H.x;
                _point.y = H.y;
            }
        }
        index--;
        let zz = BigInt(1);
        let zzz = BigInt(1);
        for (; index >= BigInt(0); index--) {
            // inlined EcZZ_Dbl
            let T1 = P256Lib.mulmod(BigInt(2), _point.y, p) //U = 2*Y1, y free
            let T2 = P256Lib.mulmod(T1, T1, p) // V=U^2
            let T3 = P256Lib.mulmod(_point.x, T2, p) // S = X1*V
            T1 = P256Lib.mulmod(T1, T2, p) // W=UV
            let T4 = P256Lib.mulmod(BigInt(3), P256Lib.mulmod(P256Lib.addmod(_point.x, p - zz, p), P256Lib.addmod(_point.x, zz, p), p), p) //M=3*(X1-ZZ1)*(X1+ZZ1)
            zzz = P256Lib.mulmod(T1, zzz, p) //zzz3=W*zzz1
            zz = P256Lib.mulmod(T2, zz, p) //zz3=V*ZZ1, V free

            _point.x = P256Lib.addmod(P256Lib.mulmod(T4, T4, p), P256Lib.mulmod(minus_2, T3, p), p) //X3=M^2-2S
            T2 = P256Lib.mulmod(T4, P256Lib.addmod(_point.x, p - T3, p), p) //-M(S-X3)=M(X3-S)
            _point.y = P256Lib.addmod(P256Lib.mulmod(T1, _point.y, p), T2, p) //-Y3= W*Y1-M(S-X3), we replace Y by -Y to avoid a sub in ecAdd

            {
                //value of dibit
                T4 = (((scalar_v >> index) & BigInt(1)) << BigInt(1)) + ((scalar_u >> index) & BigInt(1));
                if (T4 == BigInt(0)) {
                    _point.y = p - _point.y //restore the -Y inversion
                    continue;
                } // if T4!=0
                if (T4 == BigInt(1)) {
                    T1 = gx
                    T2 = gy
                } else if (T4 == BigInt(2)) {
                    T1 = point.x
                    T2 = point.y
                } else if (T4 == BigInt(3)) {
                    T1 = H.x
                    T2 = H.y
                }
                if (zz == BigInt(0)) {
                    _point.x = T1;
                    _point.y = T2
                    zz = BigInt(1)
                    zzz = BigInt(1)
                    continue;
                }
                // inlined EcZZ_AddN

                //T3:=sub(p, Y)
                //T3:=Y
                let y2 = P256Lib.addmod(P256Lib.mulmod(T2, zzz, p), _point.y, p) //R
                T2 = P256Lib.addmod(P256Lib.mulmod(T1, zz, p), p - _point.x, p) //P

                //special extremely rare case accumulator where EcAdd is replaced by EcDbl, no need to optimize this
                //todo : construct edge vector case
                if (y2 == BigInt(0)) {
                    if (T2 == BigInt(0)) {
                        T1 = P256Lib.mulmod(minus_2, _point.y, p) //U = 2*Y1, y free
                        T2 = P256Lib.mulmod(T1, T1, p) // V=U^2
                        T3 = P256Lib.mulmod(_point.x, T2, p) // S = X1*V

                        let TT1 = P256Lib.mulmod(T1, T2, p) // W=UV
                        y2 = P256Lib.addmod(_point.x, zz, p)
                        TT1 = P256Lib.addmod(_point.x, p - zz, p)
                        y2 = P256Lib.mulmod(y2, TT1, p) //(X-ZZ)(X+ZZ)
                        T4 = P256Lib.mulmod(BigInt(3), y2, p) //M

                        zzz = P256Lib.mulmod(TT1, zzz, p) //zzz3=W*zzz1
                        zz = P256Lib.mulmod(T2, zz, p) //zz3=V*ZZ1, V free

                        _point.x = P256Lib.addmod(P256Lib.mulmod(T4, T4, p), P256Lib.mulmod(minus_2, T3, p), p) //X3=M^2-2S
                        T2 = P256Lib.mulmod(T4, P256Lib.addmod(T3, p - _point.x, p), p) //M(S-X3)

                        _point.y = P256Lib.addmod(T2, P256Lib.mulmod(T1, _point.y, p), p) //Y3= M(S-X3)-W*Y1

                        continue
                    }
                }
                T4 = P256Lib.mulmod(T2, T2, p) //PP
                const TT1 = P256Lib.mulmod(T4, T2, p) //PPP, this one could be spared, but adding this register spare gas
                zz = P256Lib.mulmod(zz, T4, p)
                zzz = P256Lib.mulmod(zzz, TT1, p) //zz3=V*ZZ1
                const TT2 = P256Lib.mulmod(_point.x, T4, p)
                T4 = P256Lib.addmod(P256Lib.addmod(P256Lib.mulmod(y2, y2, p), p - TT1, p), P256Lib.mulmod(minus_2, TT2, p), p)
                _point.y = P256Lib.addmod(P256Lib.mulmod(P256Lib.addmod(TT2, p - T4, p), y2, p), P256Lib.mulmod(_point.y, TT1, p), p)
                _point.x = T4
            }
        } //end loop

        const T = P256Lib.modexp(zzz, minus_2, p)
        _point.y = P256Lib.mulmod(_point.y, T, p)//Y/zzz
        zz = P256Lib.mulmod(zz, T, p) //1/z
        zz = P256Lib.mulmod(zz, zz, p) //1/zz
        _point.x = P256Lib.mulmod(_point.x, zz, p) //X/zz
        return _point;
    }


    static ec_recover_r1(h: bigint, v: bigint, r: bigint, s: bigint) {
        if (r == BigInt(0) || r >= n || s == BigInt(0) || s >= n) {
            throw new Error("Invalid signature");
        }
        const y: bigint = P256Lib.ec_Decompress(r, v - BigInt(27));
        const rinv: bigint = P256Lib.FCL_nModInv(r);
        const u1: bigint = P256Lib.mulmod(n - P256Lib.addmod(BigInt(0), h, n), rinv, n);//-hr^-1
        const u2: bigint = P256Lib.mulmod(s, rinv, n);//sr^-1

        const point: Point = P256Lib.ecZZ_mulmuladd(new Point(r, y), u1, u2);
        // console.log("point.x", point.x.toString(16));
        // console.log("point.y", point.y.toString(16));
        return point;
    }
    /*
        uint256 Qx = uint256(0xe89e8b4be943fadb4dc599fe2e8af87a79b438adde328a3b72d43324506cd5b6);
            uint256 Qy = uint256(0x4fbfe4a2f9934783c3b1af712ee87abc08f576e79346efc3b8355d931bd7b976);
         
    */
    // ec_recover_r1(
    //       BigInt('0x180be1152bd871c82ea73f39977963ee157e10fbfff9d7252e324449b3a08848'),
    //     28n,
    //       BigInt('0x2ae3ddfe4cc414dc0fad7ff3a5c960d1cee1211722d3099ade76e5ac1826731a'),
    //       BigInt('0x87e5d654f357e4cd6cb52512b2da4d91eae0ae48e9d892ce532b9352f63a55d6')
    // );
}