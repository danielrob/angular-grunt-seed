(function () {
"use strict";

  angular.module('app.home', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home/home.html'
    });
  }])

  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.hello = 'Hello World';
  }]);

}());
