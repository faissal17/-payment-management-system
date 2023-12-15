const mongoose = require("mongoose");

const apartementSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name of apartement is required"],
  },
  description: {
    type: String,
    require: [true, "description of apartement is required"],
  },
  price: {
    type: Number,
    require: [true, "price of apartement is required"],
    default: 300,
  },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
  },
  city: {
    type: String,
    requrie: [true, "city of apartement is required"],
  },
  adress: {
    type: String,
    require: [true, "adress of apartement is required"],
  },
  room: {
    type: Number,
    require: [true, "room of apartement is required"],
  },
  floor: {
    type: Number,
    require: [true, "floor of apartement is required"],
  },
  reserved: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    default: null,
  },
  creationTime: {
    type: Date,
    default: Date.now,
  },
});
const Apartement = mongoose.model("Apartement", apartementSchema);
module.exports = Apartement;
