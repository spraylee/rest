var nodemailer = require('nodemailer');
var config = require('./config');

var transporter = nodemailer.createTransport('smtps://' + config.account + ':' + config.password + '@' + config.service);
/*
 * param:   Object:
 *             to:*     string or array
 *             title:*  string
 *             text:   string
 *             html:   string
 */
var send = function (option) {
  return new Promise((resolve, reject) => {

    var to = '';
    if (to instanceof Array) {
      option.to.forEach(item => {
        to && (to += ',');
        to += item;
      });
    } else {
      to = option.to;
    }

    var mailOptions = {
      from: config.nickname + '<' + config.account + '>', // sender address
      to: to, // list of receivers
      subject: option.title, // Subject line
      // text: 'Hello world ✔', // plaintext body
      // html: '<b>Hello world ✔</b>' // html body
    };
    option.text && (mailOptions.text = option.text);
    option.html && (mailOptions.html = option.html);

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
