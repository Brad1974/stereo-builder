function DataService($http) {

  this.getStereos = function() {
    return $http.get('/stereos.json');
  }

}

angular
    .module('app')
    .service('DataService', DataService);
