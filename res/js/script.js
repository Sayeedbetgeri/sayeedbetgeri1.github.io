/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//
//    // create the module and name it scotchApp
//    var scotchApp = angular.module('scotchApp', []);
//
//    // create the controller and inject Angular's $scope
//    scotchApp.controller('mainController', function($scope) {
//
//        // create a message to display in our view
//        $scope.message = 'Everyone come and see how good I look!';
//    });
 var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.jsp',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/welcome', {
                templateUrl : 'pages/welcome.jsp',
                controller  : 'welcomeController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.jsp',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('welcomeController', function($scope) {
        $scope.message = 'Look! I am an welcome page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });