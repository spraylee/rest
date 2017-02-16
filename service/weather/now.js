var axios = require('axios')
var crypto = require('crypto')

var config = require('./config')


var getWeatherNow = (city) => {
  return new Promise((resolve, reject) => {
    let location = city || 'ip'
    axios.get('https://api.thinkpage.cn/v3/weather/now.json?key=' + config.key + '&location=' + location).then(res => {
      resolve(res.data)
    }).catch(error => {
      resolve(error.response.data)
    })
  })
}

module.exports = getWeatherNow