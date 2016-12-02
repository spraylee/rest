var express = require('express');
var router = express.Router();

var User = require('../model/user.js').user;

router.post('/', function(req, res, next) {

  var username = req.body.username;
  var password = req.body.password;

  User.find({
    username: username
  }, (err, list) => {
    if (err) {
      res.json(err);
    }
    var user = new User({
      username, password
    });
    user.save((err, user) => {
      res.json({success: true, data: { username }});
    });
  });

});

module.exports = router;