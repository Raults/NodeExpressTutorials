//http://localhost/howToControlThis/this/sdafsdf/sd

var express = require('express');
var app = express();
var router = express.Router();

app.use('/users', router);

//Can have mutliple /:username/:field/:adsfrgsdf
router.get('/:username(\\w+)', function(req, resp) {
  resp.end(JSON.stringify(req.params));
});

app.listen(1337, function() {
  console.log('I\'m listening..');
});
