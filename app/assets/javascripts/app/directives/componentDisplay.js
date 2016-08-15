function componentDisplay () {
  return {
    scope: {component: "="},
    templateUrl: 'app/views/directive_templates/componentDisplay.html'
  }
}

angular
  .module('app')
  .directive('componentDisplay', componentDisplay);
