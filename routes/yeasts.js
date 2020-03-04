const express = require('express');
const router = express.Router();
const yeastsCtrl = require('../controllers/yeasts');

router.get('/yeasts/new', yeastsCtrl.new);
router.post('/yeasts', yeastsCtrl.create);
router.post('/ciders/:id/yeasts', yeastsCtrl.addToBrew);

module.exports = router;