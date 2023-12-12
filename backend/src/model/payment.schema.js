const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  amount: {
    require: [true, "amount of payment is required"],
    type: Number,
  },
  date: {
    require: [true, "date of payment is required"],
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  apartment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Apartement",
    default: null,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
