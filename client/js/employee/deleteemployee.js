app.controller('deleteemployeeCtrl', function($scope, $http) {

  $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/employee"
    }).then(function mySucces(response) {
        $scope.employees = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	$scope.delete=function(empId){
	   $http({
        method : "DELETE",
        url : "http://localhost:8080/projectmanagementapp/employee/"+empId
    }).then(function mySucces(response) {
        console.log('record deleted');
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	}
});
