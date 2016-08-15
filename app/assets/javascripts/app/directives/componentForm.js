function componentForm () {
  return {
    scope: {comp: "="},
    replace: true,
    templateUrl: 'app/views/directive_templates/componentForm.html',
    link: function (scope, element, attrs) {

      var sel = element[0].querySelector('select');

      sel.addEventListener('change', function () {

        if (scope.selectedComponent) {
          scope.comp.brand = scope.selectedComponent.brand
          scope.comp.name = scope.selectedComponent.name
          scope.comp.price = scope.selectedComponent.price
          scope.comp.url = scope.selectedComponent.url
          }

        else {
          scope.comp.brand = ""
          scope.comp.name = ""
          scope.comp.price = undefined
          scope.comp.url = ""
          }
	      scope.$apply();
      });
    }
  };
};

angular
  .module('app')
  .directive('componentForm', componentForm);
