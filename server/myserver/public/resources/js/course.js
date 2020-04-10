console.log("ohhhhhh");

const create = tag => document.createElement(tag);
const createText = str => document.createTextNode(str);
const append = (a, b) => a.appendChild(b);
const appendText = (a, str) => a.appendChild(createText(str));
const body = document.body;

function handleSearch(){
 
 var semester = document.getElementById("semester").value;
 var level = document.getElementById("level").value;
 var program = document.getElementById("program").value;
 var search = document.getElementById("search").value;

 console.log("FETCHING DATA");
 const Http = new XMLHttpRequest();

 const url='http://localhost:3000/courses?search=' + search + '&program=' + program + '&semester=' + semester + '&level=' + level;
 Http.open("GET", url);
 Http.send();
 
 Http.onreadystatechange = function(){
 if(this.readyState==4 && this.status==200){
       console.log(this.response); 
        let table= document.getElementById('coursetable');
        table.remove();
        buildTable(JSON.parse(this.response));
    }
  }
}

function buildTable(courses){
    let table = create("table");
    table.setAttribute("id","coursetable");
    let thead = create("thead");
    let tbody = create("tbody");

    addTR(thead,"th",["Code","Title","Program","Academic Level","Semester","Description","Teacher","Picture"]);
    console.log(courses)
    console.log(courses[0]);
    for(let course of courses){
        //var
        //console.log(course);
        addTR(tbody,"td", [course.Code, course.Title, course.Program,course.Academic_level,course.Semester,course.Description,course.Teacher,course.Picture]);
    }

    append(table,thead)
    append(table,tbody);
    append(body,table);
}

function addTR(twhat, tag, tds) {

    let tr = create("tr");
  
    for (let text of tds) {
      let td = create(tag);
      appendText(td, text);
      append(tr, td);
    }
    append(twhat, tr);
  }
document.getElementById("semester").addEventListener("change", handleSearch, false);
document.getElementById("level").addEventListener("change", handleSearch, false);
document.getElementById("program").addEventListener("change", handleSearch, false);
document.getElementById("search").addEventListener("input", handleSearch, false);
