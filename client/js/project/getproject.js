app.controller('getprojectCtrl', function($scope, $http) {
	var start=0;
	var size=5;
    $scope.next=true;
    $scope.previous=true;
	$scope.status=false;
	$http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project?start="+start+"&size="+size
    }).then(function mySucces(response) {
        $scope.projects = response.data;
        if($scope.projects.length>=5){
            $scope.next=false;
        }
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


	$scope.search=function(content){
        $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project/search?query="+content
    }).then(function mySucces(response) {
        $scope.projects = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	}


	$scope.getDetail=function(projectId){
		$scope.status=true;
		$http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project/"+projectId
    }).then(function mySucces(response) {
        $scope.project = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	}

    var getProject=function(start, size){
    $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project?start="+start+"&size="+size
    }).then(function mySucces(response) {
        $scope.projects = response.data;
        if($scope.projects.length>=5){
            $scope.next=false;
            $scope.previous=false;
        }
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
   }
});