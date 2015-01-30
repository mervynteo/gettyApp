/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Controller: LoginCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.LoginCtrl'));

    var LoginCtrl, scope;
    var mockAuth = {};
    var mockRouteParams = {};

    // Initialize the controller and a mock scope
    beforeEach(function() {
  		module('gettyApp.controllers.LoginCtrl', function($provide) {
        $provide.value('$routeParams', mockRouteParams);
      });
      module('gettyApp.controllers.LoginCtrl', function($provide) {
        $provide.value('Auth', mockAuth);
      });

  		inject(function ($controller, $rootScope, $routeParams, $q) {
    		scope = $rootScope.$new();
    		mockAuth = {
          signedIn: false,
          getUser: function() {
            // user signed in
            var defer = $q.defer();
            defer.resolve(this.signedIn);
            return defer.promise;
          },
          signIn: function(u, p) {
          	// sign in user
            var defer = $q.defer();
            this.signedIn = true;
            defer.resolve(this.signedIn);
            scope.loginLoading = false;
            return defer.promise;
          },
          resetP: function(u) {
          	// sign in user
            var defer = $q.defer();
            this.signedIn = true;
            defer.resolve(this.signedIn);
            scope.loginLoading = false;
            return defer.promise;
          }
        };

        //	Redirected from another view
        $routeParams.r = 1;

    		LoginCtrl = $controller('LoginCtrl', {
    			$scope: scope,
          Auth: mockAuth,
          $routeParams: mockRouteParams
    		});
    	});
    });

    it('should be able to show user the redirected message', function () {
      expect(scope.redirected).toBe(1);
    });

    it('should be able to sign in', function () {
    	expect(scope.loginLoading).toBeFalsy();
    	scope.signIn('username', 'password');
    	expect(scope.loginLoading).toBeFalsy();
    });

    it('should be able toreset password', function () {
    	expect(scope.loginLoading).toBeFalsy();
    	scope.resetP('username');
    	expect(scope.loginLoading).toBeFalsy();
    });
  });
});
