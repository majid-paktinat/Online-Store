// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCategory = {
        //id: $("#id").val().trim(),
        categoryname: $("#categoryname").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/categories", {
        type: "POST",
        data: newCategory
      }).then(
        function() {
          console.log("New Category created!");
          location.reload(); // Reload the page to get the updated list
        }
      );
    });
  
  
  });
  