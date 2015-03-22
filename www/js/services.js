angular.module('starter.services', [])

.factory('Proyectos', function($http) {

  return {
    all: function(callback) {
      $http.get('http://localhost:8000/api/projects').success(callback);
    },
    get: function(id, callback) {
      $http.get('http://localhost:8000/api/projects/'+id).success(callback);
    }
  };
});
