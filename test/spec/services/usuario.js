'use strict';

describe('Service: Usuario', function () {

  // load the service's module
  beforeEach(module('alfatecApp'));

  // instantiate service
  var Usuario;
  beforeEach(inject(function (_Usuario_) {
    Usuario = _Usuario_;
  }));

  it('should do something', function () {
    expect(!!Usuario).toBe(true);
  });

});
