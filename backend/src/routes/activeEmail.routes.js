const express = require('express')
const activeEmailRoute = express.Router()
const ActiveEmailController = require('../controller/activeEmail.controller')

activeEmailRoute.post("/activeEmail",ActiveEmailController.Active)