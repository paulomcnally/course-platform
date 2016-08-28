app.controller('AuthController', ['$scope', '$http', function($scope, $http) {

  // to show success message
  $scope.showSuccess = false;

  // user model
  $scope.user = {
    name: '',
    email: '',
    password: ''
  };

  // register action
  $scope.signUp = function() {
    $http.post('/user', $scope.user).then(function successCallback(response) {
      $scope.showSuccess = true;
    }, httpErrorHandler);
  }
}]);
