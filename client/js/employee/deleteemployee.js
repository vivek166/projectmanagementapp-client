app.controller('deleteemployeeCtrl', function($scope, $http) {
    var start=0;
    var size=5;
  $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/employee"
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



	$scope.delete=function(empId){
	   $http({
        method : "DELETE",
        url : "http://localhost:8080/projectmanagementapp/employee/"+empId
    }).then(function mySucces(response) {
        alert("record deleted");
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	}
});
