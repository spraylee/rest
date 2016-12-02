var express = require('express');
var router = express.Router();


router.use('/pick', require('./pick/index'));

router.use('/test', require('./test/index'));

module.exports = router;
