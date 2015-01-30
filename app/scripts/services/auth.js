/* global Firebase:true */
define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name gettyApp.Auth
   * @description
   * # Auth
   * Service in the gettyApp.
   */
  angular.module('gettyApp.services.Auth', [])
	 .service('Auth', function ($rootScope, $location, FIREBASE_URL, $firebase, $firebaseAuth, User) {
	// AngularJS will instantiate a singleton by calling 'new' on this function
  
    function authDataCallback(authData) {
      if (authData) {
        $rootScope.signedIn = true;
        $rootScope.user = authData;
        
        // Get all users
        $rootScope.users = User.all(authData.password.email);

        // $rootScope.$apply(function() { $location.path('/main'); });
        $location.path('/main');
        // console.log('User ' + authData.uid + ' is logged in with ' + authData.provider);
      } else {
        $rootScope.signedIn = false;
        $location.path('/login');
        // console.log('User is logged out');
      }
    }
 
    $rootScope.signedIn = false;
    var ref = new Firebase(FIREBASE_URL);
    var authObj = $firebaseAuth(ref);
    ref.onAuth(authDataCallback);

    var Auth = {
      signIn: function (username, password) {
        return ref.authWithPassword({
          email : username,
          password : password
        }, function(error) {
          if (error) {
            // console.log('Login Failed!', error);
            $rootScope.$apply(function() { $rootScope.loginLoading = false; $rootScope.e = error; });
          } else {
            $rootScope.user = $firebaseAuth(ref).$getAuth();
            $rootScope.e = null;
            $rootScope.loginLoading = false;
          }
        });
      },
      getUser: function () {
        return authObj.$getAuth();
      },
      signOut: function () {
        $rootScope.user = null;
        return ref.unauth();
      },
      resetP: function (email) {
        authObj.$sendPasswordResetEmail(email).then(function() {
          // console.log('Password reset email sent successfully!');
          $rootScope.loginLoading = false;
          return true;
        }).catch(function(error) {
          console.error('Error: ', error);
          $rootScope.e = error;
          $rootScope.loginLoading = false;
          return false;
        });
      },
      changeP: function (email, oldP, newP) {
        authObj.$changePassword(email, oldP, newP).then(function() {
          // console.log('Password changed successfully!');
          $rootScope.changePassword = 'Password changed successfully.';
          $rootScope.e = '';
          $rootScope.loginLoading = false;
          return true;
        }).catch(function(error) {
          // console.error('Error: ', error);
          $rootScope.e = error;
          $rootScope.changePassword = '';
          $rootScope.loginLoading = false;
          return false;
        });
      }
    };

    return Auth;
	});
});