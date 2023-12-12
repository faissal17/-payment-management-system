const express = require("express");
const resetPasswordRouter = express.Router();
const resetPasswordontroller = require("../controller/auth/resetPassword.controller");

resetPasswordRouter.post(
  "/resetPassword",
  resetPasswordontroller.resetPassword
);

module.exports = resetPasswordRouter