var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sqlite3 = require('sqlite3').verbose();



//database
// app.get('/courses1', (req, res) => {
//   console.log("Responding to root route");
//   res.send("Hello from root");
// })


// var indexRouter = require('./routes/index');
var indexRouter = require('./routes/index'); //homepage
// var usersRouter = require('./routes/users');
var assignmentsRouter = require('./routes/assignments');
var concurrencyRouter = require('./routes/concurrency');
var descriptionRouter = require('./routes/description');
var infoRouter = require('./routes/info');
var scheduleRouter = require('./routes/schedule');
var coursesRouter = require('./routes/courses');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/assignments', assignmentsRouter);
app.use('/concurrency', concurrencyRouter);
app.use('/description', descriptionRouter);
app.use('/info', infoRouter);
app.use('/schedule', scheduleRouter);
app.use('/courses', coursesRouter);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
// next(createError(404));
// });

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
