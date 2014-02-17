'use strict';

angular.module('carnetApp')
  .directive('notebook', function () {
        return {
            restrict: 'E',
            scope: {
                notebook: '=',
                update: '&'
            },
            template: '<form class="form-horizontal" role="form">' +
                '<div class="form-group">' +
                '<label for="inputTitre" class="col-sm-2 control-label">Titre</label>' +
                '<div class="col-sm-10">' +
                '<input type="text" class="form-control" id="inputTitre" placeholder="Title" ng-model="notebook.title">'+
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label for="inputText" class="col-sm-2 control-label">Texte</label>' +
                '<div class="col-sm-10">'+
                '<textarea class="form-control" id="inputText" ng-model="notebook.description"></textarea>' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<div class="col-sm-offset-2 col-sm-10">' +
                '<button type="submit" class="btn btn-primary btn-lg" ng-click="update({notebook:notebook})">Save</button>' +
                '</div>' +
                '</div>' +
                '</form>',
            link: function (scope, element, attrs) {
            }
        };
  });
