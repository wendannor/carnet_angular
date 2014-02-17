'use strict';

angular.module('carnetApp')
    .controller('SigninCtrl', function ($scope, $log, $http, userService) {
        var user = {
            login: '',
            password: ''
        };

        $scope.signIn = function (user) {
            console.log("SignIn with user " + user.login);
            // coder l'appel AJAX
            $http.post('authentification/verification.php', user).success(function (data) {
                $log.debug('Reception connexion : ');
                userService = data;
            });
        };

        $scope.user = user;
    });
