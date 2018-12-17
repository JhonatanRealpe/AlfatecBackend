/* global IDBKeyRange */

'use strict';

/**
 * @ngdoc service
 * @name alfatecApp.Usuario
 * @description
 * # Usuario
 * Service in the alfatecApp.
 */
angular.module('alfatecApp')
        .service('Usuario', function ($q) {
            this.setUp = false;

            this.initDb = function () {
                var deferred = $q.defer();

                if (this.setUp) {
                    deferred.resolve(this.db);
                    return deferred.promise;
                }

                var dbName = "alfatec";
                var request = indexedDB.open(dbName, 1);

                request.onError = function (event) {
                    deferred.reject(e.toString());
                };

                request.onsuccess = function (event) {
                    this.db = event.target.result;
                    this.setUp = true;
                    deferred.resolve(this.db);
                };

                return deferred.promise;
            };

            this.getUsers = function () {
                var deferred = $q.defer();
                this.initDb().then(function (db) {
                    var transaction = db.transaction("usuario", 'readwrite');
                    var objectStore = transaction.objectStore("usuario");

                    objectStore.getAll().onsuccess = function (event) {
                        deferred.resolve(event.target.result)
                    }
                });
                return deferred.promise;
            };

            this.getUser = function (id) {
                var deferred = $q.defer();
                this.initDb().then(function (db) {
                    var transaction = db.transaction("usuario", 'readwrite');
                    var objectStore = transaction.objectStore("usuario");

                    objectStore.get(id).onsuccess = function (event) {
                        deferred.resolve(event.target.result);
                    };
                });
                return deferred.promise;
            };

            this.newUser = function (newUser) {
                var deferred = $q.defer();
                this.initDb().then(function (db) {
                    var transaction = db.transaction("usuario", 'readwrite');
                    var objectStore = transaction.objectStore("usuario");
                    objectStore.put(newUser).onsuccess = function (event) {
                        deferred.resolve(true);
                    };
                });
                return deferred.promise;
            };
            
            this.updateUser = function (oldId, newUser) {
                var deferred = $q.defer();
                this.initDb().then(function (db) {
                    var transaction = db.transaction("usuario", 'readwrite');
                    var objectStore = transaction.objectStore("usuario");
                    objectStore.put(newUser).onsuccess = function (event) {
                        deferred.resolve(true);
                    };
                });
                return deferred.promise;
            };

            this.deleteUser = function (id) {
                var deferred = $q.defer();
                this.initDb().then(function (db) {
                    var transaction = db.transaction("usuario", 'readwrite');
                    var objectStore = transaction.objectStore("usuario");

                    objectStore.delete(id).onsuccess = function (event) {
                        deferred.resolve(true);
                    };
                });
                return deferred.promise;
            };

            this.deleteDoctors = function () {
                console.log("Lalalala");
                var deferred = $q.defer();
                this.initDb().then(function (db) {
                    var transaction = db.transaction("usuario", 'readwrite');
                    var objectStore = transaction.objectStore("usuario");
                    var index = objectStore.index("tipoProfesional");
                    var range = IDBKeyRange.only("medico");
                    var getAllKeysRequest = index.getAllKeys(range);
                    getAllKeysRequest.onsuccess = function () {
                        deferred.resolve(getAllKeysRequest.result);
                        getAllKeysRequest.result.forEach(function (element) {
                            objectStore.delete(element);
                        });
                    };

                });
                return deferred.promise;

            };
        });
