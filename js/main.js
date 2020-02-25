


//content



//zo schrijf je text in javascript 
var h1 = document.createElement('h1');
var myText = document.createTextNode('Find here all the information about the course');

h1.appendChild(myText);
document.body.appendChild(h1);

var x = document.createElement("P");                        // Create a <p> element
var t = document.createTextNode("This is a paragraph.");    // Create a text node
x.appendChild(t);                                           // Append the text to <p>
document.body.appendChild(x);


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
var table = document.createElement('table');
for (var i = 1; i < 6; i++){
    var tr = document.createElement('tr');   

    tr.appendChild(TableSupport('Hans'));
    tr.appendChild(TableSupport('Database'));
    tr.appendChild(TableSupport('Concurrency'));
    tr.appendChild(TableSupport('xddd'));

    table.appendChild(tr);
}

//supports table in creating cells
function TableSupport(text)
{
 var td = document.createElement('td');
 var t = document.createTextNode(text);
 td.appendChild(t);
 return td;
}
document.body.appendChild(table);

