import path from 'node:path'
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import * as all from "./files/c.js";
import option1 from './files/a.json' assert { type: 'json' };
import option2 from './files/b.json' assert { type: 'json' };

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = option1;
} else {
    unknownObject = option2;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${path.__filename}`);
console.log(`Path to current directory is ${path.__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

