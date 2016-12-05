var express = require('express');
var router = express.Router();
var path = require('path');

var WECHAT_check = require(path.join(APP_PATH, 'service/wechat/check'));
var WECHAT_answer = require(path.join(APP_PATH, 'service/wechat/answer'));

/* GET home page. */
router.get('/', function(req, res, next) {
  // check for wechat
  if (req.query.signature && req.query.timestamp && req.query.nonce && req.query.echostr) {
    let isFormWechat = WECHAT_check(req.query);
    if (isFormWechat) {
      console.log('Wechat check success!');
      return res.send(req.query.echostr);
    }
  }

  res.sendFile(path.join(APP_PATH, 'public/pick/index.html'));
});

router.post('/', (req, res, next) => {
  var rawBody='';
  req.setEncoding('utf8');
  req.on('data', function (chunk) {
    rawBody += chunk;
  });
  req.on('end', async function () {
    console.log(rawBody);
    res.send(await WECHAT_answer(rawBody));
  })
});

router.use('/api', require('./api/index'));
router.use('/test', require('./test'));


module.exports = router;
