var Yeast = require('../models/yeast');
var Cider = require('../models/cider');

module.exports = {
    new: newYeast,
    create,
    addToBrew
};

function addToBrew(req, res) {
    Cider.findById(req.params.id, function(err, cider) {
        cider.brew.push(req.body.yeastId);
        cider.save(function(err) {
            res.redirect(`/ciders/${cider._id}`);
        });
    });
}

function create(req, res) {
    const s = req.body.bDate;
  Yeast.create(req.body, function(err, yeast) {
    res.redirect('/yeasts/new');
});
}

function newYeast(req, res) {
    Yeast.find({}, function(err, yeasts) {
        res.render('yeasts/new', {
            title: 'Add Yeast',
            yeasts
        });
    });
}
