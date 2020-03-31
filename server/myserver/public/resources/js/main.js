//zo schrijf je text in javascript
const create = tag => document.createElement(tag);
const createText = str => document.createTextNode(str);
const append = (a, b) => a.appendChild(b);
const appendText = (a, str) => a.appendChild(createText(str));
const body = document.body;

//main text
var mainText = create("main");
append(body, mainText)

//heading
let h1 = create("h1");
appendText(h1,"Find here all the information about the course");
append(mainText, h1);

//paragraph
var p = create("p");
appendText(p,"Below you can find a table containing information about multiple courses, hover over the 'vakken' and the 'Period' to gain more information about the course.");
append(mainText,p);


//Toggle button creation
var row = create("div");
row.classList.add("row");
var button = create("div");
button.classList.add("button", "r");
button.setAttribute("id", "button1");
var inputType = create("input");
inputType.setAttribute("type", "checkbox");
inputType.classList.add("checkbox");
var balls = create("div");
balls.classList.add("balls");
var layer = create("div");
layer.classList.add("layer");

append(button, inputType);
append(button, balls);
append(button, layer);
append(row, button);
append(mainText, row);

//class Courses
class Courses {
  constructor(title, code, period, timeslot, ects, nivo, teacher) {
    this.title = title;
    this.code = code;
    this.period = period;
    this.timeslot = timeslot;
    this.ects = ects;
    this.nivo = nivo;
    this.teacher = teacher;
  }
}

//class Teacher 
class Teacher {
  constructor(first, last, age, gender, interests, subject) {
    this.first = first;
    this.last = last;
    this.name = this.first + " " + this.last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.subject = subject;
  }
}

//class TA with inheritance from class Teacher
class TA extends Teacher {
  constructor(first, last, age, gender, interest, subject, grade, year) {
    super(first, last, age, gender, interest, subject);

    this.grade = grade;
    this.year = year;
  }
}

//class Schedule
class Schedule {
  constructor(days, time, timeslot) {
    this.days = days;
    this.time = time;
    this.timeslot = timeslot;
  }
}

// creation of all objects
var timeslotA = new Schedule(["Monday", "Wednessday"], ["9-13", "9-13"], "A");
var timeslotB = new Schedule(["Tuesday", "Thursday"], ["9-13", "9-13"], "B");
var timeslotC = new Schedule(["monday", "Thursday"], ["13-17", "9-13"], "C");
var timeslotD = new Schedule(["monday", "Thursday"], ["13-17", "9-13"], "D");

var teacher1 = new Teacher("Remco", "Veltkamp", "50", "male", "Taking long walks on the beach", "Game programmeren");
var teacher2 = new Teacher("Ad", "Feelders", "40", "male", "Mining away", "Datamining");
var teacher3 = new Teacher("Trevor", "Mcdonell", "28", "male", "Spending time with any dog, he really loves dogs", "Concurency");
var teacher4 = new Teacher("Silja", "Renooij", "35", "female", "Making robots", "Kunstmatige intelligentie");
var teacher5 = new Teacher("Hans", "Philipi", "50", "male", "Talking", "Databases");
var teacher6 = new Teacher("Erik jan", "van Leeuwen", "30", "male", "Dynamic programming", "Algoritmiek");
var teacher7 = new Teacher("Gerard", "Tel", "60", "male", "Count sort", "Datastructuren");
var teacher8 = new Teacher("Jacco", "Bikker", "40", "male", "Building raytracers", "Graphics");

var ta1 = new TA("Tim", "Schagen", "20", "male", "Gamen", "Gameprogrammeren", "9", "3");
var ta2 = new TA("Steven", "Langerwerf", "25", "male", "Minen", "Datamining", "10", "m");
var ta3 = new TA("Hugo", "Peters", "23", "male", "threading", "Concurrency", "9", "m");
var ta4 = new TA("Remi", "Wieten", "20", "male", "AI", "Kunstmatige intelligentie", "9", "2");
var ta5 = new TA("Theo", "Harkes", "21", "male", "Storing information", "Databases", "8", "2");
var ta6 = new TA("Ivo Gabe", "de Wolff", "22", "male", "Divide and conquer", "Algoritmiek", "9", "m");
var ta7 = new TA("Felix", "Ant", "21", "male", "Counting with gerard", "Datastructuren", "9", "3");
var ta8 = new TA("Mark", "Dekker", "21", "male", "Pixels", "Graphics", "9", "3");

var subject1 = new Courses("Gameprogrammeren", "INFOB1GP", "1", timeslotA, "7.5", "1", [teacher1, ta1]);
var subject2 = new Courses("Datamining", "INFOMDM", "1", timeslotB, "7.5", "Master", [teacher2, ta2]);
var subject3 = new Courses("Concurrency", "INFOB3CC", "2", timeslotC, "7.5", "3", [teacher3, ta3]);
var subject4 = new Courses("Kunstmatige intelligentie", "INFOB2KI", "2", timeslotD, "7.5", "2", [teacher4, ta4]);
var subject5 = new Courses("Databases", "INFODB", "3", timeslotA, "7.5", "1", [teacher5, ta5]);
var subject6 = new Courses("Algoritmiek", "INFOAL", "3", timeslotB, "7.5", "3", [teacher6, ta6]);
var subject7 = new Courses("Datastructuren", "INFODS", "4", timeslotC, "7.5", "2", [teacher7, ta7]);
var subject8 = new Courses("Graphics", "INFOGR", "4", timeslotD, "7.5", "2", [teacher8, ta8]);

