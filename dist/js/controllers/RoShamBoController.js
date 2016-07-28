
app.controller('MainController', ['$scope', function($scope) {

  var choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
  $scope.choices = [];
  choices.forEach(function(el, i) {
    $scope.choices.push({
      'name': el,
      'index': i
    });
  });


  $scope.robot = 'Make your choice.';
  $scope.color = 'black';
  $scope.draw = 0;
  $scope.won = 0;
  $scope.lost = 0;

  // stop the timeout if clicked again
  var animTimeout;

  $scope.humanChoose = function(choice) {
      var humanChoice = choice.index + 1
      ,   robotChoice = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      $scope.human = choice.name;
      $scope.robot = 'I choose ' + $scope.choices[robotChoice - 1].name + ', human.';

      if (humanChoice === robotChoice) {
        $scope.result = 'Draw';
        $scope.color = 'blue';
        $scope.shineClass = 'blue-shine';
        $scope.draw++;
        return;
      }

      var biggest = Math.max(humanChoice, robotChoice)
      ,   smallest = Math.min(humanChoice, robotChoice)
      ,   bool = (biggest - smallest) % 2;

      if (bool && smallest === humanChoice || !bool && biggest === humanChoice) {
        $scope.result = 'Lose';
        $scope.color = 'brown';
        $scope.shineClass = 'brown-shine';
        $scope.lost++;
      } else {
        $scope.result = 'Win';
        $scope.color = 'green';
        $scope.shineClass = 'green-shine';
        $scope.won++;
      }
      clearTimeout(animTimeout);
      animTimeout = setTimeout(function() {
        $scope.shineClass = '';
        $scope.$apply();
      }, 500);
  }

  $scope.resetScore = function() {
    $scope.won = 0;
    $scope.lost = 0;
    $scope.draw = 0;
    $scope.robot = 'This pleases me.'
    $scope.human = '';
    $scope.result = '';
  }

}]);
