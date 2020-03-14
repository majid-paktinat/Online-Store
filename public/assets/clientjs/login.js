// bootcamp
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    var alertBox = document.getElementById('myalert'); alertBox.style.display="none";
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
            alertBox.style.display="block";alertBox.innerHTML = 'not_exist !';alertBox.classList.remove('alert-success');alertBox.classList.add('alert-warning');
          } else if(data=='wrong_pass') {
            alertBox.style.display="block";alertBox.innerHTML = 'wrong_pass !';alertBox.classList.remove('alert-success');alertBox.classList.add('alert-warning');
          }
          
          
        }
      );
    });
    
    
    });