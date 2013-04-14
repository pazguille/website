/**
 * Module dependencies.
 */
var express = require('express'),
	gzippo = require('gzippo'),
	port = process.argv[2] || 80,
	app = module.exports = express.createServer();

/**
 * App configuration.
 */
app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(gzippo.staticGzip(__dirname + '/public'));
});

app.configure('development', function () {
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
	app.use(express.errorHandler());
});


/**
 * Routes.
 */
// Index
app.get('/', function (req, res, next) {
	res.render('index');
});

// Blog
app.get('/blog', function (req, res, next) {
	res.redirect('http://blog.pazguille.me/');
});

// Resume
app.get('/resume', function (req, res, next) {
	res.redirect('http://pazguille.github.io/resume/');
});

/**
 * App start
 */
app.listen(port);

/**
 * Log
 */
console.log('Express server listening on port 80');
