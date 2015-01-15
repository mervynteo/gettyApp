/* global Firebase:true */
define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name gettyApp.ForumIndex
   * @description
   * # ForumIndex
   * Service in the gettyApp.
   */
  angular.module('gettyApp.services.ForumIndex', [])
	.service('ForumIndex', function ($rootScope, $firebase, FIREBASE_URL) {
	// AngularJS will instantiate a singleton by calling 'new' on this function
    var ref = new Firebase(FIREBASE_URL);
    var sync = $firebase(ref.child('forumIndex'));
    var forumIndex = sync.$asObject();
    // var forumIndex = sync.$asArray();

    var ForumIndex = {
      all: function () {
        forumIndex.$loaded().then(function() {
          
        });

        return forumIndex;
      },
      getTitle: function (topicID) {
        var newSync = $firebase(ref.child('forumIndex').child(topicID));
        var newForumIndex = newSync.$asObject();

        newForumIndex.$loaded().then(function() {
          
        });

        return newForumIndex;
      },
      create: function (title, description) {
        var createdOn = Date.now();
        sync.$push({
          title: title,
          createdBy: $rootScope.user.firstname,
          createdOn: createdOn,
          updatedOn: createdOn,
          updatedImage: $rootScope.user.image,
          description: description
        }).then(function(ref) {
          var key = ref.key();
          sync.$update(key, { key: key });
        }, function(error) {
          console.log('Error:', error);
        });
      },
      newUpdate: function (topicID, createdBy, createdOn, image) {
        sync.$update(topicID, {
          updatedBy: createdBy,
          updatedOn: createdOn,
          updatedImage: image
        }).then(function() {

        }, function(error) {
          console.log('Error:', error);
        });
      }
    };

    return ForumIndex;
	});
});
