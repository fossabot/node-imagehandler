# node-imagehandler
a simple nodejs imagehandler using [node-imager](https://github.com/fjlaubscher/node-imager/)

## install
go to the directory of the imagehandler in your terminal and run the below command to install dependencies
```
$ npm install
```
once packages are installed
```
node app.js
```

##usage

- resize image in application directory
  
  `http://nodeimager.tk/imager/150x150/test.png`

  ![image](http://nodeimager.tk/imager/150x150/test.png)
  
- crop and resize image in application directory
  
  `http://nodeimager.tk/imager/c300x150/test.png`

  ![image](http://nodeimager.tk/imager/c300x150/test.png)
  
- resize remote image
  
  `http://nodeimager.tk/imager/150x150/http://i.imgur.com/LatDgnq.png`
   
  ![image](http://nodeimager.tk/imager/150x150/http://i.imgur.com/LatDgnq.png)

- crop and resize remote image

  `http://nodeimager.tk/imager/c300x150/http://i.imgur.com/LatDgnq.png`

  ![image](http://nodeimager.tk/imager/c300x150/http://i.imgur.com/LatDgnq.png)
  
  


