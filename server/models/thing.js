var db = require('../db');

var Thing = db.model('Thing', {
	name: { type: String, required: true },
	description: String
});

module.exports = Thing;
