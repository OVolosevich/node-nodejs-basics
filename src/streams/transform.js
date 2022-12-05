import stream from "node:stream";
const transform = async () => {
   const transformStream = new stream.Duplex({
     read() {},
     write(chunk) {
       console.log(Array.from(chunk.toString()).reverse().join('').toString());
     },
   });
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();

