var express = require('express');

var router = express.Router();

var User = require('../model/user.js').user;

router.get('/', function(req, res, next) {

  req.session.destroy();
  res.json({
    success: true
  });

  // User.find({username: username} ,function (err, list) {
  //   if (err) {
  //     res.json(err);
  //   } else {
  //     if (!list[0]) {
  //       res.json({success: false, error: 'Account do not exist'});
  //     } else {
  //       list[0].isLogined = false;
  //       list[0].save(function (error, data) {
  //         res.json({success: true});
  //       });
  //     }
  //   }
  // });

});


module.exports = router;