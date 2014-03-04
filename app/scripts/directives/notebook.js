'use strict';

angular.module('carnetApp')
    .directive('notebook', function () {
        return {
            restrict: 'E',
            scope: {
                notebook: '='
            },
            templateUrl: 'scripts/directives/notebook-template.html',
            controller: function ($scope, $log, $http, apiEndPoint) {

                $scope.update = function (notebook) {
                    $log.debug('On update');

                    $log.debug(notebook);

                    var success = function (data) {
                        $log.debug(data);
                        $scope.ok = true;
                        $scope.msgNotification = "Notebook saved";
                        if ($scope.notebook.idNotebook == 0) {
                            $location.path("/notebook_listing");
                        }
                    };
                    var failure = function (error) {
                        $log.debug(error);
                        $scope.ok = false;
                        $scope.msgNotification = "An error has occured";
                    };
                    if ($scope.notebook.idNotebook != 0) {
                        $http.put(apiEndPoint + '/notebook/' + $scope.notebook.idNotebook, notebook).success(success).error(failure);
                    } else {
                        //TODO remove the hard coded id user
                        notebook.idUser = 1;
                        $http.post(apiEndPoint + '/notebook', notebook).success(success).error(failure);
                    }
                };

            },
            link: function (scope, element, attrs) {
            }
        };
    });