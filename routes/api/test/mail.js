var express = require('express');
var router = express.Router();
var path = require('path');

var mail = require(path.join(APP_PATH, 'service/mail/send'));


router.get('/', async (req, res, next) => {
  var count;
  var times = 1;
  // var result = await mail({
  //   to: 'spraylee@qq.com',
  //   title: '[附件测试]',
  //   files: ['./app.js']
  // })
  //
  for (var i = 0; i < times; i++) {
    send();
  }

  async function send () {
    var result = await mail({
      to: 'spraylee@qq.com',
      title: '[附件测试]',
      files: ['./app.js']
    })
    count += 1;
    check();
  }

  function check () {
    if (count === times) {
      res.json({success: true})
    }
  }

  // res.json(result);

});


module.exports = router;
