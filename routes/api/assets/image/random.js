var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

router.get('/', (req, res, next) => {



  var list = fs.readdirSync(path.join(APP_PATH, 'public/public/random'));

  var fileName = list[Math.floor(list.length * Math.random())];

  // console.log(list)

  // res.send("ok");



  res.sendFile(path.join(APP_PATH, 'public/public/random', fileName));



})


module.exports = router;