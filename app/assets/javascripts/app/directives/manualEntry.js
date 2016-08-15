function manualEntry () {
  return {
    scope: {comp: "="},
    replace: true,
    templateUrl: 'app/views/directive_templates/manualEntry.html'
  };
};

angular
  .module('app')
  .directive('manualEntry', manualEntry);
