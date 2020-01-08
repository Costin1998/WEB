//adaugare element
var para = document.createElement("p");
var node = document.createTextNode("Cei mai buni din oras.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);

//stergere element
function myFunction() {
    var elmnt = document.getElementById("ff");
    elmnt.remove();
  }

  // //shwo more click
  // var i = 0;
  // function read(){
  //   if(!i){
  //     document.getElementById("more").style.display = "inline"
  //     document.getElementById("dots").style.display = "none";
  //     document.getElementById("showmore").innerHTML = "Mai putin";
  //     i = 1;
  //   }
  //   else{
  //     document.getElementById("more").style.display = "none";
  //     document.getElementById("dots").style.display = "inline";
  //     document.getElementById("showmore").innerHTML = "Mai mult";
  //     i = 0;
  //   }
  // }