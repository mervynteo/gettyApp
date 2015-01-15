define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gettyApp.controller:NavCtrl
   * @description
   * # NavCtrl
   * Controller of the gettyApp
   */
  angular.module('gettyApp.controllers.SideNavCtrl', [])
   .controller('SideNavCtrl', function ($rootScope, $timeout, $scope) {
    $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
    ];
  }).controller('LeftCtrl', function ($rootScope, $timeout, $location, $mdSidenav) {
    $rootScope.closeLeft = function() {
      $mdSidenav('left').close();
    };
    $rootScope.start = function() {
      $mdSidenav('left').close();
      $location.path('start');
    };
    $rootScope.main = function() {
      $mdSidenav('left').close();
      $location.path('main');
    };
    $rootScope.readings = function() {
      $mdSidenav('left').close();
      $location.path('readings');
    };
    $rootScope.videos = function() {
      $mdSidenav('left').close();
      $location.path('videos');
    };
    $rootScope.forum = function() {
      $mdSidenav('left').close();
      $location.path('forum');
    };
  }).controller('RightCtrl', function ($rootScope, $timeout, $mdSidenav) {
    $rootScope.closeRight = function() {
      $mdSidenav('right').close();
    };
  });
});
