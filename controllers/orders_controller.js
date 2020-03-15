const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const order = require("../models/order.js");

// Create all our routes and set up logic within those routes where required.
router.get("/api/orders", function(req, res) {
  order.selectAllOrders(function(data) {
    var hbsObject = {
      orders: data
    };
    res.json(data);
    //res.render("index", hbsObject);
  });
});

router.post("/api/orders", function(req, res) {
  order.insertOrder(req.body.userid, req.body.productid, req.body.productquantity, function(result) {
    res.json({ id: result.insertId });// Send back the ID of the new order
  });
}); 


router.put("/api/orders/update/:orderid", function(req, res) {
  const orderid = req.params.orderid;
  console.log("OrderID for <update> is equal to : ", orderid);
  
  order.updateOrder(orderid, req.body.userid, req.body.productid, req.body.productquantity, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end(); // If no rows were changed, then the ID must not exist, so 404
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/orders/delete/:orderid", function(req, res) {
  const orderid = req.params.orderid;
  console.log("ID for <delete> is equal to : ", orderid);

  order.deleteOrder(orderid, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end(); // If no rows were changed, then the ID must not exist, so 404
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
