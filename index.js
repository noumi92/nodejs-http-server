///import required node modules for server
const http = require('http');
///pre-configuration for server
const hostname = 'localhost';
const port = 3000;
///setup the http server
const server = http.createServer((request, responce)=>{
    console.log(request.headers);
    /**generate response from server with status code ok
     * and text/html as content type encoding of responce
    **/
    responce.statusCode = 200;
    responce.setHeader('Content-Type', 'text/html');
    responce.end(
        '<html><body><h1>Hello, World</h1></body></html>'
    );
})
///start ther server, server will start listening to
///http requests from clients
server.listen(port, hostname, ()=>{
    console.log(`Sever running at http://${hostname}:${port}`);
});