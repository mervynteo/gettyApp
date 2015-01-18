define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name gettyApp.Email
   * @description
   * # Email
   * Service in the gettyApp.
   */
  angular.module('gettyApp.services.Email', [])
	.service('Email', function ($resource) {
	// AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('http://loveactionproject.com/rulerMail/sendmail.php', {}, {
      save: {method:'POST', isArray: false}
    }); 
	});
});
