define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gettyApp.controller:ReadingsCtrl
   * @description
   * # ReadingsCtrl
   * Controller of the gettyApp
   */
  angular.module('gettyApp.controllers.ReadingsCtrl', [])
    .controller('ReadingsCtrl', function ($rootScope, $scope, $location, Auth) {
      if(!Auth.getUser()) { $location.path('/login?r=1').search({r: '1'}); }
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
