/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Filter: limitObjectTo', function () {

    // load the filter's module
    beforeEach(module('gettyApp.filters.LimitObjectTo'));

    // initialize a new instance of the filter before each test
    var text = {a:'angularjs', b:'jasmine', c:'Nodejs'};
    var limitObjectTo;
    beforeEach(inject(function ($filter) {
      limitObjectTo = $filter('limitObjectTo');
    }));

    it('should return one item in the object', function () {
      expect(limitObjectTo(text, 1)).toEqual({a:'angularjs'});
    });

    it('should return zero items in the object', function () {
      expect(limitObjectTo(text, 0)).toEqual({});
    });

    it('should return three items in the object even when limit is ten', function () {
      expect(limitObjectTo(text, 10)).toEqual({a:'angularjs', b:'jasmine', c:'Nodejs'});
    });

  });
});
