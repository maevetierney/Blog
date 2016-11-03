'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('MainCtrl', function () {
    var baseURL='http://lorempixel.com/960/450/';
    $scope.setInterval=5000;
  });
