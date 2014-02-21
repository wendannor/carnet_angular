'use strict';

angular.module('carnetApp')
  .controller('RootCtrl', function ($rootScope) {
        $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
            console.log(rejection);
            //TODO make a general popin to announce that something went wrong
        })
  });
