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


router.post('/', function (req, res, next) {
  console.log('test');
  res.json({
    state: 0,
    data: true
  });
  // res.json({
  //   data: true,
  //   state: 0
  // });
  //   console.log(1);
  // var rawBody = '';
  // req.setEncoding('utf8');
  // req.on('data', function (chunk) {
  //   rawBody += chunk;
  //   console.log(2);
  // });
  // req.on('end', async () => {
  //   console.log(rawBody);
  //   res.send("data");
  // })
});

module.exports = router;
