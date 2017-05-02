app.controller('putprojectCtrl',function($scope, $http){
	$scope.update=function(){
	var project={};
	project.projectId=$scope.projectId;
	project.projectTitle=$scope.projectTitle;
	project.projectFeature=$scope.projectFeature;
	project.projectDescription=$scope.projectDescription;
	project.technologyUsed=$scope.technologyUsed;

        $http({
            method: 'PUT',
            url: 'http://localhost:8080/projectmanagementapp/project/'+project.projectId,
            data: project,
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            console.log("data saved");
        })
	}
});