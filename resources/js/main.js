


//content



//zo schrijf je text in javascript 
const create = tag => document.createElement(tag);
const createText = str => document.createTextNode(str);
const append = (a,b) => a.appendChild(b);
const appendText = (a,str) => a.appendChild(createText(str));
const body= document.body;



let h2 = create('h1');
appendText(h2,"Find here all the information about the course");
append(body, h2);


var x = document.createElement("P");                        // Create a <p> element
var t = document.createTextNode("This is a paragraph.");    // Create a text node

x.appendChild(t); 
body.appendChild(x);                                          // Append the text to <p>



//function Course with display and creating p
function Course(title, code, teacher){
    this.title = title;
    this.code = code;
    this.teacher = teacher;
}

var Course1 = new Course('Webtechnology',  123, 'Sergey');
var Course2 = new Course('Concurrency', 156, 'Terov');

var information = document.createElement('p');
var myText1 = document.createTextNode(Course2.teacher);

information.appendChild(myText1);
document.body.appendChild(information);



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

addTR(thead,"th",["Week","Date","Topics","Materials","Deadlines"])
addMultiple(tbody,"td",[
  ["46", "12/11", "Introduction","",""],
  [  "", "14/11", "Haskell refresh","",""],
  ["47", "19/11", "Threads","",""],
  [  "", "21/11", "Mvars", "Chapter 7(plus parts of 8 & 9",""],
  ["48", "26/11", "Software Transactional Memory(1)", "Chapter 10",""],
  [  "", "28/11", "Software Transactional Memory(2)", "Chapter 10",""],
  [  "", "30/11", "", "", "Assingment 1"],
  ["49",  "3/12", "Netchange", "Netchange Algorithm, Chapter 12",""],
  [  "",  "5/12", "Parallelism from Concurrency", "Chapter 13",""],
  ["50", "10/12", "Work & Span","",""],
  [  "", "12/12", "No lecture","",""],
  ["51", "17/12", "Revision","",""],
  [  "", "19/12", "Mid-session exam","",""],
  [ "1",   "4/1", "", "", "Assingment 2"],
  [ "2",   "7/1", "Data Parrallelism(1)", "Part 1 Introduction, chapter 5 & 6",""],
  [  "",  "9/11", "Data Parallelism(2)","",""],
  [ "3", "14/11", "Data Parellelism(3)","",""],
  [  "",  "16/1", "Scan","",""],
  [ "4",  "21/1", "GPCPU","",""],
  [  "",  "23/1", "Conclusion","",""],
  [ "5",  "30/1", "Final exam","",""],
  [  "",   "1/2", "No lecture", "", "Assingment 3"]
]);

append(table,thead);
append(table,tbody)
append(body,table);
