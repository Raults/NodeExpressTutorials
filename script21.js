var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, resp) {
  resp.cookie('myFirstCookie', 'looks Good'/* look upp documentation for features*/)
  resp.end('Wow');
});

app.listen(1337, function() {
  console.log('Yeah?');
})
