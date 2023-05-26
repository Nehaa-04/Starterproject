var count = 1;
      var button = document.getElementById("btn");
      button.addEventListener("click", function() {
         count++;
      });


function printUserDetail(event) {
    event.preventDefault();
    // Get form input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Log form input values to the console
    localStorage.setItem("Candidate"+" "+count, `${username}-${email}-${phone}-${date}-${time}`);
}
