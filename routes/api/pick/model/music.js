var mongoose = require("mongoose"); //  顶会议用户组件
var Schema = mongoose.Schema; //  创建模型
var musicScheMa = new Schema({
  username    : String,
  name        : String,
  author      : String,
  detail      : String,
  capo        : Number,
  rate        : Number,
  icon        : String,
  length      : Number,
  image_0     : String,
  image_1     : String,
  image_2     : String,
  image_3     : String,
  image_4     : String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.music = mongoose.model('musics', musicScheMa); //  与users集合关联