const orm = require("../config/orm.js");

//Code that will call ORM functions
var burger = {
    //Will show all burgers currently in the db.
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    //Inserts new burger data into db.
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    //Updates "devoured" status to true.
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },
    //Will remove a burger from the db.
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;