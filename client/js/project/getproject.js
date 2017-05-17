app.controller('getprojectCtrl', function($scope, $http) {
	var pageNumber=1;
    var start=1;
	var size=3;
    var content="";
	$scope.status=false;
    $scope.preBtnStatus=true;
    $scope.nextBtnStatus=true;
    

    var indexing=function(begin , end, total){
        $scope.begin=begin;
        $scope.end=end;
        $scope.total=total;
    }


    var getProject=function(start, size, content, pageNumber){
	$http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project?start="+start+"&size="+size+"&query="+content
    }).then(function mySucces(response) {
       $scope.projects=response.data.data;
       if(pageNumber>1){
         $scope.preBtnStatus=false;
       }else{
         $scope.preBtnStatus=true;
       }
       
       if(pageNumber<((response.data.totalResult)/size)){
         $scope.nextBtnStatus=false;
       }else{
         $scope.nextBtnStatus=true;
       }

       indexing(start+1, start+response.data.data.length, response.data.totalResult);


    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
    }
	
	$scope.getNextProject=function(){
         $scope.preBtnStatus=false;
		 start=start+1;
         pageNumber=pageNumber+1;
         getProject((start-1)*size , size, content, pageNumber);
	}

	$scope.getPreviousProject=function(){
         $scope.nextBtnStatus=false;
         pageNumber=pageNumber-1;
		 start=start-1;
         getProject((start-1)*size , size, content, pageNumber);
	}


	$scope.search=function(query){
         pageNumber=1;
         start=1;
        content=content+query;
        getProject((start-1)*size , size, content, pageNumber);
	}

    getProject((start-1)*size , size, content, pageNumber);


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

    $scope.getDetail=function(projectId){
        $scope.status=true;
        $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/project/"+projectId
    }).then(function mySucces(response) {
        $scope.project = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
    }


    $scope.patch=function(){
    var project={};
    project.projectId=$scope.projectId;
    project.projectTitle=$scope.projectTitle;
    project.projectFeature=$scope.projectFeature;
    project.projectDescription=$scope.projectDescription;
    project.technologyUsed=$scope.technologyUsed;

        $http({
            method: 'PATCH',
            url: 'http://localhost:8080/projectmanagementapp/project/'+project.projectId,
            data: project,
            headers: {'Content-Type': 'application/json'}
        }).then(function (data, status, headers, config) {
           alert("record updated");
        })
    }


    $scope.delete=function(projectId){
         $http({
        method : "DELETE",
        url : "http://localhost:8080/projectmanagementapp/project/"+projectId
    }).then(function mySucces(response) {
        alert("record deleted");
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
    }
});