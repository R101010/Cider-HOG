var Cider = require('../models/cider');
var Yeast = require('../models/yeast');

module.exports = {
  index,
  show,
  new: newCider,
  create
};

function index(req, res) {
  Cider.find({}, function(err, ciders) {
    res.render('ciders/index', {
      ciders,
      user: req.user,
      title: 'Cider House Rules'
    });
  });
}


function show(req, res) {
  Cider.findById(req.params.id)
  .populate('brew').exec(function(err, cider) {
    Yeast.find({_id: {$nin: cider.brew}}, function(err, yeasts) {
      res.render('ciders/show', {
        title: 'Hard Cider Details',
        cider,
        yeasts
      });
    });
  });
}


function newCider(req, res) {
  res.render('ciders/new', { title: 'Add Cider' });
}

function create(req, res) {
  req.body.organic = !!req.body.organic;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const cider = new Cider(req.body);
  cider.save(function(err) {
    if (err) return res.redirect('/ciders/new');
    res.redirect(`/ciders/${cider._id}`);
  });
}




// function index(req, res, next) {
//   console.log(req.query)
//   // Make the query object to use with Student.find based up
//   // the user has submitted the search form or now
//   let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
//   // Default to sorting by name
//   let sortKey = req.query.sort || 'name';
//   Cider.find(modelQuery)
//   .sort(sortKey).exec(function(err, ciders) {
//     if (err) return next(err);
//     // Passing search values, name & sortKey, for use in the EJS
//     res.render('ciders/index', {
//       ciders,
//       user: req.user,
//       name: req.query.name,
//       sortKey
//     });
//   });
// }

// function addFact(req, res, next) {
//   req.user.facts.push(req.body);
//   req.user.save(function(err) {
//     res.redirect('/ciders');
//   });
// }

// function delFact(req, res, next) {
//   Cider.findOne({'facts._id': req.params.id}, function(err, cider) {
//     cider.facts.id(req.params.id).remove();
//     cider.save(function(err) {
//       res.redirect('/ciders');
//     });
//   });
// }