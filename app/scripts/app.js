'use strict';
/**
 * @ngdoc overview
 * @nombre alfatecApp
 * @description
 * # alfatecApp
 *
 * Main module of the application.
 */
angular
        .module('alfatecApp', ['cp.ngConfirm'])
        .config(function () {
            if (!window.indexedDB) {
                window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
            }
            var dbName = "alfatec";
            var db;
            var request = indexedDB.open(dbName, 1);
            request.onerror = function (event) {

            };
            request.onsuccess = function (event) {
                db = request.result;

                var init = localStorage.getItem("init");
                if (!init) {
                    var tx = db.transaction("usuario", "readwrite");
                    var store = tx.objectStore("usuario");
                    store.put({id: "AB001", tipo: "paciente", nombre: {nombre: "Manuel", apellido1: "Perez", apellido2: "Perez"},
                        genero: "M", fechaNacimiento: "21/03/1981", nif: "ABCD001",
                        direccion: {calle: 1, numero: 5, puerta: 1, codigoPostal: 190001, ciudad: "Ciudad4"},
                        aseguradoras: [
                            {nombre: "aseguradora1", tipoSeguro: "salud", numeroTarjeta: "0001"},
                            {nombre: "aseguradora2", tipoSeguro: "familiar", numeroTarjeta: "0002"},
                            {nombre: "aseguradora3", tipoSeguro: "dental", numeroTarjeta: "0003"},
                            {nombre: "aseguradora4", tipoSeguro: "auto", numeroTarjeta: "0004"}
                        ]
                    });
                    store.put({id: "AB002", tipo: "paciente", nombre: {nombre: "Mauricio", apellido1: "Gomez", apellido2: "Gomez"},
                        genero: "M", fechaNacimiento: "21/03/1982", nif: "ABCD002",
                        direccion: {calle: 2, numero: 4, puerta: 5, codigoPostal: 190002, ciudad: "Ciudad5"},
                        aseguradoras: [
                            {nombre: "aseguradora1", tipoSeguro: "salud", numeroTarjeta: "0005"},
                            {nombre: "aseguradora2", tipoSeguro: "familiar", numeroTarjeta: "0006"},
                            {nombre: "aseguradora3", tipoSeguro: "dental", numeroTarjeta: "0007"},
                            {nombre: "aseguradora4", tipoSeguro: "auto", numeroTarjeta: "0008"}
                        ]
                    });
                    store.put({id: "AB003", tipo: "paciente", nombre: {nombre: "Aleja", apellido1: "Lujan", apellido2: "Ordoñez"},
                        genero: "F", fechaNacimiento: "21/03/1985", nif: "ABCD003",
                        direccion: {calle: 3, numero: 3, puerta: 2, codigoPostal: 190003, ciudad: "Ciudad1"},
                        aseguradoras: [
                            {nombre: "aseguradora1", tipoSeguro: "salud", numeroTarjeta: "0009"},
                            {nombre: "aseguradora2", tipoSeguro: "familiar", numeroTarjeta: "0010"},
                            {nombre: "aseguradora3", tipoSeguro: "dental", numeroTarjeta: "0011"},
                            {nombre: "aseguradora4", tipoSeguro: "auto", numeroTarjeta: "0012"}
                        ]
                    });
                    store.put({id: "AB004", tipo: "paciente", nombre: {nombre: "Alejandra", apellido1: "Solarte", apellido2: "Alegría"},
                        genero: "F", fechaNacimiento: "21/03/1990", nif: "ABCD004",
                        direccion: {calle: 4, numero: 2, puerta: 4, codigoPostal: 190004, ciudad: "Ciudad2"},
                        aseguradoras: [
                            {nombre: "aseguradora1", tipoSeguro: "salud", numeroTarjeta: "0013"},
                            {nombre: "aseguradora2", tipoSeguro: "familiar", numeroTarjeta: "0014"},
                            {nombre: "aseguradora3", tipoSeguro: "dental", numeroTarjeta: "0015"},
                            {nombre: "aseguradora4", tipoSeguro: "auto", numeroTarjeta: "0016"}
                        ]
                    });
                    store.put({id: "AB005", tipo: "paciente", nombre: {nombre: "Carolina", apellido1: "Guzman", apellido2: "Hormiga"},
                        genero: "F", fechaNacimiento: "21/03/1982", nif: "ABCD005",
                        direccion: {calle: 5, numero: 1, puerta: 3, codigoPostal: 190005, ciudad: "Ciudad3"},
                        aseguradoras: [
                            {nombre: "aseguradora1", tipoSeguro: "salud", numeroTarjeta: "0017"},
                            {nombre: "aseguradora2", tipoSeguro: "familiar", numeroTarjeta: "0018"},
                            {nombre: "aseguradora3", tipoSeguro: "dental", numeroTarjeta: "0019"},
                            {nombre: "aseguradora4", tipoSeguro: "auto", numeroTarjeta: "0020"}
                        ]
                    });

                    store.put({id: "NC001", tipo: "profesional", nombre: {nombre: "Alberto", apellido1: "Perez", apellido2: "Perez"},
                        genero: "M", fechaNacimiento: "21/03/1981", nif: "NCCD001", tipoProfesional: "medico",
                        direccion: {calle: 1, numero: 5, puerta: 1, codigoPostal: 190001, ciudad: "Ciudad4"}
                    });
                    store.put({id: "NC002", tipo: "profesional", nombre: {nombre: "Carlos", apellido1: "Gomez", apellido2: "Gomez"},
                        genero: "M", fechaNacimiento: "21/03/1982", nif: "NCCD002", tipoProfesional: "enfermero",
                        direccion: {calle: 2, numero: 4, puerta: 5, codigoPostal: 190002, ciudad: "Ciudad5"}
                    });
                    store.put({id: "NC003", tipo: "profesional", nombre: {nombre: "Diana", apellido1: "Lujan", apellido2: "Ordoñez"},
                        genero: "F", fechaNacimiento: "21/03/1985", nif: "NCCD003", tipoProfesional: "administrativo",
                        direccion: {calle: 3, numero: 3, puerta: 2, codigoPostal: 190003, ciudad: "Ciudad1"}
                    });
                    store.put({id: "NC004", tipo: "profesional", nombre: {nombre: "Alejandra", apellido1: "Solarte", apellido2: "Alegría"},
                        genero: "F", fechaNacimiento: "21/03/1990", nif: "NCCD004", tipoProfesional: "medico",
                        direccion: {calle: 4, numero: 2, puerta: 4, codigoPostal: 190004, ciudad: "Ciudad2"}
                    });
                    store.put({id: "NC005", tipo: "profesional", nombre: {nombre: "Carolina", apellido1: "Guzman", apellido2: "Hormiga"},
                        genero: "F", fechaNacimiento: "21/03/1982", nif: "NCCD005", tipoProfesional: "enfermero",
                        direccion: {calle: 5, numero: 1, puerta: 3, codigoPostal: 190005, ciudad: "Ciudad3"}
                    });
                    localStorage.setItem("init", true);
                }
            };
            request.onupgradeneeded = function (event) {
                var db = event.target.result;
                var usuarioStore = db.createObjectStore("usuario", {keyPath: "id"});
                usuarioStore.createIndex("tipo", "tipo");
                usuarioStore.createIndex("tipoProfesional", "tipoProfesional");
            };
        });
