var express = require('express');
var router = express.Router();
var path = require('path');

var remove = require(path.join(APP_PATH, 'service/qiniu/remove'));


router.get('/', async (req, res, next) => {

  var state = await remove(req.query.key);

  res.json(state);
})

module.exports = router;