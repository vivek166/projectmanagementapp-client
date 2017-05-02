app.controller('putemployeeCtrl',function($scope, $http){
	$scope.update=function(){
		var employee={};
    employee.empId=$scope.empId;
    employee.empName=$scope.empName;
    employee.empDepartment=$scope.empDepartment;
    employee.emplSubjects=$scope.emplSubjects;

        $http({
            method: 'PUT',
            url: 'http://localhost:8080/projectmanagementapp/employee/'+employee.empId,
            data: employee,
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            console.log("data saved");
        })
	}
});