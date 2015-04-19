var router = require('express').Router();

router.get('/', function(req, res) {
	return res.send('Hello, world');
});

router.use('/meierier', require('./meierier'));

module.exports = router;
