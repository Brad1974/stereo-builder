function componentForm () {
  return {
    scope: {comp: "="},
    replace: true,
    templateUrl: 'app/views/directive_templates/componentForm.html'
  }
}

angular
  .module('app')
  .directive('componentForm', componentForm);
