const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const category = require("../models/category.js");

// Create all our routes and set up logic within those routes where required.
router.get("/api/categories", function(req, res) {
  category.selectAllCategories(function(data) {
    var hbsObject = {
      categories: data
    };
    res.send(data);
    //res.render("index", hbsObject);
  });
});

router.post("/api/categories", function(req, res) {
  //console.log(req.body.categoryname);
  category.insertCategory(req.body.categoryname, function(result) {
    res.json({ id: result.insertId });// Send back the ID of the new category
  });
});

router.put("/api/categories/update/:id", function(req, res) {
  const id = req.params.id;
  console.log("CategoryID for <update> is equal to : ", id);
  
category.updateCategory(id, req.body.categoryname, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end(); // If no rows were changed, then the ID must not exist, so 404
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/categories/delete/:id", function(req, res) {
  const id = req.params.id;
  console.log("CategoryID for <delete> is equal to : ", id);

  category.deleteCategory(id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end(); // If no rows were changed, then the ID must not exist, so 404
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
