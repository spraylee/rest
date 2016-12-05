var xml2js = require('xml2js');
var JUHE_robot = require('../juhe/robot');

var answer = function (body) {
  return new Promise((resolve, reject) => {

    xml2js.parseString(body,  {explicitArray : false}, async function(err, json) {
      if (err) {
        console.log(err);
        return reject(err);
      }
      if (json.xml.MsgType === 'text') {
        let answerFromJuhe = await JUHE_robot({
          info: json.xml.Content,
          userid: json.xml.FromUserName
        });
        console.log(answerFromJuhe);
        let word = answerFromJuhe.result && answerFromJuhe.result.text || '没听清，你大声点';

        let back = {
          xml: {
            ToUserName: json.xml.FromUserName,
            FromUserName: json.xml.ToUserName,
            CreateTime: new Date().getTime(),
            MsgType: 'text',
            Content: word
          }
        }
        let backXML = new xml2js.Builder().buildObject(back);
        return resolve(backXML);
      } else if (json.xml.MsgType === 'voice') {
        let back = {
          xml: {
            ToUserName: json.xml.FromUserName,
            FromUserName: json.xml.ToUserName,
            CreateTime: new Date().getTime(),
            MsgType: 'text',
            Content: '说什么鸟语呢，听不懂！'
          }
        }
        let backXML = new xml2js.Builder().buildObject(back);
        return resolve(backXML);
      } else {
        let back = {
          xml: {
            ToUserName: json.xml.FromUserName,
            FromUserName: json.xml.ToUserName,
            CreateTime: new Date().getTime(),
            MsgType: 'text',
            Content: '你们这些凡人，就喜欢发表情，发图片！'
          }
        }
        let backXML = new xml2js.Builder().buildObject(back);
        return resolve(backXML);
      }
    });


  })

}

module.exports = answer;