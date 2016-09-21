function nameTaken(DataService) {
  return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ctrl) {
        if (element[0].getAttribute('name') == "stereoName")
          { element[0].setAttribute('data', scope.ctrl.stereo.name) }
        if (element[0].getAttribute('name') == "compName")
          { element[0].setAttribute('data', scope.$parent.comp.name) }

        element[0].addEventListener('change', function(){
          value = element[0].value
          name = element[0].name
          if (name === 'stereoName')


          {

            if (value != element[0].getAttribute('data'))

            DataService.getStereos()
                .then(function(result){
                  if ( (result.data.filter(function(x){return x.name === value })).length > 0   )

                    { ctrl.$setValidity('nameTaken', false)}

                  else { ctrl.$setValidity('nameTaken', true) }
                });
          }

          else

          if (value != element[0].getAttribute('data'))
// no longer needed because my edit form doesn't give access to that field anymore...
          {
            DataService.getComponents()
            .then(function(result){
              if ( (result.data.filter(function(x){return x.name === value })).length > 0   )

                { ctrl.$setValidity('nameTaken', false)}

              else { ctrl.$setValidity('nameTaken', true) }
            });
          }

        });

        }
  		}
  	}

angular
    .module('app')
    .directive('nameTaken', nameTaken);
