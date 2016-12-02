var express = require('express');
var router = express.Router();
var path = require('path');

var multiparty = require('multiparty');

var upload = require(path.join(APP_PATH, 'service/qiniu/upload'));


router.post('/', function(req, res, next) {

  var form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {

    var filePath = files.file[0].path;
    var data = await upload(filePath);
    res.json(data);

  });

});


module.exports = router;
