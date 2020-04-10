const path = require('path');
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

router.get('/', function(req, res, next) {
    let db = new sqlite3.Database('./db.sqlite3', (err) => {
    if (err) {
        return console.error(err.message);
    }
});

    var search = req.query.search ? req.query.search : null;
    var level = req.query.level ? req.query.level : null;
    var program = req.query.program ? req.query.program : null;
    var semester = req.query.semester ? req.query.semester : null;
    
     let where = " WHERE ";
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
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        if(program == null)
        res.render('courses', { course: rows});
        else{
        res.json(rows);
        }
    });
    db.close();
});

module.exports = router;

