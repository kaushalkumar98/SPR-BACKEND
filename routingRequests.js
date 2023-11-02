const http = require('http');

const server = http.createServer( (req, res) => {
const url = req.url;
if(url === '/'){
    res.write('<html>');
    res.write('<head><title>My First Sever</title></head>');
    res.write('<body><h1>Hello from the server</h1></body>');
    res.write('</html>');
    res.end();
}
else if(url === '/home'){
    res.write('<html>');
    res.write('<head><title>My First Sever</title></head>');
    res.write('<body><h1>Welcome Home</h1></body>');
    res.write('</html>');
    res.end();
}
else if(url === '/about'){
    res.write('<html>');
    res.write('<head><title>My First Sever</title></head>');
    res.write('<body><h1>Welcome to the About Us Page</h1></body>');
    res.write('</html>');
    res.end();
}
else if(url === '/node'){
    res.write('<html>');
    res.write('<head><title>My First Sever</title></head>');
    res.write('<body><h1>Welcome to my Node Project</h1></body>');
    res.write('</html>');
    res.end();
} else {
    res.write('<html>');
    res.write('<head><title>My First Sever</title></head>');
    res.write('<body><h1>Bad Request</h1></body>');
    res.write('</html>');
    res.end();  
    }
})

server.listen(3000, 'localhost', () => {
    console.log('running at port 3000');
})