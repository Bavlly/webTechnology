console.log("ohhhhhh");

function handleSearch(){
 //var background = document.getElementById("background").value;
 var semester = document.getElementById("semester").value;
 var level = document.getElementById("level").value;
 var program = document.getElementById("program").value;
 var search = document.getElementById("search").value;

 console.log("carry me away kist niggas");
 const Http = new XMLHttpRequest();

 const url='http://localhost:3000/courses?search=' + search + '&program=' + program + '&semester=' + semester + '&level=' + level;
 Http.open("GET", url);
 Http.send();
 
 Http.onreadystatechange = function(){
 if(this.readyState==4 && this.status==200){
       console.log(this.response);  
    }
  }

 }
document.getElementById("semester").addEventListener("change", handleSearch, false);
document.getElementById("level").addEventListener("change", handleSearch, false);
document.getElementById("program").addEventListener("change", handleSearch, false);
document.getElementById("search").addEventListener("change", handleSearch, false);
