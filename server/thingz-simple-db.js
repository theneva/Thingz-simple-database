var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

var port = process.env.PORT || 3693;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../angular'));
app.use('/api', require('./controllers'));

app.listen(port, function() {
	console.log('listening on port:', port);
});
