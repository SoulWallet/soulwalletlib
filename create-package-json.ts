import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export class BaseCreatePackageJson {
    static createPackageJson(basePath: string) {
        const cjsPackageJson =
            JSON.stringify(
                { "type": "commonjs" },
                null,
                2
            );
        const esmPackageJson =
            JSON.stringify(
                { "type": "module" },
                null,
                2
            );
        const cjsPackageJsonPath = resolve(basePath, 'lib.cjs', 'package.json');
        const esmPackageJsonPath = resolve(basePath, 'lib.esm', 'package.json');

        writeFileSync(cjsPackageJsonPath, cjsPackageJson);
        writeFileSync(esmPackageJsonPath, esmPackageJson);
    }
}
