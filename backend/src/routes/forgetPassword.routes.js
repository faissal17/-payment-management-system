const express = require("express");
const forgetPasswordRouter = express.Router();
const forgetPasswordController = require("../controller/forgetPassword.controller");

forgetPasswordRouter.post("/forgetPassword", forgetPasswordController.forget);

module.exports = forgetPasswordRouter