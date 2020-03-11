// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newOrder = {
      userid: $("#orderuserid").val().trim(),
      productid: $("#productid").val().trim(),
      productquantity: $("#productquantity").val().trim()
    };

    console.log(newOrder);

    // Send the POST request.
    $.ajax("/api/orders", {
      type: "POST",
      data: newOrder
    }).then(
      function() {
        console.log("New Order created!");
        location.reload(); // Reload the page to get the updated list
      }
    );
  });


});
