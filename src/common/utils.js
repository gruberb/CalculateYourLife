angular.module( 'CalculateYourLife.utils', []).service('Utils', function() {
  this.calculate_cost_per_week = function(amount, period) {
    switch(period) {
      case 'per Day':
        return amount * 5;
      case 'per Week':
        return amount;
      case 'per Month':
        return amount / 4;
      case 'per Year':
        return (amount / 12) / 4;
      default:
        return 'not recognized';
    }
  };

  this.calculate_hours_per_week = function(hours, duration) {
    switch(duration) {
      case 'every day':
        console.log("hours", hours);
        return hours * 5;
      case 'every week':
        return hours;
      case 'every month':
        return hours / 4;
      default:
        return 'not recognized';
    }
  };

  this.calculate_income_per_hour = function(amount, period, hours_per_week) {
    switch(period) {
      case 'per Hour':
        return amount;
      case 'per Week':
        return amount / hours_per_week;
      case 'per Month':
        return (amount / 4) / hours_per_week;
      case 'per Year':
        return ((amount / 12) / 4) / hours_per_week;
      default:
        return 'not recognized';
    }
  };
});