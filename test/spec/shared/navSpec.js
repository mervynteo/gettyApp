/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: NavCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.NavCtrl'));

    var NavCtrl, 
      // mdSidenav, 
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      NavCtrl = $controller('NavCtrl', {
        $scope: scope
      });

      // mdSidenav = $mdSidenav;
    }));

    // beforeEach(function() {
    //   var Usermock = { promise: {then: function () {return;}} };

    //   module(function($provide) {
    //     $provide.value('User', Usermock);
    //   });
    // });

    // beforeEach(function() {
    //   $window = { location: {reload: jasmine.createSpy()} };

    //   module(function($provide) {
    //     $provide.value('$window', $window);
    //   });
    // });

    // it('should attach a list of awesomeThings to the scope', function () {
    //   expect(scope.awesomeThings.length).toBe(3);
    // });

    // it('should be able to toggle sideNav', function () {
    //   element(by.css('md-button[ng-click="toggleLeft()"]')).click();
    //   expect(element(by.css('.md-sidenav.md-closed')).getCssValue('display').toEqual('block'));
    // });
  });
});
