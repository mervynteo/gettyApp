/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SideNavCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.SideNavCtrl'));

    var SideNavCtrl, LeftCtrl, RightCtrl, mdSidenav, location, scope;
    var sidenavTarget, isPathCalled, isCloseCalled;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $q) {
      scope = $rootScope.$new();
      mdSidenav = function (def) {
        sidenavTarget = def;
        var f = {
          close: function () {
            isCloseCalled = true;
            var deferred = $q.defer();
            deferred.resolve();
            return deferred.promise;
          }
        };

        return f;
      };
      location = {
        path: function (def) {
          isPathCalled = def;
          var deferred = $q.defer();
          deferred.resolve();
          return deferred.promise;
        }
      };

      SideNavCtrl = $controller('SideNavCtrl', {
        $scope: scope
      });
      LeftCtrl = $controller('LeftCtrl', {
        $scope: scope,
        $mdSidenav: mdSidenav,
        $location: location
      });
      RightCtrl = $controller('RightCtrl', {
        $scope: scope,
        $mdSidenav: mdSidenav
      });
    }));

    it('should invoke $mdSidenav when closeLeft is invoked', function () {
      isCloseCalled = false;
      sidenavTarget = '';
      scope.closeLeft();
      expect(isCloseCalled).toBeTruthy();
      expect(sidenavTarget).toBe('left');
    });

    it('should invoke $mdSidenav and $location when start is invoked', function () {
      isCloseCalled = false;
      isPathCalled = '';
      sidenavTarget = '';
      scope.start();
      expect(isCloseCalled).toBeTruthy();
      expect(isPathCalled).toBe('start');
      expect(sidenavTarget).toBe('left');
    });

    it('should invoke $mdSidenav and $location when main is invoked', function () {
      isCloseCalled = false;
      isPathCalled = '';
      sidenavTarget = '';
      scope.main();
      expect(isCloseCalled).toBeTruthy();
      expect(isPathCalled).toBe('main');
      expect(sidenavTarget).toBe('left');
    });

    it('should invoke $mdSidenav and $location when readings is invoked', function () {
      isCloseCalled = false;
      isPathCalled = '';
      sidenavTarget = '';
      scope.readings();
      expect(isCloseCalled).toBeTruthy();
      expect(isPathCalled).toBe('readings');
      expect(sidenavTarget).toBe('left');
    });

    it('should invoke $mdSidenav and $location when videos is invoked', function () {
      isCloseCalled = false;
      isPathCalled = '';
      sidenavTarget = '';
      scope.videos();
      expect(isCloseCalled).toBeTruthy();
      expect(isPathCalled).toBe('videos');
      expect(sidenavTarget).toBe('left');
    });

    it('should invoke $mdSidenav and $location when forum is invoked', function () {
      isCloseCalled = false;
      isPathCalled = '';
      sidenavTarget = '';
      scope.forum();
      expect(isCloseCalled).toBeTruthy();
      expect(isPathCalled).toBe('forum');
      expect(sidenavTarget).toBe('left');
    });

    it('should invoke $mdSidenav when closeRight is invoked', function () {
      isCloseCalled = false;
      sidenavTarget = '';
      scope.closeRight();
      expect(isCloseCalled).toBeTruthy();
      expect(sidenavTarget).toBe('right');
    });
  });
});
