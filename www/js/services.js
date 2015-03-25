angular.module('starter.services', [])

.factory('Proyectos', function($http) {

  return {
    all: function(callback) {
      $http.get('http://192.168.1.37:1334/api/projects').success(callback);
    },
    get: function(id, callback) {
      $http.get('http://192.168.1.37:1334/api/projects/'+id).success(callback);
    }
  };
})

.factory('Images', function($http){
    return{

        getImages: function(id, callback){
            $http.get('http://192.168.1.37:1334/api/projects/'+id+'/images').success(callback);
        },

        getProject: function(id, callback) {
          $http.get('http://192.168.1.37:1334/api/projects/'+id).success(callback);
        }
    };
});
