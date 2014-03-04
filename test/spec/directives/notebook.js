'use strict';

describe('Directive: notebook', function () {

    // load the directive's module
    beforeEach(module('carnetApp'));

    var element,
        scope,
        notebook;

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        notebook = {
            "title": "My title",
            "content": "My content"
        }
        element = angular.element('<notebook notebook="notebook"></notebook>');
        element = $compile(element)(scope);
    }));

    it('should make hidden element visible', function ($compile) {
        expect(element.text()).toBe('this is the notebook directive');
    });

    it('should have title', function () {
        $scope.$digest();
        expect(element.children()).toContain('My Title');
    })

});
