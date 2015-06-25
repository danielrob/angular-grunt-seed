(function () {
"use strict";

var app = angular.module('app', [
  'ngRoute',
  'app.home',
]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);

}());