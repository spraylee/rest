var express = require('express');
var router = express.Router();

var config = require('./config');

router.use('/', (req, res, next) => {

  if (req.path !== '/account/login' && req.path !== '/account/register' && req.path !== '/account/checkLogin' && !req.session.username) {
    console.log('not logined')
    res.json({
      success: false,
      error: 'Please Login'
    });
  } else {
    next();
  }
});


router.use('/account/login', require('./account/login'));
router.use('/account/logout', require('./account/logout'));
router.use('/account/checkLogin', require('./account/checkLogin'));
router.use('/account/info', require('./account/info'));
router.use('/account/register', require('./account/register'));


router.use('/pick/add', require('./pick/add'));
router.use('/pick/getList', require('./pick/getList'));
router.use('/pick/delete', require('./pick/delete'));
// router.use('/pick/getMusicDetail', require('./pick/getMusicDetail'));


module.exports = router;