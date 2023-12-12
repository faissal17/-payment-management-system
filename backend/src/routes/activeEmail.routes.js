const express = require('express')
const activeEmailRoute = express.Router()
const ActiveEmailController = require('../controller/auth/activeEmail.controller')

activeEmailRoute.post("/activeEmail",ActiveEmailController.Active)

module.exports = activeEmailRoute