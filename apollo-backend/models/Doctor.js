const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  experience: Number,
  specialty: String,
  location: String,
  fees: Number
});

module.exports = mongoose.model('Doctor', doctorSchema);
