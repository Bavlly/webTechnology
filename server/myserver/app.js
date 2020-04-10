var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware'); // new
var session = require('express-session'); // new
const sqlite3 = require('sqlite3').verbose();

//Routes
var indexRouter = require('./routes/index'); //homepage
var coursesRouter = require('./routes/courses');
var loginRouter = require('./routes/login');
var dashboardRouter = require('./routes/dashboard');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cookieParser());
app.use(session({secret:'secretkey',saveUninitialized:true, resave: true,cookie:{maxAge:6000}}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/courses', coursesRouter);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);


//  Login Work Start End
app.use('/users', indexRouter);


app.get('/login', function (req, res) {
  res.render('login')
});

app.post('/login', function(req, res){
  console.log(req.body);
  res.send("received your request!");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
