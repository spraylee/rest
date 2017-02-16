var express = require('express');
var router = express.Router();


router.use('/upload', require('./upload'));
router.use('/remove', require('./remove'));
router.use('/weather', require('./weather'));

module.exports = router;

