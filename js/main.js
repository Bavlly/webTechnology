//Navbar 


//Logo
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

var img = class {
    constructor(src) {
        this.src = src;
        this.show = show_image(src, 200, 100, "Random alt");
    }
};

logo1 = new img('./Images/logo.png');


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
x.appendChild(t);                                           // Append the text to <p>
body.appendChild(x);


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

function addTR (...tds) {

  let tr = create('tr');   
  for (let text of tds) {
    let td = create("td");
    appendText(td,text);
    append(tr,td);
  }
  
  append(tbody,tr);
}


let trhead = create('tr');

for (let text of ["Week","Date","Topics","Materials","Deadlines"]){
    let th = create('th');
    appendText(th,text);
    append(trhead,th);
} 
append(thead,trhead);
append(table,thead);

addTR("46","12/11","Introduction","","");
addTR("","14/11","Haskell refresh","","");
addTR("47","19/11","Threads","","");
addTR("","21/11","Mvars","Chapter 7(plus parts of 8 & 9","");
addTR("48","26/11","Software Transactional Memory(1)","Chapter 10","");
addTR("","28/11","Software Transactional Memory(2)","Chapter 10","");
addTR("","30/11","","","Assingment 1");
addTR("49","3/12","Netchange","Netchange Algorithm, Chapter 12","");
addTR("","5/12","Parallelism from Concurrency","Chapter 13","");
addTR("50","10/12","Work & Span","","");
addTR("","12/12","No lecture","","");
addTR("51","17/12","Revision","","");
addTR("","19/12","Mid-session exam","","");
addTR("1","4/1","","","Assingment 2");
addTR("2","7/1","Data Parrallelism(1)","Part 1 Introduction, chapter 5 & 6","");
addTR("","9/11","Data Parallelism(2)","","");
addTR("3","14/11","Data Parellelism(3)","","");
addTR("","16/1","Scan","","");
addTR("4","21/1","GPCPU","","");
addTR("","23/1","Conclusion","","");
addTR("5","30/1","Final exam","","");
addTR("","1/2","No lecture","","Assingment 3");
append(table,tbody)
append(body,table);





//footer
var footer = document.createElement('footer');
var footerText = document.createTextNode('\251 Utrecht University');

footer.appendChild(footerText);
document.body.appendChild(footer);

