'use strict';

describe('Service: Paciente', function () {

  // load the service's module
  beforeEach(module('alfatecApp'));

  // instantiate service
  var Paciente;
  beforeEach(inject(function (_Paciente_) {
    Paciente = _Paciente_;
  }));

  it('should do something', function () {
    expect(!!Paciente).toBe(true);
  });

});
