define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name gettyApp.directive:file
   * @description
   * # Access files and stores them into a scope variable before upload
   */
  angular.module('gettyApp.directives.File', [])
    .directive('file', function () {
      return {
        restrict: 'AE',
        scope: {
          file: '@'
        },
        link: function(scope, el){
          el.bind('change', function(event){
            var files = event.target.files;
            var file = files[0];
            scope.file = file;
            scope.$parent.file = file;
            scope.$apply();
          });
        }
      };
    });
});
