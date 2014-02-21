'use strict';

angular.module('carnetApp')
  .factory('userService', function () {
        var user  = {
            "login" : "",
            "nomComplet" : ""
        };

        return user;
  });
