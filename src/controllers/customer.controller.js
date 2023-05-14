'use strict';

const Customer = require('../models/Customer');

exports.getAll = function(req, res) {
    Customer.getAll(function(err, employee) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', employee);
      res.send(employee);
    });
};
