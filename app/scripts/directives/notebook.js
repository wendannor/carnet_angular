'use strict';

angular.module('carnetApp')
    .directive('notebook', function () {
        return {
            restrict: 'E',
            scope: {
                notebook: '=',
                update: '&'
            },
            templateUrl: 'scripts/directives/notebook-template.html',
            link: function (scope, element, attrs) {
            }
        };
    });