const path = require('path');
const databaseConnection = require('./database');
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
var app = express();


router.post('/registration', function (req, res) {
    let db = new sqlite3.Database('./db.sqlite3', (err) => {
        if (err) {
            console.log("CANNOT CONNECT!!!!!!!!!!");
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
                res.redirect(req.get('referer'));
            } else {
                res.redirect(req.get('referer'));
            }
        });
    });
});


router.post('/login', function(req, res){
    let db = new sqlite3.Database('./db.sqlite3', (err) => {
        if (err) {
            console.log("CANNOT CONNECT!!!!!!!!!!");
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
                console.log("logged in");
			} else {                
                res.redirect('/login');      
                console.log("oh nee toch waarom gaat alles fout als je blieft god help");
			}			
        });
     }});
});
module.exports = router;

