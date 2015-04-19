var db = require('../db');
var Category = require('./category');

var Meieri = db.model('Meieri', {
	name: { type: String, required: true },
	categories: { type: [Category.schema] }
});

module.exports = Meieri;
