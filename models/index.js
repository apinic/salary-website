'use strict';

var Salary = require('nicaragua-salary');

module.exports = function IndexModel() {
  return {
    get: function(monthSalary) {
      var salary = new Salary(parseFloat(monthSalary));
      return salary;
    }
  };
};
