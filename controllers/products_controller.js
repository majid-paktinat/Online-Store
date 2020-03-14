const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const product = require("../models/product.js");

// Create all our routes and set up logic within those routes where required.
router.get("/api/products", function(req, res) {
  product.selectAllProducts(function(data) {
    var hbsObject = {
      products: data
    };
    res.render("index", hbsObject);
  });
});

// router.get("/api/products/:id", function(req, res) {
//   product.se(req.body.categoryid, req.body.productname, req.body.productdescription, req.body.productimage, req.body.productprice, function(result) {
//     res.json({ id: result.insertId });// Send back the ID of the new product
//   });
// });

router.get("/api/products/:id", async function( req, res ){
  const productId = req.params.id;
  product.selectProduct(productId, function(result) {
  //   res.send( {
  //     id: result[0].id,
  //     categoryid: result[0].categoryid,
  //     productdescription: result[0].productdescription
  //  });
  res.send(result);
  });
});

router.post("/api/products", function(req, res) {
  product.insertProduct(req.body.categoryid, req.body.productname, req.body.productdescription, req.body.productimage, req.body.productprice, function(result) {
    res.json({ id: result.insertId });// Send back the ID of the new product
  });
});


router.put("/api/products/update/:id", function(req, res) {
  const id = req.params.id;
  console.log("ID for <update> is equal to : ", id);
  
  product.updateProduct(id, req.body.categoryid, req.body.productname, req.body.productdescription, req.body.productimage, req.body.productprice, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end(); // If no rows were changed, then the ID must not exist, so 404
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/products/delete/:id", function(req, res) {
  const id = req.params.id;
  console.log("ID for <delete> is equal to : ", id);

  product.deleteProduct(id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end(); // If no rows were changed, then the ID must not exist, so 404
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
