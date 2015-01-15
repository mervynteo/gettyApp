define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gettyApp.controller:SupportCtrl
   * @description
   * # SupportCtrl
   * Controller of the gettyApp
   */
  angular.module('gettyApp.controllers.SupportCtrl', [])
    .controller('SupportCtrl', function ($rootScope, $scope, $location, Auth) {
      if(!Auth.getUser()) { $location.path('/login?r=1').search({r: '1'}); }
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
