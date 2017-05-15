app.controller('getemployeeCtrl', function($scope, $http) {
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



    var getEmployee=function(start, size, content, pageNumber){
	$http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/employee?start="+start+"&size="+size+"&query="+content
    }).then(function mySucces(response) {
        $scope.employees=response.data.data;
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
	
	$scope.getNextEmployee=function(){
		  $scope.preBtnStatus=false;
         start=start+1;
         pageNumber=pageNumber+1;
         getEmployee((start-1)*size , size, content, pageNumber);
	}

	$scope.getPreviousEmployee=function(){
		$scope.nextBtnStatus=false;
         pageNumber=pageNumber-1;
         start=start-1;
         getEmployee((start-1)*size , size, content, pageNumber);
	}



    $scope.search=function(query){
        content=content+query;
        start=1;
        getEmployee((start-1)*size , size, content, pageNumber);
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


   getEmployee((start-1)*size , size, content, pageNumber);
});




/*$scope.employees = [];
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
        }*/


