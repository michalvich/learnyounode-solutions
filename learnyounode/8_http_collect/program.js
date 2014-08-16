var http = require('http');

http.get(process.argv[2], function(response) {

  var lines = "";

  response.on("data", function(data) {
    lines += data.toString();
  });

  response.on("end", function() {
    console.log(lines.length);
    console.log(lines);
  })

});
