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

 
  // <!--bootcamp online-store-->
  $("#productquantity1Ne").on("click", majCart); // $(`#${X}Ne`).on("click", majCart);
  $("#productquantity1Pr").on("click", majCart); // $(`#${X}Pr`).on("click", majCart);
 
  function majCart (event){
    event.preventDefault();
    X = event.currentTarget.id; X = X.substr(0, X.length-2);
        idname = event.currentTarget.id; 
    if (event.currentTarget.id==`${X}Ne`) $(`#${X}`).val(Number($(`#${X}`).val()) + 1);
    if (event.currentTarget.id==`${X}Pr` && Number($(`#${X}`).val() > 0)) $(`#${X}`).val(Number($(`#${X}`).val()) - 1);
  }
  
});
