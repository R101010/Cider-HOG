var Yeast = require('../models/cider');

module.exports = {
    create
};

function create(req, res) {
    Cider.findById(req.params.id, function(err, yeast){
        cider.reviews.push(req.body);
        cider.save(function(err) {
            res.redirect(`/movies/${cider._id}`);
        });
    });
}