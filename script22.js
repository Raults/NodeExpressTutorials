var express = require('express');

var app = express();

app.get('/', function(req, resp) {
  resp.end('Wow');
});

app.listen(1337, function() {
  console.log('Yeah?');
})
