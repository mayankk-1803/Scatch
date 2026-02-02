const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')('development:mongoose');

const connectDB = mongoose.connect(`${config.get('MONGODB_URI')}/scatch`)
.then(() =>{
    dbgr("Mongoose connected successfully");
})
.catch((err) =>{
    dbgr("Mongoose connection failed", err);
});

module.exports = connectDB;