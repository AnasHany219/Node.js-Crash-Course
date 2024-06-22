const fs = require('fs');

// ---------------- reading files ----------------
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) console.log(err);
    console.log(data); // <Buffer 68 65 6c 6c 6f 2c 20 64 75 64 65 21>
    console.log(data.toString()); // hello, dude!
});

// ---------------- writing files ----------------
fs.writeFile('./docs/blog1.txt', 'Hello, World!', () => {
    console.log('File 01 has been written.');
});

fs.writeFile('./docs/blog2.txt', 'Hello, again!', () => {
    console.log('File 02 has been written.');
});

// ----------------- directories -----------------
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) console.log(err);
        console.log('The folder has been created.');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) console.log(err);
        console.log('The folder has been deleted.');
    });
}

// ---------------- deleting files --------------- 
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) console.log(err);
        console.log('The File has been deleted.');
    });
}
