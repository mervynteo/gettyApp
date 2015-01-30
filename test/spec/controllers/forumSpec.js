/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: ForumCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.ForumCtrl'));

    var ForumCtrl, scope;
    var mockAuth = {};
    var mockmdDialog = {};
    var mockForumIndex = {};

    // Initialize the controller and a mock scope
    beforeEach(function() {
      module('gettyApp.controllers.ForumCtrl', function($provide) {
        $provide.value('ForumIndex', mockForumIndex);
      });
      module('gettyApp.controllers.ForumCtrl', function($provide) {
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

        mockForumIndex = {
          data: [{
              name: 'forum name',
              description: 'first forum'
            },
            {
              name: 'forum name',
              description: 'second forum'
            }],
          all: function() {
            // return all data
            var defer = $q.defer();
            defer.resolve(this.data);
            return defer.promise;
          },
          create: function(title, description) {
            var defer = $q.defer();
            
            var item = {
              name: title,
              description: description
            };
            
            this.data.push(item);
            defer.resolve(item);
            
            return defer.promise;
          }
        };
        ForumCtrl = $controller('ForumCtrl', {
          $scope: scope,
          Auth: mockAuth,
          $mdDialog: mockmdDialog,
          ForumIndex: mockForumIndex
        });
      });
    });

    it('should get all forum indexes and assign to scope.topics', function () {
      expect(scope.newThread).toBe('');
      expect(scope.topics.$$state.value).toEqual([{
          name: 'forum name',
          description: 'first forum'
        },
        {
          name: 'forum name',
          description: 'second forum'
        }]);
    });

    it('should be able to create new topic', function () {
      scope.newForum = {
        $valid: true,
        $setPristine: function() {}
      };

      scope.title = 'forum name';
      scope.description = 'third forum';
      scope.newTopic();

      expect(scope.topics.$$state.value).toEqual([{
          name: 'forum name',
          description: 'first forum'
        },
        {
          name: 'forum name',
          description: 'second forum'
        },
        {
          name: 'forum name',
          description: 'third forum'
        }]);
    });
  });
});
