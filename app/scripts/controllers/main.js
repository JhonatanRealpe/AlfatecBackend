'use strict';

/**
 * @ngdoc function
 * @name alfatecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alfatecApp
 */
angular.module('alfatecApp')
        .controller('MainCtrl', function (Usuario, $scope, $ngConfirm) {

            var vm = this;
            vm.show = "all";
            vm.newUser = {};
            //vtn User
            vm.showUser = function (id) {
                vm.show = "userDetails";
                Usuario.getUser(id).then(function (data) {
                    vm.currUser = data;
                    vm.currUser.fullName = data.nombre.nombre + " "
                            + data.nombre.apellido1 + " "
                            + data.nombre.apellido2;
                    vm.currUser.genero = vm.currUser.genero === 'M' ? "Masculino" : "Femenino";
                    vm.currUser.direccion = "Calle " + vm.currUser.direccion.calle + ", "
                            + "Número " + vm.currUser.direccion.numero + ", "
                            + "Puerta " + vm.currUser.direccion.puerta + ", "
                            + "Código postal " + vm.currUser.direccion.codigoPostal + ", "
                            + "ciudad " + vm.currUser.direccion.ciudad;
                });
            };

            vm.saveUser = function () {
                Usuario.newUser(vm.newUser).then(function (data) {
                    if (data) {
                        vm.newUser = {};
                        vm.currUser = {};
                        vm.loadUsers(function () {
                            vm.show = "all";
                        });
                    }
                });
            };

            vm.updateUser = function () {
                Usuario.updateUser(vm.oldId, vm.currUser).then(function (data) {
                    if (data) {
                        vm.loadUsers(function () {
                            vm.show = "all";
                        });
                    }
                });
            };
            
            //vtnEditUser
            vm.editUser = function (id) {

                Usuario.getUser(id).then(function (data) {
                    vm.currUser = data;
                    vm.oldId = data.id;
                    vm.currUser.fullName = data.nombre.nombre + " "
                            + data.nombre.apellido1 + " "
                            + data.nombre.apellido2;
                    vm.currUser.genero = vm.currUser.genero === 'M' ? "Masculino" : "Femenino";
                    vm.currUser.direccion = "Calle " + vm.currUser.direccion.calle + ", "
                            + "Número " + vm.currUser.direccion.numero + ", "
                            + "Puerta " + vm.currUser.direccion.puerta + ", "
                            + "Código postal " + vm.currUser.direccion.codigoPostal + ", "
                            + "ciudad " + vm.currUser.direccion.ciudad;
                });
                vm.show = "editUser";
            };

            vm.deleteUser = function (id) {

                $ngConfirm({
                    title: 'Confirmar eliminación',
                    content: '¿Está seguro de que desea borrar el usuario?',
                    scope: $scope,
                    buttons: {
                        yes: {
                            text: 'Si',
                            btnClass: 'btn-warning',
                            action: function (scope, button) {
                                Usuario.deleteUser(id).then(function (data) {
                                    if (data) {
                                        vm.loadUsers(function () {
                                            vm.show = "all";
                                            $ngConfirm('Registro eliminado');
                                        });
                                    }
                                });
                            }
                        },
                        no: {
                            text: 'No',
                            btnClass: 'btn-primary',
                            action: function (scope, button) {

                            }
                        }
                    }

                });
            };

            vm.deleteDoctors = function () {
                $ngConfirm({
                    title: 'Confirmar eliminación',
                    content: '¿Está seguro de que desea borrar los registros de tipo médico?',
                    scope: $scope,
                    buttons: {
                        yes: {
                            text: 'Si',
                            btnClass: 'btn-warning',
                            action: function (scope, button) {
                                Usuario.deleteDoctors().then(function (data) {
                                    if (data) {
                                        vm.loadUsers(function () {
                                            vm.show = "all";
                                            $ngConfirm('Registros eliminado');
                                        });
                                    }
                                });
                            }
                        },
                        no: {
                            text: 'No',
                            btnClass: 'btn-primary',
                            action: function (scope, button) {

                            }
                        }
                    }

                });
            };

            vm.cancelSave = function () {
                vm.currUser = {};
                vm.newUser = {};
                vm.show = "all";
            }

            vm.loadUsers = function (callback) {
                Usuario.getUsers().then(function (data) {
                    vm.usuarios = data;
                    vm.usuarios.forEach(function (element) {
                        element.fullName = element.nombre.nombre + " "
                                + element.nombre.apellido1 + " "
                                + element.nombre.apellido2;
                    });
                    if (callback) {
                        callback();
                    }
                });
            }

            vm.loadUsers();
        });
