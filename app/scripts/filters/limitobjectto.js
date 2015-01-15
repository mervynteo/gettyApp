define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc filter
   * @name gettyApp.filter:limitObjectTo
   * @function
   * @description
   * # limitObjectTo
   * Filter in the gettyApp.
   */
  angular.module('gettyApp.filters.LimitObjectTo', [])
  	.filter('limitObjectTo', function () {
    	return function(obj, limit){
        var keys=[];

        if(typeof(obj)==='object') {
          keys = Object.keys(obj);
        }

        if(keys.length < 1){
            return [];
        }

        // var ret = new Object(),
        var ret = {},
        count = 0;
        angular.forEach(keys, function(key){
            if(count >= limit){
                return false;
            }
            ret[key] = obj[key];
            count++;
        });
        return ret;
      };
  	});
});
