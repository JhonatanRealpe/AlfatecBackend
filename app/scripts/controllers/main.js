'use strict';

angular.module('pruebaAlfatecFronendApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://localhost:9000/usuarios.json').success(function(data){
      $scope.usuarios = data
    })
    $scope.gridOptions = {
      data:'usuarios'
    }
    $scope.tareas = [];
    $scope.addTarea = function(){
      $scope.tareas.push($scope.tarea);
      $scope.tarea = '';
    };
    $scope.eliminarTarea = function(index){
      $scope.tareas.splice(index,1);
    };
  });
