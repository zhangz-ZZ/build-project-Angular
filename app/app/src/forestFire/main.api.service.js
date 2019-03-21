/* global angular $ WebSocket */
(function () {
  angular.module('ersdas')
    .factory('APIServices', APIServices)

  APIServices.$inject = ['$http']

  function APIServices ($http) {
    var self = {
      getAPPURL: _getAPPURL,
      getResources: _getResources,
      addWorkspace: _addWorkspace,
      deleteWorkspace: _deleteWorkspace,
      oneWSCall: oneWSCall,
      unasyncAjax: _unasyncAjax,
      _asyncAjax: _asyncAjax
    }
    return self
    function _getAPPURL () {
      var value = _asyncAjax('./api/resource')
      return value
    }

    function _getResources (configIP) {
      //
      var value = _asyncAjax(configIP + '/api/analysismenu')
      return value
    }

    function _unasyncAjax (url, callback) {
      let ajaxSetting = {
        url: url,
        async: true,
        success: function (data) {
          callback(null, data)
        },
        error: function (err) {
          callback(err, null)
        }
      }
      $.ajax(ajaxSetting)
    }

    function _asyncAjax (url) {
      var responseData
      let ajaxSetting = {
        url: url,
        async: false,
        success: function (data) {
          responseData = data
        },
        error: function () {
          responseData = []
        }
      }
      $.ajax(ajaxSetting)
      return responseData
    }

    function _addWorkspace (uid, wid) {
      let url = 'http://10.24.10.242:4001/api/workspace/' + uid + '/' + wid
      let ajaxSetting = {
        url: url,
        type: 'POST',
        async: true,
        success: function (data) {
          console.log(data)
        },
        error: function (err) {
          console.log(err)
        }
      }
      $.ajax(ajaxSetting)
    }

    function _deleteWorkspace (configURL, uid, wid) {
      let url = configURL + '/api/workspace/' + uid + '/' + wid
      let ajaxSetting = {
        url: url,
        type: 'DELETE',
        async: true,
        success: function (data) {
          console.log(data)
        },
        error: function (err) {
          console.log(err)
        }
      }
      $.ajax(ajaxSetting)
    }

    function oneWSCall (url, callback) {
      // 通过 websocket模式 对地图数据处理进行编辑

      var ws = new WebSocket('ws://localhost:9998/echo')

      // 建立 web socket 连接成功触发事件
      ws.onopen = function () {
        // 使用 send() 方法发送数据
        ws.send('发送数据')
        window.alert('数据发送中...')
      }

      // 接收服务端数据时触发事件
      ws.onmessage = function (evt) {
        // var received_msg = evt.data
        window.alert('数据已接收...')
      }

      // 断开 web socket 连接成功触发事件
      ws.onclose = function () {
        window.alert('连接已关闭...')
      }
    }
  }
})()
