var nodemailer = require('nodemailer');
var config = require('./config');

var transporter = nodemailer.createTransport('smtps://' + config.account + ':' + config.password + '@' + config.service);
/*
 * param:   Object:
 *             to:*     string or array
 *             title:*  string
 *             text:   string
 *             html:   string
 *             files: []
 */
var send = function (option) {
  return new Promise((resolve, reject) => {

    var to = option.to;
    if (to instanceof Array) {
      to = option.to.join(",")
    }

    var mailOptions = {
      from: config.nickname + '<' + config.account + '>', // sender address
      to: to, // list of receivers
      subject: option.title, // Subject line
      // text: 'Hello world ✔', // plaintext body
      // html: '<b>Hello world ✔</b>', // html body
      // attachments: [{
      //     filename: 'text0.txt',
      //     content: 'hello world!'
      //   },{
      //     filename: 'text1.txt',
      //     path: './attach/text1.txt'
      //   }
      // ],
      logger: true,
      debug: true
    };
    option.text && (mailOptions.text = option.text);
    option.html && (mailOptions.html = option.html);
    console.log(option.files)
    if (option.files[0]) {
      mailOptions.attachments = option.files.map(f => {
        return {
          filename: f.split("/").slice(-1)[0],
          path: f
        }
      })
    }

    try {
      transporter.sendMail(mailOptions, function(error, info){
        if(error){
          console.log(error);
          resolve({
            success: false,
            error,
            message: 'Mail send failed!'
          })
        }else{
          console.log('Message sent: ' + info.response);
          resolve(info.response)
        }
      });
    } catch (err) {
      console.log("-------------------------");
      console.log(err)
    }

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);
        resolve({
          success: false,
          error,
          message: 'Mail send failed!'
        })
      }else{
        console.log('Message sent: ' + info.response);
        resolve(info.response)
      }
    });

  });
}

module.exports = send;
