var express = require('express');

var router = express.Router();

var Music = require('../model/music.js').music;

router.get('/', function(req, res, next) {

  var username = req.session.username;

  Music.find({username: username} ,function (err, list) {
    if (err) {
      res.json(err);
    } else {
      res.json({success: true, data: list});
    }
  });

});


module.exports = router;