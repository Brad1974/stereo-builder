function stereoDisplay () {
  return {
    scope: { stereo: "="},
    replace: true,
    templateUrl: 'app/views/directive_templates/stereoDisplay.html',
    controller: function($scope) {

      var a = parseInt($scope.stereo.component_attributes[0].price) || 0
      var b = parseInt($scope.stereo.component_attributes[1].price) || 0
      var c = parseInt($scope.stereo.component_attributes[2].price) || 0

      $scope.total = function(){
        return (a+b+c)
      }
      // debugger;
    }
  }
}

angular
  .module('app')
  .directive('stereoDisplay', stereoDisplay);
