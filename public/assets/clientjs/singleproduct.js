// bootcamp
$(function() {
          //Send the GET request
          $.get( `/api/products/${8}` ).then(function(response){
              console.log( `productList: `, response[0].categoryid);
              document.getElementById('productdescription').innerHTML = `<p>${response[0].productdescription}</p>`;
              document.getElementById('productname').innerHTML = `<h3>${response[0].productname}</h3>`; 
              document.getElementById('productprice').innerHTML = `<h2>$${response[0].productprice}</h2>`; 
              document.getElementById('productimage').setAttribute("src", "/assets/img/.../Bel-Air+Sofa.jpg"); 
            });
    });