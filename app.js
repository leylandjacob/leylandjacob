
PRODUCTION = process.env.NODE_ENV;

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config/config-app-public');
process.env.GHOST_CONFIG = path.resolve(__dirname, './ghost-config.js');
var ghost = require('ghost');

var routes = require('./routes/index');

function processBuffer( buffer, app ) {
		while( buffer.length ){
		var request = buffer.pop();
		app( request[0], request[1] );
	}
};

function makeGhostMiddleware(options, callback) {
	var requestBuffer = [];
	var app = false;

	ghost( options ).then( function( ghost ){
		app = ghost.rootApp;
		processBuffer( requestBuffer, app );
		callback();
	});

	return function handleRequest(req, res){
		if(!app) {
			requestBuffer.unshift( [req, res] );
		} else {
			app( req, res );
		}
	};
}

var app = express();
	
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var emojiFavicon = require('emoji-favicon');
var emjois = ['thumbsup', 'sunglasses', 'wink', 'stuck_out_tongue_winking_eye', 'ok_hand', 'wine_glass', 'coffee', 'beer', 'cocktail']


app.all('*', emojiFavicon(emjois[Math.floor(Math.random()*emjois.length)]), function(req, res, next){
	res.locals.config = config;
	res.locals.data = {};
	next();
});

app.use('/',  routes);
app.use('/articles', makeGhostMiddleware({}, function(ghostServer) {

}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
	  message: err.message,
	  error: err
	});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
	message: err.message,
	error: {}
  });
});


module.exports = app;
