'use strict';

describe('Directive: notebook', function () {

  // load the directive's module
  beforeEach(module('carnetApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<notebook></notebook>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the notebook directive');
  }));
});
