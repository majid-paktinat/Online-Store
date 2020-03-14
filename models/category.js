// Import the ORM to create functions that will interact with the database.
const {ormCategory} = require("../config/orm.js");

var category = {
    selectAllCategories: function(callback) {
      ormCategory.selectAllCategories(function(result) {
        callback(result);
      });
    },
    // The variables cols and vals are arrays..
    insertCategory: function(categoryname, callback) {
      ormCategory.insertCategory(categoryname, function(result) {
        callback(result);
      });
    },
    updateCategory: function(id,categoryname, callback) {
      ormCategory.updateCategory(id, categoryname, function(result) {
        callback(result);
      });
    },
    deleteCategory: function(id, callback) {
      ormCategory.deleteCategory(id, function(result) {
        callback(result); 
      });
    }
  };
  
  // Export the database functions for the controller (categories_controller.js).
  module.exports = category;