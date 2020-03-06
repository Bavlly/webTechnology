//header
var header = document.createElement("header");
document.body.appendChild(header);

//list item function
function createListElement(link, text){
    var linkje = document.createElement("a");
    var listText = document.createTextNode(text);
    linkje.setAttribute("href", link);
    linkje.appendChild(listText);
    return linkje;
}

//add list object function
function addListObject(list, item){
    var listObject = document.createElement("li");
    listObject.appendChild(item);
    list.appendChild(listObject);
}

//logo
var logoBox = document.createElement("div");
logoBox.classList.add("logo-box");
var logoLink = document.createElement("a");
logoLink.setAttribute("href", "index.html");
let logo = createImg("./resources/Images/logo.png");
logo.classList.add("logo");
logoLink.appendChild(logo);
logoBox.appendChild(logoLink);
header.appendChild(logoBox);


//navbar
var nav = document.createElement("nav");
var list = document.createElement("ul");
list.classList.add("navbar");
var indexLink = createListElement("index.html", "Home");
addListObject(list, indexLink);
var concurrencyLink = createListElement("concurrency.html", "Concurrency");
addListObject(list, concurrencyLink);
var scheduleLink = createListElement("schedule.html", "Schedule");
addListObject(list, scheduleLink);
var assignmentsLink = createListElement("assignments.html", "Assignments");
addListObject(list, assignmentsLink);
var descriptionLink = createListElement("description.html", "Description");
addListObject(list, descriptionLink);
var infoLink = createListElement("info.html", "Information");
addListObject(list, infoLink);
nav.appendChild(list);
header.appendChild(nav);

//logo
function createImg(source){
    var img = document.createElement('img');
    img.setAttribute("src", source);
    return img;
}
