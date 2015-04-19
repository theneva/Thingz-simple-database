var router = require('express').Router();
var Meieri = require('../models/meieri');

router.get('/', function(req, res, next) {
	Meieri.find(function(err, meierier) {
		if (err) return next(err);
		return res.json(meierier);
	});
});

router.post('/', function(req, res, next) {
	var newMeieri = req.body;

	newMeieri.categories = [];

	var meieri = new Meieri(newMeieri);

	console.log(meieri);

	meieri.save(function(err) {
		if (err) return next(err);
		return res.json(meieri);
	});
});

router.delete('/:id', function(req, res, next) {
	var id = req.params.id;

	Meieri.findByIdAndRemove(id, function(err, removedMeieri) {
		if (err) return next(err);
		return res.json(removedMeieri);
	});
});

module.exports = router;
