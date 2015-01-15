/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Forum', function () {

    // load the service's module
    beforeEach(module('gettyApp.services.Forum'));

    // instantiate service
    var Forum;
    beforeEach(inject(function (_Forum_) {
      Forum = _Forum_;
    }));

    // it('should do something', function () {
    //   expect(!!Forum).toBe(true);
    // });

  });
});
