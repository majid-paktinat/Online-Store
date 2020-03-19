// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  var alertBox = document.getElementById('myalert'); alertBox.style.display="none";
  $("#createbutton").on("click", function(event) {
    // Make sure to preventDefault on a click event.
    event.preventDefault();
    
    alertBox.style.display="none";

    sessionStorage.removeItem("online-userId"); localStorage.removeItem("online-userId");

    var newUser = {
      userid: $("#username").val().trim(),
      userpassword: $("#userpassword").val().trim(),
      userfname: $("#first").val().trim(),
      userlname: $("#last").val().trim(),
      userrole: "Buyer",
      useremail: $("#email").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/users", {
      type: "POST",
      data: newUser
    }).then(
      function(data) {
        if(data=='exist'){
          console.log("already-exist");
          alertBox.classList.add('alert-success');
          alertBox.style.display="block";alertBox.innerHTML = 'User already exist, with this username - please try another one!';alertBox.classList.remove('alert-success');alertBox.classList.add('alert-warning');
        } else {
          console.log("New User created!");
          alert( `Thank you, User created successfully! ` );
          sessionStorage.setItem("online-userId",  $("#username").val().trim()); // we write it for (login page, username field) to ftech from
          location.href="/login.html"
      }
    }
    );
  });


});
