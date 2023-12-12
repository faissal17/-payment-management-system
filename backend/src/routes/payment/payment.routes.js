const express = require("express");
const paymentRouter = express.Router();
const addPayment = require("../../controller/payment/addPayment.controller");
const {
  getAllPayment,
  getPaymentByID,
} = require("../../controller/payment/getPayment.controller");
const updatePayment = require('../../controller/payment/updatePayment.controller')

paymentRouter.route("/").post(addPayment).get(getAllPayment);
paymentRouter.route("/:id").get(getPaymentByID).put(updatePayment);

module.exports = paymentRouter;
