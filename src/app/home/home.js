angular.module( 'CalculateYourLife.home', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller('HomeCtrl', ['$scope','Income', 'Outcome', 'Expenses', function HomeController( $scope, Income, Outcome, Expenses ) {
  $scope.hours = 0;
  $scope.income_per_hour = 0;
  $scope.income = {};
  $scope.outcome = {};
  $scope.expenses = new Expenses();

  $scope.addIncome = function() {
    var income = new Income($scope.income);
    $scope.income.income_per_hour = income.income_per_hour;
    $scope.disable_income = true;
    $scope.sum_income();
    $scope.sum_hours();
  };

  $scope.addOutcome = function() {
    var outcome = new Outcome($scope.outcome, $scope.expenses);
    $scope.expenses.add_item(outcome);
    $scope.sum_income();
    $scope.sum_hours();
    $scope.outcome = {};
  };

  $scope.editOutcome = function(outcome) {
    var _outcome = $scope.expenses.get_outcome_by_id(outcome);
    _outcome.edit_outcome(outcome);
    $scope.outcome = {};
  };

  $scope.sum_hours = function() {
    var sum_hours = 0;
    $scope.expenses.list.forEach(function(element) {
      sum_hours += element.hours_per_week;
    });

    $scope.hours = sum_hours + $scope.income.hours_per_week;
  };

  $scope.sum_income = function() {
    var sum_outcome = 0;
    var income_per_week = $scope.income.income_per_hour * $scope.income.hours_per_week;

    $scope.expenses.list.forEach(function(element) {
      sum_outcome += element.cost_per_week;
    });

    $scope.income_per_hour = ((income_per_week - sum_outcome) / $scope.income.hours_per_week).toFixed(2);
  };

  $scope.editExpense = function(expense) {
    $scope.outcome = expense;
  };

  $scope.clearModel = function() {
    $scope.outcome = {};
  };

}])

;

