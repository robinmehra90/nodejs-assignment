const readline = require('readline');
var a= require('./Q4_part2.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter DOB in dd/mm/yyyy format ', (answer) => {
  console.log('your age is : '+ a.findDate(answer));
  rl.close()
});