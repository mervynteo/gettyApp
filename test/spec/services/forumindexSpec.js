/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: ForumIndex', function () {

    // load the service's module
    beforeEach(module('gettyApp.services.ForumIndex'));

    // instantiate service
    var ForumIndex;
    beforeEach(inject(function (_ForumIndex_) {
      ForumIndex = _ForumIndex_;
    }));

    // it('should do something', function () {
    //   expect(!!ForumIndex).toBe(true);
    // });

  });
});
