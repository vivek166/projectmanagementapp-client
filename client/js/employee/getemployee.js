
app.controller('getemployeeCtrl', function($scope, $http) {
$http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/employee"
    }).then(function mySucces(response) {
        $scope.employees = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});