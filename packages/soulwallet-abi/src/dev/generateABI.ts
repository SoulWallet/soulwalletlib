import { resolve } from 'node:path';
import { readdirSync, readFileSync, existsSync, writeFileSync } from 'node:fs';
import shell from 'shelljs';


// chech if solc is installed
if (!shell.which('forge')) {
    shell.echo('this script requires forge to be installed');
    shell.exit(1);
}

const __dirname = resolve();

const soulwalletcontractDir = resolve(__dirname, '..', '..', 'soul-wallet-contract');
console.log('soulwalletcontractDir', soulwalletcontractDir);
shell.cd(soulwalletcontractDir);
shell.exec("forge build", { silent: false });
const soulwalletcontractOutDir = resolve(soulwalletcontractDir, 'out');
if (!existsSync(soulwalletcontractOutDir)) {
    throw new Error('soul-wallet-contract/out not found,please run `cd soul-wallet-contract && forge build`');
}
// delete old abi
shell.rm('-rf', resolve(__dirname, 'src', 'ABI/*.ts'));

// get all folders in soulwalletcontractOutDir

const contractDir = readdirSync(soulwalletcontractOutDir, { withFileTypes: true });


let mainTsImport = '';
let mainTsExport = '\n';

const warning = '//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`\n\n';


for (let i = 0; i < contractDir.length; i++) {
    const subDir = contractDir[i];
    if (subDir.isDirectory()) {
        const contractPath = subDir.name;
        if (contractPath.endsWith(".sol") && !contractPath.endsWith(".t.sol") && !contractPath.endsWith(".s.sol")) {
            const className = contractPath.replace('.sol', '');
            const abiJson = resolve(subDir.path, contractPath, className + '.json');
            if (!existsSync(abiJson)) {
                console.log('skip', contractPath);
                continue;
            }
            const jsonStr = readFileSync(abiJson, 'utf-8');
            const json = JSON.parse(jsonStr);
            if (json.abi === undefined || json.abi.length == 0 || typeof (json.metadata.sources) !== 'object' || Object.keys(json.metadata.sources).length === 0) {
                console.log('skip', contractPath);
                continue;
            }

            const absolutePath: string = Object.keys(json.metadata.sources)[0];
            if (absolutePath.startsWith("contracts/")) {
                const abiFilePath = resolve(__dirname, 'src', 'ABI', 'ABI_' + className + '.ts');
                writeFileSync(abiFilePath, `${warning}export default ${JSON.stringify(json.abi, null, 2)};`);

                mainTsImport += `import ABI_${className} from "./ABI/ABI_${className}.js";\n`;
                mainTsExport += '    ABI_' + className + ',\n';
            } else {
                console.log('skip', absolutePath);
                continue;
            }
        }
    }
}
// entrypoint
const entryPointABI = readFileSync(resolve(__dirname, 'src', 'entrypoint', 'v0.7.json'), 'utf-8');
const entryPointAbiFilePath = resolve(__dirname, 'src', 'ABI', 'ABI_EntryPoint.ts');
writeFileSync(entryPointAbiFilePath, `${warning}export default ${entryPointABI};`);
mainTsImport += `import ABI_EntryPoint from "./ABI/ABI_EntryPoint.js";\n`;
mainTsExport += '    ABI_EntryPoint,\n';

const mainTsFilePath = resolve(__dirname, 'src', 'main.ts');
writeFileSync(mainTsFilePath, mainTsImport + '\n\nexport { ' + mainTsExport + ' };' + '\n' + warning);
