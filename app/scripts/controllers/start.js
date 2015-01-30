define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gettyApp.controller:StartCtrl
   * @description
   * # StartCtrl
   * Controller of the gettyApp
   */
  angular.module('gettyApp.controllers.StartCtrl', [])
    .controller('StartCtrl', function ($scope, $location, Auth) {
      if(!Auth.getUser()) { $location.path('/login').search({r: '1'}); }
      
    });
});
