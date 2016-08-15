function ComponentsController(components) {

  var ctrl = this
  ctrl.components = components.data


}

angular
  .module('app')
  .controller('ComponentsController', ComponentsController);
