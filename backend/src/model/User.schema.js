const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    unique: true,
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    default: null,
  },
  isVerified: {
    type: String,
    default: false,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
