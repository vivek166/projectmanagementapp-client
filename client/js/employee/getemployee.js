app.controller('getemployeeCtrl', function($scope, $http) {
	var start=0;
	var size=3;
    var content="";
    $scope.status=false;

    var getEmployee=function(start, size, content){
	$http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/employee?start="+start+"&size="+size+"&query="+content
    }).then(function mySucces(response) {
        $scope.employees = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
   }
	
	$scope.getNextEmployee=function(){
		 start=start+size;
         getEmployee(start, size, content);
	}

	$scope.getPreviousEmployee=function(){
		 start=start-size;
         getEmployee(start, size, content);
	}

    
    getEmployee(start, size, content);


    $scope.search=function(query){
        content=content+query;
        start=0;
        getEmployee(start, size, content);
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


