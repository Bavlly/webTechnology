const path = require('path');
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

//GET
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/description', (req, res, next) => {
  res.render('description');
});

router.get('/concurrency', (req, res, next) => {
  res.render('concurrency');
});

router.get('/assignments', (req, res, next) => {
  res.render('assignments');
});

router.get('/info', (req, res, next) => {
  res.render('info');
});

router.get('/schedule', (req, res, next) => {
  res.render('schedule');
});

router.post('/coursePlus', (req, res, next) => {
  let db = new sqlite3.Database('./db.sqlite3', (err) => {
    if (err) {
        console.log("CANNOT CONNECT!!!!!!!!!!");
        return console.error(err.message);
    }console.log('Connected to the SQlite database.');
     var b = req.body;
     db.run("INSERT INTO Registered_Courses(Student_Id, Code, Title, Program, Academic_Level, Semester, Description, Teacher) VALUES (? , ? , ? , ? , ? , ? , ?, ?)",
    [   String(req.session.username),
        String(b.Code),
        String(b.Title),
        String(b.Program),
        String(b.Academic_Level),
        String(b.Semester),
        String(b.Description),
        String(b.Teacher)
      ],
    function (err, row) {
    if (err) {
        // req.session.create = -1;
        res.redirect(req.get('referer'));
    } else {
        // req.session.create = 1;
        res.redirect(req.get('referer'));
    }  
  });
});
});

router.get('/registeredCourses', (req, res, next) => {
  let db = new sqlite3.Database('./db.sqlite3', (err) => {
    if (err) {
        console.log("CANNOT CONNECT!!!!!!!!!!");
        return console.error(err.message);
    }console.log('Connected to the SQlite database.');
    let sql = "SELECT* FROM Registered_Courses WHERE Student_Id ='" + req.session.username+ "'";
    db.all(sql, [], (err, rows) => {
      if (err) {
          throw err;
      }
      else{
      res.render('/registeredCourses', { course: rows});
      console.log("eurobeat");
     } 
  });
  });
});


//GET
router.get('/account', (req, res, next) => {
  //db connect
  let db = new sqlite3.Database('./db.sqlite3', (err) => {
  if (err) {
      console.log("CANNOT CONNECT!!!!!!!!!!");
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
  //search op req.session.username
  });
  var userid = req.session.username;
  sql = "SELECT* FROM Users WHERE Student_Id ='" + userid + "'";
  db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }
    console.log(rows);
    res.render('account', { account: rows});
    });
  });

  router.post('/account', function(req, res) {
    let db = new sqlite3.Database('./db.sqlite3', (err) => {
        if (err) {
            console.log("CANNOT CONNECT!!!!!!!!!!");
            return console.error(err.message);
        };
        var b = req.body;
        var Fname = b.First_Name ? b.First_Name : null;
        var Lname = b.Last_Name ? b.Last_Name : null;
        var email = b.email ? b.email : null;
        var password = b.Password ? b.Password : null;
        let update = "UPDATE Users SET "
        if (Fname !== null)
            update += "First_Name='" + Fname + "' , "
        if (Lname !== null)
            update += "Last_Name='" + Lname + "' , "
        if (email !== null)
            update += "email='" + email + "' , "
        if (password !== null)
            update += "Password='" + password + "' , "

        if (update.length > 17) { 
            update = update.slice(0, -2);
            update += "WHERE Student_Id=" + req.session.username;
           
            console.log(req.session)
            console.log(update);
            db.run(update , [], function(err, row) {
                if (err) {
                    // req.session.create = -1;
                    res.redirect(req.get('referer'));
                } else {
                    // req.session.create = 1;
                    res.redirect(req.get('referer'));
                }
            });
            // res.render('dashboard', {user: String})
      } else {
          res.redirect('/account');
      }
    });
  });

module.exports = router;
