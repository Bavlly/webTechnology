//zo schrijf je text in javascript
const create = tag => document.createElement(tag);
const createText = str => document.createTextNode(str);
const append = (a,b) => a.appendChild(b);
const appendText = (a,str) => a.appendChild(createText(str));
const body = document.body;


let h1 = create('h1');
appendText(h1,"Find here all the information about the course");
append(body, h1);

// Create a <p> element
var x = document.createElement("P");
// Create a text node
var t = document.createTextNode("This is a paragraph.");

x.appendChild(t);
// Append the text to <p>
body.appendChild(x);


//class Courses
class Courses{
  constructor(title, code, period,timeslot, ects, nivo, teacher) {
    this.title = title;
    this.code = code;
    this.period = period;
    this.timeslot = timeslot;
    this.ects = ects;
    this.nivo = nivo;
    this.teacher = teacher;
  }
}

//class Teacher with TA as inheritance
class Teacher{
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
// inheritance from class Teacher
class TA extends Teacher{
  constructor(first, last, age, gender, interest, subject, grade, year) {
    super(first, last, age, gender, interest, subject);
    
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
var timeslotA = new Schedule(["Monday","Wednessday"],["9-13","9-13"], "A");
var timeslotB = new Schedule(["Tuesday","Thursday"],["9-13","9-13"], "B");
var timeslotC = new Schedule(["monday","Thursday"],["13-17","9-13"], "C");
var timeslotD = new Schedule(["monday","Thursday"],["13-17","9-13"], "D"); 

var teacher1 = new Teacher("Remco","Veltkamp","50","male","Taking long walks on the beach","Game programmeren");
var teacher2 = new Teacher("Ad","Feelders","40","male","Mining away","Datamining");
var teacher3 = new Teacher("Trevor","Mcdonell","28","male","Spending time with any dog, he really loves dogs","Concurency");
var teacher4 = new Teacher("Silja","Renooij","35","female","Making robots","Kunstmatige intelligentie");
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

var subject1 = new Courses("Gameprogrammeren", "INFOB1GP", "1",timeslotA, "7.5", "1",[teacher1,ta1]);
var subject2 = new Courses("Datamining", "INFOMDM", "1",timeslotB, "7.5", "Master",[teacher2,ta2]);
var subject3 = new Courses("Concurrency", "INFOB3CC", "2",timeslotC, "7.5", "3",[teacher3,ta3]);
var subject4 = new Courses("Kunstmatige intelligentie", "INFOB2KI", "2",timeslotD, "7.5", "2",[teacher4,ta4]);
var subject5 = new Courses("Databases", "INFODB", "3",timeslotA, "7.5", "1",[teacher5,ta5]);
var subject6 = new Courses("Algoritmiek", "INFOAL", "3",timeslotB, "7.5", "3",[teacher6,ta6]);
var subject7 = new Courses("Datastructuren", "INFODS", "4",timeslotC, "7.5", "2",[teacher7,ta7]);
var subject8 = new Courses("Graphics", "INFOGR", "4",timeslotD, "7.5", "2",[teacher8,ta8]);

//volgens mij bedoel je dit melwin ?
var teacherAssistent = new TA('Voornaam', 'achternaam', '21', 'Male', 'reading', 'algortims', '4.5', '2020');
var info = create('p');


// appendText(info, teacherText(teacher1));
// append(body, info);

//let text = teacher[0].name + teacher[1].name
let box = create("td");
let tooltip = create("a");
append(box,tooltip);
tooltip.classList.add("tooltip")
appendText(tooltip,subject1.title);

let tooltipText = create("span");
tooltipText.classList.add("tooltiptext");
let text = teacherText(subject1.teacher)
appendText(tooltipText, teacherText(subject1.teacher));
append(tooltip,tooltipText);
append(body,box);

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

function addSubject(tbody,subject){
  let tr = create("tr");
  let tds = subjectToArray(subject);

  createTooltip(subject.timeslot.timeslot,timeSlotText(subject.timeslot),tr);

  for(let t of tds){
    let td = create("td");
    appendText(td,t);
    append(tr,td);
  }

  createTooltip(subject.title,teacherText(subject.teacher),tr);

  append(tbody,tr);
 }

function addMultiple(twhat, subjects){
   for (let subject of subjects)
    addSubject(twhat,subject);
}


function teacherText(teacher){
  let str = "Teacher: " + teacher[0].name + ", TA: " + teacher[1].name + ", TA grade: " + teacher[1].grade + ", TA year: " + teacher[1].year;
  return str;
}

function timeSlotText(timeslot){
  let str = timeslot.days[0] + ": " + timeslot.time[0] + " and " + timeslot.days[1] + ": " + timeslot.time[1];
  return str;
}

function createTooltip(title,tiptext,parent){
  let box = create("td");
  let tooltip = create("a");
  append(box,tooltip);
  tooltip.classList.add("tooltip");
  appendText(tooltip,title);

  let tooltipText = create("span");
  tooltipText.classList.add("tooltiptext");

  appendText(tooltipText,tiptext);
  append(tooltip,tooltipText);
  append(parent,box);
}

subjectToArray = subject => [subject.period, subject.code, subject.nivo, subject.ects];

addTR(thead,"th",["Period","Timeslot","Code","Nivo","ects", "vak"]);
addMultiple(tbody,[subject1 ,subject2 ,subject3 ,subject4 ,subject5 ,subject6 ,subject7 ,subject8]);

append(table,thead);
append(table,tbody);
append(body,table);


//dark-mode
var btn = create('button');
var btnT = createText('Activate dark-mode');
btn.setAttribute("id", "button");
append(btn, btnT);
append(body, btn);

function darkmode() {
    var confirmation = confirm("Do you really want dark mode? ");
    if (confirmation == true){
      document.body.classList.toggle('dark-mode');
    } else {
      return false;
    }


}
document.getElementById("button").addEventListener("click", darkmode, false);

//overlay effect
var btnSettings = create('button');
var btnSettingsT = createText('Change settings');
btn.setAttribute('id', 'demo');
append(btnSettings, btnSettingsT);
append(body, btnSettings);

function myFunction(){
  var txt;
  var person = prompt("Which color do you want?");
  // if (person == null || person == ""){
  //   txt = "user didn't change the settings";
  // } else {
  //   txt = "Hello" + person + "we changed everything";
  // }
  document.getElementById('button').addEventListener('click', myFunction, false);
}