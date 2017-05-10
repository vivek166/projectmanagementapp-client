app.controller('deleteprojectCtrl', function($scope, $http) {
    var start=0;
    var size=5;
    $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project"
    }).then(function mySucces(response) {
        $scope.projects = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });


    $scope.getNextProject=function(){
         start=start+size;
         size=size;
         getProject(start , size);
    }

    $scope.getPreviousProject=function(){
         start=start-size;
         size=size;
         getProject(start , size);
    }



    var getProject=function(start, size){
    $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project?start="+start+"&size="+size
    }).then(function mySucces(response) {
        $scope.projects = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
   }


	$scope.delete=function(projectId){
		 $http({
        method : "DELETE",
        url : "http://localhost:8080/projectmanagementapp/project/"+projectId
    }).then(function mySucces(response) {
        alert("record deleted");
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	}
});
