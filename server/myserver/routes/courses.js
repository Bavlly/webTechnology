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

//GET
    let sql = "SELECT * FROM Courses";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.render('courses', { course: rows})
    });

    // close the database connection
    db.close();
    console.log("In COURSES!");
});

module.exports = router;

