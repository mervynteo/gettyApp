/* jshint camelcase: false */
/* global AWS:true */
define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gettyApp.controller:TopicCtrl
   * @description
   * # TopicCtrl
   * Controller of the gettyApp
   */
  angular.module('gettyApp.controllers.TopicCtrl', [])
    .controller('TopicCtrl', function ($scope, $routeParams, $location, Auth, ForumIndex, Forum) {
      if(!Auth.getUser()) { $location.path('/login').search({r: '1'}); }
      
      var topicID = $scope.topicID = $routeParams.topicID;

      $scope.topic = Forum.findByTopicID(topicID);
      $scope.topicDetails = ForumIndex.getTitle(topicID);

      var bucket = 'ambitiousalignments.com/files/' + topicID;
      $scope.creds = {
        bucket: bucket,
        access_key: '',
        secret_key: ''
      };
       

      $scope.$watch('topic.messages', function() {
        if(typeof($scope.topic.messages)==='object') {
          $scope.size = Object.keys($scope.topic.messages).length;
        }
      });

      $scope.newMsg = function() {
        Forum.createMsg(topicID, $scope.msg);
        $scope.msg = '';
      };

      $scope.uploading = 0;
      $scope.determinateValue = 0;
      $scope.upload = function() {
        $scope.uploading = 1;
        // Configure The S3 Object
        AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
        AWS.config.region = 'ap-southeast-2';
        var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
       
        if($scope.file) {
          var params = { Key: $scope.file.name, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };
       
          bucket.putObject(params, function(err) {
            if(err) {
              // There Was An Error With Your S3 Config
              $scope.uploadMsg = err.message;
              $scope.uploadStatus = 'danger';
              $scope.uploading = 0;
              return false;
            }
            else {
              // Success!
              Forum.createFile(topicID, $scope.file.name);
              $scope.file = null;
              $scope.showUpload = 0;
              $scope.uploadMsg = 'Upload done.';
              $scope.uploadStatus = 'success';
              $scope.uploading = 0;
            }
          })
          .on('httpUploadProgress',function(progress) {
            // Log Progress Information
            console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
            $scope.determinateValue = Math.round(progress.loaded / progress.total * 100);
          });
        }
        else {
          // No File Selected
          $scope.uploadMsg = 'No File Selected.';
          $scope.uploadStatus = 'danger';
          $scope.showUpload = 1;
        }
      };

      $scope.cancelUpload = function() {
        $scope.file = null;
        $scope.showUpload = 0;
      };
    });
});
