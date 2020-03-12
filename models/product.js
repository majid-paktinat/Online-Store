// Import the ORM to create functions that will interact with the database.
const {ormProduct} = require("../config/orm.js");

var product = {
    selectAllProducts: function(callback) {
      ormProduct.selectAllProducts(function(result) {
        callback(result);
      });
    },
    // The variables cols and vals are arrays..
    insertProduct: function(categoryid, productname, productdescription, productimage, productprice, callback) {
      ormProduct.insertProduct(categoryid, productname, productdescription, productimage, productprice, function(result) {
        callback(result);
      });
    },
    updateProduct: function(id, categoryid, productname, productdescription, productimage, productprice, callback) {
      ormProduct.updateProduct(id, categoryid, productname, productdescription, productimage, productprice, function(result) {
        callback(result);
      });
    },
    deleteProduct: function(id, callback) {
      ormProduct.deleteProduct(id, function(result) {
        callback(result); 
      });
    }
  };
  
  // Export the database functions for the controller (products_controller.js).
  module.exports = product;