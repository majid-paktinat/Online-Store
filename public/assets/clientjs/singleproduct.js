// bootcamp
$(function() {

    //Send the GET request
    $.get( `/api/products/${9}` ).then(function(response){
        console.log( `productList: `, response);
        document.getElementById('hidproductid').value = response[0].productid;
        document.getElementById('productdescription').innerHTML = `<p>${response[0].productdescription}</p>`;
        document.getElementById('productname').innerHTML = `<h3>${response[0].productname}</h3>`; 
        document.getElementById('productprice').innerHTML = `<h2>$${response[0].productprice}</h2>`; 
        document.getElementById('productimage').setAttribute("src", "/assets/img/.../Bel-Air+Sofa.jpg"); 
      });

      $("#addtocart").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
       
        var newCartItem = {
          userid: 'majidpak',
          productid: $("#hidproductid").val().trim(),
          productquantity: $("#productquantity").val().trim()
        };
      
        
        //Send the POST request..
        $.ajax("/api/orders", {
          type: "POST",
          data: newCartItem
        }).then(
          function(data) {
            console.log("New item added to cart!");
            console.log(data);
            document.getElementById('cartForm').submit();
            //$.post('cart.html', 'ID=' + "abbas");
            //location.href="/cart.html";
            //$.ajax("/api/orders/redirect"
          }
        );
      });



});