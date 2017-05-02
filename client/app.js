var app = angular.module('myapp', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl : '../client/home.html',
    })
    .when('/putproject', {
        templateUrl : 'client/view/project/putproject.html',
        controller : 'putprojectCtrl'
    })
    .when('/deleteproject', {
        templateUrl : 'client/view/project/deleteproject.html',
        controller : 'deleteprojectCtrl'
    })
    .when('/getproject', {
        templateUrl : 'client/view/project/getproject.html',
        controller : 'getprojectCtrl'
    })
    .when('/postproject', {
        templateUrl : 'client/view/project/postproject.html',
        controller : 'postprojectCtrl'
    })


    .when('/putemployee', {
        templateUrl : 'client/view/employee/putemployee.html',
        controller : 'putemployeeCtrl'
    })
    .when('/deleteemployee', {
        templateUrl : 'client/view/employee/deleteemployee.html',
        controller : 'deleteemployeeCtrl'
    })
    .when('/getemployee', {
        templateUrl : 'client/view/employee/getemployee.html',
        controller : 'getemployeeCtrl'
    })
    .when('/postemployee', {
        templateUrl : 'client/view/employee/postemployee.html',
        controller : 'postemployeeCtrl'
    })
    .otherwise({
    	redirectTo : '/'
    });

    $locationProvider.html5Mode({enabled: true, requiredBase: false});
});


