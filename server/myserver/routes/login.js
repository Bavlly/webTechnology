const path = require('path');
const databaseConnection = require('./database');
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
var app = express();
//var session = require('express-session'); // new

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));

/* GET home page. */
// router.get('/', function(req, res, next) {
//     let db = new sqlite3.Database('./db.sqlite3', (err) => {
//         if (err) {
//             return console.error(err.message);
//         }
//     });
//
// //POST
// //     db.serialize(function() {
// //         // db.run("CREATE TABLE users (id INT, dt TEXT)");
// //
// //         var stmt = db.prepare("INSERT INTO Users VALUES (?,?,?,?,?,?,?)");
// //         for (var i = 0; i < 10; i++) {
// //
// //             var d = new Date();
// //             var n = d.toLocaleTimeString();
// //             stmt.run(i, n);
// //         }
// //         stmt.finalize();
// //q
// //         db.each("SELECT id, dt FROM user", function(err, row) {
// //         });
// //     });
// //
// //     db.close();
//
// //GET


router.post('/registration', function (req, res) {
    let db = new sqlite3.Database('./db.sqlite3', (err) => {
        if (err) {
            return console.error(err.message);
        }
        var b = req.body;
        db.run("INSERT INTO Users (Student_Id, First_Name, Last_Name, email, Academic_Level, Program, Password) VALUES (? , ? , ? , ? , ? , ? , ? )",
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
            // res.render('dashboard', {user: String})
        });
    });
});


router.post('/login', function(req, res){
    let db = new sqlite3.Database('./db.sqlite3', (err) => {
        if (err) {
            return console.error(err.message);
        }

    var b = req.body;
    
    let user = String(b.Student_Id);
    let pass = String(b.Password);

    if (user && pass) {
        let sql = 'SELECT * FROM Users WHERE Student_Id = "' + user + '" AND Password = "' + pass+ '"';
		db.all(sql, [], function(error, rows,) {
			if (rows.length > 0) {
				req.session.loggedin = true;
				req.session.username = user;
                res.redirect('/dashboard');
			} else {                
                res.redirect('/login');
			}			
        });
     }});
});
module.exports = router;

