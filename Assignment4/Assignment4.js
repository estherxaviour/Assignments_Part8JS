var http = require('http');
var uuid = require('uuid');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
console.log(uuid.v1());
 response.end(uuid.v1());
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
//Assignment 4