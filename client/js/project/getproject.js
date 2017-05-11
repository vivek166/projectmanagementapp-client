app.controller('getprojectCtrl', function($scope, $http) {
	var start=0;
	var size=3;
    var content="";
	$scope.status=false;



    var getProject=function(start, size, content){
	$http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project?start="+start+"&size="+size+"&query="+content
    }).then(function mySucces(response) {
        $scope.projects = response.data;
        if($scope.projects.length>=5){
            $scope.next=false;
        }
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
    }
	
	$scope.getNextProject=function(){
		 start=start+size;
         getProject(start , size, content);
	}

	$scope.getPreviousProject=function(){
		 start=start-size;
         getProject(start , size, content);
	}


	$scope.search=function(query){
        content=content+query;
        start=0;
        getProject(start , size, content);
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

    getProject(start , size, content);
});