# Simple Node HTTP Server

This example shows a simple set up of nodeJs HTTP Server

## Setup Instructions

1.  Create a folder and initialize with `npm init` using terminal
2.  Create index.js file and write code as follows.
```bash
const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((request, responce)=>{
    console.log(request.headers);
    responce.statusCode = 200;
    responce.setHeader('Content-Type', 'text/html');
    responce.end('<html><body><h1>Hello, World</h1></body></html>');
})
server.listen(port, hostname, ()=>{
    console.log(`Sever running at http://${hostname}:${port}`);
});
```
3.  Type `npm start` to start the server




## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.