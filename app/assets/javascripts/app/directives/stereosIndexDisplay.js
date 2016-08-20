function stereosIndexDisplay () {
  return {
    scope: { stereo: "="},
    replace: true,
    templateUrl: 'app/views/directive_templates/stereosIndexDisplay.html',
    controller: function($scope) {
      debugger;
      $scope.receiver = $scope.stereo.component_attributes.filter(function(x){return x.category == "receiver"})[0] || "";
      $scope.speaker = $scope.stereo.component_attributes.filter(function(x){return x.category == "speaker"})[0] || "";
      $scope.media_player = $scope.stereo.component_attributes.filter(function(x){return x.category == "media_player"})[0] || "";

    }
  }
}

angular
  .module('app')
  .directive('stereosIndexDisplay', stereosIndexDisplay);
