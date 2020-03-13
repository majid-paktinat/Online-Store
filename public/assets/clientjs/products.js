// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newProduct = {
        categoryid: $("#categoryid").val().trim(),
        productname: $("#productname").val().trim(),
        productdescription: $("#productdescription").val().trim(),
        productimage: $("#productimage").val().trim(),
        productprice: $("#productprice").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/products", {
        type: "POST",
        data: newProduct
      }).then(
        function() {
          console.log("New Product created!");
          location.reload(); // Reload the page to get the updated list
        }
      );
    });
  
  
  });
  