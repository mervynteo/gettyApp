/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Controller: ChangePasswordCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.ChangePasswordCtrl'));

    var ChangePasswordCtrl, scope;
    var mockAuth = {};

    // Initialize the controller and a mock scope
    beforeEach(function() {
	    module('gettyApp.controllers.ChangePasswordCtrl', function($provide) {
	      $provide.value('Auth', mockAuth);
	    });

    	inject(function ($controller, $rootScope, $q) {
    		scope = $rootScope.$new();
            mockAuth = {
              signedIn: true,
              getUser: function() {
                // user signed in
                var defer = $q.defer();
                defer.resolve(this.signedIn);
                return defer.promise;
              },
          		changeP: function(name, oldP, newP) {
          			// password changed succesfully
      	        return true;
            	}
            };
	    	
	    	ChangePasswordCtrl = $controller('ChangePasswordCtrl', {
	    		$scope: scope,
	    		Auth: mockAuth
	    	});
	    	$rootScope.user = {
		    	password: { 
		    		email: 'test@gettyApp.com'
		    	}
		    };
	    });
    });

    it('should assign username to scope.username after user has signed in', function () {
    	// check $rootScope.user.password.email
    	expect(scope.user.password.email).toBe('test@gettyApp.com');

    	// trigger $scope.$watch('user')
	    scope.$apply('scope.user.password.message="Hi"');

	    // trigger $scope.$watch('user') again
	    scope.$apply('scope.user.password.message="New"');

	    // check $scope.username has been updated with the user email
    	expect(scope.username).toBe('test@gettyApp.com');
    });

    it('should send Auth.changeP(email, oldP, newP) successfully', function () {
    	// invoke change password function
    	scope.change('username', 'oldPassword', 'newPassword');
    	expect(scope.loginLoading).toBeTruthy();
    	expect(scope.changedPassword).toBeTruthy();
    });
  });
});