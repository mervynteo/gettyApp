/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Auth', function () {

    // load the service's module
    beforeEach(module('gettyApp.services.Auth'));

    // instantiate service
    var Auth;
    beforeEach(inject(function (_Auth_) {
      Auth = _Auth_;
    }));

    // it('should do something', function () {
    //   expect(!!Auth).toBe(true);
    // });

  });
});
