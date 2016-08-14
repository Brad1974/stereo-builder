function stereoDisplay () {
  return {
    scope: { stereo: "="},
    replace: true,
    templateUrl: 'app/views/directive_templates/stereoDisplay.html'
  }
}

angular
  .module('app')
  .directive('stereoDisplay', stereoDisplay);
