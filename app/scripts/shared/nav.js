define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gettyApp.controller:NavCtrl
   * @description
   * # NavCtrl
   * Controller of the gettyApp
   */
   angular.module('gettyApp.controllers.NavCtrl', []).controller('NavCtrl', function ($rootScope, $scope, $mdSidenav, $mdDialog, Auth) {
    $rootScope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };
    $rootScope.toggleRight = function() {
      $mdSidenav('right').toggle();
    };

    $scope.signOut = function () {
      Auth.signOut();
    };

    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'scripts/shared/navbar/login.tmpl.html',
        targetEvent: ev,
      });
    };
  });
});