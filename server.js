var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  //Checks if there is a GET command with the /listings url
  if (request.method === 'GET' && request.url === '/listings')
  {
    //Prints out the listings in the JSON
    response.write(JSON.stringify(listingData));
    response.end();
  }
  else {
    // Sends 404 and error code if not
    response.statusCode = 404;
    response.end("Bad gateway error");
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {

  // Parses the data
  listingData = JSON.parse(data);
  console.log(data);

  server = http.createServer(requestHandler);

  server.listen(port, function() {
    console.log('Server listening on: http://127.0.0.1:' + port);
  });
});
