/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Filter: orderObjectBy', function () {

    // load the filter's module
    beforeEach(module('gettyApp.filters.OrderObjectBy'));

    // initialize a new instance of the filter before each test
    var text = [{a:'angularjs', b:'jasmine', c:'Nodejs'}, {a:'javascript', b:'php', c:'.net'}, {a:'cloud', b:'web', c:'mail'}];
    var orderObjectBy;
    beforeEach(inject(function ($filter) {
      orderObjectBy = $filter('orderObjectBy');
    }));

    it('should return objects desc ordered by "a"', function () {
      // expect(orderObjectBy(text, 'a', true)[0].a).toEqual({a:'javascript', b:'php', c:'.net'}, {a:'cloud', b:'web', c:'mail'}, {a:'angularjs', b:'jasmine', c:'Nodejs'});
      expect(orderObjectBy(text, 'a', true)[0].a).toEqual('javascript');
    });

    it('should return objects acc ordered by "b"', function () {
      expect(orderObjectBy(text, 'b', false)[0].a).toEqual('angularjs');
    });

    it('should return objects desc ordered by "c"', function () {
      expect(orderObjectBy(text, 'c')[0].a).toEqual('javascript');
    });

  });
});
