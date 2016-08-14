function StereosController(stereos, $filter) {

  var ctrl = this
  ctrl.stereos = stereos.data



}

angular
  .module('app')
  .controller('StereosController', StereosController);
