angular.module( 'CalculateYourLife.outcome', []).factory('Outcome',['Utils', function(Utils) {

  var Outcome = function(outcomeData) {
    this.title = outcomeData.title;
    this.money_amount = outcomeData.money_amount;
    this.period = outcomeData.period;
    this.hours_amount = outcomeData.hours_amount;
    this.duration = outcomeData.duration;
    this.cost_per_week = Utils.calculate_cost_per_week(outcomeData.money_amount, outcomeData.period);
    this.hours_per_week = Utils.calculate_hours_per_week(outcomeData.hours_amount, outcomeData.duration);
  };

  // Income.prototype = {
  //   setData: function(outcomeData) {
  //     angular.extend(this, outcomeData);
  //   }
  // };

  return Outcome;
}]);