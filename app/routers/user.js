const fs = require('fs')
const path = require('path')
const Router = require('express').Router

module.exports = function () {
  const router = new Router()
  // router.route("/ERSDAS").get(sendSVHTML);
  router.route('/forestFire').get(sendMainHTML)
  return router
}

function sendMainHTML (req, res, next) {
  let htmlPaht = path.join(__dirname, '../app/FireMonitoring.html')
  let htmlStr = fs.readFileSync(htmlPaht, 'utf-8')
  return res.status(200).send(htmlStr)
}
