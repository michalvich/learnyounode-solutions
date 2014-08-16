var fs = require('fs');

var filename = process.argv[2];
fs.readFile(filename, function(err, data) {
  var lines = data.toString().split('\n').length-1;
  console.log(lines);
});
