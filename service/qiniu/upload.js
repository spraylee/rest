var qiniu = require('qiniu');
var config = require('./config');

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = config.Access_Key;
qiniu.conf.SECRET_KEY = config.Secret_Key;

var upload = (path, name) => {
  //要上传的空间
  bucket = config.Bucket;

  //要上传文件的本地路径
  filePath = path;

  if (!filePath) {
    res.json('files is not exist!');
    return false;
  }

  //上传到七牛后保存的文件名
  key = name || 'file_' + String(new Date().getTime()).slice(3, -1) + '.' + filePath.split('.').reverse()[0];
  if (!key.split('.')[1]) {
    key = key + '.' + filePath.split('.').reverse()[0];
  }

  //构建上传策略函数
  function uptoken(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
    return putPolicy.token();
  }

  //生成上传 Token
  token = uptoken(bucket, key);


  //构造上传函数
  function uploadFile(uptoken, key, localFile) {
    var extra = new qiniu.io.PutExtra();
    return new Promise((resolve, reject) => {
      qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if(!err) {
          // 上传成功， 处理返回值
          resolve({
            url: config.Image_Host + '/' + ret.key,
            name: ret.key,
            host: config.Image_Host
          });
        } else {
          // 上传失败， 处理返回代码
          console.log(err);
          reject({
            error: err
          });
        }
      });
    });
  }

  //调用uploadFile上传
  return uploadFile(token, key, filePath);
}

module.exports = upload;