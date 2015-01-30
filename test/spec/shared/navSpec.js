/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: NavCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.NavCtrl'));

    var NavCtrl, mdSidenav, scope, isToggleCalled, sidenavTarget, signedIn;
    var mockAuth = {};

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $q) {
      scope = $rootScope.$new();
      mdSidenav = function (def) {
        sidenavTarget = def;
        var f = {
          toggle: function () {
            isToggleCalled = true;
            var deferred = $q.defer();
            deferred.resolve();
            return deferred.promise;
          }
        };

        return f;
      };
      mockAuth = {
        signOut: function() {
          // user signs out succesfully
          signedIn = false;
        }
      };
      NavCtrl = $controller('NavCtrl', {
        $scope: scope,
        Auth: mockAuth,
        $mdSidenav: mdSidenav
      });
    }));

    it('should invoke $mdSidenav.toggle when closeLeft is invoked', function () {
      isToggleCalled = false;
      sidenavTarget = '';
      scope.toggleLeft();
      expect(isToggleCalled).toBeTruthy();
      expect(sidenavTarget).toBe('left');
    });

    it('should invoke $mdSidenav.toggle when toggleRight is invoked', function () {
      isToggleCalled = false;
      sidenavTarget = '';
      scope.toggleRight();
      expect(isToggleCalled).toBeTruthy();
      expect(sidenavTarget).toBe('right');
    });

    it('should invokde Auth.signOut when signOut is invoked', function () {
      signedIn = true;
      // invoke sign out function
      scope.signOut();
      expect(signedIn).toBeFalsy();
    });
  });
});
