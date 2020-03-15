// bootcamp
$(function() {

//Send the GET request
$.get( `/api/cartFields` ).then(function(response){
    // GET pre-posted params from server and keep them in hidden fields for further use 
    document.getElementById('hiduserid').value = response.USERID;
    document.getElementById('hidproductid').value = response.PRODUCTID;
    document.getElementById('hidproductquantity').value = response.PRODUCTQUANTITY;
});

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCart = {
      userid: $("#cartuserid").val().trim(),
      productid: $("#productid").val().trim(),
      productquantity: $("#productquantity").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/carts", {
      type: "POST",
      data: newCart
    }).then(
      function() {
        console.log("New Cart created!");
        location.reload(); // Reload the page to get the updated list
      }
    );
  });

  $("#continueshopping").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    location.href="/index.html"
   
  });

});
