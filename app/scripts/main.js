/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    'angular-animate': '../../bower_components/angular-animate/angular-animate',
    'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-resource': '../../bower_components/angular-resource/angular-resource',
    'angular-route': '../../bower_components/angular-route/angular-route',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': '../../bower_components/angular-touch/angular-touch',
    'angular-messages': '../../bower_components/angular-messages/angular-messages',
    'angular-aria': '../../bower_components/angular-aria/angular-aria',
    'angular-material': '../../bower_components/angular-material/angular-material',
    'angular-bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    'angular-moment': '../../bower_components/angular-moment/angular-moment',
    moment: '../../bower_components/moment/moment',
    angularfire: '../../bower_components/angularfire/dist/angularfire',
    firebase: '../../bower_components/firebase/firebase'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-route': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-animate': [
      'angular'
    ],
    'angular-touch': [
      'angular'
    ],
    'angular-messages': [
      'angular'
    ],
    'angular-aria': [
      'angular'
    ],
    'angular-material': [
      'angular'
    ],
    'angular-bootstrap': [
      'angular'
    ],
    'angular-moment': [
      'angular'
    ],
    moment: [
      'angular'
    ],
    firebase: [
      'angular'
    ],
    angularfire: [
      'firebase'
    ],
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    }
  },
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'angular-touch',
  'angular-messages',
  'angular-aria',
  'angular-material',
  'angular-bootstrap',
  'angular-moment',
  'moment',
  // 'aws',
  'firebase',
  'angularfire'
], function(angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch, ngMessages, ngAria, ngMaterial) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
