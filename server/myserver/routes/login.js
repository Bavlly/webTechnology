const path = require('path');
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

/* GET home page. */
router.get('/', function(req, res, next) {
    let db = new sqlite3.Database('./db.sqlite3', (err) => {
        if (err) {
            console.log("CANNOT CONNECT!!!!!!!!!!");
            return console.error(err.message);
        }
        console.log('Connected to the SQlite database.');
    });

//POST
//     db.serialize(function() {
//         // db.run("CREATE TABLE users (id INT, dt TEXT)");
//
//         var stmt = db.prepare("INSERT INTO Users VALUES (?,?,?,?,?,?,?)");
//         for (var i = 0; i < 10; i++) {
//
//             var d = new Date();
//             var n = d.toLocaleTimeString();
//             stmt.run(i, n);
//         }
//         stmt.finalize();
//
//         db.each("SELECT id, dt FROM user", function(err, row) {
//             console.log("User id : "+row.id, row.dt);
//         });
//     });
//
//     db.close();

//GET
    let sql = "SELECT * FROM Users";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.render('login_form', { Users: rows})
    });

    // close the database connection
    db.close();
    console.log("In COURSES!");
});

router.post('/', function (req, res) {
    let db = new sqlite3.Database('./db.sqlite3', (err) => {
        if (err) {
            console.log("CANNOT CONNECT!!!!!!!!!!");
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
                // req.session.create = -1;
                res.redirect(req.get('referer'));
            } else {
                // req.session.create = 1;
                res.redirect(req.get('referer'));
            }
            res.render('dashboard', {user: String})
        });
    });

});

module.exports = router;

