define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gettyApp.controller:ForumCtrl
   * @description
   * # ForumCtrl
   * Controller of the gettyApp
   */
  angular.module('gettyApp.controllers.ForumCtrl', [])
    .controller('ForumCtrl', function ($rootScope, $scope, $location, $mdDialog, ForumIndex, Auth) {
      if(!Auth.getUser()) { $location.path('/login').search({r: '1'}); }
      $rootScope.newThread = '';
      $scope.sort = 'updatedOn';
      $scope.acc = true;
      $scope.topics = ForumIndex.all();

      function DialogController($scope, $mdDialog) {
        $scope.gotIt = function() {
          $mdDialog.cancel();
        };
      }

      $scope.showAlert = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/forum/codeOfConduct.tmpl.html',
          targetEvent: ev,
        });
      };

      $scope.goToTopic = function(topicID) {
        $location.path('/topic/' + topicID);
      };

      $scope.sortBy = function(field) {
        $scope.sort = field;
        if($scope.acc) {
          $scope.acc=false;
        } else {
          $scope.acc=true;
        }
      };

      $scope.newTopic = function() {
        ForumIndex.create($scope.title, $scope.description);
        $scope.title = '';
        $scope.description = '';
        $scope.newForum.$setPristine();
      };
    });
});