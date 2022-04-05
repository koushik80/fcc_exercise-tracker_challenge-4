const mongoose = require("mongoose");


const logSchema = new mongoose.Schema({
  "username": String,
  "count": Number,
  "log": Array,
})


module.exports = mongoose.model('LogInfo', logSchema);