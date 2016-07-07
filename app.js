var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var routes = require('./app/routes/routes');
var restful = require('./app/routes/api-routes');
var helmet = require('helmet');
var compression = require('compression');
var RedisStore = require('connect-redis')(session);
var FileStore = require('session-file-store')(session);
var app = express();
var http = ('http');


var sess = {
  store: new FileStore,
  secret: 'kdkdkdlskdkdkddklskskddlskdl',
  resave: true,
  saveUninitialized:false,
  cookie: {}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
// view engine setup
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'pug');
app.set('view cache', true);
app.use(compression());

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(helmet());
app.use('/', routes);
app.use('/api', restful);

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
