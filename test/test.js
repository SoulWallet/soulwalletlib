/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-26 20:06:56
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-26 20:16:35
 */

const assert = require('assert');
const { SoulWalletLib } = require('../');
const { ethers } = require('ethers');

describe('SoulWalletLib', function () {
    describe('#DEFINE', function () {
        it('AddressZero', function () {
            assert.equal(
                SoulWalletLib.Defines.AddressZero,
                ethers.constants.AddressZero
            );
        });
    });
    // #TODO
});