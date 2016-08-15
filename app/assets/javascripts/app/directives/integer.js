function integer($filter) {
  return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {

        ngModel.$parsers.push(function (str) {
          var x = str.replace("$", "")
          var y = x.replace(",", "")
          return parseInt((100 * y))
  			});

        ngModel.$formatters.push(function(str) {
          if (str > 0) {
          return $filter('currency')(str / 100);
        }
        });

  		}
  	}
  }

angular
    .module('app')
    .directive('integer', integer);
