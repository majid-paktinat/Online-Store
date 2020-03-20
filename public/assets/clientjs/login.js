// bootcamp
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    var alertBox = document.getElementById('myalert'); alertBox.style.display="none";
    
    if (sessionStorage.getItem("online-userId")){
        $("#username").val(sessionStorage.getItem("online-userId"));
        $("#userpassword").prop("placeholder", "Please enter password to login!");
    }


    // Execute a function when the user releases a key on the keyboard
    document.getElementById("userpassword").addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("loginbutton").click();
      }
    });


    $("#loginbutton").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
     
      var newLogin = {
        userid: $("#username").val().trim(),
        userpassword: $("#userpassword").val().trim()
      };
    
      
      //Send the POST request..
      $.ajax("/api/login", {
        type: "POST",
        data: newLogin
      }).then(
        function(data) {
          console.log("New Login happend!");console.log(data);
          alertBox.classList.add('alert-success');
          if (data=='success_login') {
            if (document.getElementById("foption").checked) 
                { localStorage.setItem("online-userId",  $("#username").val().trim()); }
            else 
                { sessionStorage.setItem("online-userId",  $("#username").val().trim()); }    
            alertBox.style.display="none";alertBox.classList.remove('alert-success');alertBox.classList.remove('alert-warning');
            location.href = "/index.html" // redirect the user to index page
          }
          else if(data=='not_exist')  {
            alertBox.style.display="block";alertBox.innerHTML = 'username is not exist !';alertBox.classList.remove('alert-success');alertBox.classList.add('alert-warning');
          } else if(data=='wrong_pass') {
            alertBox.style.display="block";alertBox.innerHTML = 'password is not correct, please try again !';alertBox.classList.remove('alert-success');alertBox.classList.add('alert-warning');
          }
          
          
        }
      );
    });
    
    
    });