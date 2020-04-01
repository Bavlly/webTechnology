const sqlite3 = require('sqlite3').verbose();

// create database
let db = new sqlite3.Database('./db.sqlite3', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

// close the database connections
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});