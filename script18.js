// GET and POST

// http://mywebsite.com/?myFile=CSCZ.zip&version=1.0

var express = require('express');
var path = require('path');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function(req, resp) {
  var response = "Hello! " + req.query.firstName;

  resp.end(response);

});

app.listen(1337, function() {
  console.log('listening at port 1337');
});
