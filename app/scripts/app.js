'use strict';


angular.module('myApp', ['ngAnimate','ngCookies','ngResource', 'ngRoute', 'ngSanitize', 'ngTouch','ui.bootstrap' ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
