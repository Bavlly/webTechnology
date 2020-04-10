CONTENTS OF THIS FILE
---------------------

Group id: group 42
------------------

Names and student numbers of all authors:
Bavlly Fanous - 7064640
Melvin Leijdsman - 6231802
Carlo Kottier - 6601227

-----------------------

Direct link to the location of the website:
http://webtech.science.uu.nl/group42/
------------------

Brief explanation of our web-site, and the structure or our application:

Our web-site shows all the courses that are taught at Utrecht University to all users of the website, providing information about
all those courses, the user can log in to the system, enabling them to enroll or un-enroll for courses.
There is also an option for new users to register themselves to the system, enabling future logins.
A user is allowed to change his or her firstname, lastname, email and password, however he or she is not allowed 
to change their student id, academic level or which program they are following, this information will be set at the
registration of a user and cannot be changed manually by the user.

.
├── resources
|   ├── css
|   └── images
├── server
|   ├── myserver
|       ├── bin
|       ├── node_modules
|       ├── public
|       ├── routes
|       ├── views
|       ├── app.js
|       ├── db.sqlite3
|       ├── package-lock.json
|       └── package.json
|   ├── package-lock.json
|   └── package.json
├── package-lock.json
└── README.txt

-----------------------------------

Logins and passwords of all registered users:

username:       password:
123456          admin
--------------

SQL definition of our database:

CREATE TABLE Courses (
    Code           STRING,
    Title          STRING,
    Program        STRING,
    Academic_level STRING (3),
    Semester       INTEGER,
    Description    STRING,
    Teacher        STRING,
    Picture        STRING
);

CREATE TABLE Users (
    Student_Id     INTEGER (6),
    First_Name     STRING (25),
    Last_Name      STRING (25),
    email          STRING (100),
    Password       STRING (100),
    Academic_Level STRING (3),
    Program        STRING (100) 
);
---------------

Extra features implemented:

//insert if applicable
---------------

This program is mainly focused on web developing of a course for University Utrecht.

----------------

.
├── resources               # All Javascript, images and styling files
│   ├── css                 # All styling files
│   ├── images              # All images (Like logo)
│   └── js                  # All javascript files (header.js & main.js & footer.js)
├── index.html              # Homepage
├── concurrency.html        # concurrency page
├── description.html        # description page
├── assignments.html        # assignments page
├── info.html               # info page with all the content from the ./resources/js
└── README.md
