// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  var alertBox = document.getElementById('myalert'); alertBox.style.display="none";
  $("#createbutton").on("click", function(event) {
    // Make sure to preventDefault on a click event.
    event.preventDefault();

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
        alertBox.classList.add('alert-success');
        console.log(data);
        console.log("New User created!");
        //location.reload(); // Reload the page to get the updated list
        alertBox.style.display="block";alertBox.innerHTML = 'Account Created Successfully!';alertBox.classList.remove('alert-success');alertBox.classList.add('alert-warning');
      }
    );
  });


});
