AuthController.$inject = ["$scope", "$state", "Auth"];

function AuthController($scope, $state, Auth) {

  $scope.login = function() {
    Auth.login($scope.user).then(function(result){
      debugger;
      $state.go('home.stereoindex');
    }, function(error){
      alert("invalid email or password")
    });
  };

  $scope.register = function() {
    debugger;
    Auth.register($scope.user).then(function(){
      debugger;
      $state.go('home.stereoindex');
    });
  };

}

angular
.module('app')
.controller('AuthController', AuthController)
