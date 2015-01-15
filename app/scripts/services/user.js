/* global Firebase:true */
define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name gettyApp.User
   * @description
   * # User
   * Service in the gettyApp.
   */
  angular.module('gettyApp.services.User', [])
	.service('User', function ($rootScope, FIREBASE_URL, $firebase) {
	// AngularJS will instantiate a singleton by calling "new" on this function
    var ref = new Firebase(FIREBASE_URL);
    var sync = $firebase(ref.child('users'));
    var users = sync.$asObject();

    var User = {
      all: function (email) {
        users.$loaded().then(function() {
          angular.forEach(users, function(value, key) {
            if(value.email === email) {
              $rootScope.user.image = value.image;
              $rootScope.user.lastname = key;
              $rootScope.user.firstname = value.firstname;
            }
          });
        });
        return users;
      },
      findByUsername: function (username) {
        if (username) {
          // return users.$child(username);
        }
      },
      findByUid: function (uid) {
        if (uid) {
          // return users.$child(uid);
        }
      },
      update: function () {
        var u = User.findByUid($rootScope.uid);
        u.username = $rootScope.currentUser.username;
        u.about = $rootScope.currentUser.about;
        u.why = $rootScope.currentUser.why;
        u.passionate = $rootScope.currentUser.passionate;

        // return users.$child($rootScope.uid).$update(u);
      },
      updateImage: function (image) {
        var u = User.findByUid($rootScope.uid);
        u.image = image;

        // return users.$child($rootScope.uid).$update(u);
      }
    };

    return User;

	});
});
