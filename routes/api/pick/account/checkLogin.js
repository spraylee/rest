var express = require('express');
var router = express.Router();


var User = require('../model/user.js').user;


router.get('/', function(req, res, next) {


  if (!req.session.username) {
    res.json({
      success: true,
      data: false
    });
  } else {
    res.json({
      success: true,
      data: true
    });
  }


  // var timeBeforeFind = new Date().getTime();
  // User.find({username: username} ,function (err, list) {
  //   console.dir('Data FIND: ' + (new Date().getTime() - timeBeforeFind) + 'ms');
  //   if (err) {
  //     res.json(err);
  //   } else {
  //     if (!list[0]) {
  //       return res.json({success: false, error: 'Account do not exist'});
  //     } else {
  //       var lastLoginTimeNum = list[0].lastLoginTime.getTime();
  //       var timeover = new Date().getTime() - lastLoginTimeNum;
  //       if (timeover > 10 * 60 * 1000 || list[0].isLogined === false) {
  //         list[0].isLogined = false;
  //         list[0].save((error, data) => {
  //           return res.json({success: true, data: {
  //             isLogined: false
  //           }})
  //         });
  //       } else {
  //         list[0].isLogined = true;
  //         list[0].lastLoginTime = new Date();
  //         var timeBeforeSave = new Date().getTime();
  //         list[0].save(function (error, data) {
  //           console.dir('Data SAVE: ' + (new Date().getTime() - timeBeforeSave) + 'ms');
  //           return res.json({success: true, data: {
  //             isLogined: true,
  //             username: username,
  //             lastLoginTime: list[0].lastLoginTime
  //           }});
  //         });
  //       }
  //     }
  //   }
  // });

});


module.exports = router;