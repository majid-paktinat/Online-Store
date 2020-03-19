const express = require("express");

const util = require("../lib/util");      

const router = express.Router();

const user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
router.get("/api/users", function(req, res) {
  user.selectAllUsers(function(data) {
    var hbsObject = {
      users: data
    };
    //res.json(data);
    res.render("index", hbsObject);
  });
});

router.post("/api/users", function(req, res) {
  user.insertUser(req.body.userid, util.passHash(req.body.userpassword), req.body.userfname, req.body.userlname, req.body.userrole, req.body.useremail, req.body.userphone, req.body.useraddress, function(result) {
    res.json((!result.insertId)?"exist":result.insertId); // Send back the ID of the new user
  });
});

router.put("/api/users/update/:userid", function(req, res) {
  const userid = req.params.userid;
  console.log("UserID for <update> is equal to : ", userid);
  
  user.updateUser(userid, req.body.userfname, req.body.userlname, req.body.useremail, req.body.userphone, req.body.useraddress, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end(); // If no rows were changed, then the ID must not exist, so 404
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/users/delete/:userid", function(req, res) {
  const userid = req.params.userid;
  console.log("ID for <delete> is equal to : ", userid);

  user.deleteUser(userid, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end(); // If no rows were changed, then the ID must not exist, so 404
    } else {
      res.status(200).end();
    }
  });
});

router.post("/api/login", function(req, res) {
  //console.log(req);
  user.selectUser(req.body.userid, req.body.userpassword, function(data) {
    var hbsObject = {
      userLogin: data
    };
    //console.log(data);
    res.json(data);
    //res.render("index", hbsObject);
  });
});

router.get("/api/user/:userid", function(req, res) {
  const userid = req.params.userid
  user.selectUser1(userid, function(data) {
    res.send(data);
  });
});

// Export routes for server.js to use.
module.exports = router;
