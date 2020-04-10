const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('../db.sqlite3', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
});

db.serialize(() => {
    db.each(`SELECT Courses as id,
                  Name as name
           FROM playlists`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
    });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
});