//creating table
let table = create('table');
let thead = create('thead');
let tbody = create('tbody');

//function that adds a row of table elements td/th to a table body/head/foot with given elements
function addTR(twhat, tag, tds) {

  let tr = create("tr");

  for (let text of tds) {
    let td = create(tag);
    appendText(td, text);
    append(tr, td);
  }
  append(twhat, tr);
}

//adds a subject to the a table
function addSubject(tbody, subject) {
  let tr = create("tr");
  let tds = subjectToArray(subject);
  createTooltip(subject.timeslot.timeslot, timeSlotText(subject.timeslot), tr);

  for (let t of tds) {
    let td = create("td");
    appendText(td, t);
    append(tr, td);
  }
  createTooltip(subject.title, teacherText(subject.teacher), tr);
  append(tbody, tr);
}

//adds multiple subjects at once
function addMultiple(twhat, subjects) {
  for (let subject of subjects)
    addSubject(twhat, subject);
}

//tooltip text for teacher
function teacherText(teacher) {
  let str = "Teacher: " + teacher[0].name + ", TA: " + teacher[1].name + ", TA grade: " + teacher[1].grade + ", TA year: " + teacher[1].year;
  return str;
}

//tooltip text for timeslot
function timeSlotText(timeslot) {
  let str = timeslot.days[0] + ": " + timeslot.time[0] + " and " + timeslot.days[1] + ": " + timeslot.time[1];
  return str;
}

//creates a tooltip and appends it to a parent
function createTooltip(title, tiptext, parent) {
  let box = create("td");
  let tooltip = create("a");
  append(box, tooltip);
  tooltip.classList.add("tooltip");
  appendText(tooltip, title);

  let tooltipText = create("span");
  tooltipText.classList.add("tooltiptext");

  appendText(tooltipText, tiptext);
  append(tooltip, tooltipText);
  append(parent, box);
}

//maps the a subject object to an array of strings
subjectToArray = subject => [subject.period, subject.code, subject.nivo, subject.ects];

//add table rows
addTR(thead, "th", ["Period", "Timeslot", "Code", "Nivo", "ects", "vak"]);
addMultiple(tbody, [subject1, subject2, subject3, subject4, subject5, subject6, subject7, subject8]);

//append table
append(table, thead);
append(table, tbody);
append(body, table);


//darkMode
function darkmode() {
  if (document.body.classList.contains("dark-mode")) {
      document.body.classList.toggle("dark-mode");
      document.getElementById("color").value = "black";
      changeColor();
      document.getElementById("background").value = "white";
      changeBackcolor();    
  } else {
      document.body.classList.toggle('dark-mode');
      document.getElementById("color").value = "white";
      changeColor();
      document.getElementById("background").value = "black";
      changeBackcolor();
  }
}


//creates to labels with a select to choose colors for the text and background
var labelColor = create("label");
labelColor.setAttribute("label", "color_label")
labelColor.setAttribute("for", "color");
appendText(labelColor, "pick a text color: ");
createSelect(labelColor, "color", "black", "white", "red", "blue", "green", "yellow");
append(body, labelColor);

var labelBackground = create("label");
labelBackground.setAttribute("label", "coloBackground_label")
labelBackground.setAttribute("for", "background");
appendText(labelBackground, "pick a background color: ");
createSelect(labelBackground, "background", "white", "black", "red", "blue", "green", "yellow");
append(body, labelBackground);

//creats a select
function createSelect(label, value, ...values) {

  var select = create("select");
  select.setAttribute("id", value);

  for (let val of values) {
    var option = create("option");
    option.setAttribute("value", val);
    appendText(option, val);
    append(select, option);
  }
  append(label, select);
}

//changes text color to what the user chose
function changeColor() {
  var color = document.getElementById("color").value;

  changeStyling("a", "color", color);
  changeStyling("h1", "color", color);
  changeStyling("p", "color", color);
  changeStyling("tr", "color", color);
  changeStyling("button", "color", color);
  changeStyling("footer", "color", color);
  changeStyling("label", "color", color);
}

//changes background color to what the user chose
function changeBackcolor() {
  var background = document.getElementById("background").value;
  changeStyling("body", "backgroundColor", background);
}

//allows to change the color of elements
function changeStyling(tag, styling, color) {
  var tags = document.getElementsByTagName(tag);
  for (i = 0; i < tags.length; i++) {
    if (styling == "color")
      document.getElementsByTagName(tag)[i].style.color = color;
    if (styling == "backgroundColor")
      document.getElementsByTagName(tag)[i].style.backgroundColor = color;
  }
}

//event listeners that are invoked by user interaction
document.getElementById("button1").addEventListener("click", darkmode, false);
document.getElementById("color").addEventListener("change", changeColor, false);
document.getElementById("background").addEventListener("change", changeBackcolor, false);