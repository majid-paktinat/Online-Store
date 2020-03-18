// bootcamp
$(function() {

storageUser = (sessionStorage.getItem("online-userId")) ? sessionStorage.getItem("online-userId") : localStorage.getItem("online-userId");

//Send the GET request
$.get( `/api/cartFields` ).then(function(response){
    // GET pre-posted params from server and keep them in hidden fields for further use 
    document.getElementById('hiduserid').value = response.USERID;
    document.getElementById('hidproductid').value = response.PRODUCTID;
    document.getElementById('hidproductquantity').value = response.PRODUCTQUANTITY;
    
    console.log(response.USERID);  // agar direct az addressbar biyad too cart.html ina empty hastan... (bayad control konim!)
    console.log(storageUser);

// GET all records inside the "Cart Entiry" for the specific userid
//$.get( `/api/cart/${document.getElementById('hiduserid').value}` ).then(function(response){
  $.get( `/api/cart/${storageUser}` ).then(function(response){


  
  // console.log("response XDE");
  // console.log(document.getElementById('hiduserid').value);
  // console.log(response);
  
  let totalAmount = 0;
  console.log(response);
  for (i=response.length; i>0; i--){
    let totalRow = 0;
    tbodyStr = ` <tr>
    <td>
      <div class="media">
        <div class="d-flex"> <!--bootcamp online-store-->
          <div data-thumb="" id="productimageParent">
            <img id="productimage${i}" class="thumbnail-size" src="${response[i-1].productimage}" />
          </div>
        </div>
        <div class="media-body" id="productnameParent"> <!--bootcamp online-store-->
          <div id="productnameRow${i}"><p>${response[i-1].productname}</p></div>
        </div>
      </div>
    </td>
    <td>
      <div id="productpriceRow${i}" data-price="${response[i-1].productprice}"><h5>${response[i-1].productprice}</h5></div> <!--bootcamp online-store-->
    </td>
    <td>
      <div class="product_count">
        <span class="input-number-decrement" id="productquantity${i}Pr"> <i class="ti-angle-down"></i></span> <!--bootcamp online-store-->
        <input class="Ainput-number" id="productquantity${i}" data-id="${response[i-1].cartid}" type="text" value="${response[i-1].productquantity}" min="0" max="10"> <!--bootcamp online-store-->
        <span class="input-number-increment" id="productquantity${i}Ne"> <i class="ti-angle-up"></i></span> <!--bootcamp online-store-->
      </div>
    </td>
    <td>
      <div id="totalRow${i}"><h5>$${number_format(Number(response[i-1].productquantity)*Number(response[i-1].productprice), 2)}</h5></div> <!--bootcamp online-store-->
    </td>
  </tr>`;
  totalRow = number_format(Number(response[i-1].productquantity)*Number(response[i-1].productprice), 2);
  totalAmount = Number(totalAmount) + Number(totalRow);
  $("#mytbody").prepend(tbodyStr);
  $("#totalAmount").attr(('data-price'),number_format(totalAmount,2));
  $("#totalAmount").html(`<h5>$${number_format(totalAmount,2)}</h5>`);
  
 
  // <!--bootcamp online-store-->
  $(`#productquantity${i}Ne`).on("click", majCart); // $(`#${X}Ne`).on("click", majCart);
  $(`#productquantity${i}Pr`).on("click", majCart); // $(`#${X}Pr`).on("click", majCart);

  }


  


});



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

  function number_format(val, decimals){
    //Parse the value as a float value
    val = parseFloat(val);
    //Format the value w/ the specified number
    //of decimal places and return it.
    return val.toFixed(decimals);
}
 
  function majCart (event){
    event.preventDefault();
    X = event.currentTarget.id; X = X.substr(0, X.length-2);
    if (event.currentTarget.id==`${X}Ne`) $(`#${X}`).val(Number($(`#${X}`).val()) + 1);
    if (event.currentTarget.id==`${X}Pr` && Number($(`#${X}`).val() > 0)) $(`#${X}`).val(Number($(`#${X}`).val()) - 1);

    console.log($(`#productquantity${X.substr(15,2)}`).attr('data-id')); // 15 for productquantity and 2 for having the specified length.
    //console.log($(`#productquantity${X.substr(15,2)}`).attr('data-quantity')); // 15 for productquantity and 2 for having the specified length.
    idToUpdate = $(`#productquantity${X.substr(15,2)}`).attr('data-id');
    quantityToUpdate = Number($(`#${X}`).val());

    // Recalculation....
    // console.log($(`#totalRow${X.substr(15,2)}`));
    p = Number($(`#productpriceRow${X.substr(15,2)}`).attr('data-price'));
    $(`#totalRow${X.substr(15,2)}`).html(`<h5>$${number_format(Number(p*quantityToUpdate),2)}</h5>`);

    if (event.currentTarget.id==`${X}Ne`){
      temp1 = Number($("#totalAmount").attr('data-price'));
      //temp2 = Number($(`#productpriceRow${X.substr(15,2)}`).attr('data-price'));
      A = Number(temp1) + p;
      $("#totalAmount").attr(('data-price'),number_format(A,2));
      $("#totalAmount").html(`<h5>$${number_format(A,2)}</h5>`);
    }

    if (event.currentTarget.id==`${X}Pr`){
      temp1 = Number($("#totalAmount").attr('data-price'));
      //temp2 = Number($(`#productpriceRow${X.substr(15,2)}`).attr('data-price'));
      A = Number(temp1) - p;
      $("#totalAmount").attr(('data-price'),number_format(A,2));
      $("#totalAmount").html(`<h5>$${number_format(A,2)}</h5>`);
    }

    // Send the POST request.
    $.ajax(`/api/carts/update/${idToUpdate}/${quantityToUpdate}`, {
      type: "PUT"
    }).then(
      function() {
        console.log("Cart updated!");
        //location.reload(); // Reload the page to get the updated list
      }
    );

  }
  
});

$("#continueshopping").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  location.href="/index.html"
});

$("#proceedtocheckout").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  location.href="/checkout.html"
});