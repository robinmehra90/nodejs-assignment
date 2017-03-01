var fs = require("fs");
var data = fs.readFileSync('input.txt','utf8')
var count=data.split('\n');
console.log("Number of lines : "+(count.length-1));