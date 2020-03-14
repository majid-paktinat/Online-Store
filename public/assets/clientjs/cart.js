// bootcamp
$(function() {

    //Send the GET request
    $.get( `/api/cartFields` ).then(function(response){
        document.getElementById('hiduserid').value = response.USERID;
        document.getElementById('hidproductid').value = response.PRODUCTID;
        document.getElementById('hidproductquantity').value = response.PRODUCTQUANTITY;

    });


});