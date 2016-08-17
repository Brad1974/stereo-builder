function stereoForm () {
  return {
    scope: {stereo: "=", add: "&"},
    replace: true,
    templateUrl: 'app/views/directive_templates/stereoForm.html',
    controller: function($scope) {
      $scope.daniel = function(){
        if ( $scope.stereo.component_attributes.filter(function(c){return c.name != ""}).length > 0  )
          { return false }
        else
          { return true  }
        }
    }
  }
}

angular
  .module('app')
  .directive('stereoForm', stereoForm);
