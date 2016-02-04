//Assignment 3


var http = require('http');
var assignment2 = require('assignment2');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var value = "This is a test of assignment2 module";
  value = assignment2.upperCase(value);
  response.end(value);
});

server.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");

