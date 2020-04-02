const path = require('path');

const express = require('express');

const router = express.Router();

const sqlite3 = require('sqlite3').verbose();

// var db = require(database.js); // Melvin

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('courses', { title: 'Express' });
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
        console.log("verschrikkelijk vak!");
        //console.log(rows);
        console.log(rows[1]);
    });

    // close the database connection
    db.close();
    console.log("In COURSES!");
    res.render('courses');
});


module.exports = router; 



//melvin
// function getCourses(title){
// db.query(function() { var stmt=db.prepare("SELECT * FROM Courses WHERE Title = ?");
//     stmt.get(Title, function(error,row){
//         if(error){ console.log("error");}
//         if(res){console.log(res);}
//   });
// });
// }

// // router.get("/", (req, res, next) => {
// //   getCourses(req.session.uid, (err, cs) => {
// //     courses = cs;
// //     res.render("courses", {
// //       active: "courses",
// //       courses: courses.slice(0, coursePerReq),
// //     });
// //   });
// // }

// // router.get('/', (req, res, next) => {

// // // create database
// // let db = new sqlite3.Database('./db.sqlite3', (err) => {
// //     if (err) {
// //         console.log("CANNOT CONNECT!!!!!!!!!!");
// //         return console.error(err.message);
// //     }
// //     console.log('Connected to the SQlite database.');
// // });

// // //GET
// //     let sql = "SELECT * FROM Courses";
// //     db.all(sql, [], (err, rows) => {
// //         if (err) {
// //             throw err;
// //         }
// //         console.log("verschrikkelijk vak!");
// //         //console.log(rows);
// //         console.log(rows[1]);
// //     });

// //     // close the database connection
// //     db.close();
// //     console.log("In COURSES!");
// //     res.render('courses');
// // });

    




// module.exports = router;
