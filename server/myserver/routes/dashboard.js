const path = require('path');
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

router.get('/logout', function(req, res, next) {
    if (req.session) {
      req.session.destroy(function(err) {
        if(err) {
          return next(err);
        } else {
          res.redirect('/');
        }
      });
    }
  });

router.get('/', function(req, res, next) {
    if(req.session.loggedin){
    let db = new sqlite3.Database('./db.sqlite3', (err) => {
        if (err) {
            return console.error(err.message);
        }
    });

    let sql = "SELECT * FROM Courses";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.render('dashboard', { course: rows})
    });

    db.close();
}
else res.redirect('/login');
});

router.post('/', function (req, res) {
    if(req.session.loggedin){
    let db = new sqlite3.Database('./db.sqlite3', (err) => {
        if (err) {
            return console.error(err.message);
        }
        var b = req.body;
        db.all("INSERT INTO Users (Student_Id, First_Name, Last_Name, email, Academic_Level, Program, Password) VALUES (? , ? , ? , ? , ? , ? , ? )",
            [   String(b.Student_Id),
                String(b.First_Name),
                String(b.Last_Name),
                String(b.email),
                String(b.Academic_Level),
                String(b.Program),
                String(b.Password)],
            function (err, row) {
                if (err) {
                    res.redirect(req.get('referer'));
                } else {
                    res.redirect(req.get('referer'));
                }
            });
    });
}else res.redirect('/login')});

module.exports = router;

