const express = require('express')
const router = express.Router()

const partnerController = require('../controllers/partner.controller');

// Routes
router.get('/:id', partnerController.getById);
router.post('/create', partnerController.create)
router.get('/show', partnerController.show);

module.exports = router
    