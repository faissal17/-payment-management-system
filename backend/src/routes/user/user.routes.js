const express = require("express");
const userRouter = express.Router();

const addUser = require("../../controller/user/addUser.controller");

userRouter.post("/",addUser)

module.exports = addUser