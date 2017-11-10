var express = require('express');
var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/helloThere', function(request, response) {
  response.send('Hello there, from express!')
});

app.listen(1337, function() {
  console.log('listening at port 1337');
});
