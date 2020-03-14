// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");
const util = require("../lib/util");  
// ORMs
// ============================================================= 
var ormUser = {
  tableName : "users",

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAllUsers: function(callback) {
    var s = "SELECT * FROM " + this.tableName;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  selectUser: function(userid, userpassword, callback) {
    var s = "SELECT userpassword FROM " + this.tableName + " WHERE userid=? ";
    connection.query(s, [userid], function(err, result) {
      
      let resultData  = "";
      if (result.length == 0) { resultData = "not_exist"; }
      else if (!util.passCompare(userpassword, result[0].userpassword)) { resultData = "wrong_pass"; }
      else { resultData = "success_login";  }
      
      callback(resultData);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  insertUser: function(userid, userpassword, userfname, userlname, userrole, useremail, userphone, useraddress, callback) {
    var s = "INSERT INTO " + this.tableName + "(userid, userpassword, userfname, userlname, userrole, useremail, userphone, useraddress) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(s, [userid, userpassword, userfname, userlname, userrole, useremail, userphone, useraddress], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  updateUser: function(userid, userfname, userlname, useremail, userphone, useraddress, callback) { 
    var s = "UPDATE " + this.tableName + " SET userfname = ?, userlname = ?, useremail = ?, userphone = ?, useraddress = ?  WHERE userid = ?";
    connection.query(s, [userfname, userlname, useremail, userphone, useraddress, userid], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  deleteUser: function(userid, callback) { 
    var s = "DELETE FROM " + this.tableName + " where userid = ?";
    connection.query(s, [userid], function(err, result) {
      callback(result);
    });
  }
  
};

var ormOrder = {
  tableName : "orders",

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAllOrders: function(callback) {
    var s = "SELECT * FROM " + this.tableName;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  insertOrder: function(userid, productid, productquantity, callback) {
    var s = "INSERT INTO " + this.tableName + "(userid, productid, productquantity) VALUES(?, ?, ?)";
    connection.query(s, [userid, productid, productquantity], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  updateOrder: function(orderid, userid, productid, productquantity, callback) { 
    var s = "UPDATE " + this.tableName + " SET userid = ?, productid = ?, productquantity = ?  WHERE id = ?";
    connection.query(s, [userid, productid, productquantity, orderid], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  deleteOrder: function(orderid, callback) { 
    var s = "DELETE FROM " + this.tableName + " where id = ?";
    connection.query(s, [orderid], function(err, result) {
      callback(result);
    });
  }
  
};

var ormCategory = {
  tableName : "categories",

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAllCategories: function(callback) {
    var s = "SELECT * FROM " + this.tableName;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  insertCategory: function(categoryname, callback) {
    var s = "INSERT INTO " + this.tableName + "(categoryname) VALUES(?)";
    connection.query(s, [categoryname], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  updateCategory: function(id,categoryname, callback) { 
    var s = "UPDATE " + this.tableName + " SET categoryname = ? WHERE id = ?";
    connection.query(s, [categoryname, id], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  deleteCategory: function(id, callback) { 
    var s = "DELETE " + this.tableName + " where id = ?";

    connection.query(s, [id], function(err, result) {
      callback(result);
    });
  }
  
};

var ormProduct = {
  tableName : "products",

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAllProducts: function(callback) {
    var s = "SELECT * FROM " + this.tableName;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  selectProduct: function(productid, callback) {
    var s = "SELECT * FROM " + this.tableName + " WHERE id=?";
    connection.query(s, [productid], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  insertProduct: function(categoryid, productname, productdescription, productimage, productprice, callback) {
    var s = "INSERT INTO " + this.tableName + "(categoryid, productname, productdescription, productimage, productprice) VALUES(?, ?, ?, ?, ?)";
    connection.query(s, [categoryid, productname, productdescription, productimage, productprice], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  updateProduct: function(id, categoryid, productname, productdescription, productimage, productprice, callback) { 
    var s = "UPDATE " + this.tableName + " SET categoryid = ?, productname = ?, productdescription = ?, productimage = ?, productprice = ?  WHERE id = ?";
    connection.query(s, [id, categoryid, productname, productdescription, productimage, productprice], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  deleteProduct: function(id, callback) { 
    var s = "DELETE " + this.tableName + " where id = ?";

    connection.query(s, [id], function(err, result) {
      callback(result);
    });
  }
  
};


module.exports = {
  ormUser,
  ormOrder,
  ormCategory,
  ormProduct
}  

