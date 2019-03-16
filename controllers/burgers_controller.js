const express = require("express");

const burger = require("../models/burger.js");

var router = express.Router();

//
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject);
    });
});

//Adds a new burger to the db
router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
        res.json({id:result.insertId});
    });
});

//Changes devoured status to true
router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " +req.params.id;
    burger.updateOne({devoured: req.body.devoured}, condition, function(result){
        //if there are no changes to a row, the id does not exist which will lead to a 404
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Deletes a burger from the db
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = "+req.params.id;
    burger.delete(condition, function(result) {
        //if there are no changes to a row, the id does not exist which will lead to a 404
        if(result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

