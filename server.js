var http = require('http');

var hostrequests = function(req, res) {
    res.writeHead(200);
    res.end('Yoplait');
}

var server = http.createServer(hostrequests);
server.listen(8080);