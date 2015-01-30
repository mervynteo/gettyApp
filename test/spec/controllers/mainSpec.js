/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.MainCtrl'));

    var MainCtrl, scope;
    var mockAuth = {};

    // Initialize the controller and a mock scope
    beforeEach(function() {
      module('gettyApp.controllers.LoginCtrl', function($provide) {
        $provide.value('Auth', mockAuth);
      });

      inject(function ($controller, $rootScope, $q) {
        scope = $rootScope.$new();
        mockAuth = {
          signedIn: false,
          getUser: function() {
            // user signed in
            var defer = $q.defer();
            defer.resolve(this.signedIn);
            return defer.promise;
          }
        };
        MainCtrl = $controller('MainCtrl', {
          $scope: scope,
          Auth: mockAuth
        });
      });
    });

    it('should contain the same number of items in articles and numLimit', function () {
      expect(scope.numLimit.length===scope.articles.length).toBeTruthy();
      scope.readMore(0);
      expect(scope.numLimit[0]).toBe(100000);
    });
  });
});
