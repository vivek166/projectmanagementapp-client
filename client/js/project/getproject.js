app.controller('getprojectCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project"
    }).then(function mySucces(response) {
        $scope.projects = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});