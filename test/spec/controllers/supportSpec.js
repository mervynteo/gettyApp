/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SupportCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.SupportCtrl'));

    var SupportCtrl, scope;
    var mockAuth = {};
    var mockEmail = {};

    // Initialize the controller and a mock scope
    beforeEach(function() {
      module('gettyApp.controllers.SupportCtrl', function($provide) {
        $provide.value('Email', mockEmail);
      });
      module('gettyApp.controllers.SupportCtrl', function($provide) {
        $provide.value('Auth', mockAuth);
      });

      inject(function ($controller, $rootScope, $q) {
        scope = $rootScope.$new();
        mockAuth = {
          signedIn: true,
          getUser: function() {
            // user signed in
            var defer = $q.defer();
            defer.resolve(this.signedIn);
            return defer.promise;
          }
        };
        mockEmail = {
          name: '',
          subject: '',
          email: '',
          message: '',
          save: function() {
            return {name: this.name, email: this.email};
          }
        };
        SupportCtrl = $controller('SupportCtrl', {
          $scope: scope,
          Auth: mockAuth,
          Email: mockEmail
        });
      });
    });

    it('should be able to send email', function () {
      scope.contact = {
        name: 'firstname',
        subject: 'subject',
        email: 'qwerty@email.com',
        message: 'message'
      };

      // scope.sendEmail();
      // expect(scope.sendEmailLoading).toBeTruthy();
    });
  });
});
