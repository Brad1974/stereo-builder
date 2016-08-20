function componentForm () {
  return {
    scope: {comp: "=", list: "="},
    replace: true,
    templateUrl: 'app/views/directive_templates/componentForm.html',
    controllerAs: 'cp',
    controller: function($scope){
      $scope.menu = $scope.list.filter(function(x){return x[0].category == $scope.comp.category})[0]
    },
    link: function (scope, element, attrs) {

      var sel = element[0].querySelector('select');
      sel.addEventListener('change', function () {
        if (scope.selectedComponent) {
          scope.comp.brand = scope.selectedComponent.brand
          scope.comp.name = scope.selectedComponent.name
          scope.comp.price = scope.selectedComponent.price
          scope.comp.id = scope.selectedComponent.id
          }
        else {
          scope.comp.brand = ""
          scope.comp.name = ""
          scope.comp.price = ""
          scope.comp.url = ""
          scope.comp.id = ""
        }
	      scope.$apply();
      });

    }
  };
};

angular
  .module('app')
  .directive('componentForm', componentForm);
