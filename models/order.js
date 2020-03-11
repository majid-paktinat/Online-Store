// Import the ORM to create functions that will interact with the database.
const {ormOrder} = require("../config/orm.js");

var order = {
    selectAllOrders: function(callback) {
      ormOrder.selectAllOrders(function(result) {
        callback(result); 
      });
    },
    // The variables cols and vals are arrays..
    insertOrder: function(userid, productid, productquantity, callback) {
      ormOrder.insertOrder(userid, productid, productquantity, function(result) {
        callback(result);
      });
    },
    updateOrder: function(orderid, userid, productid, productquantity, callback) {
      ormOrder.updateOrder(orderid, userid, productid, productquantity, function(result) {
        callback(result);
      });
    },
    deleteOrder: function(orderid, callback) {
      ormOrder.deleteOrder(orderid, function(result) {
        callback(result); 
      });
    }
  };
  
  // Export the database functions for the controller (users_controller.js).
  module.exports = order;