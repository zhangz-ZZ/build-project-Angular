var configCtrl = require('../lib/config-ctrl.js')
console.log(configCtrl)
var Router = require('express').Router

module.exports = function () {
  var router = new Router()
  router.route('/ERSDAS/api/resource')
    .get(getResource)
    // .post(insertResource)
    // .delete(delResource)
  return router
}

function getResource (req, res, next) {
  var obj = configCtrl(__dirname)
  var o = {}
  if (obj) {
    if (obj['APP'] && obj['API'] && obj['APPInfo']) {
      if (obj['APP']['host'] && obj['API']['port'] && obj['APPInfo']) {
        o['APIPort'] = obj['API']['port']
        o['APPHost'] = obj['APP']['host']
        o['APPPort'] = obj['ERSDAS-APP']['port']
        o['APPInfo'] = obj['APPInfo']
      } else {
        console.log('配置信息有误！')
      }
    } else {
      console.log('配置文件丢失！')
    }
  }
  res.status(200).json(o)
}
