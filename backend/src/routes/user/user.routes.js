const express = require("express");
const userRouter = express.Router();

const addUser = require("../../controller/user/addUser.controller");
const {
  getAllUser,
  getUserByID,
} = require("../../controller/user/getUser.controller");

userRouter.route("/").post(addUser).get(getAllUser);
userRouter.route("/:id").get(getUserByID)

module.exports = userRouter;
