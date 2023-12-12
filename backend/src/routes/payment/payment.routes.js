const express = require("express");
const paymentRouter = express.Router();
const addPayment = require("../../controller/payment/addPayment.controller");

paymentRouter.post("/", addPayment);

module.exports = paymentRouter