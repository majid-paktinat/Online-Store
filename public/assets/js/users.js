// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      userid: $("#userid").val().trim(),
      userpassword: $("#userpass").val().trim(),
      userfname: $("#userfname").val().trim(),
      userlname: $("#userlname").val().trim(),
      userrole: $("#userrole").val().trim(),
      useremail: $("#useremail").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/users", {
      type: "POST",
      data: newUser
    }).then(
      function() {
        console.log("New Users created!");
        location.reload(); // Reload the page to get the updated list
      }
    );
  });


});
