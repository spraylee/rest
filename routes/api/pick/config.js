
var config = {
  // mlab.com 免费MONGODB数据库
  // mongodbUrl: 'mongodb://spraylee:sp828856@ds053196.mlab.com:53196/pick'

  // 本机MONGODB数据库
  // mongodbUrl: 'mongodb://localhost:27017/local'

  // spraylee.com Ubuntu自己搭建的MONGODB数据库
  // mongodbUrl: 'mongodb://spraylee.com:27017/local'

  // tencent MongoDB
  // mongodbUrl: 'mongodb://123.207.3.71:27017/local'

  // EC2 Singapore Area, Ubuntu MongoDB (Secret)
  mongodbUrl: 'mongodb://spraylee:sp828856@spraylee.com:57017/pick'
}


var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(config.mongodbUrl);


module.exports = config;