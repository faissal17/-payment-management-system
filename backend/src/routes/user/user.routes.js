const express = require("express");
const userRouter = express.Router();

const addUser = require("../../controller/user/addUser.controller");
const {
  getAllUser,
  getUserByID,
} = require("../../controller/user/getUser.controller");
const updateUser = require('../../controller/user/updateUser.controller')

userRouter.route("/").post(addUser).get(getAllUser);
userRouter.route("/:id").get(getUserByID).put(updateUser)

module.exports = userRouter;
