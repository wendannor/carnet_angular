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

    var getAllNotebook = function () {
        $http.get('/carnet_angular/server/api/notebooks').success(function (data) {
            $log.debug('get all notebook = ');
            $log.debug(data);
            $scope.notebooks = data;
        });
    };

    getAllNotebook();

    $scope.delete = function (id) {
        $http.delete('/carnet_angular/server/api/notebook/' + id).success(function (data) {
            $log.debug(data);
            getAllNotebook();
        });
    };

});

app.controller('NotebookCtrl', function ($scope) {
});

app.controller('NotebookEditCtrl', function ($scope, $routeParams, $log, $http, $location) {

    var id = $routeParams.id;
    if (id != 0) {
        $http.get('/carnet_angular/server/api/notebook/' + id).success(function (data) {
            $scope.notebook = data;
        });
    }

    $scope.updateNotebook = function (notebook) {
        $log.debug('On update');

        $log.debug(notebook);

        var success = function (data) {
            $log.debug(data);
            $scope.ok = true;
            $scope.msgNotification = "Notebook saved";
            if (id == 0) {
                $location.path("/notebook_listing");
            }
        };
        var failure = function (error) {
            $log.debug(error);
            $scope.ok = false;
            $scope.msgNotification = "An error has occured";
        };
        if (id != 0) {
            $http.put('/carnet_angular/server/api/notebook/' + id, notebook).success(success).error(failure);
        } else {
            //TODO remove the hard coded id user
            notebook.idUser = 1;
            $http.post('/carnet_angular/server/api/notebook', notebook).success(success).error(failure);
        }
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
