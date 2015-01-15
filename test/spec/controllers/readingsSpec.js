/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: ReadingsCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.ReadingsCtrl'));

    var ReadingsCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ReadingsCtrl = $controller('ReadingsCtrl', {
        $scope: scope
      });
    }));

    // it('should attach a list of awesomeThings to the scope', function () {
    //   expect(scope.awesomeThings.length).toBe(3);
    // });
  });
});
