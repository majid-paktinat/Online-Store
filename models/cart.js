// Import the ORM to create functions that will interact with the database.
const {ormCart} = require("../config/orm.js");

var cart = {
    selectAllCarts: function(callback) {
      ormCart.selectAllCarts(function(result) {
        callback(result); 
      });
    },
    selectCart: function(userid, callback) {
      ormCart.selectCart(userid, function(result) {
        callback(result); 
      });
    },
    // The variables cols and vals are arrays..
    insertCart: function(userid, productid, productquantity, callback) {
      ormCart.insertCart(userid, productid, productquantity, function(result) {
        callback(result);
      });
    },
    updateCart: function(cartid, userid, productid, productquantity, callback) {
      ormCart.updateCart(cartid, userid, productid, productquantity, function(result) {
        callback(result);
      });
    },
    updateCart1: function(cartid, quantity, callback) {
      ormCart.updateCart1(cartid, quantity, function(result) {
        callback(result);
      });
    },
    deleteCart: function(cartid, callback) {
      ormCart.deleteCart(cartid, function(result) {
        callback(result); 
      });
    }
  };
  
  // Export the database functions for the controller (users_controller.js).
  module.exports = cart;