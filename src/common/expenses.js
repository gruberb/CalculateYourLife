angular.module( 'CalculateYourLife.expenses', []).factory('Expenses',['Utils', function(Utils) {

  var Expenses = function() {
    this.list = [];
  };

  Expenses.prototype.add_item = function(outcome) {
      this.list.push(outcome);
  };

  Expenses.prototype.get_outcome_by_id = function(outcome) {
    var _outcome;

    this.list.forEach(function(list_element) {
      if(list_element.id === outcome.id) {
        _outcome = list_element;
      }
    });

    return _outcome;
  };

  Expenses.prototype.remove_item = function(outcome) {
    this.list.splice(_.indexOf(this.list, outcome), 1);
  };

  return Expenses;
}]);
