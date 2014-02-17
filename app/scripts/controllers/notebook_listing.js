'use strict';

angular.module('carnetApp')
    .controller('NotebookListingCtrl', function ($scope, $log, $http) {

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
