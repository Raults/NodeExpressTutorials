var express = require('express');
var app = express();

app.get('/helloThere', function(request, response) {
  response.send('Hello there, from express!')
});

app.listen(1337, function() {
  console.log('listening at port 1337');
});
