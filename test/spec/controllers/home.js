'use strict';

describe('Controller: HomeCtrl', function () {

    // load the controller's module
    beforeEach(module('carnetApp'));

    var HomeCtrl,
        scope;
    var element;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $compile) {
        scope = $rootScope.$new();
        HomeCtrl = $controller('HomeCtrl', {
            $scope: scope
        });
        element = angular.element("<div>{{ 2 + 2 }}</div>")
        element = $compile(element)(scope);
    }));

    it('should be equal to 4', function () {
        scope.$digest();
        expect(element.html()).toBe('4');
    });

});
