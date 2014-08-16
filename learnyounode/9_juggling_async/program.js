var http = require('http');

var responses = [];
var parametersCount = 3;
var resultsCount = 0;

function httpGet(index, parametersCount) {

  http.get(process.argv[2+index], function(response) {

    var lines = "";

    response.on("data", function(data) {
      lines += data.toString();
    });

    response.on("end", function() {
      responses[index] = lines;
      resultsCount++;

      if (resultsCount==parametersCount) {
        for (var i=0; i<parametersCount; i++) {
          console.log(responses[i]);
        }
      }

    })

  });

}

for (var i=0; i<parametersCount; i++) {
  httpGet(i, parametersCount);
}
