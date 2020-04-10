console.log("OAOHAOASIPJDflkasdfja;dsfk");
const getT = (c,num) => c[num].textContent;

function add(){
    
    var add = document.getElementById("add").parentElement;
    var tr = add.parentElement;
    var c = tr.childNodes;
    console.log(c[2].textContent);
    const data = {Code: getT(c,0), Title: getT(c,1), Program: getT(c,2), Level: getT(c,3), Semester: getT(c,4), Description: getT(c,5), Teacher: getT(c,6)}
    console.log(data);
   
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
    // const Http = new XMLHttpRequest();

    // const url='http://localhost:3000/courses?search=' + search + '&program=' + program + '&semester=' + semester + '&level=' + level;
    // Http.open("GET", url);
    // Http.send();
    
    // Http.onreadystatechange = function(){
    // if(this.readyState==4 && this.status==200){
    //       console.log(this.response); 
    //        let table= document.getElementById('coursetable');
    //        table.remove();
    //        buildTable(JSON.parse(this.response));
    //    }
    //  }
}
document.getElementById("add").addEventListener("click", add, false);
document.getElementById("remove").addEventListener("click", remove, false);
