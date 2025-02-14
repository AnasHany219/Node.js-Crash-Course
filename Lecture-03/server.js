const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 20);
    console.log(num);

    // console.log('The request has been made.');
    // console.log(req);
    console.log(req.method, req.url);

    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    // res.write('<h1>Hello, Dude!</h1>');
    // res.end();

    // routing
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Send a html file
    fs.readFile(path, (err, data) => {
        if (err) console.log(err);
        else res.write(data);
        res.end();
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000');
});