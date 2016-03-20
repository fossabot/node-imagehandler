var express = require('express');
var imager = require('node-imager');
var app = express();

app.get('/', (req, res) => { res.redirect('https://github.com/fjlaubscher/node-imagehandler'); });
app.get('/imager/*', function(req, res) {
  // i cant seem to get this working using express params
  // do it the hard way
  var params = req.params[0].split('/');
  var format = params[0];
  params.splice(0, 1);
  var url = params.join('/'); // rejoin params to build imageurl

  // check for a resize option
  var option = '';
  if (isNaN(format[0])) {
    option = format[0];
    format = format.substring(1);
  }

  var parts = format.split('x');
  var width = parseInt(parts[0]);
  var height = parseInt(parts[1]);
  imager.resize(option, width, height, url, (contentType, imageBuffer) => {
    res.setHeader('Content-Type', contentType);
    res.send(imageBuffer);
  });
});
app.listen(8080);