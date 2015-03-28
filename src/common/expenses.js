angular.module( 'CalculateYourLife.expenses', []).factory('Expenses',['Utils', function(Utils) {

  var Expenses = function() {
    this.list = [];

    this.add_item = function(outcome) {
      this.list.push(outcome);
    };

    this.get_outcome_by_id = function(outcome) {
      var _outcome;

      this.list.forEach(function(list_element) {
        if(list_element.id === outcome.id) {
          _outcome = list_element;
        }
      });

      return _outcome;
    };

    this.remove_item = function(outcome) {
      this.list.splice(_.indexOf(this.list, outcome), 1);
    };
  };

  return Expenses;
}]);