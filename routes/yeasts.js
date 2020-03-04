var express = require('express');
var router = express.Router();
var yeastsCtrl = require('../controllers/yeasts');

router.get('/yeasts/new',yeastsCtrl.new);
router.post('/yeasts', yeastsCtrl.create);
router.post('/ciders/:id/performers', yeastsCtrl.addToBrew);

module.exports = router;
