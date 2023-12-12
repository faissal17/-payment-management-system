const express = require("express");
const forgetPasswordRouter = express.Router();
const forgetPasswordController = require("../controller/auth/forgetPassword.controller");

forgetPasswordRouter.post("/forgetPassword", forgetPasswordController.forget);

module.exports = forgetPasswordRouter