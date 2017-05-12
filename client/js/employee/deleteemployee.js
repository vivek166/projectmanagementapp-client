app.controller('deleteemployeeCtrl', function($scope, $http) {
    var start=0;
    var size=5;
    var content="";

    var getEmployee=function(start, size, content){
    $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/employee?start="+start+"&size="+size+"&query="+content
    }).then(function mySucces(response) {
         $scope.employees = [];
        for(i=0; i< response.data.data.length; i++){
            var array = response.data.data[i];
            var subArray = array.substring(array.indexOf('[') + 1, array.length -1);
            var jsonObj = subArray.split(",");
            var resultObj = {};
            for(j=0; j < jsonObj.length; j++){
                var key = jsonObj[j].split('=')[0].trim();
                var val = jsonObj[j].split('=')[1].trim();
                resultObj[key] = val;
            }
            $scope.employees.push(resultObj);
        }
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
    }
      
    $scope.getNextEmployee=function(){
         start=start+size;
         getEmployee(start , size, content);
    }

    $scope.getPreviousEmployee=function(){
         start=start-size;
         getEmployee(start , size, content);
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

  getEmployee(start, size, content);
});
