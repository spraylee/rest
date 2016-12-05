var crypto = require('crypto');
var config = require('./config');

var token = config.token;

var check = function (query) {

  // 来源微信
  var list = [token, query.timestamp, query.nonce].sort();
  var str = "";
  list.forEach(i => {
    str += i;
  })
  var md5sum = crypto.createHash('sha1');
  md5sum.update(str);
  var result = md5sum.digest('hex');

  if (result === query.signature) {
    return true;
  } else {
    res.json("Winxin Auth Failed.");
    return false;
  }

}

module.exports = check;