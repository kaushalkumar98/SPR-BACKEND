const http = require('http');

const server = http.createServer( (request, response) => {
    response.end(`<h1>Kaushal Kumar</h1>`);
})

server.listen(4000, 'localhost', () => {
    console.log('running on port 4000');
})