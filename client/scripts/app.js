var app = angular.module("CarnetApp",
    ['ngRoute',
        'Carnet.services'
    ]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: 'views/home.html'
        })
        .when('/signin', {
            controller: "SignInCtrl",
            templateUrl: "views/authentication.html"
        })
        .when('/signup', {
            controller: "InscriptionCtrl",
            templateUrl: "views/signup.html"
        })
        .when('/about', {
            controller: 'AProposCtrl',
            templateUrl: 'views/about.html'
        })
        .when('/notebook_listing', {
            controller: 'NotebookListingCtrl',
            templateUrl: 'views/notebook_listing.html'
        })
        .when('/notebook/:id', {
            controller: 'NotebookCtrl',
            templateUrl: 'views/notebook.html'
        })
        .when('/notebook_edit/:id', {
            controller: 'NotebookEditCtrl',
            templateUrl: 'views/notebook_edit.html'
        })
        .when('/note', {
            controller: 'NoteCtrl',
            templateUrl: 'views/note.html'
        })
        .when('/note_edit', {
            controller: 'NoteEditCtrl',
            templateUrl: 'views/note_edit.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('HomeCtrl', function ($scope) {
});

app.controller('AboutCtrl', function ($scope) {
});

app.controller('NotebookListingCtrl', function ($scope, $http, $log) {

    $http.get('/carnet_angular/server/api/notebooks').success(function (data) {
        $log.debug('get all notebook = ');
        $log.debug(data);
        $scope.notebooks = data;
    });

});

app.controller('NotebookCtrl', function ($scope) {
});

app.controller('NotebookEditCtrl', function ($scope, $routeParams, $log, $http) {

    $log.debug($routeParams.id);
    var id = $routeParams.id;
    $http.get('/carnet_angular/server/api/notebook/' + id).success(function (data) {
        $scope.notebook = data;
    });

    $scope.updateNotebook = function (notebook) {
        $http.put('/carnet_angular/server/api/notebook/' + id, notebook).success(function (data) {
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

app.controller('SingUpCtrl', function ($scope) {
});

app.controller('SignInCtrl', function ($scope, $http, $log, UserService) {
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