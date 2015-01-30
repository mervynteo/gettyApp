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
      if(!Auth.getUser()) { $location.path('/login').search({r: '1'}); }
      $scope.changedPassword = false;
      $rootScope.loginLoading = false;

      $scope.$watch('user', function() {
        if($scope.user.hasOwnProperty('password')) {
          $scope.username = $rootScope.user.password.email;
        } else {
          $scope.username = '';
        }
      });

      $scope.change = function(username, oldP, newP) {
        $rootScope.loginLoading = true;
        $scope.changedPassword = Auth.changeP(username, oldP, newP);
      };
    });
});
