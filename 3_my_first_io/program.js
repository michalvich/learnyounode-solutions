var fs = require('fs')

var filename = process.argv[2];

var data = fs.readFileSync(filename);


var split = data.toString().split('\n');

console.log(split.length-1);
