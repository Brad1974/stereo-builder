function ComponentsController() {

  var ctrl = this
  ctrl.dan = "Daniel"

}

angular
  .module('app')
  .controller('ComponentsController', ComponentsController);
