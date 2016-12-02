var express = require('express');
var path   = require('path');
var multiparty = require('multiparty');
var fs = require('fs');
var router = express.Router();

var upload = require(path.join(APP_PATH, 'service/qiniu/upload'));

var Music = require('../model/music.js').music;

router.post('/', function(req, res, next) {

  // var form = new multiparty.Form({
  //   uploadDir: './public/upload/pick/temp/'
  // });
  var form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {

    if (err) {
      console.log('parse error:' + err);
      res.json({success: false, error: 'Files Parse Error'});
    } else {

      var musicObj = {};
      musicObj.username = req.session.username;
      musicObj.name     = fields.name[0];
      musicObj.author   = fields.author[0];
      musicObj.detail   = fields.detail[0];
      musicObj.capo     = fields.capo[0];
      musicObj.rate     = fields.rate[0];
      musicObj.length   = fields.length[0];

      // upload icon
      musicObj.icon = (await upload(files.icon[0].path)).url;

      // upload images
      for (var i = 0; i < musicObj.length; i++) {
        musicObj['image_' + i] = (await upload(files['image_' + i][0].path)).url;
      }

      // save to database
      var music = new Music(musicObj);
      music.save((error, music) => {
        if (error) {
          res.json(error);
        } else {
          res.json({success: true});
        }
      });

    }
  });


});



module.exports = router;