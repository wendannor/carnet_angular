var app = angular.module("CarnetApp",
    ['ngRoute',
        'Carnet.services'
    ]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: 'home.html'
        })
        .when('/connexion', {
            controller: "ConnexionCtrl",
            templateUrl: "connexion.html"
        })
        .when('/inscription', {
            controller: "InscriptionCtrl",
            templateUrl: "inscription.html"
        })
        .when('/apropos', {
            controller: 'AProposCtrl',
            templateUrl: 'apropos.html'
        })
        .when('/carnet_listing', {
            controller: 'CarnetListingCtrl',
            templateUrl: 'carnet_listing.html'
        })
        .when('/carnet/:id', {
            controller: 'CarnetCtrl',
            templateUrl: 'carnet.html'
        })
        .when('/carnet_edit/:id', {
            controller: 'CarnetEditCtrl',
            templateUrl: 'carnet_edit.html'
        })
        .when('/note', {
            controller: 'NoteCtrl',
            templateUrl: 'note.html'
        })
        .when('/note_edit', {
            controller: 'NoteEditCtrl',
            templateUrl: 'note_edit.html'
        })

        .otherwise({
            redirectTo: '/'
        });
});

app.controller('HomeCtrl', function ($scope) {
});

app.controller('AProposCtrl', function ($scope) {
});

app.controller('CarnetListingCtrl', function ($scope, $http, $log) {

    $http.get('http://localhost:8888/carnet_angular/server/api/carnets').success(function (data) {
        $log.debug('get all carnet = ');
        $log.debug(data);
        $scope.carnets = data;
    });

});

app.controller('CarnetCtrl', function ($scope) {
});

app.controller('CarnetEditCtrl', function ($scope, $routeParams, $log, $http) {

    $log.debug($routeParams.id);
    var id = $routeParams.id;
    $http.get('/carnet_angular/server/api/carnet/' + id).success(function (data) {
        $scope.carnet = data;
    });

    $scope.updateCarnet = function (carnet) {
        $http.put('/carnet_angular/server/api/carnet/' + id, carnet).success(function (data) {
            $log.debug(data);
        }).error(function (error) {
            $log.debug(error);
        });
    };

});

app.controller('NoteCtrl', function ($scope) {
});

app.controller('NoteEditCtrl', function ($scope) {
});

app.controller('InscriptionCtrl', function ($scope) {
});

app.controller('ConnexionCtrl', function ($scope, $http, $log, UserService) {
    var user = {
        login: '',
        password: ''
    };

    $scope.signIn = function (user) {
        console.log("SignIn with user " + user.login);
        // coder l'appel AJAX
        $http.post('authentification/verification.php', user).success(function (data) {
            $log.debug('Reception connexion : ');
            UserService = data;
        });
    };

    $scope.user = user;
});