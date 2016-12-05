var express = require('express');
var router = express.Router();
var xml2js = require('xml2js');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var obj = {a: 4, b: {
    c: '23423'
  }}

  var builder = new xml2js.Builder();
  xml =  builder.buildObject(obj);

  // var parser = new xml2js.Parser();
  // json = parser.parseString(xml);
  xml2js.parseString(xml,  {explicitArray : false}, function(err, json) {

    res.send(json);
  });

});

module.exports = router;
