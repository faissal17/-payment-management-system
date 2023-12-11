const express = require("express");
const resetPasswordRouter = express.Router();
const resetPasswordontroller = require("../controller/resetPassword.controller");

resetPasswordRouter.post(
  "/resetPassword",
  resetPasswordontroller.resetPassword
);
