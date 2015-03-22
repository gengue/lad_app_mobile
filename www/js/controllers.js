angular.module('starter.controllers', [])

.controller('QuienesSomosCtrl', function($scope) {})

.controller('ProyectosCtrl', function($scope, Proyectos) {
  Proyectos.all(function(data){
      $scope.proyectos = data.projects; 
  });
})

.controller('ProyectoDetalleCtrl', function($scope, $stateParams, Proyectos) {
  Proyectos.get($stateParams.proyectoId, function(data){
    $scope.proyecto = data.project; 
  });
})

.controller('CompartirCtrl', function($scope) {

})

.controller('MapaCtrl', function($scope){
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 12 };
    $scope.marker = {
          id: 0,
          coords: {
            latitude: 45,
            longitude: -73
          },
          options: { draggable: false},
          events: { }
    };
});
