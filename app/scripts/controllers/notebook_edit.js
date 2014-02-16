'use strict';

angular.module('carnetApp')
    .controller('NotebookEditCtrl', function ($scope, $log, $http, $routeParams) {
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
