function DataService($http) {

  this.getStereo = function(id) {
    return $http.get('/stereos/' + id);
  }

  this.getComments = function(id) {
    return $http.get('/stereos/' + id + '/comments')
  }

  this.postComment = function(id, newcomment){
    return $http.post('/stereos/' + id + '/comments', {newcomment} )
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

  this.removeComp = function(comp, i) {
    return $http.patch('/components/' + comp.id + '/remove_assoc', i);
  }



}

angular
    .module('app')
    .service('DataService', DataService);
