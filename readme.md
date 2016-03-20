#node-imager
A super simple image resizer NodeJS application.
This uses my [node-imager](https://github.com/fjlaubscher/node-imager) npm package

###note: this doesn't support downloading images being served over https - just yet

Prerequisites

1. [ImageMagick](http://www.imagemagick.org/script/binary-releases.php)
2. [NodeJS](http://nodejs.org)

To launch this application just `cd` to application directory and run:

- `npm install` (this reinstalls dependencies)
- `node app.js`

This image resizer has a few url options and runs on port 8080 by default.
If an image can't be found locally in the application directory, the app will try to download the image and resize it.
It also has an option to crop the image from the center

Examples of url structure

- Resize locally stored test.png to 250x250
`http://localhost:8080/imager/250x250/test.png`

- Resize and crop locally stored test.png 
`http://localhost:8080/imager/c175x200/test.png`

- Download image and resize
`http://localhost:8080/imager/250x250/http://i.imgur.com/hEVM19S.jpg`

- Download image, crop and resize
`http://localhost:8080/imager/c250x250/http://i.imgur.com/hEVM19S.jpg`
