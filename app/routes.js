(function() {
  "use strict";

  angular.module('app.routes', ['ngRoute'])

  .config(['$routeProvider',
    function($routeProvider) {

      $routeProvider

      .when('/', {
        templateUrl: 'home/home.html'
      })

      .otherwise({
        redirectTo: '/'
      });

    }
  ]);

}());