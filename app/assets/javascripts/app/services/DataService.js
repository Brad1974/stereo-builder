function DataService($http) {

  this.getStereos = function() {
    return $http.get('/stereos.json');
  }

  this.postStereo = function(newProfile) {
  return $http.post('/stereos', { stereo: newProfile } )
  }

  this.getComponents = function() {
  return $http.get('/components.json');
}

}

angular
    .module('app')
    .service('DataService', DataService);
