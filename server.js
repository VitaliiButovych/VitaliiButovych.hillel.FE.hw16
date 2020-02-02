const http = require('http');
http.createServer((req, res) => {
    if (req.url === '/data') {
        res.end('I am good');
    }
    res.end( JSON.stringify('How are you') );
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000) );
