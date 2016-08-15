function allOrNone(DataService) {
  return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {


  		}
  	}
  }

angular
    .module('app')
    .directive('allOrNone', allOrNone);
