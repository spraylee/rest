var express = require('express');
var router = express.Router();


router.use('/pick', require('./pick/index'));

router.use('/test', require('./test/index'));

router.use('/ajax', require('./ajax'));

module.exports = router;
