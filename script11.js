var fs = require('fs');

console.log('Executed Before File Reading.');

/* write files asyncronusly
var data = fs.writeFile('./files/file3', 'Hello there! What\'s up?!', 'utf8', function(error) {
  if(error) throw error;
  console.log('file written');
});
*/

//write files syncronusly
var data = fs.writeFileSync('./files/fileSync', 'Hello there! What\'s up?!', 'utf8');
console.log('file written');
console.log('Executed After File Reading, probably.');
