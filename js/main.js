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
    
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    var text1 = document.createTextNode('Hans');
    var text2 = document.createTextNode('Database');
    var text3 = document.createTextNode('Concurrency');

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);
}
document.body.appendChild(table);




//footer
var footer = document.createElement('footer');
var footerText = document.createTextNode('\251 Utrecht University');

footer.appendChild(footerText);
document.body.appendChild(footer);

