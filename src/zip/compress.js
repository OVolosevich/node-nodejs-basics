import fs, { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
    const errorMessage = "FS operation failed";
    const filePath = './src/zip/files/fileToCompress.txt';
    const archivePath = './src/zip/files/archive.gz';

    const isFileExist = async (path) => {
        try {
            await fs.promises.access(path);
            return true;
        } catch (error) {
            return false;
        }
    };

    const compressFile = async (path, archive) => {
       
        const handleStream = createReadStream(path)
        handleStream
            .pipe(createGzip())
            .pipe(createWriteStream(archive))
            .on('finish', () => {
            console.log(`Compression process done: ${archive}`)
            })

    }

    await isFileExist(filePath) ? compressFile(filePath, archivePath) : console.log(errorMessage);
};

await compress();