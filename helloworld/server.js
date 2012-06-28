require('http').createServer(function (request, response) {
  'use strict';
  response.writeHead(200, {"Content-Type": "text/plain"});
  var output = "Hello Dotcloud from Wercker!\n";
  for (var k in request.headers) {
    output += k + '=' + request.headers[k] + '\n';
  }
  response.end(output);
}).listen(8080);
