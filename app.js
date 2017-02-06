const express = require('express');
const imager = require('node-imager');
const app = express();

app.get('/', (req, res) => { res.redirect('https://github.com/fjlaubscher/node-imagehandler'); });
app.get('/:dimensions/:url', function(req, res) {
  const dimensions = req.params.dimensions;
  const url = req.params.url;

  const parts = dimensions && dimensions.toLowerCase().split('x') || null;    
  if (!parts) {
    res.send('Invalid dimensions. Please separate width and height as "<width>x<height>".');
  } else if (parts.length != 2) {
    res.send('Invalid dimensions. Missing a height or width.');
  }
  
  if (!url) {
    res.send(`Invalid image url: ${url}`);
  }

  const width = parseInt(parts[0]);
  const height = parseInt(parts[1]);

  const options = { format: 'c', width, height, url };

  imager.resizeWith(options, (contentType, imageBuffer) => {
    res.setHeader('Content-Type', contentType);
    res.send(imageBuffer);
  });
});
app.listen(3000);