var express = require('express');
var router = express.Router();


router.use('/image', require('./image/index'));


module.exports = router;
