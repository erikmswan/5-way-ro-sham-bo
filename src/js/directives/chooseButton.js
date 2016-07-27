app.directive('chooseButton', ['$rootscope', function($rootScope) {
  return {
      restrict: 'E',
      scope: {
        info: '='
      },
      link: function(scope, elements, attrs) {

        /* RESOLVE CHOICE ------------------------------------*/
        scope.humanChoose = function(choice) {
            var humanChoice = choice.index + 1;
            var robotChoice = scope.robotChoose();
            $rootScope.human = humanChoice;
            $rootScope.robot = robotChoice;
        }

        scope.robotChoose = function() {
          return Math.floor(Math.random() * (5 - 1 + 1) + 1);
        }

      },
      templateUrl: 'js/templates/chooseButton.html'
  };
}]);
