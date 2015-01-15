define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc filter
   * @name gettyApp.filter:orderObjectBy
   * @function
   * @description
   * # orderObjectBy
   * Filter in the gettyApp.
   */
  angular.module('gettyApp.filters.OrderObjectBy', [])
  	.filter('orderObjectBy', function () {
      return function (items, field, reverse) {
      	var filtered = [];
        
        angular.forEach(items, function(item) {
          filtered.push(item);
        });
        
        filtered.sort(function (a, b) {
          return (a[field] > b[field] ? 1 : -1);
        });
        
        if(reverse) { filtered.reverse(); }
        
        return filtered;
      };
  	});
});
