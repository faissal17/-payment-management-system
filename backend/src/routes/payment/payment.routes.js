const express = require("express");
const paymentRouter = express.Router();
const addPayment = require("../../controller/payment/addPayment.controller");
const {
  getAllPayment,
  getPaymentByID,
} = require("../../controller/payment/getPayment.controller");

paymentRouter.route("/").post(addPayment).get(getAllPayment);
paymentRouter.route("/:id").get(getPaymentByID);

module.exports = paymentRouter;
