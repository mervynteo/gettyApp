define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gettyApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the gettyApp
   */
  angular.module('gettyApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($rootScope, $scope, $location) {
      if(!$rootScope.user) { $location.path('/login').search({r: '1'}); }

      $scope.numLimit=[];
      $scope.articles = [{
        date: '15 Jan 2015',
        title: 'Sydney Convening Meeting',
        content: '<p>The Sydney Convening Meeting will kick off on 3 February 2015 at the University of Sydney. We welcome our international candidates and leaders, many of whom will be flying long distances to attend this three-day meeting. We hope that you will find the three-day workshop eventful, stimulating and in many ways, the beginning of something exciting.</p><p>We have included a <a href="http://ambitiousalignments.com/files/Ambitious_Alignments_Program.pdf" target="_blank">program sheet</a> outlining the presentations and sessions across the three days. Please note, however, that this is a preliminary program and is subject to change.</p><p>We look forward to meeting everyone very soon!</p>'
      }];

      angular.forEach($scope.articles, function() {
        $scope.numLimit.push(200);
      });

      $scope.readMore=function(index){
        $scope.numLimit[index]=100000;
      };
    });
});
