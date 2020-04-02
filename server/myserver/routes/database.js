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


// var fs = require("fs");
// var file = __dirname + "/data.db";
// var exists = fs.existsSync(file);
// if(!exists) {
//   fs.openSync(file, "w");
// }

// var sqlite3 = require("sqlite3").verbose();
// function open() {
//   var db = new sqlite3.Database(file);
//   db.exec("PRAGMA foreign_keys = ON");
//   return db;
// }

// function query(query) {
//   var db = open();
//   db.serialize(() => {
//     query();
//     db.close();
//   });
// }

// function queries(qs) {
//   var db = open();
//   db.serialize(() => {
//     qs.forEach(q => q());
//     db.close();
//   });
// }

// module.exports = open();
// module.exports.query = query;
// module.exports.queries = queries;
// module.exports.open = open;