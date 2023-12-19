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
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
  },
  isVerified: {
    type: String,
    default: false,
  },
  isReserving: {
    type: String,
    default: false,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
