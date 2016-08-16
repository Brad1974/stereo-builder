function onlyNumbers() {
  return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        ngModel.$validators.onlyNumbers = function (value) {
          return (/^(\s*|\d+)$/).test(value);
  			};
  		}
  	}
  }

angular
    .module('app')
    .directive('onlyNumbers', onlyNumbers);
