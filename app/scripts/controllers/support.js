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
    .controller('SupportCtrl', function ($rootScope, $scope, $location, Auth, Email) {
      if(!Auth.getUser()) { $location.path('/login?r=1').search({r: '1'}); }
      $scope.sendEmailLoading = false;
      $scope.contact = {};

      $scope.sendEmail = function() {
        $scope.sendEmailLoading = true;

        var e = new Email();
        e.name = $scope.contact.name;
        e.subject = $scope.contact.subject;
        e.email = $scope.contact.email;
        e.message = $scope.contact.message;
        e.$save(function(data) {
          $scope.sendEmailLoading = false;
          $scope.msg = 'Thank you, ' + data.name + '! We have gotten your message and we will get back to you through your email (' + data.email + ') real soon.';
          $scope.msgType = 'alert-success';
        }, function() {
          $scope.sendEmailLoading = false;
          $scope.msg = 'Error in sending message. Please send your message in an email to yvonnelowym@gmail.com';
          $scope.msgType = 'alert-danger';
        });
      };
    });

  angular.module('gettyHTTP', [], function($httpProvider) {
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
   
    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
      /**
       * The workhorse; converts an object to x-www-form-urlencoded serialization.
       * @param {Object} obj
       * @return {String}
       */
      var param = function(obj) {
        var query = '';
        var name, value, fullSubName, subName, subValue, innerObj, i;
        
        for(name in obj) {
          value = obj[name];
          
          if(value instanceof Array) {
            for(i=0; i<value.length; ++i) {
              subValue = value[i];
              fullSubName = name + '[' + i + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          }
          else if(value instanceof Object) {
            for(subName in value)  {
              subValue = value[subName];
              fullSubName = name + '[' + subName + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          }
          else if(value !== undefined && value !== null) {
            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
          }
        }
        
        return query.length ? query.substr(0, query.length - 1) : query;
      };
      
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
  });
});
