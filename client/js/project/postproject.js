
app.controller('postprojectCtrl', function($scope, $http) {
	$scope.save=function(){
	var project={};
	project.projectTitle=$scope.projectTitle;
	project.projectFeature=$scope.projectFeature;
	project.projectDescription=$scope.projectDescription;
	project.technologyUsed=$scope.technologyUsed;
    project.emplIds=$scope.emplIds;

        $http({
            method: 'POST',
            url: 'http://localhost:8080/projectmanagementapp/project',
            data: project,
            headers: {'Content-Type': 'application/json'}
        }).then(function (data, status, headers, config) {
            alert("record saved");
        })
	}
});