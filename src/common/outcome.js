angular.module( 'CalculateYourLife.outcome', []).factory('Outcome',['Utils', function(Utils) {

  var Outcome = function(outcomeData, expenses) {
    this.id = expenses.list.length + 1;
    this.title = outcomeData.title;
    this.money_amount = outcomeData.money_amount;
    this.period = outcomeData.period;
    this.hours_amount = outcomeData.hours_amount;
    this.duration = outcomeData.duration;
    this.cost_per_week = Utils.calculate_cost_per_week(outcomeData.money_amount, outcomeData.period);
    this.hours_per_week = Utils.calculate_hours_per_week(outcomeData.hours_amount, outcomeData.duration);
  };

  Outcome.prototype.edit_outcome = function(outcome) {
    this.title = outcome.title;
    this.money_amount = outcome.money_amount;
    this.period = outcome.period;
    this.hours_amount = outcome.hours_amount;
    this.duration = outcome.duration;
    this.cost_per_week = Utils.calculate_cost_per_week(outcome.money_amount, outcome.period);
    this.hours_per_week = Utils.calculate_hours_per_week(outcome.hours_amount, outcome.duration);
  };

  return Outcome;
}]);