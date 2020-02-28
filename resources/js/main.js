//zo schrijf je text in javascript
const create = tag => document.createElement(tag);
const createText = str => document.createTextNode(str);
const append = (a,b) => a.appendChild(b);
const appendText = (a,str) => a.appendChild(createText(str));
const body = document.body;

let h2 = create('h1');
appendText(h2,"Find here all the information about the course");
append(body, h2);

// Create a <p> element
var x = document.createElement("P");
// Create a text node
var t = document.createTextNode("This is a paragraph.");

x.appendChild(t);
// Append the text to <p>
body.appendChild(x);


//class Courses
class Courses{
  constructor(title, code, period, ects, nivo, teacher) {
    this.title = title;
    this.code = code;
    this.period = period;
    this.ects = ects;
    this.nivo = nivo;
  }
}

//class Teacher with TA as inheritance
class Teacher{
  constructor(first, last, age, gender, interests, subject) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.subject = subject;
  }
}
// inheritance from class Teacher
class TA extends Teacher{
  constructor(subject, grade, year) {
    super();
    this.subject = subject;
    this.grade = grade;
    this.year = year;
  }
}

//class Schedule
class Schedule{
  constructor(days, time, timeslot) {
    this.days = days;
    this.time = time;
    this.timeslot = timeslot;
  }
}

// class course werkt
var subject1 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject2 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject3 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject4 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject5 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject6 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject7 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject8 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject9 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject10 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject11 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject12 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject13 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject14 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject15 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject16 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject17 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject18 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject19 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");
var subject20 = new Courses("Concurrency", "INFOB3CC", "3", "7.5", "3");


var information = create('p');
var subject = createText(subject1.period);

append(information, subject);
append(body, information);

var teacherassistent = new TA('Algoritms', '4.5', '2020');
var info = create('p');
var teacher = createText(teacherassistent.grade);

append(info, teacher);
append(body, info);

//creating table
let table = create('table');
let thead = create('thead');
let tbody = create('tbody');

function addTR (twhat,tag,tds) {
  
  let tr = create("tr");  

  for (let text of tds) {
    let td = create(tag);
    appendText(td,text);
    append(tr,td);
  }
  
  append(twhat,tr);
}

function addMultiple(twhat,tag, tds){
   for (let ts of tds)
    addTR(twhat,tag,ts);
}

addTR(thead,"th",["Period","Timeslot","Code","Nivo","ects", "vak"]);
addMultiple(tbody,"td",[
    [subject1.period, subject1.period, subject1.code, subject1.nivo, subject1.ects, subject1.title],
    [subject1.period, subject1.period, subject1.code, subject1.nivo, subject1.ects, subject1.title],
    [subject1.period, subject1.period, subject1.code, subject1.nivo, subject1.ects, subject1.title],

]);

append(table,thead);
append(table,tbody)
append(body,table);
