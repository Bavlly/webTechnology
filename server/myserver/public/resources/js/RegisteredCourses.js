
const getT = (c,num) => c[num].textContent;

function add(){
    
    var add = document.getElementById("add").parentElement;
    var tr = add.parentElement;
    var children = tr.childNodes;
    const data = {Code: getT(children,0), Title: getT(children,1), Program: getT(children,2), Level: getT(children,3), Semester: getT(children,4), Description: getT(children,5), Teacher: getT(children,6)}
   
    var xhttp = new XMLHttpRequest();
    
   xhttp.open("POST", "http://localhost:3000/coursePlus", true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send(JSON.stringify(data));
   xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Oh yeh");
    }
    };
}

function remove(){
}
document.getElementById("add").addEventListener("click", add, false);
document.getElementById("remove").addEventListener("click", remove, false);
