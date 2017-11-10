// how to read files

var fs = require('fs');

console.log('Executed Before File Reading.');

/* will execute after the last console.log
fs.readFile('./files/file', 'utf8', function(error, data) {
  console.log(data);
});
*/

//will execute synchronus
var data = fs.readFileSync('./files/file', 'utf8');

console.log(data);

console.log('Executed After File Reading, probably.');
