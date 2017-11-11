var express = require('express');
var path = require('path');
var fs = require('fs');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function(req, resp) {
  resp.sendFile('index.html', {root: path.join(__dirname, './files')});
});

app.post('/', function(req, resp) {
  //resp.sendFile('index.html', {root: path.join(__dirname, './files')});

  resp.end(JSON.stringify(req.body));
});

app.listen(1337, function() {
  console.log('listening at port 1337');
});
