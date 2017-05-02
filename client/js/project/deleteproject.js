app.controller('deleteprojectCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project"
    }).then(function mySucces(response) {
        $scope.projects = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	$scope.delete=function(projectId){
		 $http({
        method : "DELETE",
        url : "http://localhost:8080/projectmanagementapp/project/"+projectId
    }).then(function mySucces(response) {
        console.log('record deleted');
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	}
});
