const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/BlogProject");

const db = mongoose.connection;


db.once('open', function(err){
    if(err){
        console.log("Something wrong");
        return false;
    }
    console.log("Database is Connected");
})

module.exports = db;