const mongoose = require("mongoose");


const exerciseSchema = new mongoose.Schema({
  "username": String,
  "date": Date,
  "duration": Number,
  "description": String,
})



module.exports = mongoose.model('ExerciseInfo', exerciseSchema);