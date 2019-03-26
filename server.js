var http = require('http');
var request = require('request');

var handleRequest = function(request, response) {
  
  console.log('Calling hello-node-rest service'); 
  request('http://hello-node-rest:5000/users, function (error, response, body)        {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
    res.end(body);
  });
  console.log('Called hello-node-rest service'); 

  console.log('Received request for URL: ' + request.url); 
  response.writeHead(200);
  response.end('Hello World! -- Sibendu.');
};

var www = http.createServer(handleRequest);
www.listen(5000);
