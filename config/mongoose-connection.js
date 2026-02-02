const mongoose = require('mongoose');

const connectDB = mongoose.connect("mongodb://127.0.0.1:27017/scatch")
.then(() =>{
    console.log("Mongoose connected successfully");
})
.catch((err) =>{
    console.log("Mongoose connection failed", err);
});

module.exports = connectDB;