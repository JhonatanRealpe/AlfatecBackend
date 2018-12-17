/* global indexedDB */

'use strict';

/**
 * @ngdoc service
 * @name alfatecApp.Paciente
 * @description
 * # Paciente
 * Service in the alfatecApp.
 */
angular.module('alfatecApp')
        .service('Paciente', function ($q) {

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
                    var index = objectStore.index("tipo");
                    var range = IDBKeyRange.only("paciente");
                    var getAllKeysRequest = index.getAllKeys(range);
                    getAllKeysRequest.onsuccess = function () {
                        deferred.resolve(getAllKeysRequest.result);
                    };
                });
                return deferred.promise;

            };
        });
