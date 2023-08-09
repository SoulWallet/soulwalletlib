import { resolve } from 'node:path';
import fs from 'node:fs';
import shell from 'shelljs';


// chech if solc is installed
if (!shell.which('solc')) {
    shell.echo('this script requires solc');
    shell.exit(1);
}
const __dirname = resolve();
const soulwalletcontractDir = resolve(__dirname, '..', '..', '..', 'soul-wallet-contract');

const abiSource = [
    ["contracts/keystore/L1/KeyStore.sol", "KeyStore"],
    ["contracts/SoulWallet.sol", "SoulWallet"],
    ["contracts/SoulWalletFactory.sol", "SoulWalletFactory"],
    ["contracts/SoulWalletProxy.sol", "SoulWalletProxy"],
    ["contracts/plugin/Simple2FA/Simple2FA.sol", "Simple2FA"],
    ["contracts/plugin/Dailylimit/Dailylimit.sol", "Dailylimit"],
    ["contracts/modules/SecurityControlModule/SecurityControlModule.sol", "SecurityControlModule"],
    ["contracts/modules/SocialRecoveryModule/SocialRecoveryModule.sol", "SocialRecoveryModule"],
    ["contracts/modules/Upgrade/Upgrade.sol", "Upgrade"],
    ["contracts/trustedContractManager/trustedModuleManager/TrustedModuleManager.sol", "TrustedModuleManager"],
    ["contracts/trustedContractManager/trustedPluginManager/TrustedPluginManager.sol", "TrustedPluginManager"],
    ["contracts/modules/keystore/OptimismKeyStoreProofModule/OpKnownStateRootWithHistory.sol", "OpKnownStateRootWithHistory"],
    ["contracts/modules/keystore/KnownStateRootWithHistoryBase.sol", "KnownStateRootWithHistoryBase"],
    ["contracts/modules/keystore/ArbitrumKeyStoreModule/ArbKnownStateRootWithHistory.sol", "ArbKnownStateRootWithHistory"],
    ["contracts/modules/keystore/ArbitrumKeyStoreModule/L1BlockInfoPassing.sol", "L1BlockInfoPassing"],
    ["contracts/modules/keystore/KeyStoreModule.sol", "KeyStoreModule"],
    ["contracts/modules/keystore/KeystoreProof.sol", "KeystoreProof"],
    ["contracts/paymaster/ERC20Paymaster.sol", "ERC20Paymaster"],
    ["contracts/miscellaneous/ReceivePayment.sol", "ReceivePayment"]

];

// delete old abi
shell.rm('-rf', resolve(__dirname, 'src', 'ABI/*.ts'));

let mainTsImport = '';
let mainTsExport = '\n';

const warning = '//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`\n\n';

for (let i = 0; i < abiSource.length; i++) {
    const [source, className] = abiSource[i];
    const abiJson = generateABI(source, className);

    const abiFilePath = resolve(__dirname, 'src', 'ABI', 'ABI_' + className + '.ts');
    fs.writeFileSync(abiFilePath, `${warning}export default ${abiJson};`);

    mainTsImport += `import ABI_${className} from "./ABI/ABI_${className}.js";\n`;
    mainTsExport += '    ABI_' + className + ',\n';
}
// entrypoint
const entryPointABI = fs.readFileSync(resolve(__dirname, 'src', 'entrypoint', 'v0.6.json'), 'utf-8');
const entryPointAbiFilePath = resolve(__dirname, 'src', 'ABI', 'ABI_EntryPoint.ts');
fs.writeFileSync(entryPointAbiFilePath, `${warning}export default ${entryPointABI};`);
mainTsImport += `import ABI_EntryPoint from "./ABI/ABI_EntryPoint.js";\n`;
mainTsExport += '    ABI_EntryPoint,\n';

const mainTsFilePath = resolve(__dirname, 'src', 'main.ts');
fs.writeFileSync(mainTsFilePath, mainTsImport + '\n\nexport { ' + mainTsExport + ' };' + '\n' + warning);

function generateABI(contractPath: string, className: string) {
    const solcCommand = `solc --via-ir --optimize --base-path './' @account-abstraction/=lib/account-abstraction/ @openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/ @openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/ @source/=contracts/ @solmate/=lib/solmate/src/ @arbitrum/nitro-contracts=lib/nitro-contracts/ --pretty-json --combined-json abi ${contractPath}`;
    // set env PWD to soul-wallet-contract
    shell.cd(soulwalletcontractDir);
    const { stdout, stderr, code } = shell.exec(solcCommand);
    if (code !== 0) {
        console.error(stderr);
        shell.exit(1);
    }
    const json = JSON.parse(stdout);
    const abi = json.contracts[contractPath + ':' + className].abi;
    const abiJson = JSON.stringify(abi, null, 4);
    return abiJson;
}