const express = require('express');
const imager = require('node-imager');
const app = express();

function resizeImage (req, res, format) {
  const dimensions = req.params.dimensions;  
  const url = req.params['0']; // this feels hacky

  const parts = dimensions && dimensions.toLowerCase().split('x') || null;
  if (!parts) {
    return res.send('Invalid dimensions. Please separate width and height as "<width>x<height>".');
  }

  const width = parseInt(parts[0]);
  const height = parseInt(parts[1]);

  if (isNaN(width) || isNaN(height)) {
    return res.send('Invalid dimensions. Missing a height or width.');
  }
  
  if (!url) {
    return res.send(`Invalid image url: ${url}`);
  }

  if (!new RegExp('\.(jpg|png|gif)', 'i').test(url)) {
    return res.send(`Invalid image url: ${url}`); 
  }

  const imageUrl = new RegExp('http(s)?://', 'i').test(url) ? url : `http://${url}`;
  const options = { format, width, height, url: imageUrl };

  imager.resizeWith(options, (contentType, imageBuffer) => {
    res.setHeader('Content-Type', contentType);
    res.send(imageBuffer);
  });
}

app.get('/', (req, res) => { res.redirect('https://github.com/fjlaubscher/node-imagehandler'); });

app.get('/c/:dimensions/*', (req, res) => resizeImage(req, res, 'c'));
app.get('/:dimensions/*', resizeImage);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Node imagehandler running on port ${port}`); });
