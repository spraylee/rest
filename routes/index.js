var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(APP_PATH, 'public/pick/index.html'));
});

router.use('/api', require('./api/index'));


module.exports = router;
