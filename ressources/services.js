angular.module('Carnet.services', [])
    .factory('UserService', function () {
        var user  = {
            "login" : "",
            "nomComplet" : ""
        };

        return user;
    });
