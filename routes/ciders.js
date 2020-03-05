var express = require('express');
var router = express.Router();
var cidersCtrl = require('../controllers/ciders');

router.get('/', cidersCtrl.index);
router.get('/new', cidersCtrl.new);
router.get('/:id', cidersCtrl.show);
router.post('/', cidersCtrl.create);
router.delete('/:id', cidersCtrl.delete);

module.exports = router;

