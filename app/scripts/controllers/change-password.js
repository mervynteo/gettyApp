define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gettyApp.controller:ChangePasswordCtrl
   * @description
   * # ChangePasswordCtrl
   * Controller of the gettyApp
   */
  angular.module('gettyApp.controllers.ChangePasswordCtrl', [])
    .controller('ChangePasswordCtrl', function ($rootScope, $scope, $location, Auth) {
      $rootScope.loginLoading = false;
      if(!$rootScope.user) { $location.path('/login').search({r: '1'}); }

      $scope.$watch('user', function() {
        $scope.username = $rootScope.user.password.email;
      });

      $scope.change = function(username, oldP, newP) {
        $rootScope.loginLoading = true;
        Auth.changeP(username, oldP, newP);
      };
    });
});
