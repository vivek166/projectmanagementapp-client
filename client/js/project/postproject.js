
app.controller('postprojectCtrl', function($scope, $http) {
	$scope.save=function(){
	var project={};
	project.projectId=$scope.projectId;
	project.projectTitle=$scope.projectTitle;
	project.projectFeature=$scope.projectFeature;
	project.projectDescription=$scope.projectDescription;
	project.technologyUsed=$scope.technologyUsed;

        $http({
            method: 'POST',
            url: 'http://localhost:8080/projectmanagementapp/project',
            data: project,
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            console.log("data saved");
        })
	}
});