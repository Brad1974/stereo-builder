function ComponentsController(components, $filter) {

  var ctrl = this
  ctrl.components = components.data
  ctrl.sortColumn = 'name';
  ctrl.sortReverse = false;


}

angular
  .module('app')
  .controller('ComponentsController', ComponentsController);
