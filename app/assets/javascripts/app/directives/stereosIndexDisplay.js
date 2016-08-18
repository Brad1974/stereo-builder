function stereosIndexDisplay () {
  return {
    scope: {},
    replace: true,
    templateUrl: 'app/views/directive_templates/stereosIndexDisplay.html',
    bindToController: { stereo: "="},
    controllerAs: 'ctrl',
    controller: function() {
      ctrl = this
      ctrl.receiver = ctrl.stereo.component_attributes.filter(function(x){return x.category == "receiver"})[0];
      ctrl.speaker = ctrl.stereo.component_attributes.filter(function(x){return x.category == "speaker"})[0];
      ctrl.media_player = ctrl.stereo.component_attributes.filter(function(x){return x.category == "media_player"})[0];




    }
  }
}

angular
  .module('app')
  .directive('stereosIndexDisplay', stereosIndexDisplay);
