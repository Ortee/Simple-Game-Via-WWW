var express = require('express');
var logger = require('winston');
var app = express();

app.get('/', function (req, res) {
  res.send('NEW GAME!');
});

app.listen(3000, function () {
  logger.info('Server listening on port 3000!');
});
