function DataService($http) {

  this.getStereo = function(id) {
    return $http.get('/stereos/' + id);
  }

  this.getStereos = function() {
    return $http.get('/stereos.json');
  }

  this.postStereo = function(newProfile) {
    return $http.post('/stereos', { stereo: newProfile } )
  }

  this.updateStereo = function(stereo) {
    return $http.patch('/stereos/' + stereo.id, stereo )
  }

  this.getComponents = function() {
    return $http.get('/components.json');
  }

  this.deleteStereo = function(id) {
    return $http.delete('/stereos/' + id);
  }

}

angular
    .module('app')
    .service('DataService', DataService);
