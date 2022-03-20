///import required node modules for server
const http = require('http');
const fs = require('fs');
const path = require('path');
///pre-configuration for server
const hostname = 'localhost';
const port = 3000;
///setup the http server
const server = http.createServer((request, responce)=>{
    ///logs the incoming requests
    console.log(`${Date.now()} Request for ${request.url} by method ${request.method}`);
    ///generate response from server
    if(request.method == 'GET'){
        var fileUrl;
        if(request.url == '/') fileUrl ='index.html';
        else fileUrl = request.url;
        //get full path to actual file on server
        var filePath = path.join('./public' , fileUrl);
        //will respond to only html file requests
        const fileExtension = path.extname(filePath);
        if(fileExtension == '.html'){
            //check if requested html file exists or not
            if(!fs.existsSync(filePath)){//if file not found send 404 status message
                    responce.statusCode = 404;
                    responce.setHeader('Content-Type', 'text/html');
                    responce.end('<html><body><h1>Error 404: '+fileUrl+' not found</h1></body</html>');
                    return;
                }else{//serve html file to client
                    responce.statusCode = 200;
                    responce.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(responce);
                }
        }else{//show error that requested file is not an html file
            responce.statusCode = 404;
            responce.setHeader('Content-Type', 'text/html');
            responce.end('<html><body><h1>Error 404: '+fileUrl+' is not html</h1></body</html>');
        }
    }else{//show error that request is not a GET request
        responce.statusCode = 404;
        responce.setHeader('Content-Type', 'text/html');
        responce.end('<html><body><h1>Error 404: '+request.method+' is not supported</h1></body</html>');
    }
})
///start ther server, server will start listening to
///http requests from clients
server.listen(port, hostname, ()=>{
    console.log(`Sever running at http://${hostname}:${port}`);
});