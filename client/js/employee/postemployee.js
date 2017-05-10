app.controller('postemployeeCtrl',function($scope, $http){
    $scope.save=function(){
    var employee={};
    employee.empName=$scope.empName;
    employee.empDepartment=$scope.empDepartment;
    employee.empSubjects=$scope.empSubjects;

        $http({
            method: 'POST',
            url: 'http://localhost:8080/projectmanagementapp/employee',
            data: employee,
            headers: {'Content-Type': 'application/json'}
        }).then(function (data, status, headers, config) {
            alert("record saved");
        })
	}
});