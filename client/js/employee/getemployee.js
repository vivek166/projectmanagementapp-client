app.controller('getemployeeCtrl', function($scope, $http) {
	var start=0;
	var size=5;
    $scope.status=false;
	$http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/employee?start="+start+"&size="+size
    }).then(function mySucces(response) {
        $scope.employees = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	
	$scope.getNextEmployee=function(){
		 start=start+size;
		 size=size;
         getEmployee(start, size);
	}

	$scope.getPreviousEmployee=function(){
		 start=start-size;
		 size=size;
         getEmployee(start, size);
	}

    
    var getEmployee=function(start, size){
    $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/employee?start="+start+"&size="+size
    }).then(function mySucces(response) {
        $scope.employees = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
    }

    $scope.search=function(content){
        $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/employee/search?query="+content
    }).then(function mySucces(response) {
        $scope.employees = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
    }


	$scope.getDetail=function(empId){
        $scope.status=true;
		$http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/employee/"+empId
    }).then(function mySucces(response) {
        $scope.employee = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	}
});


