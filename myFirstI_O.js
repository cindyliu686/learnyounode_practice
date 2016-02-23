var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var Lines = contents.toString().split('\n');
console.log(Lines.length - 1);

