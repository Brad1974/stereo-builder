function componentDisplay () {
  return {
    scope: {crow: "=", convert: "="},
    link: function (scope, element, attrs, ctrl) {
      var row = element[0]
      if (row.getAttribute("name") == "index-row") {
        var x = row.insertCell(-1);
        x.innerHTML = scope.crow.popularity }
    },
    templateUrl: 'app/views/directive_templates/componentDisplay.html',
    controller: ["$scope", function($scope){
      if ($scope.crow.price == "") {$scope.crow.price = 0}
    }]
  }
}

angular
  .module('app')
  .directive('componentDisplay', componentDisplay);
