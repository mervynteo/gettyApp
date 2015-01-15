define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gettyApp.controller:VideosCtrl
   * @description
   * # VideosCtrl
   * Controller of the gettyApp
   */
  angular.module('gettyApp.controllers.VideosCtrl', [])
    .controller('VideosCtrl', function ($scope, $location, Auth) {
      if(!Auth.getUser()) { $location.path('/login?r=1').search({r: '1'}); }
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
