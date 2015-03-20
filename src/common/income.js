angular.module( 'CalculateYourLife.income', []).factory('Income', ['Utils', function(Utils) {

  var Income = function(incomeData) {
    this.title = incomeData.title;
    this.amount = incomeData.amount;
    this.period = incomeData.period;
    this.hours_per_week = incomeData.hours_per_week;
    this.income_per_hour = Utils.calculate_income_per_hour(incomeData.amount, incomeData.period, incomeData.hours_per_week);
  };

  console.log(Income.income_per_hour);

  // Income.prototype = {
  //   setData: function(incomeData) {
  //     angular.extend(this, incomeData);
  //   }
  // };

  return Income;
}]);