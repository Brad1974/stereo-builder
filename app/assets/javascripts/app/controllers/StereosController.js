StereosController.$inject = ["stereos", "$state", "$stateParams"];

function StereosController(stereos, $state, $stateParams) {

  var ctrl = this
  ctrl.stereos = stereos.data

}

angular
  .module('app')
  .controller('StereosController', StereosController);
