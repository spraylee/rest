var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.json({
    success: true,
    data: {
      username: req.session.username
    }
  });
});

module.exports = router;