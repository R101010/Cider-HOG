var Cider = require('../models/cider');

module.exports = {
    create
};

function create(req, res) {
    Cider.findById(req.params.id, function(err, cider){
        cider.reviews.push(req.body);
        cider.save(function(err) {
            res.redirect(`/ciders/${cider._id}`);
        });
    });
}