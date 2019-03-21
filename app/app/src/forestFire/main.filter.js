/* global angular */
(function () {
  'use strict'

  angular.module('ersdas')
    .filter('selectIconN', selectIconN)
    .filter('selectIconS', selectIconS)

  function selectIconN () {
    return function (countTime) {
      return countTime.split('_S')[0] + '_N' + countTime.split('_S')[1]
    }
  }

  function selectIconS () {
    return function (countTime) {
      return countTime
    }
  }
})()
