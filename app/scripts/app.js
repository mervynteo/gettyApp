/*jshint unused: vars */
define(['angular', 'shared/nav', 'shared/sidenav', 'controllers/main', 'controllers/change-password', 'controllers/login', 'controllers/forum', 'controllers/topic', 'controllers/support', 'controllers/readings', 'controllers/videos', 'controllers/start','services/user', 'services/auth', 'services/forum', 'services/forumindex', 'filters/orderobjectby', 'filters/limitobjectto', 'directives/file']/*deps*/, 
  function (angular, NavCtrl, SideNavCtrl, MainCtrl, ChangePasswordCtrl, UserService, AuthService, LoginCtrl, ForumCtrl, ForumService, StartCtrl, ReadingsCtrl, VideosCtrl, ForumIndexService, TopicCtrl, OrderObjectByFilter, LimitObjectToFilter, FileDirective, SupportCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name gettyApp
   * @description
   * # gettyApp
   *
   * Main module of the application.
   */
  return angular
    .module('gettyApp', ['gettyApp.controllers.MainCtrl',
'gettyApp.controllers.NavCtrl',
'gettyApp.controllers.SideNavCtrl',
'gettyApp.services.User',
'gettyApp.services.Auth',
'gettyApp.controllers.LoginCtrl',
'gettyApp.controllers.ForumCtrl',
'gettyApp.controllers.StartCtrl',
'gettyApp.controllers.ReadingsCtrl',
'gettyApp.controllers.VideosCtrl',
'gettyApp.controllers.ChangePasswordCtrl',
'gettyApp.services.Forum',
'gettyApp.services.ForumIndex',
'gettyApp.controllers.TopicCtrl',
'gettyApp.filters.OrderObjectBy',
'gettyApp.filters.LimitObjectTo',
'gettyApp.directives.File',
'gettyApp.controllers.SupportCtrl',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ngMessages',
    'ngAria',
    'ngMaterial',
    'ui.bootstrap',
    'angularMoment',
    'firebase'
  ])
    .constant('FIREBASE_URL', 'https://gettyapp.firebaseIO.com/')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .when('/main', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/start', {
          templateUrl: 'views/start.html',
          controller: 'StartCtrl'
        })
        .when('/readings', {
          templateUrl: 'views/readings.html',
          controller: 'ReadingsCtrl'
        })
        .when('/videos', {
          templateUrl: 'views/videos.html',
          controller: 'VideosCtrl'
        })
        .when('/forum', {
          templateUrl: 'views/forum/forum.html',
          controller: 'ForumCtrl'
        })
        .when('/change-password', {
          templateUrl: 'views/change-password.html',
          controller: 'ChangePasswordCtrl'
        })
        .when('/topic/:topicID', {
          templateUrl: 'views/forum/topic.html',
          controller: 'TopicCtrl'
        })
        .when('/support', {
          templateUrl: 'views/support.html',
          controller: 'SupportCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
