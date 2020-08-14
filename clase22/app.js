const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.setHeader('X-Powered-By', 'bacon');
        response.end('<html><body><h1>Hello, World!</h1></body></html>');
    } else {
        response.statusCode = 404;
        response.end();
    }
})

server.listen(port, () => {
    console.log(`Hola mundo en el puerto ${port}`)
})