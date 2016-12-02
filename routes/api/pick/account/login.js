var express = require('express');
var router = express.Router();

var User = require('../model/user.js').user;

router.post('/', function(req, res, next) {

  var username = req.body.username;
  var password = req.body.password;

  // console.dir(req.body);

  if (!username || !password) {
    res.json({success: false, error: 'no username or password'});
    return;
  }

  // var user = new User({
  //   username: username,
  //   password: password,
  //   isLogined: false,
  //   lastLoginTime: new Date()
  // });

  // user.save(function (err, list) {
  //   res.json(list);
  // });


  var timeBeforeFind = new Date().getTime();
  User.find({username: username} ,function (err, list) {
    console.dir('Data FIND: ' + (new Date().getTime() - timeBeforeFind) + 'ms');
    if (err) {
      res.json(err);
    } else {
      if (!list[0]) {
        res.json({success: false, error: 'Account do not exist'});
      } else if (list[0].password !== password) {
        res.json({success: false, error: 'Wrong Password'});
      } else {
        req.session.username = username;
        res.json({
          success: true,
          data: {
            username: username
          }
        });
      }
    }
  });

});


module.exports = router;