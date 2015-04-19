var db = require('../db');
var Thing = require('./thing');

var Category = db.model('Category', {
	name: { type: String, required: true },
	things: { type: [Thing.schema], required: true }
});

module.exports = Category;
