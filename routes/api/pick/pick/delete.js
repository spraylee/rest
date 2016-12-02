var express = require('express');
var router = express.Router();
var path = require('path');
var Music = require('../model/music.js').music;

var remove = require(path.join(APP_PATH, 'service/qiniu/remove'));

router.post('/', function(req, res, next) {

  var username = req.session.username;
  var _id = req.body.id;
  if (!_id) {
    res.json({
      success: false,
      error: 'No delete id'
    });
    return;
  }

  Music.find({_id, _id}, async function(err, list) {
    if (err) {
      res.json({success: 'false', err });
    } else {

      console.log(list);

      if (list[0].username !== username) {
        res.json({
          success: false,
          error: 'Resource is not uploaded by local user'
        })
        return;
      }

      var length = list[0].length;
      for (var i = 0; i < length; i++) {
        let state = await remove(list[0]['image_' + i].split('/').pop())
      }
      await remove(list[0].icon.split('/').pop())

      Music.remove({_id: _id} ,function (err) {
        if (err) {
          res.json(err);
        } else {
          res.json({success: true});
        }
      });

    }
  })


});


module.exports = router;