// bootcamp
$(function() {


    //Send the GET request
    $.get( `/api/products/bycategory/${getQueryStringValue("categoryname")}` ).then(function(response){ 
        console.log(response);
        document.getElementById('categoryName').innerHTML = `<h1>${response[0].categoryname}</h1>`;

// SELECT products.id as productid, productname, productdescription, productimage, productprice, categoryid, categoryname 

        let ulStr="";
        for (i=0; i<response.length; i++){
            ulStr = ulStr +`<div class="col-lg-3 col-sm-6">
                                <div class="single_product_item">
                                    <img src="${response[i].productimage}" alt="">
                                    <div class="single_product_text">
                                        <h4>${response[i].productname}</h4>
                                        <h3>CAD ${response[i].productprice}</h3>
                                        <a href="singleproduct.html?pid=${response[i].productid}" class="add_cart">+ Details<i class="ti-heart"></i></a>
                                    </div>
                                </div>
                            </div>`;
        }
        console.log(ulStr);
        document.getElementById('productListRow1').innerHTML = ulStr;

        


        // $("#productListRow1").html(ulStr);

    });
    

});



function number_format(val, decimals){
    //Parse the value as a float value
    val = parseFloat(val);
    //Format the value w/ the specified number
    //of decimal places and return it.
    return val.toFixed(decimals);
}

function addOrder(userid, productid, productquantity){
    const newOrder={ 
        userid: userid,
        productid: productid,
        productquantity: productquantity
      };
    
      //console.log(newOrder);
    
      // Send the POST request.
      $.ajax("/api/orders", {
        type: "POST",
        data: newOrder
      }).then(
        function() {
          console.log("New Order created!");
        }
      );

}

function deleteCart(cartid){
      $.ajax(`/api/carts/delete/${cartid}`, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Cart Deleted!");
        }
      );
}

$("#proceedtopayment").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if ($("#termsoption").prop("checked")) {
        location.href="/payin.html";
    } else alert("please check terms & conditions!");
    
});

function getQueryStringValue (key) {  
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}  
