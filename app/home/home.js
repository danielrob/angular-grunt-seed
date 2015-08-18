(function() {
  "use strict";

  angular.module('app.home', [])

  .controller('HomeCtrl', ['$scope',
    function($scope) {
      $scope.hello = 'Hello World';
    }
  ]);

}());