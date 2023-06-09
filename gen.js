const fs = require('fs');

const path = require('path');

const rootDir = path.resolve(__dirname, 'src');

const imports =  []

fs.rmSync(rootDir, { recursive: true, force: true });

fs.mkdirSync(rootDir);

function generateFile(n) {
    imports.push(`import file${n} from './file${n}'`)
    fs.writeFileSync(path.join(rootDir, `file${n}.ts`), `export default function file${n}() { console.log('file${n}') }`)
}



const count = 15_000;


for (let i = 0; i < count; i++) {
    generateFile(i)
}


imports.push('import router from "react-router"')
fs.writeFileSync(path.join(rootDir, `index.ts`), imports.join('\n'))
