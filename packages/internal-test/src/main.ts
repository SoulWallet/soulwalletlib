'use strict';
import { existsSync, writeFileSync } from 'fs';
import shell from 'shelljs';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';
import { ethers } from 'ethers';
import { Deploy } from "./deploy.js";
import { SocialRecovery } from "./socialRecovery.js";
import { Decode } from './decode.js';
import { CryptoTest } from './crypto.js';
import { L1KeyStoreTest } from './L1KeyStore.js';
import { GasApproach } from './gasApproach.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __baseDir = resolve(__dirname, '..', '..', '..');

async function main() {
    
    await new CryptoTest().run();
    await new Decode().run();

    const soulwalletcontractDir = resolve(__baseDir, 'soul-wallet-contract');
    const bundlerDir = resolve(__baseDir, 'bundler');
    const RPC = 'http://127.0.0.1:8545';
    const BUNDLER = 'http://127.0.0.1:3000/rpc';
    // from /configs/mnemonic.txt
    const defaultWallet = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', new ethers.JsonRpcProvider(RPC));

    // let soulWallet = new SoulWallet(RPC, BUNDLER, ethers.ZeroAddress, ethers.ZeroAddress, ethers.ZeroAddress, ethers.ZeroAddress);
    // console.log(soulWallet);
    /* 
        Note: must run `npm run preTest` before test[lerna run test]
    */

    {
        // local testnet
        if (!shell.which('anvil')) {
            throw new Error('this script requires anvil: https://github.com/foundry-rs/foundry/tree/master/anvil');
        }

        // kill process named `anvil` 
        shell.exec('pkill anvil');

        //run `anvil` in a background process 
        const anvilProcess = shell.exec('anvil', { async: true });
        // wait for anvil to start
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // check if anvil is running
        if (anvilProcess.exitCode !== null) {
            throw new Error('anvil failed to start');
        }

        const eth_blockNumber = await new ethers.JsonRpcProvider(RPC).send(
            'eth_blockNumber',
            []
        );
        console.log(eth_blockNumber);


    }
    /* 
        KeyStore address: 0x3591ebccf5dd2ae71ae26c867a6d7079a79a0d0e
        KeyStoreModule address: 0x157d384f11bebf592e6bee81acd91f6f0febfbcc
        KeyStoreModuleProxy address: 0x787f7110c51af7408f1e9abe08277b648115f191
        EntryPoint address: 0x8cecc6093e429c1c3d1ef9929454d655cc3dbdc2
        SoulwalletInstance address: 0x45cf7bf1f6557259fbdf40fea12ebc002015e000
        SoulwalletFactory address: 0xe22670cb02ad448a14eddb866c238bde285f3cb0
        TrustedModuleManager address: 0x53eed50042a094c8985a50f6333e5ffaca8b5931
        TrustedPluginManager address: 0xe626382ed14f52ecb126eb60235b89f30fec93c9
        SecurityControlModule address: 0xc180b105d25abd6a92bfd00b805db96027eba632
        DefaultCallbackHandler address: 0x0978686aecc2e4335a14016d6261064332c921cb
    */
    const contractInstance: Record<string, string> = {};
    {

        shell.cd(soulwalletcontractDir);

        // deploy contract
        const envFilePath = join(soulwalletcontractDir, '.env');
        // check file .env 
        if (!existsSync(envFilePath)) {
            throw new Error('Please create .env file in soul-wallet-contract dir, format: \n' + `DEPLOYER_PRIVATE_KEY=
            PROXY_ADMIN_PRIVATE_KEY=
            MANAGER_ADDRESS=
            L1_KEYSTORE_ADDRESS=
            ARB_L1_KEYSTORE_PASSING_ADDRESS=`);
        }
        // source .env
        shell.exec('source .env');


        let shellResult: string = '';
        shellResult += (shell.exec(`RPC_URL=${RPC} npm run deploy:singletonFactory`) + '');
        shellResult += (shell.exec(`RPC_URL=${RPC} npm run deploy:keystore`) + '');
        shellResult += (shell.exec(`RPC_URL=${RPC} npm run deploy:soulwallet`) + '');
        //console.log(shellResult);

        for (const line of shellResult.split('\n')) {
            if (line.startsWith('  Deploying  ')) {
                const subLine = line.substring(13).split(' ');
                const contractName = subLine[0];
                for (let i = 1; i < subLine.length; i++) {
                    let address = subLine[i];
                    if (address.startsWith('0x')) {
                        // address to checksum address
                        address = ethers.getAddress(address);
                        console.log(`${contractName} address: ${address}`);
                        contractInstance[contractName] = address;
                        break;
                    }
                }
            }
        }
        if (!('EntryPoint' in contractInstance)) {
            throw new Error('EntryPoint not found');
        }
    }


    {
        // bundler

        // kill bundler (process named start with `npm run bundler`) 

        shell.exec('pkill -f "npm run bundler"');

        shell.cd(bundlerDir);

        // ./localconfig/bundler.config.json  
        const mnemonicFilePath = join(__baseDir, 'configs', 'mnemonic.txt');
        const bundlerConfigDir = join(bundlerDir, 'packages', 'bundler', 'localconfig');
        const bundlerConfigFilePath = join(bundlerConfigDir, 'bundler.config.json');
        shell.exec(`mkdir -p ${bundlerConfigDir} && touch ${bundlerConfigFilePath}`);
        writeFileSync(bundlerConfigFilePath, JSON.stringify({
            "gasFactor": "1",
            "port": "3000",
            "network": RPC,
            "entryPoint": contractInstance['EntryPoint'],
            "beneficiary": "0xd21934eD8eAf27a67f0A70042Af50A1D6d195E81",
            "minBalance": "1",
            "mnemonic": mnemonicFilePath,
            "maxBundleGas": 5e6,
            "minStake": "1",
            "unsafe": true,
            "minUnstakeDelay": 0,
            "autoBundleInterval": 3,
            "autoBundleMempoolSize": 10
        }, null, 4), 'utf8');


        const bundlerCmd = `npm run bundler --network ${RPC} --entryPoint ${contractInstance['EntryPoint']} --unsafe --mnemonic "${mnemonicFilePath}"`;
        console.log(bundlerCmd);

        //run `bundlerCmd` in a background process 
        shell.exec(bundlerCmd, { async: true, silent: false });
        // waiting for bundler to start
        while (true) {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            /* 
             curl http://127.0.0.1:3000/rpc \
             -X POST \
             -H "Content-Type: application/json" \
             --data '{"method":"eth_chainId","params":[],"id":1,"jsonrpc":"2.0"}'
            */
            const shellResult = '' + shell.exec(`curl ${BUNDLER} -X POST -H "Content-Type: application/json" --data '{"method":"eth_supportedEntryPoints","params":[],"id":1,"jsonrpc":"2.0"}'`);
            if (shellResult.includes("result")) {
                if (!shellResult.includes(contractInstance['EntryPoint'])) {
                    throw new Error('EntryPoint not supported');
                }
                console.log("check bundler with JsonRpcProvider");
                const supportedEntryPoint = await new ethers.JsonRpcProvider(BUNDLER).send(
                    'eth_supportedEntryPoints',
                    []
                );
                console.log(supportedEntryPoint);
                console.log('bundler started');
                break;
            } else {
                console.log('waiting for bundler to start');

            }


        }


    }
    {
        //run testcase


        await new L1KeyStoreTest(RPC, contractInstance['KeyStore']).run();

        await new SocialRecovery(
            RPC,
            contractInstance['KeyStore']
        ).run();


        // await new GasApproach(
        //     RPC,
        //     BUNDLER,
        //     contractInstance['SoulwalletFactory'],
        //     contractInstance['DefaultCallbackHandler'],
        //     contractInstance['KeyStoreModuleProxy'],
        //     contractInstance['SecurityControlModule'],
        //     defaultWallet
        // ).run();

        await new Deploy(
            RPC,
            BUNDLER,
            contractInstance['SoulwalletFactory'],
            contractInstance['DefaultCallbackHandler'],
            contractInstance['KeyStoreModuleProxy'],
            contractInstance['SecurityControlModule'],
            defaultWallet
        ).run();



    }
    console.log('test done');
    {

        // kill bundler (process named start with `npm run bundler`)
        shell.exec('pkill -f "npm run bundler"');

        // kill process named `anvil` 
        shell.exec('pkill anvil');
    }

}

main();
