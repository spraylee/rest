var axios = require('axios');

var config = require('./config');

var robot = function (data) {
  var key = config.appKey.robot;
  return new Promise((resolve, reject) => {
    var url = encodeURI(config.url.robot + '?info=' + data.info + '&key=' + key);
    axios.get(url).then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
        console.log(error);
      });
  });
}

module.exports = robot;
