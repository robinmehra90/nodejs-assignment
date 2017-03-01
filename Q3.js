var fs = require("fs");

fs.readFile('input.txt','utf8', function (err, data) {
   if (err) return console.error(err);
   var count=data.split('\n');
   console.log("Number Of lines : "+(count.length-1));
})
console.log("sequentially after reading file ");
