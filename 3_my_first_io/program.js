var fs = require('fs');

var filename = process.argv[2];
var data = fs.readFileSync(filename);
var lines = data.toString().split('\n').length-1;
console.log(lines);
