'use strict';

var notebookListingCtrl = angular.module('carnetApp')
    .controller('NotebookListingCtrl', function ($scope, $log, $http, notebooks, apiEndPoint) {

        var getAllNotebook = function () {
            $http.get(apiEndPoint + '/notebooks').success(function (data) {
                $log.debug('get all notebook = ');
                $log.debug(data);
                $scope.notebooks = data;
            });
        };

        $scope.delete = function (id) {
            $http.delete(apiEndPoint + '/notebook/' + id).success(function (data) {
                $log.debug(data);
                getAllNotebook();
            });
        };

        $scope.notebooks = notebooks;

    });

notebookListingCtrl.getAllNotebooks = function ($q, $http, apiEndPoint) {
    var defer = $q.defer();

    $http.get(apiEndPoint + '/notebooks').success(function (data) {
        defer.resolve(data);
    })
    .error(function () {
            defer.reject("An error has occured");
    });

    return defer.promise;
}
