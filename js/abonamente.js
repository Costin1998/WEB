src="https://cdn.jsdelivr.net/npm/sweetalert2@9"
src="sweetalert2.all.min.js"

var myVar = setInterval(setColor, 300);

function setColor() {
    var x = document.body;
    x.style.background = x.style.background == "yellow" ? "white" : "yellow";
  }
   
  function stopColor() {
    clearInterval(myVar);
  }
  // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function myFunction() {
  var elmnt = document.getElementById("demo");
  elmnt.remove();
}



fetch("https://jsonplaceholder.typicode.com/posts") // Call the fetch function passing the url of the API as a parameter
    .then(function(response) {
        // Daca a fost totul cu success
        var fetchData = null;
        // Spre deosebire de primele 2 variante, fetch API ne intoarce o promisiune
        // fara sa intram in detalii tehnice, metoda response.json() converte promisiunea la un obiect de tip JSON care cotnine datele noastre
        // dar trebuie sa folosim "then" ca sa asteptam pana are loc conversia (pt ca response.json() este async)
        response.json().then(function(data)
        {
            console.log("response din Fetch API",data);
            fetchData = data;
        }
        );

    })
    .catch(function(error) {
        // Daca am avut o eroare
        console.log("Eroarea este",error);
    });

    function printPage() {
      window.print();
    }