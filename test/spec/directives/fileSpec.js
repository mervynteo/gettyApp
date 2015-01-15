/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: file', function () {

    // load the directive's module
    beforeEach(module('gettyApp.directives.File'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<file>');
      element = $compile(element)(scope);
      // expect(element.text()).toBe('this is the file directive');
    }));
  });
});
