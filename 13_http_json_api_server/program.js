var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {

  response.writeHead(200, { 'Content-Type': 'application/json' });

  var requestData = url.parse(request.url.toString(), true);

  if (requestData.pathname == '/api/parsetime') {
      var isoDate = new Date(requestData.query.iso);
      var responseJson = {
        hour: isoDate.getHours(),
        minute: isoDate.getMinutes(),
        second: isoDate.getSeconds()
      }
      response.end(JSON.stringify(responseJson));
  } else if (requestData.pathname == '/api/unixtime') {
      var isoDate = new Date(requestData.query.iso);
      var responseJson = {
        unixtime: isoDate.getTime()
      }
      response.end(JSON.stringify(responseJson));
  } else {
      response.statusCode = 400;
      request.end('Not supported');
  }

});

server.listen(process.argv[2]);
