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
  constructor(first, last, age, gender, interest, subject, grade, year) {
    super(first,last,age,gender,interest,subject);
    
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

var teacher1 = new Teacher("Remco","Veltkamp","50","male","Taking long walks on the beach","Gameprogrammeren");
var teacher2 = new Teacher("Ad","Feelders","40","male","Mining away","Datamining");
var teacher3 = new Teacher("Trevor","Mcdonell","28","male","Spending time with any dog, he really loves dogs","Concurency");
var teacher4 = new Teacher("Silja","Renooij","35","female","Making robots","Gameprogrammeren");
var teacher5 = new Teacher("Hans","Philipi","50","male","Talking","Databases");
var teacher6 = new Teacher("Erik jan","van Leeuwen","30","male","Dynamic programming","Algoritmiek");
var teacher7 = new Teacher("Gerard","Tel","60","male","Count sort","Datastructuren");
var teacher8 = new Teacher("Jacco","Bikker","40","male","Building raytracers","Graphics");

var ta1 = new TA("Tim","Schagen","20","male","Gamen","Gameprogrammeren","9","3");
var ta2 = new TA("Steven","Langerwerf","25","male","Minen","Datamining","10","m");
var ta3 = new TA("Hugo","Peters","23","male","threading","Concurrency","9","m");
var ta4 = new TA("Remi","Wieten","20","male","AI","Kunstmatige intelligentie","9","2");
var ta5 = new TA("Theo","Harkes","21","male","Storing information","Databases","8","2");
var ta6 = new TA("Ivo Gabe","de Wolff","22","male","Divide and conquer","Algoritmiek","9","m");
var ta7 = new TA("Felix","Ant","21","male","Counting with gerard","Datastructuren","9","3");
var ta8 = new TA("Mark","Dekker","21","male","Pixels","Graphics","9","3");

var subject1 = new Courses("Gameprogrammeren", "INFOB1GP", "1", "7.5", "1",[Teacher1,ta1]);
var subject2 = new Courses("Datamining", "INFOMDM", "1", "7.5", "m",[Teacher2,ta2]);
var subject3 = new Courses("Concurrency", "INFOB3CC", "2", "7.5", "3",[Teacher3,ta3]);
var subject4 = new Courses("Kunstmatige intelligentie", "INFOB2KI", "2", "7.5", "2",[Teacher4,ta4]);
var subject5 = new Courses("Databases", "INFODB", "3", "7.5", "1",[Teacher5,ta5]);
var subject6 = new Courses("Algoritmiek", "INFOAL", "3", "7.5", "3",[Teacher6,ta6]);
var subject7 = new Courses("Datastructuren", "INFODS", "4", "7.5", "2",[Teacher7,ta7]);
var subject8 = new Courses("Graphics", "INFOGR", "4", "7.5", "2",[Teacher8,ta8]);






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
