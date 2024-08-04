

const http = require('http');
const url = require('url');
const calculator = require('./module');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    console.log(req.url);
    if (parsedUrl.pathname === '/cal' && req.method === 'GET') {
        var { a, b, op } = parsedUrl.query;

        a = parseInt(a)
        b = parseInt(b)

        switch (op) {
            case 'add':
                res.write("" + calculator.add(a, b));
                break;

            case 'sub':
                res.write("" + calculator.sub(a, b));
                break;

            case 'mul':
                res.write("" + calculator.mul(a, b));
                break;

            case 'div':
                res.write("" + calculator.div(a, b));
                break;

            default:
                res.write("Not Found");

        }
        res.end();
    }
    else {
        res.end('Page not found');
    }

})

server.listen(4100);

