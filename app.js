const express = require('express');
const imager = require('node-imager');
const app = express();

app.get('/', (req, res) => { res.redirect('https://github.com/fjlaubscher/node-imagehandler'); });
app.get('/:dimensions/*', function(req, res) {
  const dimensions = req.params.dimensions;
  const url = req.params['0']; // this feels hacky

  const parts = dimensions && dimensions.toLowerCase().split('x') || null;
  if (!parts) {
    res.send('Invalid dimensions. Please separate width and height as "<width>x<height>".');
  }

  const width = parseInt(parts[0]);
  const height = parseInt(parts[1]);

  if (isNaN(width) || isNaN(height)) {
    res.send('Invalid dimensions. Missing a height or width.');
  }
  
  if (!url) {
    res.send(`Invalid image url: ${url}`);
  }

  const imageUrl = new RegExp('http(s)?://', 'i').test(url) ? url : `http://${url}`;
  const options = { format: 'c', width, height, url: imageUrl };

  imager.resizeWith(options, (contentType, imageBuffer) => {
    res.setHeader('Content-Type', contentType);
    res.send(imageBuffer);
  });
});
app.listen(3000, () => { console.log('Node imagehandler running on port 3000'); });
