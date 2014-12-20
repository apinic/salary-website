'use strict';

var IndexModel = require('../models/index');

module.exports = function(router) {

  var model = new IndexModel();

  router.get('/', function(req, res) {

    res.render('index', {month:null});

  });

  router.post('/', function(req, res) {

    var modelSalary = model.get(req.body.salary);

    var modelData = {
      month: {
        salary: modelSalary.getSalary(),
        salaryFree: modelSalary.getSalaryFree(),
        salaryAnnual: modelSalary.getAnnual(),
        inss: modelSalary.getInss(),
        ir: modelSalary.getIr(),
        retention: modelSalary.getRetention()
      },
      fortnightly: {
        salary: modelSalary.getSalaryFortnightly(),
        salaryFree: modelSalary.getSalaryFreeFortnightly(),
        salaryAnnual: modelSalary.getAnnual(),
        inss: modelSalary.getInssFortnightly(),
        ir: modelSalary.getIrFortnightly(),
        retention: modelSalary.getRetentionFortnightly()
      }
    };

    res.render('index', modelData);

  });

};
