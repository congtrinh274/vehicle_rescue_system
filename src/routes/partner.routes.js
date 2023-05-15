const express = require('express')
const router = express.Router()

const partnerController = require('../controllers/partner.controller');

// Routes
router.get('/show', partnerController.show);
router.get('/:id', partnerController.getById);
router.post('/create', partnerController.create)

module.exports = router
    