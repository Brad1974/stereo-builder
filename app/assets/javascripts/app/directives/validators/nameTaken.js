function nameTaken(DataService) {
  return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ctrl) {
        element[0].addEventListener('change', function(){
          value = element[0].value
          DataService.getComponents()
          .then(function(result){
            if ( (result.data.filter(function(c){return c.name === value })).length > 0   )
            { ctrl.$setValidity('nameTaken', false)}
            else { ctrl.$setValidity('nameTaken', true) }
          })
        });

  		}
  	}
  }

angular
    .module('app')
    .directive('nameTaken', nameTaken);
