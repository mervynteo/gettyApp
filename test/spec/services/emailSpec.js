/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Email', function () {

    // load the service's module
    beforeEach(module('gettyApp.services.Email'));

    // instantiate service
    var Email;
    beforeEach(inject(function (_Email_) {
      Email = _Email_;
    }));

    // it('should do something', function () {
    //   expect(!!Email).toBe(true);
    // });

  });
});
