var express = require('express');
var router = express.Router();
var path = require('path')
var getWeather = require(path.join(APP_PATH, 'service/weather/now'));

router.get('/', async (req, res, next) => {

  var info = await getWeather()
  info.results && (info = info.results[0].now )
  res.send(info)

});

module.exports = router;