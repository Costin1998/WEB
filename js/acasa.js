var slider_content = document.getElementById('box');

  	// contain images in an array
    var image = ['pictures/hero-2','pictures/hero-4'];

    var i = image.length;
    var ok = 0;

    // function for next slide 

    function nextImage(){
    	if (i<image.length) {
    		i= i+1;
    	}else{
    		i = 1;
    	}
        slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
        if (ok == 0)
        {
          image.push('pictures/hero-1');
          ok = 1;
        }
    }


    // function for prew slide

    function prewImage(){

    	if (i<image.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = image.length;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

    }

    document.getElementById("dom").style.color = "yellow";


    //setTimeout
    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
      var t = setTimeout(function(){ startTime() }, 500);
    }
    
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    //ajax

const users = [];    
let btn = document.getElementById("deleteButton");
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
.then(response => {
	console.log("Succes");
	response.json().then(data => {
		for(let key in data) {
			users.push({
				...data[key],
				id: key
			});
		}
	})
})
.catch(err => {
	console.log(err);
});


btn.addEventListener("click", () => {
	console.log(users);
})

//sweetalert
document.querySelector(".first").addEventListener('click', function(){
  swal("SweetAlert2");
});

//use .one to ensure this only happens once
$("#playvideo").click(function(){
  $("#video1")[0].src += "?autoplay=1";
 });

 function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var a = document.getElementById("mr").style;
a.color = randomColor();