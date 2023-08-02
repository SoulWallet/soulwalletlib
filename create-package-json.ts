import { writeFileSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export class BaseCreatePackageJson {
    static createPackageJson(basePath: string) {

        const packageJson = JSON.parse(readFileSync(resolve(basePath, 'package.json')).toString('utf8'));
        let browser = '';
        if (typeof packageJson.browser === 'object') {
            browser += '"browser":'
            browser += JSON.stringify(packageJson.browser, null, 2).replace(/\/lib\.esm/g, '');
            browser += ',';
        }

        const cjsPackageJson = JSON.stringify(JSON.parse(`{
            ${browser}
            "type": "commonjs"
          }`), null, 2);
        const esmPackageJson = JSON.stringify(JSON.parse(`{
            ${browser}
            "type": "module"
          }`), null, 2);
        const cjsPackageJsonPath = resolve(basePath, 'lib.cjs', 'package.json');
        const esmPackageJsonPath = resolve(basePath, 'lib.esm', 'package.json');

        writeFileSync(cjsPackageJsonPath, cjsPackageJson);
        writeFileSync(esmPackageJsonPath, esmPackageJson);
    }
}
