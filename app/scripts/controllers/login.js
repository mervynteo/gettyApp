define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gettyApp.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the gettyApp
   */
  angular.module('gettyApp.controllers.LoginCtrl', [])
    .controller('LoginCtrl', function($rootScope, $scope, $routeParams, $location, Auth) {
      $rootScope.loginLoading = false;
      if(Auth.getUser()) { $location.path('/main'); }

      $scope.redirected = $routeParams.r;

      $scope.signIn = function(username, password) {
        $rootScope.loginLoading = true;
        Auth.signIn(username, password);
      };

      $scope.resetP = function(username) {
        $rootScope.loginLoading = true;
        Auth.resetP(username);
      };
    });
});
