var express = require('express');
var router = express.Router();
var path = require('path');

var sendMail = require(path.join(APP_PATH, 'service/mail/send'));

/* GET users listing. */
router.get('/', async function(req, res, next) {


  let response = await sendMail({
    to: 'sprayleeee@qq.com',
    title: 'TEST',
    html: 'You can visite our website <a href="http://spraylee.com">SPRAY.COM</a><br /><img src="http://spraylee.com/public/icon.png">'
  });

  res.json(response);

});

module.exports = router;
