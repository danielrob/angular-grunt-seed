(function() {
  "use strict";

  it('HomeCtrl sets hello to scope as world', function() {

    module('app.home');

    inject(function($controller, $rootScope) {

      var scope = $rootScope.$new();

      var ctrl = $controller('HomeCtrl', {
        $scope: scope
      });

      expect(scope.hello).toBe('Hello World');

    });
  });

}());