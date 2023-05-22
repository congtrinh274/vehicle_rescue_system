const express = require('express')
const router = express.Router()

const requestController = require('../controllers/request.controller');

// Routes
router.post('/create', requestController.create)
router.patch('/update/:id', requestController.update)

module.exports = router
    