AuthController.$inject = ["$scope", "$state", "Auth"];

function AuthController($scope, $state, Auth) {

  $scope.login = function() {
    Auth.login($scope.user).then(function(result){
      $state.go('home.stereoindex');
    }, function(error){
      alert("invalid email or password")
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home.stereoindex');
    }, function(error){
      if (error.data.errors.email[0] == ("has already been taken"))
        { alert("that email has already been taken") }
      else alert("invalid email or password")
      }
    );
  };

}

angular
.module('app')
.controller('AuthController', AuthController)
