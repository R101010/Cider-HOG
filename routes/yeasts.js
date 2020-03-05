const express = require('express');
const router = express.Router();
const yeastsCtrl = require('../controllers/yeasts');

router.get('/yeasts/new', yeastsCtrl.new);
router.post('/yeasts', yeastsCtrl.create);
router.post('/ciders/:id/yeasts', yeastsCtrl.addToBrew);

// function isLoggedIn(req, res, next) {
//     if ( req.isAuthenticated() ) return next();
//     res.redirect('/auth/google');
//   };

module.exports = router;