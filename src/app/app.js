angular.module('CalculateYourLife', [
  'templates-app',
  'templates-common',
  'CalculateYourLife.home',
  'CalculateYourLife.income',
  'CalculateYourLife.outcome',
  'CalculateYourLife.expenses',
  'CalculateYourLife.utils',
  'ui.router'
])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
})

.run(function run() {
})

.controller('AppCtrl', function AppCtrl($scope, $location) {
  console.log("inside AppCtrl");
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if (angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | CalculateYourLife';
    }
  });
});
