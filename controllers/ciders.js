var Cider = require('../models/cider');
var Yeast = require('../models/yeast');

module.exports = {
  index,
  show,
  new: newCider,
  create,
  delete: delFact
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
        yeasts,
        user: req.user
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

function delFact(req, res, next) {
  Cider.findByIdAndDelete(req.params.id, function(err, delFact) {
    console.log("Delete Cider", delFact)
    res.redirect('/ciders')
  })
};
