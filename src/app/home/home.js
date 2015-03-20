/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'CalculateYourLife.home', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
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

/**
 * And of course we define a controller for our route.
 */
.controller('HomeCtrl', ['$scope','Income', 'Outcome', function HomeController( $scope, Income, Outcome ) {
  console.log("inside HomeCtrl");
  $scope.hours = 0;
  $scope.income_per_hour = 0;
  $scope.income = {};
  $scope.outcome = {};
  $scope.expenses = [];

  $scope.addIncome = function() {
    var income = new Income($scope.income);
    $scope.income.income_per_hour = Math.round(income.income_per_hour).toFixed(2);
    $scope.disable_income = true;
    $scope.sum_income();
    $scope.sum_hours();
  };

  $scope.addOutcome = function() {
    var outcome = new Outcome($scope.outcome);
    $scope.expenses.push(outcome);
    $scope.sum_income();
    $scope.sum_hours();
  };

  $scope.sum_hours = function() {
    var sum_hours = 0;
    $scope.expenses.forEach(function(element) {
      sum_hours += element.hours_per_week;
    });

    $scope.hours = sum_hours + $scope.income.hours_per_week;
  };

  $scope.sum_income = function() {
    var sum_outcome = 0;
    var income_per_week = $scope.income.income_per_hour * $scope.income.hours_per_week;

    $scope.expenses.forEach(function(element) {
      sum_outcome += element.cost_per_week;
    });

    $scope.income_per_hour = (income_per_week - sum_outcome) / $scope.income.hours_per_week;
  };

}])

;

