var express = require('express');
var router = express.Router();


router.use('/upload', require('./upload'));
router.use('/remove', require('./remove'));

module.exports = router;
