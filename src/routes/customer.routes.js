const express = require('express')
const router = express.Router()

const customerCOntroller =   require('../controllers/customer.controller');

// Get all employees
router.get('/show', customerCOntroller.getAll);

module.exports = router
