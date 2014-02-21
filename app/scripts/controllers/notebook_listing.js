'use strict';

var notebookListingCtrl = angular.module('carnetApp')
    .controller('NotebookListingCtrl', function ($scope, $log, $http, notebooks) {

//        var getAllNotebook = function () {
//            $http.get('/carnet_angular/server/api/notebooks').success(function (data) {
//                $log.debug('get all notebook = ');
//                $log.debug(data);
//                $scope.notebooks = data;
//            });
//        };
//
//        getAllNotebook();

        $scope.delete = function (id) {
            $http.delete('/carnet_angular/server/api/notebook/' + id).success(function (data) {
                $log.debug(data);
                getAllNotebook();
            });
        };

        $scope.notebooks = notebooks;

    });

notebookListingCtrl.getAllNotebooks = function ($q, $http) {
    var defer = $q.defer();

    $http.get('/carnet_angular/server/api/notebooks').success(function (data) {
        defer.resolve(data);
    })
    .error(function () {
            defer.reject("An error has occured");
    });

    return defer.promise;
}
