function componentForm () {
  return {
    scope: {comp: "=", list: "=", i: "="},
    replace: true,
    templateUrl: 'app/views/directive_templates/componentForm.html',
    controllerAs: 'cp',
    controller: function($scope){
      if ($scope.list.filter(function(x){return x.length > 0}).length > 0)
      { $scope.menu = $scope.list.filter(function(x){return x[0].category == $scope.comp.category})[0] }
    },
    link: function (scope, element, attrs) {
      if (scope.list.filter(function(x){return x.length > 0}).length == 0)
      { element[0].querySelector('select').remove() }
      else {
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

    }
  };
};

angular
  .module('app')
  .directive('componentForm', componentForm);
