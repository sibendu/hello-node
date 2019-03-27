var http = require('http');
var req = require('request');

var handleRequest = function(request, response) {
  
  console.log('Calling hello-node-rest service'); 
  req('http://hello-node-rest:5000/users', function (error, resp, body){
    console.log('error:', error);
    console.log('statusCode:', resp && resp.statusCode);
    console.log('body:', body);
  });
  console.log('Called hello-node-rest service'); 

  console.log('Received request for URL: ' + request.url); 
  response.writeHead(200);
  response.end('Hello World! -- Suvajit.');
};

var www = http.createServer(handleRequest);
www.listen(5000);
