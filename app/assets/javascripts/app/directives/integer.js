integer.$inject = ["$filter"];

function integer($filter) {
return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {

      // cleans up my price input and converts it into a cents integer
      ngModel.$parsers.push(function (str) {
        var x = str.replace("$", "")
        var y = x.replace(",", "")
        return parseInt((100 * y))
      });

      // displays my price input as dollars and cents currency in my input fields
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
