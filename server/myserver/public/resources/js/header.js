//header
var header = document.createElement("header");
document.body.appendChild(header);

//list item function
function createListElement(link, text){
    var littleLink = document.createElement("a");
    var listText = document.createTextNode(text);
    littleLink.setAttribute("href", link);
    littleLink.appendChild(listText);
    return littleLink;
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
logoLink.setAttribute("href", "/");
let logo = createImg("./resources/Images/logo.png");
logo.classList.add("logo");
logoLink.appendChild(logo);
logoBox.appendChild(logoLink);
header.appendChild(logoBox);


//navbar
var nav = document.createElement("nav");
var list = document.createElement("ul");
list.classList.add("navbar");
var indexLink = createListElement("/", "Home");
addListObject(list, indexLink);
var concurrencyLink = createListElement("concurrency", "Concurrency");
addListObject(list, concurrencyLink);
var scheduleLink = createListElement("schedule", "Schedule");
addListObject(list, scheduleLink);
var assignmentsLink = createListElement("assignments", "Assignments");
addListObject(list, assignmentsLink);
var descriptionLink = createListElement("description", "Description");
addListObject(list, descriptionLink);
var infoLink = createListElement("info", "Information");
addListObject(list, infoLink);
nav.appendChild(list);
header.appendChild(nav);

//logo
function createImg(source){
    var img = document.createElement('img');
    img.setAttribute("src", source);
    return img;
}
