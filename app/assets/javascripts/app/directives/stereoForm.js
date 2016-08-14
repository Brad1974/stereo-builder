function stereoForm () {
  return {
    scope: {stereo: "=", add: "&"},
    replace: true,
    templateUrl: 'app/views/directive_templates/stereoForm.html'
  }
}

angular
  .module('app')
  .directive('stereoForm', stereoForm);
