//Navbar 

//Logo
var img = document.createElement('img');
img.src = "../Images/logo.png";

//simg.setAttribute('src', '../Images/logo.png')
//img.appendChild(img);s
document.appendChild(img);




//zo schrijf je text in javascript 
var h1 = document.createElement('h1');
var myText = document.createTextNode('Click');

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


//footer
var footer = document.createElement('footer');
var footerText = document.createTextNode('\251 Utrecht University');

footer.appendChild(footerText);
document.body.appendChild(footer);

