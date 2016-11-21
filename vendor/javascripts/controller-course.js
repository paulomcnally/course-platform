app.controller('CourseController', ['$scope', '$http', function($scope, $http) {

  // to show success message
  $scope.showSuccess = false;
  $scope.courseProgress = false;

  // user model
  $scope.course_new = {
    title: '',
    short_description: '',
    description: '',
    level: '',
    thumbnail: '',
    video: '',
    category_id: '',
    sub_category_id: ''
  }

  // save
  $scope.courseCreate = function() {
    $scope.courseProgress = true;
    $http.post('/admin/courses', $scope.course_new).then(function successCallback(response) {
      $scope.showSuccess = true;
      $scope.courseProgress = false;
    }, function(response) {
      $scope.courseProgress = false;
      httpErrorHandler(response);
    });
  }
}]);
