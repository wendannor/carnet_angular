'use strict';

angular.module('carnetApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/note_edit', {
        templateUrl: 'views/note_edit.html',
        controller: 'NoteEditCtrl'
      })
      .when('/notebook_edit/:id', {
        templateUrl: 'views/notebook_edit.html',
        controller: 'NotebookEditCtrl'
      })
      .when('/notebook_listing', {
        templateUrl: 'views/notebook_listing.html',
        controller: 'NotebookListingCtrl'
      })
      .when('/notebook', {
        templateUrl: 'views/notebook.html',
        controller: 'NotebookCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });