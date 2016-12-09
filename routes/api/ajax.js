var express = require('express');
var router = express.Router();

var axios = require('axios');

router.post('/', (req, res, next) => {
  var method = req.body.method || 'get';
  console.log(req.body.url);
  if (method === 'get') {
    axios.get(req.body.url).then(back => {
      // console.dir(back);
      // res.send(back);
      res.json("ok");
    });
  }
  if (method === 'post') {
    axios.post(req.body.url, req.body.param).then(back => {
      res.json({back});
    });
  }
});

module.exports = router;