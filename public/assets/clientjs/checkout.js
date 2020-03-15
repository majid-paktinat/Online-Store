// bootcamp
$(function() {

// since this page has already been loginRequired(true)!
document.getElementById("customerlogin").style.display='none'; 



//Send the GET request
$.get( `/api/cartFields` ).then(function(response){
    // GET pre-posted params from server and keep them in hidden fields for further use 
    document.getElementById('hiduserid').value = response.USERID;
    document.getElementById('hidproductid').value = response.PRODUCTID;
    document.getElementById('hidproductquantity').value = response.PRODUCTQUANTITY;
    console.log(response.USERID);  // agar direct az addressbar biyad too cart.html ina empty hastan... (bayad control konim!)


//Send the GET request
$.get( `/api/cart/${document.getElementById('hiduserid').value}` ).then(function(response){
  
  for (i=0; i<response.length; i++){
    
    console.log(response[i]);
  
  }


});



});




// Create Order from Carts

// get from card for userid
// loop and call post! 
// var newOrder = {
//     userid: $("#orderuserid").val().trim(),
//     productid: $("#productid").val().trim(),
//     productquantity: $("#productquantity").val().trim()
//   };

//   console.log(newOrder);

// $.ajax("/api/orders", {
//     type: "POST",
//     data: newOrder
//   }).then(
//     function() {
//       console.log("New Order created!");
//       location.reload(); // Reload the page to get the updated list
//     }
//   );

});