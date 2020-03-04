var Cider = require('../models/ciders');

module.exports = {
  index,
  addFact,
  delFact
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Cider.find(modelQuery)
  .sort(sortKey).exec(function(err, ciders) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('ciders/index', {
      ciders,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

function addFact(req, res, next) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/ciders');
  });
}

function delFact(req, res, next) {
  Cider.findOne({'facts._id': req.params.id}, function(err, cider) {
    cider.facts.id(req.params.id).remove();
    cider.save(function(err) {
      res.redirect('/ciders');
    });
  });
}