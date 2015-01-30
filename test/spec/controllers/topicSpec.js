/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: TopicCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.TopicCtrl'));

    var TopicCtrl, scope;
    var mockRouteParams = {};
    var mockAWS = {};
    var mockAuth = {};
    var mockForumIndex = {};
    var mockForum = {};

    // Initialize the controller and a mock scope
    beforeEach(function () {
      module('gettyApp.controllers.TopicCtrl', function($provide) {
        $provide.value('$routeParams', mockRouteParams);
      });
      module('gettyApp.controllers.TopicCtrl', function($provide) {
        $provide.value('Auth', mockAuth);
      });
      module('gettyApp.controllers.TopicCtrl', function($provide) {
        $provide.value('ForumIndex', mockForumIndex);
      });
      module('gettyApp.controllers.TopicCtrl', function($provide) {
        $provide.value('Forum', mockForum);
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
        mockForum = {
          forum: { 
            title: 'Topic Title', 
            messages: [{message: 'Topic message 1'}, {message: 'Topic message 2'}] 
          },
          findByTopicID: function(topicID) {
            return this.forum;
          },
          createMsg: function(topicID, newMessage) {
            this.forum.messages.push(newMessage);
            return this.forum;
          }
        };
        mockForumIndex = {
          getTitle: function(topicID) {
            return { title: 'Topic Title' };
          }
        };

        TopicCtrl = $controller('TopicCtrl', {
          $scope: scope,
          Auth: mockAuth,
          Forum: mockForum,
          ForumIndex: mockForumIndex
        });
      });
    });

    it('should be able to update scope.size when length of messages changes', function () {
      expect(scope.topic.messages.length).toBe(2);
      // test the watch function without adding to the forum physically
      scope.topic.messages.push({message: 'Topic message 3'});
      scope.$apply();
      expect(scope.topic.messages.length).toBe(3);
      expect(scope.size).toBe(3);
    });

    it('should be able to create new messages in forum', function () {
      scope.msg = 'Topics message 3';
      scope.newMsg();
      expect(scope.msg).toBe('');

      var newTopic = mockForum.findByTopicID('topicID');
      expect(newTopic.messages.length).toBe(3);
    });

    it('should be able to upload a file', function () {
      scope.file = {
        name: 'filename',
        type: 'jpg'
      }
      // scope.upload();
    });
  });
});
