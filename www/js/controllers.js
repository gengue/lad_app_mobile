angular.module('starter.controllers', [])

// .controller('HomeCtrl', function($scope){})

.controller('QuienesSomosCtrl', function($scope) {})

.controller('MisionCtrl', function($scope) {})

.controller('VisionCtrl', function($scope) {})

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

.controller('SlideCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate, Images){

  $scope.interval = 1500;

    $scope.slideHasChanged = function(index) {
        $scope.slideIndex = index;
        if ( ($ionicSlideBoxDelegate.count()) == index ) {
            $timeout(function(){
                $ionicSlideBoxDelegate.slide(0);
            }, $scope.interval);
        }
    };

  Images.getImages($stateParams.proyectoId, function(data){
    $scope.imagenes = data.images;
  });

  Images.getProject($stateParams.proyectoId, function(data){
    $scope.proyecto = data.project;
  });
  
})

.controller('LadCtrl', function($scope, $ionicSlideBoxDelegate) {

$scope.interval = 2000;

    $scope.slideHasChanged = function(index) {
        $scope.slideIndex = index;
        if ( ($ionicSlideBoxDelegate.count()) == index ) {
            $timeout(function(){
                $ionicSlideBoxDelegate.slide(0);
            }, $scope.interval);
        }
    };
})

.controller('CompartirCtrl', function($scope, uiGmapGoogleMapApi) {})

.controller('MapaCtrl', function($scope){
    $scope.map = { 
          center: { latitude: 11.243780253929911, longitude: -74.21373098171046 }, 
          zoom: 19, 
          options: { 
                      draggable: false,
                      scrollwheel: false,
                      navigationControl: false,
                      mapTypeControl: false,
                      scaleControl: false,
                      zoomControl: false,
                      streetViewControl: false
                    }

        };

    $scope.marker = {
          id: 0,
          coords: {
            latitude: 11.243780253929911,
            longitude: -74.21373098171046
          },
          options: { draggable: false},
          events: { }
    };
});
