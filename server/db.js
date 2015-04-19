var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/thingzSimpleDb');

console.log('Connected to MongoDB');
module.exports = mongoose;
