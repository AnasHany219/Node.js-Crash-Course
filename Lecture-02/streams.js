const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('---------- New Chuck ----------');
//     console.log(chunk);

//     writeStream.write('\n---------- New Chuck ----------\n');
//     writeStream.write(chunk)
// })

// Pipe
readStream.pipe(writeStream);