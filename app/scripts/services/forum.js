/* global Firebase:true */
define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name gettyApp.Forum
   * @description
   * # Forum
   * Service in the gettyApp.
   */
  angular.module('gettyApp.services.Forum', [])
	.service('Forum', function ($rootScope, $firebase, FIREBASE_URL, ForumIndex) {
	// AngularJS will instantiate a singleton by calling "new" on this function
    var ref, sync, obj;

    var Forum = {
      findByTopicID: function (topicID) {
        if (topicID) {
          ref = new Firebase(FIREBASE_URL + '/forum/' + topicID);
          sync = $firebase(ref);
          obj = sync.$asObject();

          obj.$loaded().then(function() {

          });
          return obj;
        } else {
          return null;
        }
      },
      createMsg: function (topicID, msg) {
        ref = new Firebase(FIREBASE_URL + '/forum/' + topicID + '/messages');
        sync = $firebase(ref);

        var createdBy = $rootScope.user.firstname;
        var createdOn = Date.now();
        var image = $rootScope.user.image;

        if (msg) {
          sync.$push({ 
            createdBy: createdBy,
            createdOn: createdOn, 
            image: image,
            message: msg 
           }).then(function() {
            ForumIndex.newUpdate(topicID, createdBy, createdOn, image);
          }, function(error) {
            console.log('Error:', error);
          });
        }
      },
      createFile: function (topicID, filename) {
        ref = new Firebase(FIREBASE_URL + '/forum/' + topicID + '/messages');
        sync = $firebase(ref);

        var createdBy = $rootScope.user.firstname;
        var createdOn = Date.now();
        var image = $rootScope.user.image;

        if (filename) {
          sync.$push({ 
            createdBy: createdBy,
            createdOn: createdOn, 
            image: image,
            file: filename 
           }).then(function() {
            ForumIndex.newUpdate(topicID, createdBy, createdOn, image);
          }, function(error) {
            console.log('Error:', error);
          });
        }
      }
    };

    return Forum;
	});
});
