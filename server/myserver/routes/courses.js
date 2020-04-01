const path = require('path');

const express = require('express');

const router = express.Router();

const sqlite3 = require('sqlite3').verbose();

router.get('/', (req, res, next) => {

// create database
let db = new sqlite3.Database('./db.sqlite3', (err) => {
    if (err) {
        console.log("CANNOT CONNECT!!!!!!!!!!");
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

//GET
    let sql = "SELECT * FROM Courses";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log(rows);
    });

    // close the database connection
    db.close();
    console.log("In COURSES!");
    res.sendFile(path.join(__dirname, '../', 'views', 'courses.html'));
});

module.exports = router;
