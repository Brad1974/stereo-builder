function stereoDisplay () {
  return {
    scope: { stereo: "="},
    replace: true,
    templateUrl: 'app/views/directive_templates/stereoDisplay.html',
    controller: function($scope) {

// assigns stereo component_attributes to variables
      $scope.receiver = $scope.stereo.component_attributes.filter(function(x){return x.category == "receiver"})[0] || "";
      $scope.speaker = $scope.stereo.component_attributes.filter(function(x){return x.category == "speaker"})[0] || "";
      $scope.turntable = $scope.stereo.component_attributes.filter(function(x){return x.category == "turntable"})[0] || "";
    }
  }
}

angular
  .module('app')
  .directive('stereoDisplay', stereoDisplay);
