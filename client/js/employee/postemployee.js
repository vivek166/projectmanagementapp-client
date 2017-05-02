app.controller('postemployeeCtrl',function($scope, $http){
    $scope.save=function(){
    var employee={};
    employee.empId=$scope.empId;
    employee.empName=$scope.empName;
    employee.empDepartment=$scope.empDepartment;
    employee.empSubjects=$scope.empSubjects;

        $http({
            method: 'POST',
            url: 'http://localhost:8080/projectmanagementapp/employee',
            data: employee,
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            console.log("data saved");
        })
	}
});