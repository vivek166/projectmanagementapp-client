app.controller('getprojectCtrl', function($scope, $http) {
	var start=0;
	var size=5;
	$http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project?start="+start+"&size="+size
    }).then(function mySucces(response) {
        $scope.projects = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	
	$scope.getNextProject=function(){
		 start=start+size;
		 size=size;
    $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project?start="+start+"&size="+size
    }).then(function mySucces(response) {
        $scope.projects = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	}

	$scope.getPreviousProject=function(){
		 start=start-size;
		 size=size;
    $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project?start="+start+"&size="+size
    }).then(function mySucces(response) {
        $scope.projects = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	}



	$scope.search=function(content){
		alert(content);
	}


	$scope.getDetail=function(projectId){
		$http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project/"+projectId
    }).then(function mySucces(response) {
        $scope.project = response.data;
        console.log($scope.project);
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	}
});