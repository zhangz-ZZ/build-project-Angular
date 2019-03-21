/* global angular */

(function () {
  angular
    .module('ersdas')
    .controller('mainCtrl', ['APIServices', 'CtrlServices', '$scope', mainCtrl])

  // mainCtrl.$inject = ['APIServices', '$scope']
  // mainCtrl.$inject = ['$scope']

  // 产品信息控制
  function mainCtrl (APIServices, CtrlServices, $scope) {
    var self = $scope

    /** =============== 界面交互函数  end  ==================== */

    var _init = function () {
      self.isLoading = true
    }

    // 调用初始化函数
    _init()
  }
})()
