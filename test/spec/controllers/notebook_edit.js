'use strict';

describe('Controller: NotebookEditCtrl', function () {

  // load the controller's module
  beforeEach(module('carnetApp'));

  var NotebookEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotebookEditCtrl = $controller('NotebookEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
