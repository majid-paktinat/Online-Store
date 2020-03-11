// Import the ORM to create functions that will interact with the database.
const {ormUser} = require("../config/orm.js");

var user = {
    selectAllUsers: function(callback) {
      ormUser.selectAllUsers(function(result) {
        callback(result);
      });
    },
    // The variables cols and vals are arrays..
    insertUser: function(userid, userpassword, userfname, userlname, userrole, useremail, userphone, useraddress, callback) {
      ormUser.insertUser(userid, userpassword, userfname, userlname, userrole, useremail, userphone, useraddress, function(result) {
        callback(result);
      });
    },
    updateUser: function(userid, userfname, userlname, useremail, userphone, useraddress, callback) {
      ormUser.updateUser(userid, userfname, userlname, useremail, userphone, useraddress, function(result) {
        callback(result);
      });
    },
    deleteUser: function(userid, callback) {
      ormUser.deleteUser(userid, function(result) {
        callback(result); 
      });
    }
  };
  
  // Export the database functions for the controller (users_controller.js).
  module.exports = user;