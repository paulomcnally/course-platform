app.controller('AuthController', ['$scope', '$http', function($scope, $http) {

  // to show success message
  $scope.showSuccess = false;

  $scope.signUpProgress = false;
  $scope.signInProgress = false;

  // user model
  $scope.sign_in = {
    sign_in_email: '',
    sign_in_password: ''
  }
  $scope.sign_up = {
    sign_up_name: '',
    sign_up_email: '',
    sign_up_password: ''
  };

  // signUp
  $scope.signUp = function() {
    $scope.signUpProgress = true;
    $http.post('/user', $scope.sign_up).then(function successCallback(response) {
      $scope.showSuccess = true;
      $scope.signUpProgress = false;
    }, function(response) {
      $scope.signUpProgress = false;
      httpErrorHandler(response);
    });
  }

  // signIn
  $scope.signIn = function() {
    $scope.signInProgress = true;
    $http.post('/user/login', $scope.sign_in).then(function successCallback(response) {
      window.location.reload();
      $scope.signInProgress = false;
    }, function(response) {
      $scope.signInProgress = false;
      httpErrorHandler(response);
    });
  }
}]);
