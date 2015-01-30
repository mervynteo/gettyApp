/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: ReadingsCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.ReadingsCtrl'));

    var ReadingsCtrl, scope;
    var mockAuth = {};

    // Initialize the controller and a mock scope
    beforeEach(function() {
      module('gettyApp.controllers.ReadingsCtrl', function($provide) {
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
        ReadingsCtrl = $controller('ReadingsCtrl', {
          $scope: scope,
          Auth: mockAuth
        });
      });
    });

    it('should check if the user is signed in', function () {
      spyOn(mockAuth, 'getUser');
      mockAuth.getUser();
      expect(mockAuth.getUser).toHaveBeenCalled();
    });
  });
});
