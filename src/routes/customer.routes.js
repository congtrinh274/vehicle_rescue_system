const express = require('express')
const router = express.Router()

const customerController = require('../controllers/customer.controller');

// Get all employees
router.get('/show', customerController.show);
router.get('/:id', customerController.getById)
router.post('/create', customerController.create)

module.exports = router
    