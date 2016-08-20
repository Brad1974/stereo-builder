function componentDisplay () {
  return {
    scope: {crow: "="},
    link: function (scope, element, attrs, ctrl) {
      var row = element[0]
      if (row.getAttribute("name") == "index-row") {
        var x = row.insertCell(-1);
        x.innerHTML = scope.component.popularity }
    },
    templateUrl: 'app/views/directive_templates/componentDisplay.html'
  }
}

angular
  .module('app')
  .directive('componentDisplay', componentDisplay);
