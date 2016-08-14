function StereosController(stereos, $filter) {

  var ctrl = this
  ctrl.stereos = stereos.data
  debugger;


}

angular
  .module('app')
  .controller('StereosController', StereosController);
