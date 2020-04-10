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
    var search = req.query.search ? req.query.search : null;
    var level = req.query.level ? req.query.level : null;
    var program = req.query.program ? req.query.program : null;
    var semester = req.query.semester ? req.query.semester : null;
    console.log(search);
    
     let where = " WHERE ";
    console.log(semester !== null);
     if(semester != "any" &&  semester !== null)
       where+= "Semester = " + semester+ " AND " ;
     if(level != "any" && level !== null)
      where+= "Academic_level = '" + level + "' AND ";
    if(program != "any" && program !== null)
      where+= "Program = '" + program + "' AND ";
    
    if(search !== null)
     where += "Title LIKE '%" + search + "%'";
     else{ where +="Title LIKE '%%'"} 
    
    if(where.length ==7)
     where+= "1=1";
    let sql = "SELECT* FROM Courses" + where;
    console.log(sql);
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        if(program == null)
        res.render('courses', { course: rows});
        else{
        console.log("eurobeat");
        res.json(rows);
        }
    });

    // close the database connection
    db.close();
    console.log("In COURSES!");
});

module.exports = router;

