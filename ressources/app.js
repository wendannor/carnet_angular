var app = angular.module("CarnetApp",
    ['ngRoute']);

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
            controller:'AProposCtrl',
            templateUrl: 'apropos.html'
        })
        .when('/carnet_listing', {
            controller:'CarnetListingCtrl',
            templateUrl: 'carnet_listing.html'
        })
        .when('/carnet', {
            controller:'CarnetCtrl',
            templateUrl: 'carnet.html'
        })
        .when('/carnet_edit', {
            controller:'CarnetEditCtrl',
            templateUrl: 'carnet_edit.html'
        })
        .when('/note', {
            controller:'NoteCtrl',
            templateUrl: 'note.html'
        })
        .when('/note_edit', {
            controller:'NoteEditCtrl',
            templateUrl: 'note_edit.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('HomeCtrl', function($scope){
});

app.controller('AProposCtrl', function($scope){
});

app.controller('CarnetListingCtrl', function($scope){
});

app.controller('CarnetCtrl', function($scope){
});

app.controller('CarnetEditCtrl', function($scope){
});

app.controller('NoteCtrl', function($scope){
});

app.controller('NoteEditCtrl', function($scope){
});

app.controller('InscriptionCtrl', function($scope){
});

app.controller('ConnexionCtrl', function($scope){
   var user = {
       login: '',
       password: ''
   };

    $scope.signIn = function(user) {
        console.log("SignIn with user " + user.login);
        // coder l'appel AJAX
    };

    $scope.user = user;
});