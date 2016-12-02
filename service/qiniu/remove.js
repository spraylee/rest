var qiniu = require('qiniu');
var config = require('./config');

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = config.Access_Key;
qiniu.conf.SECRET_KEY = config.Secret_Key;


var remove = id => {
  return new Promise((resolve, reject) => {


    //构建bucketmanager对象
    var client = new qiniu.rs.Client();

    //你要测试的空间， 并且这个key在你空间中存在
    bucket = config.Bucket;
    key = id;

    //删除资源
    client.remove(bucket, key, function(err, ret) {
      if (!err) {
        resolve({
          success: true
        })
      } else {
        console.log(err);
        resolve({
          success: false,
          error: err
        })
      }
    });


  })
}

module.exports = remove