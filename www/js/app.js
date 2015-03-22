// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.quienes_somos', {
    url: '/quienes_somos',
    views: {
      'tab-quienes-somos': {
        templateUrl: 'templates/tab-quienes-somos.html',
        controller: 'QuienesSomosCtrl'
      }
    }
  })

  .state('tab.proyectos', {
      url: '/proyectos',
      views: {
        'tab-proyectos': {
          templateUrl: 'templates/tab-proyectos.html',
          controller: 'ProyectosCtrl'
        }
      }
    })
    .state('tab.proyectos-detalle', {
      url: '/proyectos/:proyectoId',
      views: {
        'tab-proyectos': {
          templateUrl: 'templates/proyecto-detalle.html',
          controller: 'ProyectoDetalleCtrl'
        }
      }
    })

  .state('tab.mapa', {
    url: '/mapa',
    views: {
      'tab-mapa': {
        templateUrl: 'templates/tab-mapa.html',
        controller: 'MapaCtrl'
      }
    }
  })
  .state('tab.compartir', {
     url: '/compartir',
     views: {
       'tab-compartir': {
         templateUrl: 'templates/tab-compartir.html',
         controller: 'CompartirCtrl'
       }
     }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/quienes_somos');

});
